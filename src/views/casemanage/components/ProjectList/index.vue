<template>
<div class="scroll card"  ref="scroll">
  <div v-for="o in newProjectInfo" :key="o.xmdm" @click="onCardClick(o)">
    <el-card shadow="hover">
      <img :src= "o.img" class="card-r">
      <div class="crad-l">
        <div>
            <span class="title-small">{{ o.xmmc }} </span>
        </div>
        <div class="unitPrice" v-if="o.avg_price">                        
            <span>{{o.avg_price}}元/㎡</span><span style="margin-left: 10px">{{o.alsl}}套</span>
        </div>
        <div class="text-c1">
          <span>{{o.xzq}}</span>&nbsp;&nbsp;|
          <span>{{o.jdb}}</span>
        </div>
        <div class="text-c2">
          <span>共{{ o.zlds }}栋</span>&nbsp;&nbsp;|
          <span>共{{ o.zhs }}户</span>&nbsp;&nbsp;|
          <span>{{ o.jgrq  | formatYear}}建成</span>
        </div>
        <span><useTag :tags="o.hgyt"></useTag></span>
      </div>
    </el-card>
  </div>
  <el-pagination 
    size="medium"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentpage"
    :page-sizes="[5, 10, 20]"
    :page-size="pagesize"
    layout="total, prev, pager, next"
    :total="projectInfo.length">
  </el-pagination>
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
    projectInfo: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      currentpage: 1,
      pagesize: 5
    }
  },
  computed: {
    // 分页
    newProjectInfo() {
      return this.projectInfo.slice((this.currentpage - 1) * this.pagesize, this.currentpage * this.pagesize)
    }
  },
  mounted() {

  },
  methods: {
    onCardClick(item) {
      this.$emit('cardClick', item)
    },
    handleCurrentChange(val) {
      this.currentpage = val
    },
    handleSizeChange(val) {
      this.pagesize = val
    },
    select(val) {
      this.$emit('select', val)
    },
    building(val) {
      this.$emit('building', val)
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
    margin-top: 10px;
    margin-left: 0;
  }
  .text-c1-s{
    margin-top: 20px;
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
    cursor: pointer;
    min-width: 120px;
  }
  .text-red {
     color: red;
     font-size: 13px;
     font-weight: bold;
   }
   .scroll{
    background: #fff;
    overflow-y: auto;
    overflow-x: auto
  }
  .unitPrice {
    margin-top: 10px;
    color: red;
    font-size: 14px;
    font-weight: bold;
  }
  .el-pagination {
    margin-top: 10px;
    text-align: center
  }
</style>
