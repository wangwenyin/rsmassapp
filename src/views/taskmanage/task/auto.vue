<template>
<div>
<el-row :gutter="10" style="margin-left:20px;margin-right:20px;margin-top:10px;margin-bottom:10px;">
   <el-col :span="2.5">
      <router-link :to="{ name:'Addtask' ,query: {}}">
        <el-button type="primary" v-on:click="creatTask">新增机构</el-button>
      </router-link>
    </el-col>
    <el-col :span="3">
      <el-select v-model="rwlx" filterable placeholder="调查机构" clearable size="medium">
        <el-option
          v-for="item in taskTypes"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="wczt" filterable placeholder="完成状态" clearable size="medium">
        <el-option
          v-for="item in state"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-select v-model="yt" filterable  placeholder="房地产用途" clearable size="medium">
        <el-option
          v-for="item in application"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input v-model="rwmc" placeholder="任务名称"></el-input>
    </el-col>
    <el-col :span="3">
      <el-input v-model="rwmc" placeholder="小区名称"></el-input>
    </el-col>
    <el-col :span="1.5">
      <el-button plain size="medium">清空</el-button>
    </el-col>
    <el-col :span="1.5">
      <el-button type="primary" size="medium">查询</el-button>
    </el-col>
  </el-row>
  <div class="tablePagination">
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
        label="任务名称">
      </el-table-column>
      <el-table-column
        prop="fdclx"
        label="房地产类型">
      </el-table-column>
      <el-table-column
        prop="fdcyt"
        label="房地产用途">
      </el-table-column>
      <el-table-column
        prop="dccc"
        label="查勘粒度">
      </el-table-column>
      <el-table-column
        prop="dccc"
        label="小区/楼栋/户">
      </el-table-column>
      <el-table-column
        prop="dcjg"
        label="调查机构">
      </el-table-column>
      <el-table-column
        prop="shjg"
        label="审核机构">
      </el-table-column>
      <el-table-column
        prop="wczt"
        label="完成状态">
        <template slot-scope="scope">
          <span v-if="scope.row.wczt == 0">退回</span>
          <span v-if="scope.row.wczt == 1">完成</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="cnqk"
        label="采纳情况">
      </el-table-column>
      <el-table-column
        prop="yjwcsj"
        label="采纳时间">
      </el-table-column>
      <el-table-column
        prop="yjwcsj"
        label="要求完成时间">
      </el-table-column>
      <el-table-column
        prop="sjwcsj"
        label="实际完成时间">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="200">
        <template slot-scope="scope">
          <router-link :to="{ name:'statistics' ,query: {}}">
            <el-button type="text" v-if="scope.row.wczt == 0" size="small">详情</el-button>
          </router-link>
          <el-button type="text" v-if="scope.row.wczt == 0" size="small">督办</el-button>
          <el-button type="text" v-if="scope.row.wczt == 1" size="small">分配</el-button>
          <el-button type="text" v-if="scope.row.wczt == 1" size="small">采纳</el-button>
          <router-link :to="{ name:'Item' ,query: {}}">
            <el-button type="text" size="small">查看</el-button>
          </router-link>
        </template>
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