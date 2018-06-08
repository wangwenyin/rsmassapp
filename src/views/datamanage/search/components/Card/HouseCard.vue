<template>
<div>
 <el-row  v-for='(o , index) in houselist ' :key="o" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage">
     <router-link :to="{ name:'house' ,query: { houseId: o.houseId }}" target="_blank" >
    <el-card>
      <img :src= "o.img[0]" class="image">
      <div class="text">
          <div>
             <span class="title-small">{{ o.house }} </span>
             <span class="title-mini">{{ o.building }} </span>
            <span class="title-mini">{{o.project  }} </span>
          </div>
          <div>
             <span class="right">评估价：<b class="red">{{ o.price }}</b></span>
          </div>
          <div class="card-text" >
             <span>{{o.layer}}层</span>&nbsp;&nbsp;|
             <span>{{o.builtUpArea}}平米</span>&nbsp;&nbsp;
          </div>
          <div class="card-text1">
              <span>{{ o.type }}</span>&nbsp;&nbsp;|
              <span>{{ o.orientation }}</span>
          </div>
            <useTag :tags="o.tags"></useTag>
       </div>
    </el-card>
     </router-link>
    
 </el-row>
 <el-row>
     <el-pagination layout="prev, pager, next" :page-size="pagesize" :current-page="currentpage" :total="houselist.length" @current-change="handleCurrentChange"></el-pagination>
</el-row>
</div>
</template>
<style>
 
</style>

<script>
import useTag from '@/components/Tag/UseTag'
export default {
  components: {
    useTag
  },
  props: {
    houselist: {
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
  }
}
</script>