<template>
  <el-table
    :data="tableData"
    height="650"
    border
    style="width: 100%">
    <el-table-column
      prop="number"
      label="编号"
      width="100">
    </el-table-column>
    <el-table-column
      prop="name"
      label="名称"
      width="180">
    </el-table-column> 
    <el-table-column
      prop="group"
      label="组别"
      width="180">
    </el-table-column>
    <el-table-column
      prop="time"
      label="建筑年代"
      width="180">
    </el-table-column>
    <el-table-column
      prop="property"
      label="性质">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          number: '1',
          name: '绿海湾花园',
          group: 'NS014',
          time: '2007',
          property: '商品房'
        }, {
          number: '2',
          name: '深圳湾1号',
          group: 'NS014',
          time: '2010',
          property: '商品房'
        }, {
          number: '3',
          name: '东方玫瑰',
          group: 'NS014',
          time: '2005',
          property: '商品房'
        }, {
          number: '4',
          name: '绿海湾花园',
          group: 'NS014',
          time: '2007',
          property: '商品房'
        }, {
          number: '5',
          name: '绿海湾花园',
          group: 'NS014',
          time: '2007',
          property: '商品房'
        }, {
          number: '6',
          name: '绿海湾花园',
          group: 'NS014',
          time: '2007',
          property: '商品房'
        }, {
          number: '7',
          name: '绿海湾花园',
          group: 'NS014',
          time: '2007',
          property: '商品房'
        }]
      }
    }
  }
</script>
