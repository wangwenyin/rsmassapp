<template>
  <div class="app">
    <div class="task-container content">
      <el-row class="search-box">
        <el-col :span="14">
          <el-radio-group v-model="taskType" size="small" @change="handleTaskTypeChange">
            <el-radio-button label="我的任务">我的任务</el-radio-button>
            <el-radio-button label="全部任务">全部任务</el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="4">
          <el-select v-model="searchType" placeholder="请选择查询方式" clearable size="small">
            <el-option v-for="item in typeList" :key="item" :value="item">
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-input placeholder="请输入查询关键字" v-model.trim="keyWord"
            @change="inputChange" @keyup.enter.native="handleSearchTask" size="small">
            <el-button slot="append" icon="el-icon-search" @click="handleSearchTask"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table :data="taskList" border stripe style="width: 100%" id="el-table">
        <el-table-column prop="id" label="序号" width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="fcmc" label="房产名称" width="150">
        </el-table-column>
        <el-table-column prop="fclb" label="物业用途">
          <template slot-scope="scope">
            <span>{{scope.row.fclb === '0' ? '住宅' :(scope.row.fclb === '1' ? '商业' :(scope.row.fclb === '2' ? '办公' : '工厂'))}}</span>
          </template> 
        </el-table-column>
        <el-table-column prop="sqrq" label="申请时间">
          <template slot-scope="scope">
            <!-- UTC日期到本地日期的转换 ->浏览器不统一 -->
            <!-- <span>{{new Date(scope.row.sqrq).toLocaleDateString()}}</span> -->
            <span>{{getParseTime(scope.row.sqrq)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="yzlx" label="业主类型">
          <template slot-scope="scope">
            <span>{{scope.row.yzlx === '0' ? '个人' : '单位'}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="shrymc" label="审核人员">
        </el-table-column>
        <el-table-column prop="gjsmc" label="估价人员">
        </el-table-column>
        <el-table-column prop="zsrymc" label="终审人员">
        </el-table-column>
        <el-table-column prop="dqjd" label="当前节点" v-if="taskType === '我的任务'">
          <template slot-scope="scope">
            <el-tag :type="scope.row.dqjd === '0' ? 'info' :(scope.row.dqjd === '3' ? '' :(scope.row.dqjd === '4' ? 'warning' : ''))">
              {{scope.row.dqjd === '0' ? '数据审核' :(scope.row.dqjd === '3' ? '复核评估' :(scope.row.dqjd === '4' ? '结果终审' : ''))}}
            </el-tag>
          </template> 
        </el-table-column>
        <el-table-column prop="clzt" label="任务状态" v-else>
          <template slot-scope="scope">
            <el-tag type="success">已完成</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="xgsj" label="完成时间">
          <template slot-scope="scope">
            <span>{{scope.row.xgsj && getParseTime(scope.row.xgsj)}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="cz" label="操作" :width="isInRoles(roles, 'admin') ? '250' : '150'">
          <template slot-scope="scope">
            <!-- :disabled="handleDisabled(scope.row)" -->
            <el-button size="mini" :disabled="!+scope.row.dqjd" @click="check(scope.row, scope.$index)">查看</el-button>
            <el-button size="mini" type="primary"  v-if="taskType === '我的任务'" :disabled="handleDisabled(scope.row)" @click="handle(scope.row, scope.$index)">处理</el-button>
            <el-button size="mini" v-if="isInRoles(roles, 'admin')"  @click="deleteTask(scope.row, scope.$index)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination size="medium" background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5, 10, 50, 100]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getTasks, deleteTask } from '@/api/pricereassess'
import { getUsers } from '@/api/caseSearch'
import { parseTime } from '@/utils/index'

export default {
  data() {
    return {
      users: [],
      total: 0,
      taskList: [],
      taskType: '我的任务',
      typeList: [
        '房产名称',
        '物业用途',
        '当前节点',
        '审核人员',
        '估价人员',
        '终审人员'
      ],
      isGetDoneTask: false,
      searchFlag: '',
      keyWord: '',
      searchType: '房产名称',
      // 查询初始值
      searchObj: {
        fcmc: '',
        fclb: '',
        dqjd: '',
        shrymc: '',
        gjsmc: '',
        zsrymc: '',
        clzt: ''
      },
      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    ...mapGetters([
      'roles',
      'token',
      'name'
    ])
  },
  created() {
    // 获取角色列表
    this.getUsers()
    // 获取复核任务
    this.getTasks()
  },
  methods: {
    getUsers() {
      getUsers().then(res => {
        this.users = res.data
      })
    },
    // 处理权限控制
    handleDisabled(row) {
      if (row.dqjd === '0' && row.shrymc === this.name) {
        return false
      } else if (row.dqjd === '3' && row.gjsmc === this.name) {
        return false
      } else if (row.dqjd === '4' && row.zsrymc === this.name) {
        return false
      } else {
        return true
      }
    },
    // 删除复核任务
    deleteTask(row, index) {
      const data = {
        id: row.id,
        token: this.token
      }
      this.taskList.splice(index, 1)

      deleteTask(data).then(res => {
        this.$message({
          message: '删除成功！',
          type: 'success'
        })
      })
    },
    // 删除权限
    isInRoles(roles, value) {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i] === value) {
          return true
        }
      }
      return false
    },
    getTasks() {
      const params = {
        pageIndex: this.currentPage,
        pageSize: this.pageSize,
        ...this.searchObj
      }
      getTasks(params).then(res => {
        console.log(res.data, res.total)
        this.total = res.total
        this.taskList = res.data
        // 有问题：刷新后人员会变化（逻辑重新执行）,需要后台来随机
        // 随机指定审核人员
        this.taskList.forEach(item => {
          const randomNum = Math.round(Math.random() * (this.users.length - 1))
          item.shrymc = this.users[randomNum].name
        })
        // if (!this.isGetDoneTask) {
        //   this.taskList = this.taskList.filter(item => {
        //     return item.dqjd !== '4' && item.clzt !== '2'
        //   })
        // }
      })
    },
    // 重置task
    inputChange(value) {
      if (!value) {
        this.searchObj = {}
        this.getTasks()
      }
    },
    handleTaskTypeChange() {
      if (this.taskType === '我的任务') {
        this.isGetDoneTask = false
        this.searchObj.dqjd = ''
        this.searchObj.clzt = ''
        this.getTasks()
      } else {
        this.isGetDoneTask = true
        this.currentPage = 1
        this.searchObj.dqjd = '4'
        this.searchObj.clzt = '2'
        this.getTasks()
      }
    },
    // 查询
    handleSearchTask() {
      if (this.currentPage !== 1) {
        this.currentPage = 1
      }
      // 用户输入数据处理
      const fclbList = ['住宅', '商业', '办公', '工厂']
      const dqjdList = ['数据审核', '复核评估', '结果终审']

      switch (this.searchType) {
        case '物业用途':
          this._formatData(fclbList)
          this.getTasks()
          break
        case '当前节点':
          this._formatData(dqjdList)
          this.getTasks()
          break
        case '审核人员':
          this.searchObj.shrymc = this.keyWord
          this.getTasks()
          break
        case '估价人员':
          this.searchObj.gjsmc = this.keyWord
          this.getTasks()
          break
        case '终审人员':
          this.searchObj.zsrymc = this.keyWord
          this.getTasks()
          break
        default:
          this.searchObj.fcmc = this.keyWord
          this.getTasks()
      }
    },
    // 格式化 房产用途 当前节点
    _formatData(list) {
      // forEach方法不能终止循环，除非手动抛错
      // 可用for，every，some代替
      list.every((item, index, list) => {
        if (item.indexOf(this.keyWord) > -1) {
          if (index === 0) {
            list.length === 4 ? this.searchObj.fclb = index + '' : this.searchObj.dqjd = index + ''
            return false
          } else if (index === 1) {
            list.length === 4 ? this.searchObj.fclb = index + '' : this.searchObj.dqjd = '3'
            return false
          } else if (index === 2) {
            list.length === 4 ? this.searchObj.fclb = index + '' : this.searchObj.dqjd = '4'
            return false
          } else {
            this.searchObj.fclb = index + ''
          }
        } else {
          list.length === 4 ? this.searchObj.fclb = '' : this.searchObj.dqjd = ''
          // 循环继续
          return true
        }
      })
    },
    getParseTime(date) {
      return parseTime(new Date(date), '{y}-{m}-{d}')
    },
    // 路由跳转
    handle(row, index) {
      console.log(row, index)
      switch (row.dqjd) {
        case '0':
          this.$router.push({ name: 'DataAudit' })
          break
        case '1':
          this.$router.push({ name: 'Survey' })
          break
        case '2':
          this.$router.push({ name: 'Survey' })
          break
        case '3':
          this.$router.push({ name: 'PriceAppraise' })
          break
        default:
          this.$router.push({ name: 'ResultAudit' })
      }
      this.storeData(index)
    },
    storeData(index) {
      // 缓存当前task
      const task = JSON.stringify(this.taskList[index])
      localStorage.setItem('curTask', task)
    },
    handleSizeChange(size) {
      this.pageSize = size
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getTasks()
    },
    // 查看
    check(row, index) {
      this.$router.push({
        name: 'Detail',
        params: { dqjd: row.dqjd }
      })
      this.storeData(index)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/background.scss";
  .task-container {
    .search-box {
      padding: 10px;
      .el-col-12 {
        padding-top: 0;
      }
    }
    .el-table {
      margin-top: 5px;
    }
    .el-pagination {
      margin-top: 10px;
      text-align: center;
    }
  }
</style>
