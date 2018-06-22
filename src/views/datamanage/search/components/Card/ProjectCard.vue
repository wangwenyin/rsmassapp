<template>
<div class="scroll">
 <el-row >
     <el-col :span="24" v-for="(o, index) in projectlist" :key="o" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" class="col">
       <router-link :to="{ name:'project' ,query: { xmdm: o.xmdm }}" target="_blank" >
            <el-card >
                <img :src= "o.img" class="image">
                <div class="text">
                     <div>
                         <span class="title-small">{{ o.xmmc }} </span>
                         <span class="time"><time>{{ o.jzsd | formatDate}}</time></span>
                     </div>
                      <div>                        
                         <span class="right">评估价：<b class="red">{{ o.pgdj }}</b></span>
                     </div>
                     <div class="card-text" >
                        <span>{{o.xzq}}</span>&nbsp;&nbsp;|
                        <span>{{o.jdb}}</span>
                     </div>
                     <div class="card-text1">
                        <span>共{{ o.zlds }}栋</span>&nbsp;&nbsp;|
                        <span>共{{ o.zhs }}户</span>&nbsp;&nbsp;|
                        <span>{{ o.jgrq  | formatYear}}建成</span>
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
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentpage"
      :page-sizes="[10, 20, 30, 50]"
      :page-size="pagesize"
      layout="total, prev, pager, next"
      :total="projectlist.length">
    </el-pagination>
      </el-col>
   </el-row>
</div>
</template>
<style>

</style>

<script>
import { formatDate } from '@/common/js/data'
import useTag from '@/components/Tag/UseTag'
export default {
  components: {
    useTag
  },
  props: {
    projectlist: {
      type: Array,
      default: null
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
    handleSizeChange(val) {
      this.pagesize = { val }.val
    }
  },
  created() {},
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