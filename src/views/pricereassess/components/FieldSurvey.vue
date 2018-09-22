<template>
  <div class="margin10" v-if="form.projectFactor">
    <!-- <el-row > 
        <el-col :span="24" style="margin-top: 5px;">
            <span class="title">查勘信息</span> 
        </el-col>
      </el-row> -->
    <table class="table">
      <tr class="tr_title">
        <td colspan="4" class="td">
          <span class="title-small">区位状况 </span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">地址</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].lpdz}}</span>
        </td>
        <td class="td">
          <span class="normal">地理坐标</span>
        </td>
        <td class="tdtext">
          <span class="nor">x({{form.projectFactor[0].x}}) , y({{form.projectFactor[0].y }})</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">公交站点</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].gjzd }}</span>
        </td>
        <td class="td">
          <span class="normal">地铁站点</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].dtzd}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">公交路线</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].gjlx}}</span>
        </td>
        <td class="td">
          <span class="normal">交通管制</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].jtgz}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">环境质量</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].hjzl|scoreTotext}}</span>
        </td>
        <td class="td">
          <span class="normal">环境说明</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].hjsm}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">周边景观</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].zbjg|scoreTotext}}</span>
        </td>
        <td class="td">
          <span class="normal">景观说明</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].jgsm}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">小学学位</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].xxxw}}</span>
        </td>
        <td class="td">
          <span class="normal">初中学位</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].czxw}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">基础设施</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].jcss}}</span>
        </td>
        <td class="td">
          <span class="normal">生活设施</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].shss}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">其他情况说明</span>
        </td>
        <td class="tdtext" colspan="3">
          <span class="nor">{{form.projectFactor[0].qtqksm}}</span>
        </td>
      </tr>
      <tr class="tr_title">
        <td colspan="4" class="td">
          <span class="title-small">小区信息 </span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">物业管理公司</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].wyglgs}}</span>
        </td>
        <td class="td">
          <span class="normal">物业管理水平</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].wyglsp|scoreTotext}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">物业管理费</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].wyglf}}元/平方米*月</span>
        </td>
        <td class="td">
          <span class="normal">内部环境</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.projectFactor[0].nbhj|scoreTotext}}</span>
        </td>
      </tr>
      <tr class="tr_title">
        <td colspan="4" class="td">
          <span class="title-small">建筑物信息 </span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">楼栋名称</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].ldmc }}</span>
        </td>
        <td class="td">
          <span class="normal">总层数</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].zcs}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">竣工日期</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].jgrq}}</span>
        </td>
        <td class="td">
          <span class="normal">成新率</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].cxl}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">建筑外观</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].jzwg}}</span>
        </td>
        <td class="td">
          <span class="normal">建筑结构</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].jzjg}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">梯户比</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].twhsb}}</span>
        </td>
        <td class="td">
          <span class="normal">空间布局</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.buildingFactor[0].kjbj}}</span>
        </td>
      </tr>
      <tr class="tr_title">
        <td colspan="4" class="td">
          <span class="title-small">房屋信息 </span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">房屋名称</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].fh}}</span>
        </td>
        <td class="td">
          <span class="normal">现状用途</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].xzyt}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">所在层</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].szc}}</span>
        </td>
        <td class="td">
          <span class="normal">建筑面积</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].jzmj}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">房屋性质</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].fwxz}}</span>
        </td>
        <td class="td">
          <span class="normal">使用状况</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].syzk}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">朝向</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].cx}}</span>
        </td>
        <td class="td">
          <span class="normal">朝向说明</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].cxsm}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">可视景观</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].ksjg}}</span>
        </td>
        <td class="td"></td>
        <td class="tdtext"></td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">采光通风</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].cgtf|scoreTotext}}</span>
        </td>
        <td class="td">
          <span class="normal">采光通风说明</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].cgtfsm}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">噪音废气</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].zyfq|scoreTotext}}</span>
        </td>
        <td class="td">
          <span class="normal">噪音废气说明</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].zyfqsm}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">户型</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].hx}}</span>
        </td>
        <td class="td">
          <span class="normal">户型结构</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].hxjg}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">户型布局</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].hxbj}}</span>
        </td>
        <td class="td">
          <span class="normal">附加空间</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].fjkj}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">装修装饰</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].zszx}}</span>
        </td>
        <td class="td">
          <span class="normal">装修说明</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].zxsm}}</span>
        </td>
      </tr>
      <tr class="tr">
        <td class="td">
          <span class="normal">设施设备</span>
        </td>
        <td class="tdtext">
          <span class="nor">{{form.unitFactor[0].sssb}}</span>
        </td>
        <td class="td"></td>
        <td class="tdtext"> </td>
      </tr>
    </table>
  </div>
</template>
<script>
  import { getSurveyData } from '@/api/pricereassess'

  export default {
    props: {
      id: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        form: {}
      }
    },
    mounted() {
      this.GetDefaultSurveyInfo()
    },
    methods: {
      getSurveyData() {
        getSurveyData(this.id).then(response => {
          this.form = response.data
        })
      },
      GetDefaultSurveyInfo() {
        this.form = {
          projectFactor: [
            { lpdz: '福田区华强北街道燕南路君悦阁',
              x: 114.099083,
              y: 22.547974,
              gjzd: '燕南路口',
              dtzd: '景田站',
              gjlx: '201',
              jtgz: '无',
              hjzl: 80,
              hjsm: '无',
              zbjg: 90,
              jgsm: 80,
              xxxw: '红岭小学',
              czxw: '红岭中学',
              jcss: '基础设施',
              shss: '生活设施',
              qtqksm: '无',
              wyglgs: '物业管理公司',
              wyglsp: 90,
              wyglf: 70,
              nbhj: 60

            }
          ],
          buildingFactor: [
            {
              ldmc: '安居楼',
              zcs: 20,
              jgrq: '2010-05-06',
              cxl: '五成新',
              jzwg: '建筑外观',
              jzjg: '框架结构',
              twhsb: '两梯四户',
              kjbj: '空间布局'
            }
          ],
          unitFactor: [
            {
              fh: '206',
              xzyt: '住宅',
              szc: 20,
              jzmj: 86.7,
              fwxz: '商品房',
              syzk: '自住',
              cx: '西南',
              cxsm: '朝向说明',
              ksjg: '可视景观',
              cgtf: 80,
              cgtfsm: '采光通风说明',
              zyfq: 70,
              zyfqsm: '噪音废气说明',
              hx: '两房一厅',
              hxjg: '户型结构',
              hxbj: '户型布局',
              fjkj: '附件空间',
              zszx: '装修装饰',
              zxsm: '装修说明',
              sssb: '设施设备'
            }
          ]
        }
      }
    },
    filters: {
      scoreTotext(score) {
        if (score <= 20) {
          return '差'
        } else if (score <= 40) {
          return '较差'
        } else if (score <= 60) {
          return '一般'
        } else if (score <= 80) {
          return '较好'
        } else {
          return '好'
        }
      }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.nor {
  display: inline-block;
  margin-left: 16px;
  color: #7b7676;
  text-align: center;
  font-size: 15px;
}
.tr {
  margin-top: 0px;
  margin-bottom: 0px;
}
.td {
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0.2px solid #c0c4cc;
  width: 6%;
  align-content: center;
  height: 33px;
}
.tdtext {
  margin-top: 0px;
  margin-bottom: 0px;
  border: 0.2px solid #c0c4cc;
  width: 40%;
}
</style>