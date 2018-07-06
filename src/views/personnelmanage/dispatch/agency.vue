<template>
 <div class="margin60"  style="height:100%">
  <el-form ref="form" :model="form" label-width="100px" label-position="right">
   <el-row> 
    <el-col :span="6">
      <el-form-item label="机构名称">
        <el-input v-model="form.rwbh" :disabled="true"></el-input>
      </el-form-item>
   </el-col>
    <el-col :span="6">
      <el-form-item label="负责人">
        <el-input v-model="form.rwmc" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="资质等级">
        <el-input v-model="form.zzdj" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="6">
      <el-form-item label="联系电话">
        <el-input v-model="form.cjr" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="电子邮箱">
        <el-input v-model="form.cyry" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="地址">
        <el-input v-model="form.zzdj" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="6">
      <el-form-item label="已完成任务">
        <el-input v-model="form.zzdj" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="6">
      <el-form-item label="正在进行任务">
        <el-input v-model="form.zzdj" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
     <el-col :span="6">
      <el-form-item label="总体评价">
        <el-input v-model="form.zzdj" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
   <el-col :span="9">
      <el-form-item label="调查人员数量">
        <el-input v-model="form.zzdj" :disabled="true"></el-input>
      </el-form-item>
    </el-col>
    <el-col :span="9">
      <el-form-item label="成立时间">
        <el-date-picker disabled type="date" value-format="yyyy-MM-dd" v-model="form.cjsj" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-row>
  <el-row> 
    <el-col :span="18">
      <el-form-item label="备注">
        <el-input type="textarea" disabled v-model="form.bz"></el-input>
      </el-form-item>
    </el-col>
  </el-row>
</el-form>
<el-row :gutter="10" >
    <el-col :span="2.5">
      <router-link :to="{ name:'staff' ,query: {}}">
        <el-button type="primary" v-on:click="creatTask">新增人员</el-button>
      </router-link>
    </el-col>
    <el-col :span="3"> 
      <el-select v-model="form.credential" filterable placeholder="资质等级" size="medium">
        <el-option
          v-for="item in credential"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select placeholder="性别" v-model="form.sex" filterable clearable size="medium">
        <el-option
          v-for="item in sex"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3"><el-input v-model="form.fzr"  placeholder="负责人"></el-input></el-col>
    <el-col :span="2"><el-button type="primary" v-on:click="search">查询</el-button></el-col>
  </el-row>
  <!-- 人员列表start -->
  <el-table 
    :data="list.slice((currentpage-1)*pagesize,currentpage*pagesize)"
    style="width: 100%"  border                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    :row-class-name="tableRowClassName">
    <el-table-column width="50"
    type="index"
    :index="typeIndex"
      label="序号"
      align="center">
    </el-table-column>
    <el-table-column 
      prop="rwbh"
      label="机构名称">
    </el-table-column>
    <el-table-column 
      prop="rwmc" width="250"
      label="负责人">
    </el-table-column>
    <el-table-column 
      prop="cjry"
      label="联系电话">
    </el-table-column>
    <el-table-column 
      prop="cjsj"
      label="资质等级">
    </el-table-column>
    <el-table-column 
      prop="wyyt"
      label="物业用途"
     >
    </el-table-column>
    <el-table-column 
      prop="cyry"
      label="调查人员数量">
    </el-table-column>
    <el-table-column 
      prop="rwzt"
      label="已完成任务">
    </el-table-column>
     <el-table-column 
      prop="wcsj"
      label="正在进行任务"> 
    </el-table-column>
     <el-table-column label="操作">
     <template slot-scope="scope">
        <router-link :to="{ name:'details' ,query: {  }}">
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
  <!-- 人员列表end -->
 </div>
</template>
<script>
import { formatDate } from '@/common/js/data'
export default {
  data() {
    return {
      currentpage: 1,
      pagesize: 5,
      list: [],
      mylist: [],
      alllist: [],
      form: {
        rwbh: '深房估字(2018)第1907号',
        sex: '',
        credential: '',
        fzr: ''
      },
      credential: [{
        value: '注册估价师',
        label: '注册估价师'
      }, {
        value: '工程师',
        label: '工程师'
      }],
      sex: [{
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }]
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
    search() {
      console.log('搜索')
    },
    creatTask() {
      console.log('创建任务')
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
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
.el-row{
  margin-top: 5px;
  margin-bottom: 0px
}
</style>