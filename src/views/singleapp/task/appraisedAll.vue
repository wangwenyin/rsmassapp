<template>
  <div class="app">
    <div class="margin10">
      <el-row>
        <el-col :span="6" style="margin-top: 5px;">
          <span class="title">因素修正</span>
        </el-col>
        <el-col :span="5" style="margin-top: 5px;">
          <span >基础评估价格：</span>
          <span class="val">{{form.jcpgjg}}</span>
           </el-col>
            <el-col :span="5" style="margin-top: 5px;">
            <span >总修正极差：</span>
          <span class="val">11.5%</span>
            </el-col>
           <el-col :span="5" style="margin-top: 5px;">
            <span >总修正价格极差：</span>
          <span class="val">5750</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
          <el-table height="350"  border size="mini" highlight-current-row @current-change="handleLeftCurrentChange" :data="factors" :row-class-name="tableRowClassName" class="table"  show-overflow-tooltip>
            <el-table-column prop="ysmc" label="待选因素">
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="3">
          <div class="chuansuo">
            <el-button type="primary" :disabled="!leftRow" @click="onToRightClick" class="btn" size="small">到右边</el-button>
            <el-button type="primary" :disabled="!rightRow" @click="onToLeftClick" class="btn" size="small">到左边</el-button>
            <el-button type="primary" class="btn" size="small">修正预览</el-button>
            <el-button type="primary" class="btn" size="small" @click="submit">提交</el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <el-table height="350" size="mini"  border highlight-current-row @current-change="handleRightCurrentChange" show-summary :data="factors" :row-class-name="tableRowClassName1"  class="table" show-overflow-tooltip>
            <el-table-column prop="ysmc" label="采用因素">
            </el-table-column>
            <el-table-column prop="bzsx" label="标准属性">
            </el-table-column>
            <el-table-column prop="xzjc" label="修正极差">
            </el-table-column>
            <el-table-column prop="jgjc" label="价格极差">
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="8">
          <table class="table">
            <tr class="tr_title">
              <td class="td">
                <span class="normal">属性列表</span>
              </td>
              <td class="td">
                <span class="normal">修正幅度</span>
              </td>
              <td class="td">
                <span class="normal">修正极差</span>
              </td>
              <td class="td" >
                <span class="normal">备注</span>
              </td>
            </tr>
            <tr class="tr" v-for="i in attributeList" :key="i.sxlb">
              <td class="td">
                <span class="normal">{{i.sxlb}}</span>
              </td>
              <td class="td">
                <el-input-number  class="noborder" size="small" v-model="i.xzfd" :step="0.001" :precision="3" :min="-10" :max="10"></el-input-number>
              </td>
              <td class="td">
                  <span class="normal">{{i.jgfd}}</span>
              </td>
              <td class="td">
                  <el-input class="noborder" size="small" v-model="i.bz" ></el-input>
              </td>
            </tr>
            <tr class="tr">
              <td class="td">
                <span class="normal">合计:</span>
              </td>
              <td class="td">
                <span class="normal">{{rightRow.xzfd}}</span>
              </td>
              <td class="td">
                <span class="normal">{{rightRow.jgfd}}</span>
              </td>
              <td class="td">
                <span class="normal">{{rightRow.bz}}</span>
              </td>
            </tr>
          </table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="margin-top: 5px;">
          <span class="title">估价对象</span>
        </el-col>
      </el-row>
      <el-row>
        <AppObjectListAllType :appObjectList="appObjectList" :factors="factors" :datumType="form.datumType" :datumId="form.datumId"></AppObjectListAllType>
       </el-row>
    </div>
  </div>
