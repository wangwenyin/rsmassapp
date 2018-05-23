<template>
  <div class="caseSearch">
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="4">
        <case-select placeholder='请选择案列类型' :options="options"></case-select>
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
        <el-button type="primary" size="small" @click="showMap">地图模式</el-button>
        <el-button plain size="small" @click="showPro">列表模式</el-button>
      </span>
    </div>
    <div>
      <bd-map :center="center" v-if="isShow"></bd-map>
      <case-list v-else></case-list>        
    </div>
  </div>
</template>

<script>
  import CaseSelect from '@/components/Select/case-select'
  import BdMap from '@/components/BdMap'
  import DatePicker from '@/components/DateTimePicker'
  import InputBox from '@/components/Input'
  import CaseList from '@/components/Table/case-list'

  export default {
    components: { CaseSelect, BdMap, DatePicker, InputBox, CaseList },
    data() {
      return {
        options: [{
          value: '选项1',
          label: '买卖'
        }, {
          value: '选项2',
          label: '租赁'
        }, {
          value: '选项3',
          label: '挂牌'
        }, {
          value: '选项4',
          label: '估价'
        }, {
          value: '选项5',
          label: '询价'
        }],
        center: '深圳',
        isShow: true
      }
    },
    methods: {
      showMap() {
        this.isShow = true
      },
      showPro() {
        this.isShow = false
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
      margin-bottom: 10px;
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





