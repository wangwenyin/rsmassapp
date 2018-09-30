<template>
  <el-row class="panel-group" :gutter="40">
    <el-col :xs="8" :sm="8" :lg="4" class="card-panel-col">
      <div class='card-panel'>
        <div class="card-panel-icon-wrapper" style="background: #40c9c6;">
           <img  src="/src/icons/svg/project.svg" >
          <!-- <svg-icon icon-class="peoples" class-name="card-panel-icon" />-->
        </div> 
        <div class="card-panel-description">
          <div class="card-panel-text">项目总数</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="xm_endVal" :duration="2600"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper" style="background: #5AB1EF;">
          <img  src="/src/icons/svg/building.svg" >
        <!--   <svg-icon icon-class="message" class-name="card-panel-icon" /> -->
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">楼栋总数</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="ld_endVal" :duration="3000"></count-to>
        </div>
      </div>
    </el-col>
    <el-col :xs="8" :sm="8" :lg="4" class="card-panel-col">
      <div class="card-panel" >
        <div class="card-panel-icon-wrapper" style="background: #B6A2DE;">
          <img  src="/src/icons/svg/house.svg" >
          <!-- <svg-icon icon-class="money" class-name="card-panel-icon" /> -->
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">户总数</div>
          <count-to class="card-panel-num" :startVal="0" :endVal="h_endVal" :duration="3200"></count-to>
        </div>
      </div>
    </el-col>
  </el-row>

  
</template>

<script>
import CountTo from 'vue-count-to'
import { realEstate } from '@/api/dashboard'
export default {
  components: {
    CountTo
  },
  data() {
    return {
      xm_endVal: 0,
      ld_endVal: 0,
      h_endVal: 0
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      realEstate().then(response => {
        this.xm_endVal = response.data[0].totalProject
        this.ld_endVal = response.data[0].totalBuilding
        this.h_endVal = response.data[0].totalUnit
      })
    },
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
    box-shadow: 4px 4px 3px #eef5f9;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
      .el-col-lg-3 {
        width:27.5%
      }
    }
  }
}
</style>

<style>
  @media only screen and (min-width: 1200px) {
    .panel-group .el-col-lg-4 {
      width: 33.33333%;
    }
  }
</style>

