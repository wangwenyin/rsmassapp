<template>
<div class="scroll card">
 <el-row>
  <el-col :span="24" v-for="(o, index) in buildinglist" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" :key="o.id"  class="col">
     <router-link :to="{ name:'building' ,query: { lddm: o.lddm }}" target="_blank" >
    <el-card>
      <img :src= "o.img" class="image">
      <div class="text">
          <div>
            <span class="time"><time>{{ o.jzsd | formatDate}}</time></span>   
           <span class="title-small">{{ o.ldmc }} </span>
            <span class="title-mini">{{ o.xmmc }} </span>  
          </div>
          <div>
            <span class="right">评估价：<b class="red">{{ o.pgdj }}</b></span>
          </div>
          <div class="card-text" >
             <span>{{o.jgrq | formatYear}}年</span>&nbsp;&nbsp;|
             <span>{{o.ldjg}}</span>&nbsp;&nbsp;
          </div>
          <div class="card-text1">
              <span>共{{ o.zcs }}层</span>&nbsp;&nbsp;|
              <span>共{{ o.zhs }}户</span>
          </div>   
              <useTag :tags="o.hgyt"></useTag>
       </div>
    </el-card>
      </router-link>
     </el-col>
          </el-row>
          <el-row>
           <el-col :span="24" >
             <el-pagination 
              small
              @current-change="handleCurrentChange"
              :current-page="currentpage"
              :page-sizes="[10, 20, 30, 50]"
              :page-size="pagesize"
              layout="total, prev, pager, next"
              :total="buildinglist.length">
            </el-pagination>
          </el-col>
         </el-row>
  </div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
</style>

<script>
import useTag from '@/components/Tag/UseTag'
import { formatDate } from '@/common/js/data'
export default {
  components: {
    useTag
  },
  props: {
    buildinglist: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentpage: 1,
      pagesize: 10
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentpage = { val }.val
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