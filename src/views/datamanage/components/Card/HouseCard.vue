<template>
<div class="scroll card" ref="scroll">
  <el-row>
 <el-col :span="24" v-for='(o , index) in houselist ' :key="o.id" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" class="col">
     <router-link :to="{ name:'house' ,query: { hdm: o.hdm }}" target="_blank" >
    <el-card>
      <img :src= "o.img" class="card-r">
      <div class="text">
          <div>
             <span class="title-small">{{ o.hh }} </span>
             <span class="title-mini">{{ o.ldmc }} </span>
           
          </div>
           <div class="title-mini">{{o.xmmc  }} </div>
          <div :class="{'text-c': !selectable, 'text-c-s': selectable}">
             <span>评估价：<b class="red">{{ o.pgdj }}</b></span>
              <span class="text-t"><time>{{ o.jzsd | formatDate}}</time></span>  
          </div>
          <div   :class="{'text-p1': !selectable, 'text-p1-s': selectable}">
             <span>{{o.sjc}}层</span>&nbsp;|
             <span>{{o.jzmj}}平米</span>&nbsp;
          </div>
           <div :class="{'text-p2': !selectable, 'text-p2-s': selectable}">
               <span>{{ o.hx }}</span>&nbsp;|
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
<script>
import useTag from '@/views/datamanage/components/UseTag'
import { formatDate } from '@/utils/date'
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
    select(val) {
      this.$emit('select', val)
    },
    setHeight() {
      this.$refs.scroll.style.height = document.documentElement.clientHeight - 260 + 'px'
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
<style rel="stylesheet/scss" lang="scss" scoped>
    .z-index{
    position: relative;
    margin-top: -14%;
    float: right;
    margin-right: -10%;
    z-index:20
    }
  .el-row {
    margin-bottom: 20px;
    margin-top: 10px;
    height:100%;
  }
   .el-card__body {
       height: 100%;
       padding: 10px;
       overflow: hidden;
   }
   .el-tag--mini
   {
     padding:0 4.8px;
     margin-left: 3px
   }
  .text-c{
    margin-top: 8px;
    margin-bottom: 3.4px;
  }
  .text-p1{
    margin-top:8px;
   }
    .text-p2{
    margin-top:3px;
   }
    .text-c-s{
    margin-top: -1px;
    margin-bottom: 3.4px;
  }
  .text-p1-s{
    margin-top:-1px;
   }
   .text-p2-s{
    margin-top:-1px;
   }
     .text-t {
    font-size: 13px;
    color: #999;
    margin-left: 13px
  }
   .text {
    width: 60%;
    height: 100%;
    box-sizing: border-box;
    padding: 10px;
    float: left;
    font-size: 12px;
    margin-top: -10px;
  }
   .card-r {
    width: 40%;
    height: 100%;
    display: block;
    float: left;
    min-height: 115px;
  }
  .card{
    margin-left: 10px;
    min-width: 100px;
  }
  .title {
    font-size: 23px;
    font-weight: bold;
     margin-top: -10px;
  }
  .title-small {
    font-size: 18px;
    font-weight: bold;
    margin-top: -10px;
  }
  .title-mini {
    font-size: 12px;
    font-weight: bold;
  }
  .red {
    color: red;
    font-size: 13px;
    font-weight: bold;
  }
  .scroll{
    overflow-y: auto;
    overflow-x: auto
  }
</style>
