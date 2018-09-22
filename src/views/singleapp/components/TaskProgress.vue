<template>
  <div>
    <div v-if="this.appObjectList.length < 2">
      <el-steps :active="step" align-center>
        <el-step title="创建任务" :description="editors + ' '+ time" @click.native="onCreatTaskClick(step)"></el-step>
        <el-step title="对象选择" :description="editors + ' '+ time1" @click.native="onObjSelectClick(step)"></el-step>
        <el-step title="对象描述" :description="editors1 + ' '+ time1" @click.native="onObjDescribeClick(step)"></el-step>
        <el-step title="价格评估" :description="editors1 + ' '+ time2" @click.native="onAppraisedPriceClick(step)"></el-step>
        <el-step title="报告撰写" :description="editors + ' '+ time2" @click.native="onReportClick(step)"></el-step>
        <el-step title="任务完成"></el-step>
      </el-steps>
    </div>
    <div v-else>
      <el-steps :active="step" align-center>
        <el-step title="创建任务" :description="editors + ' '+ time" @click.native="onCreatTaskClick(step)"></el-step>
        <el-step title="对象选择" :description="editors + ' '+ time1" @click.native="onObjSelectClick(step)"></el-step>
        <el-step title="对象描述" :description="editors1 + ' '+ time1" @click.native="onObjDescribeClick(step)"></el-step>
        <el-step title="设置基准单元" :description="editors1 + ' '+ time2" @click.native="onSetDatumClick(step)"></el-step>
        <el-step title="评估基准单元" :description="editors + ''+ time2" @click.native="onAppraisedPriceClick(step)"></el-step>
        <el-step title="评估全部对象" :description="editors + ''+ time2" @click.native="onAppraisedAllClick(step)"></el-step>
        <el-step title="报告撰写" :description="editors " @click.native="onReportClick(step)"></el-step>
        <el-step title="任务完成"></el-step>
      </el-steps>
    </div>
    <el-dialog title="选择估价方法" :visible.sync="dialogSelectFun">
      <el-select v-model="gjff" class="search" size="small" placeholder="估价方法">
        <el-option label="市场法" value="市场法"></el-option>
        <el-option label="收益法" value="收益法"></el-option>
        <el-option label="成本法" value="成本法"></el-option>
        <el-option label="假设开发法" value="假设开发法"></el-option>
      </el-select>
      <div slot="footer" style="margin-top:-15px">
        <el-button size="small" @click="setFun()">确定</el-button>
        <el-button size="small" @click="dialogSelectFun = false">取消</el-button>
      </div>
    </el-dialog>
     <el-dialog title="请选择要进行的操作" :visible.sync="dialog">
       <el-button size="small" @click="selectNewFun()" >选择新方法</el-button>
         <el-button size="small">权重设置</el-button>
           <el-button size="small">完成估价</el-button>
      <div slot="footer" style="margin-top:-15px">
        <el-button size="small" @click="dialog = false">关闭</el-button>
      </div>
    </el-dialog>
       <el-dialog title="设置基准单元" :visible.sync="dialogSetDatumUnit">
                <SetDatumUnit @SetDatum="SetDatum" :appObjectList="appObjectList" :datumType="task.datumType" :datumId="task.datumId"></SetDatumUnit>
                <div slot="footer" style="margin-top:-15px">
                    <el-button size="small" @click="dialogSetDatumUnit = false">关闭</el-button>
                </div>
            </el-dialog>
  </div>
