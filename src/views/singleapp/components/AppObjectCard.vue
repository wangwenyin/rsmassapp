<template>
    <div>
        <el-row>
            <span>估价对象信息&nbsp;({{appObjectList.length}})</span>
            <el-button class="btn_left" size="mini" type="text" @click.prevent="submit()">提交</el-button>
            <el-button class="btn_left" size="mini" type="text"  @click.prevent="view()">查看</el-button>
            <el-button class="btn_left" size="mini" type="text" @click="delAll()">清空</el-button>
        </el-row>
        <div class="scroll card" ref="scroll">
            <el-row>
                <el-col :span="24" v-for="(o, index) in appObjectList" :key="o.id" v-if="index>=pagesize*(currentpage-1) && index<pagesize*currentpage" class="col">
                    <router-link :to="{ name:'project' ,query: { xmdm: o.xmdm }}" target="_blank">
                        <el-card shadow="hover">
                            <div class="crad-l">
                                <div>
                                    <span v-if="o.hasOwnProperty('hh')" class="title-small">{{ o.hh }} </span>
                                    <span :class="{'title-mini': o.hasOwnProperty('hh'), 'title-small': !o.hasOwnProperty('hh')}">{{ o.ldmc }} </span>
                                </div>
                                <div>
                                    <span :class="{'text-r': !selectable, 'text-r-s': selectable}">
                                        {{ o.xmzl }}
                                    </span>
                                </div>
                                <div v-if="o.hasOwnProperty('hh')" :class="{'text-p1': !selectable, 'text-p1-s': selectable}">
                                    <span>{{o.sjc}}层</span>&nbsp;|
                                    <span>{{o.jzmj}}平米</span>&nbsp;|
                                    <span>{{o.fwyt1}}</span>
                                </div>
                                <div v-else :class="{'text-c2': !selectable, 'text-c2-s': selectable}">
                                    <span>共{{ o.zcs }}层</span>&nbsp;&nbsp;|
                                    <span>共{{ o.jzmj }}平米</span>&nbsp;&nbsp;|
                                    <span>{{o.hgyt}}</span>
                                </div>
                                <div class="z-index">
                                    <span style="margin-right: 10px">
                                        <el-button size="mini" type="text" @click.prevent="del(index)">删除</el-button>
                                    </span>
                                </div>
                            </div>
                        </el-card>
                    </router-link>
                </el-col>
            </el-row>
        </div>
        <div>
            <el-row>
                <el-col :span="24">
                    <el-pagination small @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentpage" :page-sizes="[10, 20, 30, 50]" :page-size="pagesize" layout="total, prev, pager, next" :total="appObjectList.length">
                    </el-pagination>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
import appObjectDetail from '@/views/singleapp/task/appObjectDetail'
export default {
  components: {
    appObjectDetail
  },
  props: {
    appObjectList: {
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
      pagesize: 5,
      dialogSelectProp: false
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
    setHeight() {
      this.$refs.scroll.style.height =
        document.documentElement.clientHeight - 280 + 'px'
    },
    del(val) {
      this.$emit('del', val)
    },
    delAll() {
      this.$emit('delAll')
    },
    view() {
      this.$emit('view')
    },
    submit() {
      this.$emit('submit')
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-card__body {
  position: relative;
  overflow: hidden;
}
.z-index {
  position: relative;
  margin-top: -14%;
  float: right;
  margin-right: -10%;
  z-index: 20;
}
.crad-l {
  width: 100%;
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
.text-c1 {
  margin-top: 42px;
  margin-left: 0;
}
.text-c1-s {
  margin-top: 42px;
  margin-left: 0;
  // margin-top: 24px;
  // margin-bottom: -6px;
  // margin-left: 0px;
}
.text-c2 {
  margin-top: 9px;
  margin-bottom: 3px;
  margin-left: 0%;
}
.text-c2-s {
  margin-top: 9px;
  margin-bottom: 3px;
  margin-left: 0%;
  // margin-top: 2px;
  // margin-bottom: 2px;
  // margin-left: -1px;
}
.text-r {
  margin-left: auto;
  margin-bottom: -2%;
  margin-top: 3%;
  float: left;
}
.text-r-s {
  margin-left: auto;
  margin-bottom: -2%;
  margin-top: 3%;
  float: left;

  // margin-left: auto ;
  // margin-bottom: -2%;
  // margin-top:-3px;
  // float: left;
}
.text-t {
  float: right;
  font-size: 13px;
  color: #999;
  margin-top: 6px;
  margin-bottom: 1.1px;
  margin-right: -10px;
}
.text-t-s {
  float: right;
  font-size: 13px;
  color: #999;
  margin-top: 6px;
  margin-bottom: 1.1px;
  margin-right: -10px;

  //  float: right;
  // //font-size: 13px;
  // color: #999;
  // margin-top:-3px;
  // margin-bottom: 1.1px;
  // margin-right: -10px;
}
.card {
  margin-left: 10px;
  min-width: 120px;
}
//  .el-card {
//     min-height: 150px;
//  }
.text-red {
  color: red;
  font-size: 13px;
  font-weight: bold;
}
.scroll {
  //  height: 540px;
  overflow-y: auto;
  overflow-x: auto;
}
.btn_left {
  float: right;
  width: 26px;
  margin-left: 3.1%;
}
</style>