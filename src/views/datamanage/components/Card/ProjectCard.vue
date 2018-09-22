<template>
<div class="scroll card"  ref="scroll">
 <el-row >
     <el-col :span="24" v-for="(o, index) in projectlist" :key="o.id" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" class="col">
       <router-link :to="{ name:'project' ,query: { xmdm: o.xmdm }}" target="_blank" >
            <el-card shadow="hover">
                <img :src= "o.img" class="card-r">
                <div class="crad-l">
                     <div>
                         <span class="title-small">{{ o.xmmc }} </span>
                     </div>
                      <div>                        
                         <span :class="{'text-r': !selectable, 'text-r-s': selectable}">评估价：<b class="text-red">{{ o.pgdj }}</b></span>
                          <span :class="{'text-t': !selectable, 'text-t-s': selectable}"><time>{{ o.jzsd | formatDate}}</time></span>
                     </div>
                     <div :class="{'text-c1': !selectable, 'text-c1-s': selectable}" >
                        <span>{{o.xzq}}</span>&nbsp;&nbsp;|
                        <span>{{o.jdb}}</span>
                     </div>
                     <div :class="{'text-c2': !selectable, 'text-c2-s': selectable}">
                        <span>共{{ o.zlds }}栋</span>&nbsp;&nbsp;|
                        <span>共{{ o.zhs }}户</span>&nbsp;&nbsp;|
                        <span>{{ o.jgrq  | formatYear}}建成</span>
                     </div>
                    <span > <useTag :tags="o.hgyt"></useTag></span>
                    <div class="z-index" v-if="selectable===true">
                    <span style="margin-right: 10px">   <el-button size="mini" type="text" @click.prevent="building(o)">楼栋</el-button></span>
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
<script>
import { formatDate } from '@/utils/date'
import useTag from '@/views/datamanage/components/UseTag'
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
  mounted() {
    this.setHeight()
    // 屏幕适应大小
    window.onresize = () => {
      this.setHeight()
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
    },
    setHeight() {
      this.$refs.scroll.style.height = document.documentElement.clientHeight - 260 + 'px'
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
  .el-card__body {
    position: relative;
    overflow: hidden;
  }
  .z-index{
    position: relative;
    margin-top: -14%;
    float: right;
    margin-right: -10%;
    z-index:20
    }
   .crad-l {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    float: left;
    font-size: 12px;
  }
  .card-r {
    width: 40%;
    height: 100%;
    display: block;
    float: left;
    min-height: 130px;
  }
   .title {
    font-size: 23px;
    font-weight: bold;
   }
   .title-small {
     font-size: 18px;
     font-weight: bold;
   }
   .title-mini {
     font-size: 14px;
     font-weight: bold;
   }
  .text-c1{
    margin-top: 42px;
    margin-left: 0;
  }
  .text-c1-s{
     margin-top: 42px;
    margin-left: 0;
  }
  .text-c2{
     margin-top: 9px;
     margin-bottom: 3px;
     margin-left: 0%;
  }
  .text-c2-s{
      margin-top: 9px;
     margin-bottom: 3px;
     margin-left: 0%;
  }
   .text-r{
    margin-left: auto ;
    margin-bottom: -2%;
    margin-top:3%;
    float: left;
   }
   .text-r-s{
       margin-left: auto ;
    margin-bottom: -2%;
    margin-top:3%;
    float: left;
   }
    .text-t {
    float: right;
    font-size: 13px;
    color: #999;
    margin-top: 6px;
    margin-bottom: 1.1px;
    margin-right: -10px;
  }
  .text-t-s{
    float: right;
    font-size: 13px;
    color: #999;
    margin-top: 6px;
    margin-bottom: 1.1px;
    margin-right: -10px;
  }
    .card{
    margin-left: 10px;
    min-width: 120px;
  }
  .text-red {
     color: red;
     font-size: 13px;
     font-weight: bold;
   }
   .scroll{
    overflow-y: auto;
    overflow-x: auto
  }
</style>