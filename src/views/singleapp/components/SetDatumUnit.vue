<template>
    <div class="margin10 ">
        <el-table  ref="singleTable" v-if="appObjectList" :data="alternativeList" class="table" :row-class-name="tableRowClassName">
             <el-table-column label="项目名称" prop="xmmc">
            </el-table-column>
            <el-table-column label="楼栋名称" prop="ldmc">
            </el-table-column>
            <el-table-column label="建筑面积" prop="jzmj">
            </el-table-column>
              <el-table-column label="层数/实际层">
                <template slot-scope="scope">
                    <span v-if="scope.row.hasOwnProperty('hh')">{{scope.row.sjc}}</span>
                    <span v-else>{{scope.row.zcs}}</span>
                </template>
            </el-table-column>
            <el-table-column prop="hh" label="户号">
            </el-table-column>
            <el-table-column prop="hx" label="户型">
            </el-table-column>
            <el-table-column label="类型">
                <template slot-scope="scope">
                    <span v-if="scope.row.hasOwnProperty('hh')">户</span>
                    <span v-else>楼栋</span>
                </template>
            </el-table-column>
             <el-table-column label="操作" >
          <template slot-scope="scope">
              <el-button disabled v-if="scope.row.hasOwnProperty('hh')&&scope.row.hh === datumId||scope.row.lddm === datumId" size="mini" type="primary" icon="el-icon-star-on">基准</el-button>
            <el-button v-else size="mini" type="text" @click="onSetDatumClick(scope.row)">设为基准</el-button>
          </template>
        </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
  props: {
    appObjectList: {
      type: Array,
      default: []
    },
    datumType: {
      type: String,
      default: '楼栋'
    },
    datumId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      currentpage: 1,
      pagesize: 5,
      cxlx: 'xmmc',
      cxnr: '',
      houseList: [],
      bulidingList: [],
      alternativeList: []
    }
  },
  mounted() {
    this.SetAlternativeList()
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.hasOwnProperty('hh') && row.hh === this.datumId) {
        return 'success-row'
      } else if (row.lddm === this.datumId) {
        return 'success-row'
      } else {
        return ''
      }
    },
    SetAlternativeList() {
      this.houseList = []
      this.bulidingList = []
      this.alternativeList = []
      this.appObjectList.forEach(element => {
        if (element.hasOwnProperty('hh')) {
          this.houseList.push(element.lddm)
          this.alternativeList.push(element)
        } else {
          this.bulidingList.push(element)
        }
      })
      this.bulidingList.forEach(element => {
        if (this.houseList.indexOf(element.lddm) === -1) {
          this.alternativeList.push(element)
        }
      })
    },
    onSetDatumClick(val) {
      if (val.hasOwnProperty('hh')) {
        this.datumId = val.hh
      } else {
        this.datumId = val.lddm
      }
    }
  },
  watch: {
    appObjectList() {
      this.SetAlternativeList()
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
.el-table .success-row {
  background: #f0f9eb;
}
</style>