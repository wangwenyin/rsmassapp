<template>
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
        prop="rwlx"
        label="任务类型">
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
        label="调查层次">
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
        prop="yjwcsj"
        label="预计完成时间">
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
          <el-button type="text" size="small">详情</el-button>
          <el-button type="text" size="small">统计</el-button>
          <el-button type="text" size="small">提交</el-button>
          <el-popover 
            placement="right"
            trigger="click">
            <div class="map" style="width:720px;">
              <coordinate :center="center"></coordinate>
            </div>
            <el-button type="text" size="small" slot="reference">位置</el-button>
          </el-popover>
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
</template>

<script>
import Coordinate from '@/components/SurveyMatch/coordinate'
export default{
  components: { Coordinate },
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
  .tablePagination {
    margin-top: 10px;
    .el-table {
      border: 1px solid gray;
    }
    .el-pagination {
      text-align: center;
      margin: 15px 0 10px 0;
    }
  }
</style>
<style>
.cell-style{background-color: #FF9900;}
.cell-style2{background-color: #33CC66;}
</style>
