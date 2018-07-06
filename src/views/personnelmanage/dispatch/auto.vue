<template>
<div class="margin60">
  <el-row :gutter="10" >
    <el-col :span="2.5">
      <router-link :to="{ name:'addagency' ,param: { rwbh: rwbh }}" >
      <el-button type="primary" >新增机构</el-button>
      </router-link>
    </el-col>
    <el-col :span="3">
      <el-select v-model="credent" filterable placeholder="机构名称" size="medium">
        <el-option
          v-for="item in jgmcList"
          :key="item.id"
          :label="item.jgmc"
          :value="item.id">
        </el-option>
      </el-select>
      </el-col>
      <!-- <el-input v-model="jgmc" placeholder="机构名称"></el-input></el-col> -->
    <el-col :span="3"> 
      <el-select v-model="credent" filterable placeholder="资质等级" size="medium">
        <el-option
          v-for="item in credential"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3"><el-input v-model="fzr"  placeholder="负责人"></el-input></el-col>
    <el-col :span="2"><el-button type="primary" v-on:click="search">搜索</el-button></el-col>
  </el-row>
  <el-table
    style="width: 100%"  border
    :data="jgList"
    :row-class-name="tableRowClassName">
    <el-table-column width="50"
      type="index"
      :index="typeIndex"
      label="序号"
      align="center">
    </el-table-column>
    <el-table-column 
      prop="jgmc"
      label="机构名称">
    </el-table-column>
    <el-table-column 
      prop="" width="250"
      label="负责人">
    </el-table-column>
    <el-table-column 
      prop=""
      label="联系电话">
    </el-table-column>
    <el-table-column 
      prop=""
      label="资质等级">
    </el-table-column>
    <el-table-column 
      prop=""
      label="物业用途"
     >
    </el-table-column>
    <el-table-column 
      prop=""
      label="调查人员数量">
    </el-table-column>
    <el-table-column 
      prop=""
      label="已完成任务">
    </el-table-column>
     <el-table-column 
      prop=""
      label="正在进行任务"> 
    </el-table-column>
     <el-table-column label="操作">
     <template slot-scope="scope">
        <router-link :to="{ name:'agency' ,query: { hdm: scope.row.hdm }}">
          <el-button type="text" size="small">详情</el-button>
        </router-link>
        <el-button type="text" size="small">删除</el-button>
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
import { organizations } from '@/api/surveyPeople'
const qualificationOptions = ['注册估价师', '工程师']
export default {
  components: {
    organizations
  },
  data() {
    return {
      currentpage: 1,
      pagesize: 10,
      list: [],
      mylist: [],
      alllist: [],
      taskbutton: 'my',
      rwbh: '测试机构名称',
      jgmc: '',
      fzr: '',
      qualification: qualificationOptions,
      credent: '',
      credential: [{
        value: '评估一级',
        label: '评估一级'
      }, {
        value: '测绘二级',
        label: '测绘二级'
      }],
      jgmcList: [],
      jgList: []
    }
  },
  mounted() {
    this.getJgmc()
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
    search() {
      console.log('搜索')
    },
    getJgmc() {
      var param = { jgmc: this.jgmc, jgfl: '1' }
      this.jgmcList = []
      organizations(param).then(response => {
        console.log('peoples')
        console.log(this.jgmcList)
        response.data.forEach(element => {
          this.jgmcList.push(element)
        })
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