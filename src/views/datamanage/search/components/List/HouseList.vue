<template>
<div class="scroll">
  <el-table
    :data="houselist.slice((currentpage-1)*pagesize,currentpage*pagesize)"
    style="width: 100%"  border height="500"  @row-click="openLink"
    :row-class-name="tableRowClassName">
    <el-table-column width="50"
      type="index"
    :index="typeIndex"
      label="序号"
      align="center"
     >
    </el-table-column>
    <el-table-column 
      prop="hh"
      label="名称"
     >
    </el-table-column>
    <el-table-column 
      prop="xmmc"
      label="项目名称"
     >
    </el-table-column>
     <el-table-column 
      prop="ldmc"
      label="楼栋名称"
     >
    </el-table-column>
    <el-table-column 
      prop="pgdj"
      label="评估价"
     >
    </el-table-column>
     <el-table-column 
      prop="sjc"
      label="所在层"
     >
    </el-table-column>
    <el-table-column 
      prop="jzmj"
      label="面积">
    </el-table-column>
     <el-table-column 
      prop="hx"
      label="户型"
     >
    </el-table-column>
     <el-table-column 
      prop="fwxz"
      label="房屋性质"
     >
    </el-table-column>
     <el-table-column 
      prop="jzsd"
      label="价格时点" min-width="100px"
     > <template slot-scope="scope">
      <p> {{ scope.row.jzsd | formatDate}}</p>
       </template>
    </el-table-column>
  </el-table>
    <el-pagination 
       small
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pagesize"
      layout="total, prev, pager, next"
      :total="houselist.length">
    </el-pagination>
 </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
</style>

<script>
import { formatDate } from '@/common/js/data'
export default {
  props: {
    houselist: {
      type: Array,
      default: []
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
      if (rowIndex % 2 === 1) {
        return 'warning-row'
      }
      return ''
    },
    handleCurrentChange(val) {
      this.currentpage = { val }.val
    },
    typeIndex(index) {
      return index + (this.currentpage - 1) * this.pagesize + 1
    },
    openLink(row) {
      const routerData = this.$router.resolve({
        name: 'house',
        query: { hdm: row.hdm }
      })
      window.open(routerData.href, '_blank')
    }
  },
  data() {
    return {
      currentpage: 1
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