</template>
<script>
import { formatDate } from '@/utils/date'
import { DateAdd } from '@/utils/date'
import SetDatumUnit from '@/views/singleapp/components/SetDatumUnit'
export default {
  components: { SetDatumUnit },
  props: {
    appObjectList: {
      type: Array,
      default: []
    },
    task: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      step: 0,
      editors: '倪嘉慰',
      editors1: '侯阳华',
      time: formatDate(new Date(), 'yyyy-MM-dd'),
      time1: formatDate(DateAdd('d', 10, new Date()), 'yyyy-MM-dd'),
      time2: formatDate(DateAdd('d', 20, new Date()), 'yyyy-MM-dd'),
      dialogSelectFun: false,
      dialog: false,
      gjff: '',
      dialogSetDatumUnit: false
    }
  },
  mounted() {
    this.setStept()
  },
  methods: {
    setStept() {
      if (this.appObjectList.length < 2) {
        switch (this.task.status) {
          case '创建任务':
            this.step = 0
            break
          case '对象选择':
            this.step = 1
            break
          case '对象描述':
            this.step = 2
            break
          case '价格评估':
          case '市场法':
          case '收益法':
          case '成本法':
          case '假设开发法':
            this.step = 3
            break
          case '报告撰写':
            this.step = 4
            break
          case '任务完成':
            this.step = 6
            break
          default:
            this.step = 0
        }
      } else {
        switch (this.task.status) {
          case '创建任务':
            this.step = 0
            break
          case '对象选择':
            this.step = 1
            break
          case '对象描述':
            this.step = 2
            break
          case '设置基准单元':
            this.step = 3
            break
          case '评估基准单元':
          case '市场法':
          case '收益法':
          case '成本法':
          case '假设开发法':
            this.step = 4
            break
          case '评估全部对象':
            this.step = 5
            break
          case '报告撰写':
            this.step = 6
            break
          case '任务完成':
            this.step = 7
            break
          default:
            this.step = 3
        }
      }
    },
    onCreatTaskClick(val) {
      // 创建任务
      if (val === 0) {
        const routerData = {
          name: 'creatTask',
          query: { task_id: this.task.id }
        }
        this.$router.push(routerData)
      }
    },
    onObjSelectClick(val) {
      // 对象选择
      if (val === 1) {
        const routerData = {
          name: 'creatTask',
          query: { task_id: this.task.id }
        }
        this.$router.push(routerData)
      }
    },
    onObjDescribeClick(val) {
      // 对象描述
      if (val === 2) {
        const routerData = {
          name: 'objectDescription',
          query: { task_id: this.task.id }
        }
        this.$router.push(routerData)
      }
    },
    onAppraisedPriceClick(val) {
      if (val === 3 || val === 4) {
        if (this.method === '') {
          this.dialogSelectFun = true
        } else if (this.task.status === '市场法') {
          // 跳转市场法页面
          const routerData = {
            name: 'addExample',
            query: { task_id: this.task.id }
          }
          this.$router.push(routerData)
        } else if (this.status === '收益法') {
          // 跳转市场法页面
          const routerData = {
            name: 'incomeApproach',
            query: { task_id: this.task.id }
          }
          this.$router.push(routerData)
        } else if (this.status === '成本法') {
          // 跳转成本法页面
        } else if (this.status === '假设开发法') {
        // 跳转假设开发法页面
        } else {
          // 如果方法里有值，而且状态不在估计方法里面，则可选择新方法
          this.dialog = true
        }
      }
      // 价格评估
      // if (val === 3) {
      //   const routerData = {
      //     name: 'addExample',
      //     query: { task_id: this.task_id }
      //   }
      //   this.$router.push(routerData)
      // }
    },
    onReportClick(val) {
      // 报告撰写
      if (val === 4) {
        const routerData = {
          name: 'report',
          query: { task_id: this.task.id }
        }
        this.$router.push(routerData)
      }
    },
    onSetDatumClick(val) {
    //  this.step += 1
      this.dialogSetDatumUnit = true
      // 设置基准单元
    },
    onAppraisedDatumClick(val) {
      // 评估基准单元
      this.step -= 1
    },
    onAppraisedAllClick(val) {
      const routerData = {
        name: 'appraisedAll',
        query: { task_id: this.task.id }
      }
      this.$router.push(routerData)
      // 评估全部对象
    },
    selectNewFun() {
      this.dialog = false
      this.dialogSelectFun = true
    },
    SetDatum(val) {
      // this.$emit('SetDatum', val)
      if (val.hasOwnProperty('hh')) {
        this.task.datumId = val.hh
      } else {
        this.task.datumId = val.lddm
      }
    },
    setFun() {
      switch (this.gjff) {
        case '市场法': { const routerData = {
          name: 'addExample',
          query: { task_id: this.task.id }
        }
        this.$router.push(routerData); break }
        case '收益法': { const routerData = {
          name: 'incomeApproach',
          query: { task_id: this.task.id }
        }
        this.$router.push(routerData); break }
        case '成本法': break
        case '假设开发法': break
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" >
.el-table .success-row {
  background: #75c3e8;
}
</style>
