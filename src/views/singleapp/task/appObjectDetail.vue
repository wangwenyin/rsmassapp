<template>
  <div class="app" >
       <AppObjectList :detail="true" :appObjectList="appObjectList"  @del="del" @view="view" @submit="submit"></AppObjectList>
  </div>
</template>
<script>
import AppObjectList from '@/views/singleapp/components/AppObjectList'
export default {
  components: { AppObjectList },
  data() {
    return {
      cxlx: 'project',
      cxnr: '',
      appObjectList: [
        {
          lddm: 111,
          hh: 2202,
          sjc: 22,
          hx: '两房一厅',
          jzmj: 68.5,
          fwyt1: '住宅',
          pgjg2: 11022,
          pgjg1: 11056,
          jzdy: true
        },
        {
          lddm: 111,
          hh: 2103,
          sjc: 22,
          hx: '三房一厅',
          jzmj: 68.5,
          fwyt1: '住宅',
          pgjg2: 11022,
          pgjg1: 11056,
          jzdy: false
        },
        {
          lddm: 112,
          hh: 2204,
          sjc: 22,
          hx: '三房一厅',
          jzmj: 68.5,
          fwyt1: '住宅',
          pgjg2: 11022,
          pgjg1: 11056,
          jzdy: false
        },
        {
          lddm: 111,
          xmmc: '君悦阁1',
          ldmc: '君悦阁1',
          jzmj: 80.01,
          zcs: 30,
          zhs: 100,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65094,
          jzdy: true
        },
        {
          xmmc: '君悦阁2',
          ldmc: '君悦阁2',
          lddm: 112,
          jzmj: 80.09,
          zcs: 30,
          zhs: 100,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65128,
          jzdy: false
        },
        {
          xmmc: '君悦阁3',
          ldmc: '君悦阁3',
          lddm: 113,
          jzmj: 80.09,
          zcs: 30,
          zhs: 100,
          hgyt: '住宅',
          pgjg1: 65365,
          pgjg2: 65128,
          jzdy: false
        }
      ]
    }
  },
  methods: {
    del(value) {
      const tempList = []
      let num = 0
      if (value.hasOwnProperty('hh')) {
        this.appObjectList.forEach(element => {
          if (value.lddm === element.lddm) {
            num++
          }
        })
        if (num > 2) {
          // 如果该户号所在楼栋的数据超过两条，即该楼栋下还有其他户，此时只删除该户即可
          for (let index = 0; index < this.appObjectList.length; index++) {
            if (this.appObjectList[index].hh !== value.hh) {
              tempList.push(this.appObjectList[index])
            }
          }
        } else {
          // 如果该户号所在楼栋的数据不超过两条，即该楼栋下没有其他户，此时把整个楼栋都删除
          for (let index = 0; index < this.appObjectList.length; index++) {
            if (this.appObjectList[index].lddm !== value.lddm) {
              tempList.push(this.appObjectList[index])
            }
          }
        }
      } else {
        for (let index = 0; index < this.appObjectList.length; index++) {
          if (this.appObjectList[index].lddm !== value.lddm) {
            tempList.push(this.appObjectList[index])
          }
        }
      }
      this.appObjectList = tempList
    },
    view(value) {
      if (value.hasOwnProperty('hh')) {
        const routerData = {
          name: 'house',
          query: { hdm: value.hh }
        }
        this.$router.push(routerData)
      } else {
        const routerData = {
          name: 'building',
          query: { lddm: value.lddm }
        }
        this.$router.push(routerData)
      }
    },
    submit() {
      console.log('submit')
      console.log(this.appObjectList)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
@import "../../../styles/app.scss";
.table {
  margin-left: 20px;
  width: 96.5%;
}
.seach-row {
  margin-bottom: 10px;
}
.btn {
  margin-top: 20px;
  margin-right: 30px;
}
.btn_l {
  margin-top: 20px;
  float: right;
  margin-right: 2%;
}
.inp_l {
  margin-top: 20px;
  float: right;
  width: 180px;
  margin-right: 20px;
}
.sel_l {
  margin-top: 20px;
  float: right;
  width: 100px;
  margin-right: 20px;
}
.search {
  margin-top: 20px;
}
.el-pagination {
  margin-top: 10px;
  text-align: center;
}
</style>