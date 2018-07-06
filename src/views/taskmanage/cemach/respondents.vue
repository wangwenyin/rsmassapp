<template>
<div>
<el-row :gutter="10" style="margin-left:20px;margin-right:20px;margin-top:10px;">
    <el-col :span="3"><AreaSelect :value="xzq" @update="change" ></AreaSelect></el-col>
    <el-col :span="3">
      <el-select  filterable :value="jd" placeholder="街道" clearable>
        <el-option
          v-for="item in state"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3">
      <el-input placeholder="小区名称"></el-input>
    </el-col>
    <el-col :span="3">
        <el-button type="primary">查询</el-button>
    </el-col>
    <el-col :span="3">
      <el-select filterable :value="fzr" placeholder="负责人" clearable>
        <el-option
          v-for="item in state"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="5">
      <el-input v-model="qrcyr" placeholder="参与人"></el-input>
    </el-col>
  </el-row>
  <el-row :gutter="10"  style="margin-bottom:10px;margin-top:10px;">
    <el-col :span="4">
    <span style="color:#666;" >待选小区</span>
    </el-col>
    <el-col :span="6">
      <el-select v-model="cyrs" filterable  placeholder="参与人" clearable size="medium">
        <el-option
          v-for="item in cyrList"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="2" >
      <el-button type="primary" v-on:click="addTask">添加</el-button>
    </el-col>
    <el-col :span="10">
      <span style="color:#666">已选小区</span>
    </el-col>
    <el-col :span="2">
        <el-button type="primary" @click="delTask">删除</el-button>
    </el-col>
  </el-row>
  <el-row :gutter="10">
   <el-col :span="12">
    <el-table
      :data="tableData"
      size="small"
      border  @selection-change="changeFun"
      style="width: 100%;">
      <el-table-column
        type="selection"
        width="55"
        @selection-change="changeFun">
      </el-table-column>
      <el-table-column
        sortable
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
   </el-col>
   <el-col :span="1">
   </el-col>
   <el-col :span="12">
    <el-table :cell-class-name="getCellClass"
      :data="table2"
      size="small"
      border
      style="width: 100%;">
      <el-table-column
        type="selection"
        width="55"
         @selection-change="changeFun2">
      </el-table-column>
      <el-table-column
        sortable
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
    </el-col>
  </el-row>
</div>
</template>

<script>
import Coordinate from '@/components/SurveyMatch/coordinate'
import AreaSelect from '@/components/Select/AreaSelect'
export default {
  components: {
    Coordinate,
    AreaSelect
  },
  data() {
    return {
      cyrList: [{ value: '张三', label: '张三' }, { value: '李四', label: '李四' }],
      state: [{ value: '张三', label: '张三' }, { value: '李四', label: '李四' }],
      cyrs: '',
      qrcyr: '',
      xzq: '',
      jd: '',
      fzr: '',
      table2: [],
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
      }],
      rwsj: '',
      multipleSelection: [],
      multipleSelection2: [],
      xzsj: ''
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
    },
    change(value) {
      this.xzq = value
    },
    changeFun(val) {
      this.multipleSelection = val
    },
    changeFun2(val) {
      this.multipleSelection2 = val
    },
    addTask() {
      if (this.qrcyr === '') {
        this.qrcyr = this.cyrs
      } else if (this.qrcyr.indexOf(this.cyrs) === -1) {
        this.qrcyr = this.qrcyr
      } else {
        this.qrcyr = this.qrcyr + ' , ' + this.cyrs
      }
      console.log(this.multipleSelection)
      this.multipleSelection.forEach(element => {
        this.rwsj += element.id + ','
      })
      this.length = this.tableData.length
      for (let index = this.tableData.length - 1; index > -1; index--) {
        if (this.rwsj.indexOf(this.tableData[index].id) !== -1) {
          this.table2.push(this.tableData[index])
          this.tableData.splice(index, 1)
        }
      }
    },
    delTask() {
      this.multipleSelection2.forEach(element => {
        this.rwsj += element.id + ','
      })
      for (let index = this.table2.length - 1; index > -1; index--) {
        if (this.rwsj.indexOf(this.table2[index].id) !== -1) {
          this.tableData.push(this.table2[index])
          this.table2.splice(index, 1)
        }
      }
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