<template>
     <DataSearch :selectable=true @select="onSelectProp" @del="del" @delAll="delAll" @view="view" @submit="submit" :appObjectList="appObjectList"></DataSearch>
</template>
<script>
import DataSearch from '@/views/datamanage/search/search'
import { buildingsInfo } from '@/api/building'
export default {
  components: {
    DataSearch
  },
  data() {
    return {
      appObjectList: []
    }
  },
  methods: {
    del(value) {
      this.appObjectList.splice(value, 1)
    },
    delAll() {
      this.appObjectList.splice(0, this.appObjectList.length)
    },
    view() {
      const routerData = {
        name: 'appObjectDetail',
        query: { taskId: this.$route.query.taskId }
      }
      this.$router.push(routerData)
    },
    submit() {
      const routerData = {
        name: 'taskDetail',
        query: { id: this.$route.query.taskId, status: '价格评估' }
      }
      this.$router.push(routerData)
    },
    onSelectProp(value) {
      if (this.appObjectList.indexOf(value) === -1) {
        this.appObjectList.push(value)
        if (value.hasOwnProperty('hh')) {
        // 如果楼栋列表中不包含该户所在的楼栋，则把该户所在的楼栋添加到楼栋列表中
          const lddmList = []
          this.appObjectList.forEach(element => {
            if (!element.hasOwnProperty('hh')) {
              lddmList.push(element.lddm)
            }
          })
          if (lddmList.indexOf(value.lddm) === -1) {
            buildingsInfo(value.lddm).then(response => {
              this.appObjectList.push(response.data)
            })
          }
        }
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../../../styles/app.scss";
</style>
