<template>
  <div class="scroll card" ref="scroll">
    <el-row>
      <el-col :span="24" v-for="(o, index) in buildinglist" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" :key="o.id" class="col" @click.native="onCardCilck(o)">
       
          <el-card>
            <img :src= "o.img" class="card-r">
            <div class="text">
           <div class="title-small">{{ o.ldmc }} </div>
            <div class="title-mini">{{ o.xmmc }} </div> 
        <div :class="{'text-p': !selectable, 'text-p-s': selectable}">
            <span >评估价：<b class="red">{{ o.pgdj }}</b></span>
             <span class="text-t"><time>{{ o.jzsd | formatDate}}</time></span>   
         </div>
          <div :class="{'text-c': !selectable, 'text-c-s': selectable}">
              <span>{{o.jgrq | formatYear}}年</span>&nbsp;&nbsp;|
             <span>{{o.ldjg}}</span>&nbsp;&nbsp;|
              <span>共{{ o.zcs }}层</span>&nbsp;|
              <span>共{{ o.zhs }}户</span>
          </div>  
           <useTag :tags="o.hgyt"></useTag>
            <router-link :to="{ name:'building' ,query: { lddm: o.lddm }}" target="_blank">
             <span ><el-button size="mini" type="text" >详情</el-button></span>
                     </router-link>
               <span ><el-button size="mini" type="text" @click.prevent="house(o)">户</el-button></span>
           <div class="z-index" v-if="selectable===true">
               <span ><el-button size="mini" type="text" @click.prevent="house(o)">户</el-button></span>
               <span>  <el-button size="mini"  type="text" @click.prevent="select(o)">选择</el-button></span>
           </div>        
       </div>
          </el-card>

      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-pagination small @current-change="handleCurrentChange" :current-page="currentpage" :page-sizes="[10, 20, 30, 50]" :page-size="pagesize" layout="total, prev, pager, next" :total="buildinglist.length">
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
    buildinglist: {
      type: Array,
      default: []
    },
    selectable: {
      type: Boolean,
      default: false
    },
    currentpage: {
      type: Number,
      default: 1
    },
    pagesize: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleCurrentChange(val) {
      this.currentpage = { val }.val
    },
    select(val) {
      this.$emit('select', val)
    },
    house(val) {
      this.$emit('house', val)
    },
    onCardCilck(val) {
      this.$emit('loacte', val)
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
.z-index {
  position: relative;
  margin-top: -14%;
  float: right;
  margin-right: -10%;
  z-index: 20;
}
.el-row {
  margin-bottom: 20px;
  margin-top: 10px;
  height: 100%;
}
.el-card__body {
  height: 100%;
  padding: 10px;
  overflow: hidden;
  position: relative;
}
.card-r {
  width: 40%;
  height: 100%;
  display: block;
  float: left;
  min-height: 126px;
}
.el-tag--mini {
  padding: 0 4.8px;
  margin-left: 3px;
}
.text-c {
  margin-top: 10px;
  margin-bottom: 3.4px;
}
.text-p {
  margin-top: 18px;
}
.text-c-s {
  margin-top: -1px;
  margin-bottom: 3.4px;
}
.text-p-s {
  margin-top: -1px;
}
.text-t {
  //float: right;
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
}

.image {
  width: 40%;
  height: 100%;
  display: block;
  float: left;
}
.card {
  margin-left: 10px;
  min-width: 100px;
}
.title {
  font-size: 23px;
  font-weight: bold;
}
.title-small {
  font-size: 18px;
  font-weight: bold;
  margin-top: -10px;
}
.title-mini {
  font-size: 14px;
  font-weight: bold;
}
.red {
  color: red;
  font-size: 13px;
  font-weight: bold;
}
.scroll {
  overflow-y: auto;
  overflow-x: auto;
}
</style>