<template>
<div>
<el-row :gutter="10" style="margin-left:20px;margin-right:20px;margin-top:10px;margin-bottom:10px;">
    <el-col :span="3">
      <el-select v-model="rwlx" placeholder="地区" filterable clearable size="medium">
        <el-option
          v-for="item in taskTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="wczt" placeholder="街道" filterable clearable size="medium">
        <el-option
          v-for="item in state"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input v-model="rwmc" placeholder="小区名称"></el-input>
    </el-col>
    <el-col :span="4">
        <el-button type="primary" v-on:click="addDomain">查询</el-button>
    </el-col>
  </el-row>
  <div class="tablePagination" style="float:left;margin-top:20px;">
  <el-row style="margin-bottom:10px">
    <span style="color:#666;float:" >待选小区</span>
    <el-col :span="4" style="float:right">
        <el-button type="primary" v-on:click="addDomain">添加</el-button>
    </el-col>
  </el-row>
    <el-table :cell-class-name="getCellClass"
      :data="tableData"
      size="small"
      border
      style="width: 100%;">
      <el-table-column
        prop="bh"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="rwmc"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="fdclx"
        label="街道">
      </el-table-column>
      <el-table-column
        prop="fdcyt"
        label="小区名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fdcyt"
        label="楼栋/户">
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
  <div class="tablePagination" style="float:right;margin-top:20px;margin-right: 530px;">
  <el-row style="margin-bottom:10px">
    <span style="color:#666">已选小区</span>
    <el-col :span="4" style="float:right">
        <el-button type="primary" v-on:click="addDomain">删除</el-button>
    </el-col>
  </el-row>
    <el-table :cell-class-name="getCellClass"
      :data="tableData"
      size="small"
      border
      style="width: 100%;">
      <el-table-column
        prop="bh"
        label="编号">
      </el-table-column>
      <el-table-column
        prop="rwmc"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="fdclx"
        label="街道">
      </el-table-column>
      <el-table-column 
        prop="fdcyt"
        label="小区名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="fdcyt"
        label="楼栋/户">
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      layout="prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import Coordinate from '@/components/SurveyMatch/coordinate'
export default {
  components: {
    Coordinate
  },
  data() {
    return {
      center: { lng: 116.404, lat: 39.915 },
      total: 100,
      tableData: [{
        id: '1',
        bh: '1',
        rwlx: '调查任务',
        rwmc: '任务一',
        fdclx: '房产',
        fdcyt: '商业',
        dccc: '小区',
        cnqk: '部分',
        dcjg: '完成',
        shjg: '南山区税务局',
        wczt: '1',
        yjwcsj: '2018/6/27',
        sjwcsj: '2018/6/30'
      },
      {
        id: '2',
        bh: '2',
        rwlx: '勘察任务',
        rwmc: '任务2',
        fdclx: '房产',
        fdcyt: '自用',
        cnqk: '部分',
        dccc: '小区',
        dcjg: '完成',
        shjg: '南山区税务局',
        wczt: '0',
        yjwcsj: '2018/6/17',
        sjwcsj: '2018/5/30'
      }, {
        id: '3',
        bh: '3',
        rwlx: '勘察任务4',
        rwmc: '任务3',
        fdclx: '房产',
        fdcyt: '自用',
        dccc: '房屋',
        cnqk: '否',
        dcjg: '未知',
        shjg: '南山区税务局',
        wczt: '0',
        yjwcsj: '2018/4/27',
        sjwcsj: '2018/5/20'
      }, {
        id: '19',
        bh: '4',
        rwlx: '勘察任务3',
        rwmc: '任务4',
        fdclx: '房产',
        fdcyt: '自用',
        cnqk: '部分',
        dccc: '小区',
        dcjg: '未知',
        shjg: '南山区税务局',
        wczt: '0',
        yjwcsj: '2018/6/18',
        sjwcsj: '2018/6/30'
      },
      {
        id: '6',
        bh: '5',
        rwlx: '勘察任务6',
        rwmc: '任务5',
        fdclx: '房产',
        fdcyt: '商用',
        dccc: '房屋',
        cnqk: '否',
        dcjg: '完成',
        shjg: '南山区税务局',
        wczt: '1',
        yjwcsj: '2018/3/15',
        sjwcsj: '2018/4/30'
      }]
    }
  },
  methods: {
    getCellClass({ row, column, columnIndex }) {
      if (columnIndex === 8 && row.wczt === '0') {
        return 'cell-style'
      } else if (columnIndex === 8 && row.wczt === '1') {
        return 'cell-style2'
      }
      return ''
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .match {
    margin: 10px;
    padding: 5px;
    border: 1px solid gray;
  }
</style>
<style>
.cell-style{background-color: #FF9900;}
.cell-style2{background-color: #33CC66;}
</style>