<template>
<div>
 <el-row>
  <el-col :span="24" v-for="(o, index) in buildinglist" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" :key="o"  class="col">
     <router-link :to="{ name:'building' ,query: { buildingId: o.buildingId }}" target="_blank" >
    <el-card>
      <img :src= "o.img[0]" class="image">
      <div class="text">
          <div>
           <span class="title-small">{{ o.building }} </span>
            <span class="title-mini">{{ o.project }} </span>           
          </div>
          <div>
            <span class="right">评估价：<b class="red">{{ o.price }}</b></span>
          </div>
          <div class="card-text" >
             <span>{{o.completionDate}}</span>&nbsp;&nbsp;|
             <span>{{o.structure}}</span>&nbsp;&nbsp;
          </div>
          <div class="card-text1">
              <span>共{{ o.layersNum }}层</span>&nbsp;&nbsp;|
              <span>共{{ o.houseNum }}户</span>
          </div>         
           <!-- <el-tag v-for="t in o.tags" :key="t" size="mini" :type="t.type">
              {{t.text}}
            </el-tag>  -->
              <useTag :tags="o.tags"></useTag>
       </div>
    </el-card>
      </router-link>
     </el-col>
          </el-row>
          <el-row>
            <el-pagination layout="prev, pager, next" :page-size="pagesize" :current-page="currentpage" :total="buildinglist.length" @current-change="handleCurrentChange"></el-pagination>
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
    buildinglist: {
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