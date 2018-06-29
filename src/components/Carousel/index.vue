<template>
  <el-carousel indicator-position="outside">
    <el-carousel-item v-for="item in img" :key="item.id">
      <!-- <h3>{{ item.zydm }}</h3>
        <h3>{{ item }}</h3>
           <h3>路径{{ item.url }}</h3> -->
       <img :src= "item.url" class="image1">
    </el-carousel-item>
  </el-carousel>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .image1{
     width:100%
  }
</style>
<script>
export default {
  props: {
    img: {
      type: Array,
      default: null
    },
    data() {
      return {
      }
    }
  }
}
</script>