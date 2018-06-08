<template>
<div>
  <el-table
    :data="projectlist.slice((currentpage-1)*pagesize,currentpage*pagesize)"
    style="width: 100%"  border
    :row-class-name="tableRowClassName">
    <el-table-column width="50"
    type="index"
    :index="typeIndex"
      label="序号"
      align="center"
     >
    </el-table-column>
    <el-table-column 
      prop="project"
      label="名称"
     >
    </el-table-column>
    <el-table-column 
      prop="group"
      label="组别"
     >
    </el-table-column>
    <el-table-column 
      prop="age"
      label="建筑年代"
     >
    </el-table-column>
    <el-table-column 
      prop="nature"
      label="性质">
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :page-size="pagesize" :current-page="currentpage" :total="projectlist.length" @current-change="handleCurrentChange"></el-pagination>
 </div>
</template>

<style>
  
</style>

<script>
  export default {
    props: {
      projectlist: {
        type: Array,
        default: null
      },
      query: {
        type: String,
        default: null
      },
      pagesize: {
        type: Number,
        default: 10
      }
    },
    methods: {
      tableRowClassName({ row, rowIndex }) {
        if (rowIndex === 1) {
          return 'warning-row'
        } else if (rowIndex === 3) {
          return 'success-row'
        }
        return ''
      },
      handleCurrentChange(val) {
        this.currentpage = { val }.val
      },
      typeIndex(index) {
        return index + (this.currentpage - 1) * this.pagesize + 1
      }
    },
    data() {
      return {
        currentpage: 1
      }
    }
  }
</script>