</template>
<script>
import AppObjectList from '@/views/singleapp/components/AppObjectList'
import AppObjectListAllType from '@/views/singleapp/components/AppObjectListAllType'
import { tasksInfo } from '@/api/singleapp/tasks'
export default {
  components: { AppObjectList, AppObjectListAllType },
  data() {
    return {
      attributeList: [],
      leftRow: null,
      rightRow: { ysmc: '',
        ysdm: '',
        bzsx: '',
        xzjc: 0,
        jgjc: 0,
        used: true,
        xzList: [] },
      form: {
        datumType: '楼栋',
        datumId: '113',
        jcpgjg: 5000,
        xzfd: 0,
        jgfd: 0,
        bz: 0
      },
      appObjectList: [
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          hh: '2205',
          sjc: 22,
          jzmj: 80.01,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65094,
          cx: '东南',
          jg: '好',
          cg: '差',
          tf: '好',
          zy: '好',
          zxzsqk: '好',
          xdwz: '好',
          hxbj: '三房一厅'
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          hh: '2206',
          sjc: 22,
          jzmj: 80.09,
          hgyt: '住宅',
          hxbj: '三房一厅',
          cx: '东南',
          cg: '好',
          jg: '好',
          tf: '较好',
          zy: '好',
          zxzsqk: '较好',
          xdwz: '好',
          pgjg1: 65365,
          pgjg2: 65128
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          lddm: '111',
          hh: '2202',
          sjc: 22,
          hxbj: '两房一厅',
          cx: '南',
          jzmj: 68.5,
          fwyt1: '住宅',
          jg: '较差',
          cg: '较好',
          tf: '好',
          zy: '差',
          zxzsqk: '较差',
          xdwz: '好',
          pgjg2: 11022,
          pgjg1: 11056
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          lddm: '111',
          hh: '2103',
          sjc: 22,
          hxbj: '三房两厅',
          cx: '西南',
          jzmj: 68.5,
          fwyt1: '住宅',
          cg: '较好',
          jg: '差',
          tf: '较差',
          zy: '好',
          zxzsqk: '好',
          xdwz: '较好',
          pgjg2: 11022,
          pgjg1: 11056
        },
        {
          xmmc: '君悦阁',
          ldmc: '君悦阁',
          lddm: '112',
          hh: '2204',
          sjc: 22,
          hxbj: '四房一厅',
          cx: '北',
          jzmj: 68.5,
          fwyt1: '住宅',
          jg: '较差',
          cg: '较好',
          tf: '好',
          zy: '差',
          zxzsqk: '较差',
          xdwz: '好',
          pgjg2: 11022,
          pgjg1: 11056
        },
        {
          lddm: '111',
          xmmc: '君悦阁1',
          ldmc: '君悦阁1',
          jzmj: 80.01,
          zcs: 30,
          zhs: 100,
          jzlx: '混合结构',
          sfydt: '有',
          thb: '三梯六户',
          xdwz: '较好',
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65094
        },
        {
          xmmc: '君悦阁2',
          ldmc: '君悦阁2',
          lddm: '112',
          jzmj: 80.09,
          zcs: 30,
          zhs: 100,
          jzlx: '混合结构',
          sfydt: '有',
          thb: '两梯六户',
          xdwz: '好',
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65128
        },
        {
          xmmc: '君悦阁3',
          ldmc: '君悦阁3',
          lddm: '113',
          jzlx: '框架结构',
          sfydt: '无',
          thb: '两梯四户',
          xdwz: '好',
          jzmj: 80.09,
          zcs: 30,
          zhs: 100,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65128
        }
      ],
      factors: [{
        ysmc: '建筑类型',
        ysdm: 'jzlx',
        bzsx: '框架结构',
        xzjc: 0,
        jgjc: 0,
        used: true,
        xzList: []
      },
      {
        ysmc: '是否有电梯',
        ysdm: 'sfydt',
        bzsx: '有',
        xzjc: 0,
        jgjc: 0,
        used: true,
        xzList: []
      },
      {
        ysmc: '梯户比',
        ysdm: 'thb',
        bzsx: '两梯四户',
        xzjc: 0,
        jgjc: 0,
        used: true,
        xzList: []
      },
      {
        ysmc: '相对位置',
        ysdm: 'xdwz',
        bzsx: '较好',
        xzjc: 0,
        jgjc: 0,
        used: true,
        xzList: []
      }]
    }
  },
  mounted() {
    this.getModifyingFactors()
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (row.used) {
        return 'collapse-row'
      } else {
        return ''
      }
    },
    tableRowClassName1({ row, rowIndex }) {
      if (!row.used) {
        return 'collapse-row'
      } else {
        return ''
      }
    },
    getAppObjectList() {

    },
    GetTaskInfo() {
      var param = { id: this.$route.query.id }
      tasksInfo(param).then(response => {
        this.form = response.data
        this.form.method = '收益法'
        this.form.status = '价格评估'
        this.form.datumType = '户'
        this.form.datumId = '113'
      })
    },
    getModifyingFactors() {
      if (this.form.datumType === '楼栋') {
        this.factors = [
          {
            ysmc: '建筑类型',
            ysdm: 'jzlx',
            bzsx: '框架结构',
            xzjc: 0,
            jgjc: 0,
            used: true,
            xzList: []
          },
          {
            ysmc: '是否有电梯',
            ysdm: 'sfydt',
            bzsx: '有',
            xzjc: 0,
            jgjc: 0,
            used: true,
            xzList: []
          },
          {
            ysmc: '梯户比',
            ysdm: 'thb',
            bzsx: '两梯四户',
            xzjc: 0,
            jgjc: 0,
            used: true,
            xzList: []
          },
          {
            ysmc: '相对位置',
            ysdm: 'xdwz',
            bzsx: '较好',
            xzjc: 0,
            jgjc: 0,
            used: true,
            xzList: []
          }
        ]
      } else {
        this.factors = [
          {
            ysmc: '朝向',
            ysdm: 'cx',
            bzsx: '西南',
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          },
          {
            ysmc: '景观',
            ysdm: 'jg',
            bzsx: 22,
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          },
          {
            ysmc: '采光',
            ysdm: 'cg',
            bzsx: 22,
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          },
          {
            ysmc: '通风',
            ysdm: 'tf',
            bzsx: 22,
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          },
          {
            ysmc: '噪音',
            ysdm: 'zy',
            bzsx: 22,
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          },
          {
            ysmc: '户型布局',
            ysdm: 'hxbj',
            bzsx: 22,
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          },
          {
            ysmc: '装修装饰情况',
            ysdm: 'zxzsqk',
            bzsx: 22,
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          },
          {
            ysmc: '相对位置',
            ysdm: 'xdwz',
            bzsx: 22,
            xzjc: 0.045,
            jgjc: 2250,
            used: true,
            xzList: []
          }
        ]
      }
    },
    getAttributeList(val) {
      this.attributeList = []
      if (val.xzList.length > 0) {
        this.attributeList = val.xzList
      } else {
        const tempList = []
        const attr = val.ysdm
        this.appObjectList.forEach(element => {
          if (element.hasOwnProperty(attr) && tempList.indexOf(element[attr]) === -1) {
            tempList.push(element[attr])
            val.xzList.push({
              sxlb: element[attr],
              xzfd: 0.01,
              jgfd: 0,
              bz: ''
            })
          }
        })
        this.attributeList = val.xzList
      }
    },
    handleLeftCurrentChange(val) {
      this.leftRow = val
    },
    handleRightCurrentChange(val) {
      this.rightRow = val
      this.getAttributeList(val)
    },
    onToRightClick() {
      this.leftRow.used = true
      this.leftRow = null
    },
    onToLeftClick() {
      this.rightRow.used = false
      this.rightRow = null
      this.attributeList = []
    },
    submit() {
      const routerData = {
        name: 'taskDetail',
        query: { id: this.$route.query.task_id, status: '报告撰写' }
      }
      this.$router.push(routerData)
    }
  },
  watch: {
    attributeList: {
      handler(val) {
        let total = 0
        for (let i = 0; i < val.length; i++) {
          val[i].jgfd = (this.form.jcpgjg * val[i].xzfd).toFixed(0)
          total += val[i].xzfd
        }
        this.rightRow.xzfd = total.toFixed(3)
        this.rightRow.jgfd = (this.form.jcpgjg * total).toFixed(0)
        this.factors.forEach(element => {
          if (element.ysdm === this.rightRow.ysdm) {
            element.xzjc = this.rightRow.xzfd
            element.jgjc = this.rightRow.jgfd
          }
        })
      },
      deep: true
    }}
}
</script>
<style rel="stylesheet/scss" lang="scss" >
@import "../../../styles/app.scss";
.chuansuo {
  width: inherit;
  margin-left: 30%;
  margin-top: 30%;
}
.btn {
  margin-top: 50%;
  margin-left: 0;
}
.el-input__inner {
  border: none;
}
.normal {
 width: 100px;
}
.noborder.el-input__inner {
  border: none;
}
.normal {
  width: -webkit-fill-available !important;
}
.el-input-number {
  width: 100%;
}
.td {
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0.2px solid #c0c4cc;
  width: 6%;
  align-content: center;
}
.el-table .collapse-row {
  background: #f0f9eb;
  visibility: collapse;
}
</style>