<template>
  <div class="app">
    <div class="margin10 ">
      <el-row class="search-box">
        <el-col :span="13">
          <router-link :to="{ name:'paramset'}">
            <el-button type="primary" size="small" class="btn">+比率分析</el-button>
          </router-link>
          <el-radio-group v-model="taskType" size="small" @change="handleTaskTypeChange" style="margin-top:-1px;margin-left:30px">
            <el-radio-button label="全部任务">全部任务</el-radio-button>
            <el-radio-button label="我的任务">我的任务</el-radio-button>
          </el-radio-group>
        </el-col>
        <el-col :span="3">
          <el-select v-model="cxlx" class="search" size="small" placeholder="项目名称">
            <el-option label="项目名称" value="name"></el-option>
            <el-option label="创建人员" value="creator"></el-option>
            <el-option label="物业用途" value="usage"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-input placeholder="请输入要查询的内容" class="search" v-model.trim="cxnr" size="small">
            <el-button slot="append" icon="el-icon-search" @click="handleSearchTask"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <el-table :data="list.slice((currentpage-1)*pagesize,currentpage*pagesize)" border class="table" :row-class-name="tableRowClassName">
        <el-table-column prop="id" label="序号" width="50">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="任务编号">
        </el-table-column>
        <el-table-column prop="name" width="300" label="任务名称">
        </el-table-column>
        <el-table-column label="创建人员" width="150">
          <template slot-scope="scope">
            <el-tag size="medium">{{ scope.row.creator }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" min-width="110">
          <template slot-scope="scope">
            <span>{{scope.row.create_date| formatDate}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="usage" label="物业用途">
        </el-table-column>
        <el-table-column label="任务状态" width="150">
          <template slot-scope="scope">
            <el-tag size="medium" type='info'>{{ scope.row.status}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="result" label="审核结果">
        </el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <div>
              <el-button size="mini" @click="handleDetail(scope.row)">详情</el-button>
              <el-button type="primary" size="mini" @click="work(scope.row)" :disabled="scope.row.status === '任务完成'">作业</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination style="margin-top:8px;text-align:center" small background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentpage" :page-sizes="[5,10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="list.length">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { formatDate } from '@/utils/date'
import { getTestTaskList } from '@/api/ratio/tasks'
export default {
  data() {
    return {
      cxlx: 'name',
      cxnr: '',
      currentpage: 1,
      pagesize: 10,
      offset: 0,
      list: [],
      mylist: [],
      alllist: [],
      taskType: '我的任务',
      rwbh: '福田区华强北街道燕南路君悦阁503',
      taskName: ''
    }
  },
  mounted() {
    this.getTask({ offset: 0 })
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 1) {
        return 'warning-row'
      }
      return ''
    },
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
        var param = { creator: '王文银', offset: this.offset }
        this.getTask(param)
      } else {
        this.getTask({ offset: this.offset })
      }
    },
    handleSearchTask() {
      var param = ''
      switch (this.cxlx) {
        case 'name':
          param = { name: this.cxnr, offset: this.offset }
          break
        case 'creator':
          param = { creator: this.cxnr, offset: this.offset }
          break
        case 'usage':
          param = { usage: this.cxnr, offset: this.offset }
          break
        default:
          break
      }
      this.getTask(param)
    },
    getTask(param) {
      getTestTaskList(param).then(response => {
        this.list = response.data
      })
    },
    handleDetail(val) {
      const routerData = {
        name: 'detail',
        query: { id: val.id }
      }
      this.$router.push(routerData)
    },
    work(val) {
      if (val.status === '方案设计') {
        const routerData = {
          name: 'paramset',
          query: { id: val.id }
        }
        this.$router.push(routerData)
      } else if (val.status === '比率分析') {
        const routerData = {
          name: 'rateanal',
          query: { id: val.id }
        }
        this.$router.push(routerData)
      }
    }
  },
  filters: {
    formatDate(currentDate) {
      var date = new Date(currentDate)
      return formatDate(date, 'yyyy-MM-dd')
    },
    formatYear(currentDate) {
      var date = new Date(currentDate)
      return formatDate(date, 'yyyy')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../styles/app.scss";
.margin60 {
  margin-left: 60px;
  margin-right: 60px;
}
.seach-row {
  margin-bottom: 10px;
}
.table {
  margin-left: 20px;
  width: 96.5%;
}
.btn {
  margin-top: 20px;
  margin-left: 20px;
}
.search {
  margin-top: 20px;
}
</style>