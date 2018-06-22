<template>
  <div class="createTask">
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="2">
        <span>任务名称：</span>
      </el-col>
      <el-col :span="4">
        <el-input v-model="input" size="small"></el-input>
      </el-col>
      <el-col :span="2">
        <el-button plain size="small">保存</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="margin-left: 10px">
      <el-col :span="6">
        <span>任务分配：</span>
      </el-col>
      <el-col :span="5.5">
        <span>用途：</span>
        <el-select v-model="value1" size="small" placeholder="请选择" @change="handleUsageChange">
          <el-option
            v-for="value in usageList"
             :key="value"
            :value="value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="5.5">
        <span>区域：</span>
        <el-select
          v-model="value2"
          size="small"
          placeholder="请选择"
          @change="handleRegionChange"
        >
          <el-option
            v-for="value in regionList"
             :key="value"
            :value="value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="2">
        <span>成员名称：</span>
      </el-col>
      <el-col :span="2">
        <el-select v-model="value3" size="small" placeholder="请选择">
          <el-option
            v-for="value in operatorList"
            :value="value"
            :key="value"
            >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="1.5">
        <el-button plain size="small">分配</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button plain size="small">撤销</el-button>
      </el-col>
    </el-row>
    <el-table
      ref="multipleTable"
      border
      :data="filteredTableData"
      style="width: 95%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="50">
      </el-table-column>
      <el-table-column
        prop="number"
        label="编号"
        width="50">
      </el-table-column>
      <el-table-column
        prop="project"
        label="项目名称">
      </el-table-column>
      <el-table-column
        prop="building"
        label="楼栋名称">
      </el-table-column>
      <el-table-column
        prop="house"
        label="户名称">
      </el-table-column>
      <el-table-column
        prop="region"
        label="行政区">
      </el-table-column>
      <el-table-column
        prop="usage"
        label="用途">
      </el-table-column>
      <el-table-column
        prop="caseNum"
        label="案例数量">
      </el-table-column>
      <el-table-column
        prop="operator"
        label="操作人员">
      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  export default{
    components: {},
    data() {
      return {
        input: '',
        value1: '',
        value2: '',
        value3: '',
        usageList: ['全部', '住宅', '商业', '办公', '工业'],
        regionList: ['全部', '罗湖区', '福田区', '南山区', '盐田区'],
        operatorList: ['张三', '李四', '王五'],
        tableData: [],
        filteredTableData: [],
        filteredTableData2: [],
        flag: false,
        multipleSelection: [],
        currentPage: 1,
        total: 400
      }
    },
    created() {
      // 是否需要保存在vuex里
      this.tableData = this.filteredTableData = [{
        number: 1,
        project: '蔚蓝海岸1期',
        building: 'A座',
        house: '101',
        region: '福田区',
        usage: '办公',
        caseNum: 2
      }, {
        number: 2,
        project: '蔚蓝海岸2期',
        building: 'A座',
        house: '107',
        region: '福田区',
        usage: '办公',
        caseNum: 2
      }, {
        number: 3,
        project: '南粤明珠海洋之心',
        building: 'C座',
        house: '608',
        region: '南山区',
        usage: '商业',
        caseNum: 4
      }, {
        number: 1,
        project: '雅仕荔景苑',
        building: 'B座',
        house: '512',
        region: '罗湖区',
        usage: '住宅',
        caseNum: 8
      }, {
        number: 1,
        project: '君汇新天',
        building: 'E座',
        house: '101',
        region: '福田区',
        usage: '工业',
        caseNum: 8
      }, {
        number: 1,
        project: '现代城梦想家园',
        building: 'A座',
        house: '',
        region: '盐田区',
        usage: '工业',
        caseNum: 3
      }, {
        number: 1,
        project: '蔚蓝海岸3期',
        building: '',
        house: '',
        region: '福田区',
        usage: '住宅',
        caseNum: 5
      },
      {
        number: 1,
        project: '现代城梦想家园',
        building: 'A座',
        house: '',
        region: '盐田区',
        usage: '工业',
        caseNum: 3
      },
      {
        number: 1,
        project: '现代城梦想家园',
        building: 'A座',
        house: '',
        region: '盐田区',
        usage: '工业',
        caseNum: 3
      },
      {
        number: 1,
        project: '现代城梦想家园',
        building: 'A座',
        house: '',
        region: '盐田区',
        usage: '工业',
        caseNum: 3
      }]
    },
    methods: {
      handleUsageChange(value) {
        if (value === '全部') {
          return
        }
        if (!this.value2) {
          this.filteredTableData = this.tableData.filter(item => {
            return item.usage === value
          })
          this.filteredTableData2 = this.filteredTableData
        } else {
          this.filteredTableData = this.filteredTableData.filter(item => {
            return item.usage === value
          })
        }
      },
      handleRegionChange(value) {
        if (value === '全部') {
          return
        }
        if (!this.value1) {
          this.filteredTableData = this.tableData.filter(item => {
            return item.region === value
          })
        } else {
          if (this.flag) {
            this.filteredTableData = this.filteredTableData2.filter(item => {
              return item.region === value
            })
            return
          }
          this.filteredTableData = this.filteredTableData.filter(item => {
            return item.region === value
          })
          this.flag = true
        }
      },
      handleSelectionChange() {},
      handleSizeChange() {},
      handleCurrentChange() {}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .createTask {
    padding: 10px;
    .el-col-2, .el-col-6 {
      height: 32px;
      line-height: 32px;
    }
    .el-table {
      margin-top: 5px;
    }
    .el-pagination {
      margin-top: 40px;
      text-align: center;
    }
  }
</style>
