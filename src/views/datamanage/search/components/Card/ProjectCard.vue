<template>
<div class="scroll card">
 <el-row >
     <el-col :span="24" v-for="(o, index) in projectlist" :key="o.id" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" class="col">
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
                     <div :class="{'card-text': !selectable, 'card-text0': selectable}" >
                        <span>{{o.xzq}}</span>&nbsp;&nbsp;|
                        <span>{{o.jdb}}</span>
                     </div>
                     <div :class="{'card-text1': !selectable, 'card-text2': selectable}">
                        <span>共{{ o.zlds }}栋</span>&nbsp;&nbsp;|
                        <span>共{{ o.zhs }}户</span>&nbsp;&nbsp;|
                        <span>{{ o.jgrq  | formatYear}}建成</span>
                     </div>
                    <span> <useTag :tags="o.hgyt"></useTag></span>
                    <div class="z-index" v-if="selectable===true">
                    <span style="margin-right: 10px">   <el-button size="mini" type="text" @click.prevent="building(o)">楼栋</el-button></span>
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
<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/views/datamanage/styles.scss' ;
  .el-card__body {
    position: relative;
  }
  .z-index{
    position: relative;
    margin-top: -14%;
    float: right;
    margin-right: -10%;
    z-index:20
    }
.card-text{
    margin-top: 14%;
    margin-bottom: -1%;
    margin-left: 5%;
  }
  .card-text0{
    margin-top: 1%;
    margin-bottom: -1%;
    margin-left: 5%;
  }
  .card-text1{
    margin-top: 8%;
    margin-bottom: 4%;
    margin-left: 4%;
  }
  .card-text2{
     margin-top: 1%;
    margin-bottom: 1%;
    margin-left: -4%;
  }
  .right{
    margin-left: auto ;
    margin-bottom: -2%;
    margin-top:0%;
    float: right;
   }
    .card{
    margin-left: 10px;
    min-width: 120px;
  }
  
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
    handleSizeChange(val) {
      this.pagesize = { val }.val
    },
    select(val) {
      this.$emit('select', val)
    },
    building(val) {
      this.$emit('building', val)
    }
  },
  created() {

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