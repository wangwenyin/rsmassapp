 <template>
  <div style=" background: white;width:105%">
    <el-row>
      <div style="font-size: 15px;margin-left:2%;margin-top: 1%; margin-bottom: 1%;color: #409EFF;">可比实例</div>
    </el-row>
    <el-row style="border: 1px solid #409EFF;">
    </el-row>
    <el-row :gutter="1">
      <el-col :span="4" v-for="i in 5" :key="i">
        <el-card class="box-card" v-if="i-1<compareList.length">
          <div style="font-size: 15px;margin-left:-2%;font-weight: bold;margin-top: 5%; margin-bottom: 15%;"> {{compareList[i-1].prop_name}} </div>
          <div style="font-size: 5px;margin-left:0%; margin-bottom: 5%;"> 建筑面积：{{compareList[i-1].built_area}} </div>
          <div style="font-size: 5px;margin-left:0%; margin-bottom: 5%;">交易时间：{{compareList[i-1].sale_date|formatDate}} </div>
          <div style="font-size: 8px;margin-left:0%; color:red ;margin-bottom: 5%;">￥{{compareList[i-1].sale_price}}元/平方米</div>
          <el-button style=" float: right;" size="mini" icon="el-icon-delete" @click="del(compareList[i-1])"></el-button>
        </el-card>
        <el-card class="box-card" v-else>
          <div>
            <div style="font-size: 6px;margin-left:10%; margin-top:38%;margin-bottom:38%">{{i}}您还可以继续添加</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="4" class="col">
        <el-card class="box-card">
          <div class="text">
            <el-button type="primary" size="small" style="margin-left:20%;margin-top:14%;" @click="setstept(2)">价格评估</el-button>
            <el-button icon="el-icon-delete" size="small" style="margin-left:20%;margin-top:15%;margin-bottom:8%" @click="delall()">清空</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
 <script>
import { delcomparable } from '@/api/singleapp/example'
export default {
  props: {
    compareList: {
      type: Array,
      default: []
    }
  },
  data() {
    return {

    }
  },
  methods: {
    del(val) {
      delcomparable(this.$route.query.task_id, val.sale_id).then(response => {
        if (response.code === 200) {
          this.$message({ message: '删除成功', type: 'success' })
          this.GetcompareList()
        } else {
          this.$message({ message: response.msg, type: 'error' })
        }
      })
    },
    delall() {
      this.sale_idList.forEach(element => {
        delcomparable(this.$route.query.task_id, element).then(response => {
          if (response.code === 200) {
            this.$message({ message: '删除成功', type: 'success' })
            this.GetcompareList()
          } else {
            this.$message({ message: response.msg, type: 'error' })
          }
        })
      })
    },
    setstept(val) {
      this.$emit('setstept', val)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
</style>


 
 