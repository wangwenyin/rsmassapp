<template>
  <div class="margin10 ">
    <el-row v-if="detail" style="height:10px"></el-row>
    <el-row class="search-box" v-if="detail">
      <el-col :span="10" style="margin-top:0.5%">
        <span class="title">估价对象</span>
      </el-col>
      <el-col :span="3">
        <el-select v-model="cxlx" class="search" size="small" placeholder="项目名称">
          <el-option label="项目名称" value="xmmc"></el-option>
          <el-option label="楼栋名称" value="ldmc"></el-option>
          <el-option label="户号" value="hh"></el-option>
          <el-option label="物业用途" value="usage"></el-option>
        </el-select>
      </el-col>
      <el-col :span="9">
        <el-input placeholder="请输入要查询的内容" class="search" v-model.trim="cxnr" size="small">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" class="btn" size="small" @click.prevent="submit()">提交</el-button>
      </el-col>
    </el-row>
    <el-table v-if="bulidingList" :data="bulidingList" class="table" :row-class-name="tableRowClassName">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table  :data="getHoust(props.row.lddm)" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="hh" label="户号" width="180">
            </el-table-column>
            <el-table-column prop="sjc" label="实际层">
            </el-table-column>
            <el-table-column prop="hx" label="户型">
            </el-table-column>
            <el-table-column prop="jzmj" label="建筑面积">
            </el-table-column>
            <el-table-column prop="fwyt1" label="房屋用途">
            </el-table-column>
            <el-table-column prop="pgjg1" label="评估价格1">
            </el-table-column>
            <el-table-column prop="pgjg2" label="评估价格2">
            </el-table-column>
              <el-table-column label="操作" width="150" v-if="detail">
                <template slot-scope="scope">
                  <el-button size="mini" @click="view(scope.row)">详情</el-button>
                  <el-button size="mini" type="primary" @click="del(scope.row)">删除</el-button>
                </template>
              </el-table-column>
          </el-table>
        </template>
        </el-table-column>
        <el-table-column label="项目名称" prop="xmmc">
        </el-table-column>
        <el-table-column label="楼栋名称" prop="ldmc">
        </el-table-column>
        <el-table-column label="楼宇层数" prop="zcs">
        </el-table-column>
        <el-table-column label="总户数" prop="zhs">
        </el-table-column>
        <el-table-column label="涵盖用途" prop="hgyt">
        </el-table-column>
        <el-table-column label="地址" prop="zmzl">
        </el-table-column>
        <el-table-column label="建筑面积" prop="jzmj">
        </el-table-column>
        <el-table-column label="操作" width="150" v-if="detail">
          <template slot-scope="scope">
            <el-button size="mini" @click="view(scope.row)">详情</el-button>
            <el-button size="mini" type="primary" @click="del(scope.row)">删除</el-button>
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
    detail: {
      type: Boolean,
      default: false
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
      bulidingList: []
    }
  },
  mounted() {
    this.SetBuildingAndHouse()
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
    SetBuildingAndHouse() {
      this.houseList = []
      this.bulidingList = []
      this.appObjectList.forEach(element => {
        if (element.hasOwnProperty('hh')) {
          this.houseList.push(element)
        } else {
          this.bulidingList.push(element)
        }
      })
    },
    getHoust(lddm) {
      const bulidhouse = []
      this.houseList.forEach(element => {
        if (element.lddm === lddm) {
          bulidhouse.push(element)
        }
      })
      return bulidhouse
    },
    del(val) {
      this.$emit('del', val)
    },
    view(val) {
      this.$emit('view', val)
    },
    submit() {
      this.$emit('submit')
    },
    search() {

    }
  },
  watch: {
    appObjectList() {
      this.SetBuildingAndHouse()
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