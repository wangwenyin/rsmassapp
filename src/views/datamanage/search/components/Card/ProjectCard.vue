<template>
<div>
 <el-row>
     <el-col :span="24" v-for="(o, index) in projectlist" :key="o" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" class="col">
       <router-link :to="{ name:'project' ,query: { projectId: o.projectId }}" target="_blank" >
            <el-card >
                <img :src= "o.img[0]" class="image">
                <div class="text">
                     <div>
                         <span class="title-small">{{ o.project }} </span>
                         <span class="time"><time>{{ o.timePoint | formatDate}}</time></span>
                     </div>
                      <div>                        
                         <span class="right">评估价：<b class="red">{{ o.price }}</b></span>
                     </div>
                     <div class="card-text" >
                        <span>{{o.region}}</span>&nbsp;&nbsp;|
                        <span>{{o.street}}</span>&nbsp;&nbsp;|
                        <span>组别{{o.group}}</span>
                     </div>
                     <div class="card-text1">
                        <span>共{{ o.bulidingNum }}栋</span>&nbsp;&nbsp;|
                        <span>共{{ o.houseNum }}户</span>&nbsp;&nbsp;|
                        <span>{{ o.completionDate }}建成</span>
                     </div>
                     <useTag :tags="o.tags"></useTag>
                 </div>
             </el-card>
     </router-link>
     </el-col>
   </el-row>
   <el-row>
       <el-pagination layout="prev, pager, next" :page-size="pagesize" :current-page="currentpage" :total="projectlist.length" @current-change="handleCurrentChange"></el-pagination>
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
    },
    query: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      currentpage: 1,
      pagesize: 4
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentpage = { val }.val
    }
  },
  created() {},
  filters: {
    formatDate(currentDate) {
      var date = new Date(currentDate)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>