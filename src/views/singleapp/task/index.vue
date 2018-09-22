<template>
  <div class="app">
    <div class="margin10 ">
      <el-row class="search-box">
        <el-col :span="13">
          <router-link :to="{ name:'creatTask' }">
            <el-button type="primary" class="btn" size="small">创建任务</el-button>
          </router-link>
          <el-radio-group v-model="taskType" size="small" @change="handleTaskTypeChange">
            <el-radio-button label="全部任务">全部任务</el-radio-button>
            <el-radio-button label="我的任务">我的任务</el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="3">
          <el-select v-model="cxlx" class="search" size="small" placeholder="任务名称">
            <el-option label="任务名称" value="name"></el-option>
            <el-option label="参与人员" value="members"></el-option>
            <el-option label="物业用途" value="usage"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入要查询的内容" class="search" v-model.trim="cxnr" size="small">
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table :data="list.slice((currentpage-1)*pagesize,currentpage*pagesize)" class="table" border show-overflow-tooltip stripe>
        <el-table-column width="50" type="index" :index="typeIndex" label="" align="center">
        </el-table-column>
        <el-table-column prop="id" label="任务编号">
        </el-table-column>
        <el-table-column prop="name" min-width="250" label="任务名称">
        </el-table-column>
        <el-table-column prop="creator" label="创建人员">
        </el-table-column>
        <el-table-column label="创建时间" min-width="110">
          <template slot-scope="scope">
            <span>{{scope.row.create_time| formatDate}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="prop_usage" label="物业用途">
        </el-table-column>
        <el-table-column prop="members" label="参与人员" min-width="120">
        </el-table-column>
        <el-table-column prop="status" label="任务进度">
        </el-table-column>
        <el-table-column prop="finish_time" label="完成时间">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <router-link :to="{ name:'taskDetail' , query: { id: scope.row.id,status:scope.row.status }}">
              <el-button size="mini">详情</el-button>
            </router-link>
            <el-button size="mini" v-if="scope.row.status!=='任务完成'" type="primary" @click="onTaskClick(scope.row)">作业</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination size="medium" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentpage" :page-sizes="[5,10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="list.length">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { formatDate } from '@/utils/date'
import { searchtasks } from '@/api/singleapp/tasks'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      cxlx: 'name',
      cxnr: '',
      currentpage: 1,
      pagesize: 10,
      list: [],
      taskType: '我的任务'
    }
  },
  mounted() {
    this.getTask()
  },
  methods: {
    handleCurrentChange(val) {
      this.currentpage = { val }.val
    },
    handleSizeChange(val) {
      this.pagesize = { val }.val
    },
    typeIndex(index) {
      return index + (this.currentpage - 1) * this.pagesize + 1
    },
    handleTaskTypeChange() {
      if (this.taskType === '我的任务') {
        var param = { members: this.name }
        this.getTask(param)
      } else {
        this.getTask()
      }
    },
    search() {
      var param = ''
      switch (this.cxlx) {
        case 'name':
          param = { name: this.cxnr }
          break
        case 'members':
          param = { members: this.cxnr }
          break
        case 'usage':
          param = { usage: this.cxnr }
          break
        default:
          break
      }
      this.getTask(param)
    },
    getTask(param) {
      searchtasks(param).then(response => {
        this.list = response.data
      })
    },
    onTaskClick(val) {
      let name = ''
      switch (val.status) {
        case '创建任务':
          name = 'creatTask'
          break
        case '对象描述':
          name = 'objectDescription'
          break
        case '价格评估':
          name = 'addExample'
          break
        case '报告撰写':
          name = 'report'
          break
      }
      const routerData = this.$router.resolve({
        name: name,
        query: { task_id: val.id }
      })
      window.open(routerData.href, '_blank')
    }
  },
  filters: {
    formatDate(currentDate) {
      var date = new Date(currentDate)
      return formatDate(date, 'yyyy-MM-dd')
    }
  },
  computed: {
    ...mapGetters(['name', 'roles'])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../../styles/app.scss";
.table {
  margin-left: 20px;
  width: 96.5%;
}
.seach-row {
  margin-bottom: 10px;
}
.btn {
  margin-top: 20px;
  margin-right: 30px;
}
.btn_l {
  margin-top: 20px;
  float: right;
  margin-right: 2%;
}
.inp_l {
  margin-top: 20px;
  float: right;
  width: 180px;
  margin-right: 20px;
}
.sel_l {
  margin-top: 20px;
  float: right;
  width: 100px;
  margin-right: 20px;
}
.search {
  margin-top: 20px;
}
.el-pagination {
  margin-top: 10px;
  text-align: center;
}
</style>