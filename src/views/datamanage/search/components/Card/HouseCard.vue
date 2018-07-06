<template>
<div class="scroll card">
  <el-row>
 <el-col :span="24" v-for='(o , index) in houselist ' :key="o.id" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" class="col">
     <router-link :to="{ name:'house' ,query: { hdm: o.hdm }}" target="_blank" >
    <el-card>
      <img :src= "o.img" class="image">
      <div class="text">
          <div>
              <span class="time"><time>{{ o.jzsd | formatDate}}</time></span>  
             <span class="title-small">{{ o.hh }} </span>
             <span class="title-mini">{{ o.ldmc }} </span>
            <span class="title-mini">{{o.xmmc  }} </span>
          </div>
          <div>
             <span class="right">评估价：<b class="red">{{ o.pgdj }}</b></span>
          </div>
          <div class="card-text" >
             <span>{{o.sjc}}层</span>&nbsp;&nbsp;|
             <span>{{o.jzmj}}平米</span>&nbsp;&nbsp;
          </div>
          <div class="card-text1">
              <span>{{ o.hx }}</span>&nbsp;&nbsp;|
              <span>{{ o.fwxz }}</span>
          </div>
            <useTag :tags="o.fwyt1"></useTag>
              <div class="z-index" v-if="selectable===true">
                    <span>  <el-button size="mini"  type="text" @click.prevent="select(o)">选择</el-button></span>
                       </div>
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
              :total="houselist.length">
            </el-pagination>
          </el-col>
</el-row>
</div>
</template>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
   .card-text{
    margin-top: 0%;
    margin-bottom: -1%;
    margin-left: 5%;
  }
  .card-text1{
    margin-bottom: 1%;
    margin-left: 5%;
  }
  .right{
    margin-left: auto ;
    margin-bottom: -2%;
    margin-top:-1%;
    float: right;
   }
    .z-index{
    position: relative;
    margin-top: -14%;
    float: right;
    margin-right: -10%;
    z-index:20
    }
</style>

<script>
import useTag from '@/components/Tag/UseTag'
import { formatDate } from '@/common/js/data'
export default {
  components: {
    useTag
  },
  props: {
    houselist: {
      type: Array,
      default: []
    },
    selectable: {
      type: Boolean,
      default: false
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
    },
    select(val) {
      this.$emit('select', val)
    }
  },
  filters: {
    formatDate(currentDate) {
      var date = new Date(currentDate)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>