<template>
<div class="margin60">
  <el-row :gutter="10" >
  <el-col :span="2.5">
     <router-link :to="{ name:'addtask1' ,param: { rwbh: rwbh }}" >
    <el-button type="primary" v-on:click="creatTask">创建任务</el-button>
     </router-link>
    </el-col>
   <el-col :span="13"><el-button v-on:click="myTask" v-if="taskbutton==='my'">我的任务</el-button><el-button v-on:click="allTask" v-if="taskbutton==='all'">所有任务</el-button></el-col>
  <el-col :span="3" >
   <el-select v-model="cxlx" placeholder="任务名称">
      <el-option label="任务名称" value="rwmc"></el-option>
      <el-option label="创建人员" value="cjry"></el-option>
      <el-option label="物业用途" value="wyyt"></el-option>
    </el-select>
  </el-col>
   <el-col :span="3"><el-input v-model="cxnr"  placeholder="请输入搜索内容"></el-input></el-col>
  <el-col :span="2"><el-button type="primary" v-on:click="search">搜索</el-button></el-col>

</el-row>
  <el-table
    :data="list.slice((currentpage-1)*pagesize,currentpage*pagesize)"
    style="width: 100%"  border
    :row-class-name="tableRowClassName">
    <el-table-column width="50"
    type="index"
    :index="typeIndex"
     label=""
      align="center"
     >
    </el-table-column>
    <el-table-column 
      prop="rwbh"
      label="任务编号"
     >
    </el-table-column>
     <el-table-column 
      prop="rwmc" width="250"
      label="任务名称">
    </el-table-column>
    <el-table-column 
      prop="cjry"
      label="创建人员"
     >
    </el-table-column>
    <el-table-column 
      prop="cjsj"
      label="创建时间"
     >
    </el-table-column>
    <el-table-column 
      prop="wyyt"
      label="物业用途"
     >
    </el-table-column>
    <el-table-column 
      prop="cyry"
      label="参与人员"
     >
    </el-table-column>
    <el-table-column 
      prop="rwzt"
      label="任务状态"
     >
    </el-table-column>
     <el-table-column 
      prop="wcsj"
      label="完成时间" min-width="100px"
     > 
    </el-table-column>
     <el-table-column label="操作">
     <template slot-scope="scope">
       <router-link :to="{ name:'house' ,query: { hdm: scope.row.hdm }}" target="_blank"  >
         <el-button type="text" size="small">详情</el-button>
             <el-button type="text" size="small">作业</el-button>
       </router-link>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination 
       @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pagesize"
       layout="total, sizes, prev, pager, next, jumper"
      :total="list.length">
    </el-pagination>
 </div>
</template>

<style>
  
</style>

<script>
import { formatDate } from '@/common/js/data'
export default {
  data() {
    return {
      currentpage: 1,
      pagesize: 10,
      list: [],
      mylist: [],
      alllist: [],
      taskbutton: 'my',
      rwbh: '深房估字(2018)第1907号'
    }
  },
  mounted() {
    this.getTask()
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
    creatTask() {
      console.log('创建任务')
    },
    myTask() {
      console.log('我的任务')
      this.taskbutton = 'all'
      this.list = this.mylist
    },
    allTask() {
      console.log('我的任务')
      this.taskbutton = 'my'
      this.list = this.alllist
    },
    search() {
      console.log('搜索')
    },
    getTask() {
      this.$http.get('src/mock/task.json').then(response => {
        this.alllist = response.data.data
        this.list = this.alllist
        response.data.data.forEach(element => {
          if (element.cyry.indexOf('刘运达') > -1) {
            this.mylist.push(element)
          }
        })
      }, response => {
        console.log('数据加载失败')
      })
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