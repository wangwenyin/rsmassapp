<template>
  <div class="caseSearch">
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="4">
        <select placeholder='请选择案列类型' :options="caseTypes"></select>
      </el-col>
      <el-col :span="10">
        <date-picker></date-picker>
      </el-col>
      <el-col :span="6">
        <input-box placeholder="请输入项目名称"></input-box>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" size="medium">查询</el-button>
      </el-col>
    </el-row>
    <div class="line"></div>
    <div class="btn">
      <span>
        <el-button type="primary" size="small">添加案例</el-button>
        <el-button type="primary" size="small">导出案例</el-button>
      </span>
      <span>
        <el-button :type="mapType" size="small" @click="showMap">地图模式</el-button>
        <el-button :type="listType" size="small" @click="showList">列表模式</el-button>
      </span>
    </div>
    <div>
      <bd-map :center="center" v-if="isShow"></bd-map>
      <case-list v-else></case-list>
    </div>
  </div>
</template>

<script>
  import Select from '@/components/Select/select'
  import BdMap from '@/components/BdMap'
  import DatePicker from '@/components/DateTimePicker'
  import InputBox from '@/components/Input'
  import CaseList from '@/components/Table/case-list'

  export default {
    components: { Select, BdMap, DatePicker, InputBox, CaseList },
    data() {
      return {
        mapType: 'primary',
        listType: 'plain',
        caseTypes: ['买卖', '租赁', '挂牌', '估价', '询价'],
        center: '深圳',
        isShow: true
      }
    },
    methods: {
      showMap() {
        this.isShow = true
        this.mapType = 'primary'
        this.listType = 'plain'
      },
      showList() {
        this.isShow = false
        this.mapType = 'plain'
        this.listType = 'primary'
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .caseSearch {
    .el-row {
      div:first-child {
        input::-webkit-input-placeholder {
          color: #000;
        }
      }
    }
    .line {
      width: 100%;
      height: 1px;
      background: #797979;
      margin: 10px 0 5px 0;
      
    }
    .btn {
      overflow: hidden;
      margin-bottom: 5px;
      span {
        &:nth-child(1) {
        float: left;
        margin-left: 10px;
        }
        &:nth-child(2) {
          float: right;
          margin-right: 10px;
        }
        .el-button {
          border-radius: 0;
          margin-left: 0;
        }
      }
    }
  }
</style>





