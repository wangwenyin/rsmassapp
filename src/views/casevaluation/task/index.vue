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
       <router-link :to="{ name:'detail' ,param: { rwbh: rwbh }}" >
         <el-button type="text" size="small">详情</el-button>
       </router-link>
         <el-button type="text" size="small" @click="taskClick(scope.row)">作业</el-button>
      </template>
    </el-table-column>
  </el-table>
   <el-pagination 
       @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :page-sizes="[5,10, 20, 50, 100]"
      :page-size="pagesize"
       layout="total, sizes, prev, pager, next, jumper"
      :total="list.length">
    </el-pagination>
 </div>
</template>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
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
    },
    taskClick(val) {
      let name = ''
      switch (val.rwzt) {
        case '创建任务': name = 'addtask1'; break
        case '现场查勘': name = 'addtask2'; break
        case '对象描述': name = 'addtask3'; break
        case '价格评估': name = 'addtask4'; break
        case '报告撰写': name = 'report'; break
        case '任务完成': name = 'addtask1'; break
      }
      const routerData = this.$router.resolve({
        name: name,
        query: { rwbh: val.rwbh }
      })
      window.open(routerData.href, '_blank')
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