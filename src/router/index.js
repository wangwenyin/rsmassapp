import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/data',
    component: Layout,
    redirect: '/data/search',
    name: 'Data',
    meta: { title: '数据管理', icon: 'datamanage' },
    children: [
      {
        path: 'search',
        name: 'Search',
        component: () => import('@/views/datamanage/search/search'),
        meta: { title: '数据查询', icon: 'datasearch' }
      },
      {
        path: '/data/tools',
        name: 'Tools',
        component: () => import('@/views/datamanage/index'),
        redirect: '/data/tools/imp',
        meta: { title: '数据工具', icon: 'datatools' },
        children: [
          {
            path: 'imp',
            name: 'import',
            component: () => import('@/views/datamanage/tools/imp'),
            meta: { title: '导入', icon: 'dataimp' }
          },
          {
            path: 'exp',
            name: 'export',
            component: () => import('@/views/datamanage/tools/exp'),
            meta: { title: '导出', icon: 'dataexp' }
          },
          {
            path: 'massedit',
            name: 'massedit',
            component: () => import('@/views/datamanage/tools/massedit'),
            meta: { title: '批量编辑', icon: 'massedit' }
          }
        ]
      },
      {
        path: '/data/project',
        name: 'project',
        hidden: true,
        component: () => import('@/views/datamanage/search/project.vue')
      },
      {
        path: '/data/building',
        name: 'building',
        hidden: true,
        component: () => import('@/views/datamanage/search/building.vue')
      },
      {
        path: '/data/house',
        name: 'house',
        hidden: true,
        component: () => import('@/views/datamanage/search/house.vue')
      },
      {
        path: '/data/housegrid',
        name: 'housegrid',
        hidden: true,
        component: () => import('@/views/datamanage/search/housegrid.vue')
      },
      {
        path: '/data/projectEdit',
        name: 'projectEdit',
        hidden: true,
        component: () => import('@/views/datamanage/search/projectEdit.vue')
      },
      {
        path: '/data/buildingEdit',
        name: 'buildingEdit',
        hidden: true,
        component: () => import('@/views/datamanage/search/buildingEdit.vue')
      },
      {
        path: '/data/houseEdit',
        name: 'houseEdit',
        hidden: true,
        component: () => import('@/views/datamanage/search/houseEdit.vue')
      }
    ]
  },
  {
    path: '/case',
    component: Layout,
    redirect: '/case/search',
    name: 'Case',
    meta: { title: '案例管理', icon: 'casemanage' },
    children: [{
      path: 'imp',
      name: 'Import',
      component: () =>
        import('@/views/casemanage/imp'),
      meta: { title: '案例导入', icon: 'dataimp' }
    },
    {
      path: 'search',
      name: 'CaseSearch',
      component: () =>
          import('@/views/casemanage/search/index'),
      meta: { title: '案例查询', icon: 'datasearch' }
    },
    {
      path: '/case/filter',
      name: 'Filter',
      // 三级菜单对应的路由出口 router-view
      component: () =>
          import('@/views/casemanage/index'),
      redirect: '/case/filter/auto',

      meta: { title: '案例筛选', icon: 'filter' },
      children: [{
        path: 'auto',
        name: 'Auto',
        component: () =>
            import('@/views/casemanage/filter/auto'),
        meta: { title: '自动筛选', icon: 'datasearch' }
      },
      {
        path: 'labour',
        name: 'Labour',
        component: () =>
              import('@/views/casemanage/filter/labour'),
        meta: { title: '人工筛选', icon: 'datasearch' }
      }
      ]
    },
    {
      path: '/case/match',
      name: 'Match',
      component: () =>
          import('@/views/casemanage/index'),
      redirect: '/case/match/auto',
      meta: { title: '案例匹配', icon: 'filter' },
      children: [{
        path: 'auto',
        name: 'auto',
        component: () =>
            import('@/views/casemanage/match/auto'),
        meta: { title: '自动匹配', icon: 'datasearch' }
      },
      {
        path: 'labour',
        name: 'labour',
        component: () =>
              import('@/views/casemanage/match/labour'),
        meta: { title: '人工匹配', icon: 'datasearch' }
      }
      ]
    },
    {
      path: 'create',
      name: 'Create',
      hidden: true,
      component: () =>
          import('@/views/casemanage/create'),
      meta: { title: '创建任务', icon: 'dataimp' }
    }
    ]
  },
  {
    path: '/stat',
    component: Layout,
    redirect: '/stat/rsstat',
    name: 'Stat',
    meta: { title: '数据统计', icon: 'statistic' },
    children: [
      {
        path: 'rsstat',
        name: 'Rsstat',
        component: () => import('@/views/statistic/rsstat.vue'),
        meta: { title: '房地产统计', icon: 'rsstat' }
      },
      {
        path: 'propstat',
        name: 'propstat',
        component: () => import('@/views/statistic/propstat.vue'),
        meta: { title: '估价对象统计', icon: 'prop' }
      },
      {
        path: 'casestat',
        name: 'Casestat',
        component: () => import('@/views/statistic/casestat.vue'),
        meta: { title: '案例统计', icon: 'casestat' }
      },
      {
        path: 'appealstat',
        name: 'Appealstat',
        component: () => import('@/views/statistic/appealstat.vue'),
        meta: { title: '复核统计', icon: 'appealstat' }
      }
    ]

  },
  {
    path: '/dispute',
    component: Layout,
    name: 'Dispute',
    meta: { title: '争议处理', icon: 'task' },
    children: [{
      path: 'task',
      name: 'Task',
      component: () =>
        import('@/views/pricereassess/Task'),
      meta: { title: '价格复核', icon: 'recheck' }
    },
    {
      path: 'process',
      name: 'Process',
      hidden: true,
      component: () =>
          import('@/views/pricereassess/Process'),
      meta: { title: '流程查看', icon: 'process' }
    },
    {
      path: 'detail',
      name: 'Detail',
      hidden: true,
      component: () =>
      import('@/views/pricereassess/process/Detail'),
      meta: { title: '详细流程' }
    },
    {
      path: 'log',
      name: 'Log',
      hidden: true,
      component: () =>
      import('@/views/pricereassess/process/Log'),
      meta: { title: '操作日志' }
    },
    {
      path: 'audit',
      name: 'Audit',
      hidden: true,
      component: () =>
          import('@/views/pricereassess/Audit'),
      meta: { title: '数据审核', icon: 'audit' }
    },
    {
      path: 'appraise',
      name: 'Appraise',
      hidden: true,
      component: () =>
          import('@/views/pricereassess/Appraise'),
      meta: { title: '复核评估', icon: 'appraise' }
    },
    {
      path: 'result',
      name: 'Result',
      hidden: true,
      component: () =>
          import('@/views/pricereassess/Result'),
      meta: { title: '结果终审', icon: 'result' }
    }
    ]
  },
  {
    path: '/singleapp',
    component: Layout,
    redirect: '/singleapp/task',
    name: 'singleapp',
    meta: { title: '个案估价', icon: 'valuation' },
    children: [
      {
        path: 'task',
        name: 'task',
        component: () => import('@/views/singleapp/task/index'),
        meta: { title: '估价任务', icon: 'rsstat' }
      },
      {
        path: 'param',
        name: 'param',
        component: () => import('@/views/singleapp/param/index'),
        meta: { title: '参数管理', icon: 'datatools' }
      },
      {
        path: '/task/creatTask',
        name: 'creatTask',
        hidden: true,
        component: () => import('@/views/singleapp/task/creatTask'),
        meta: { title: '创建任务', icon: 'rsstat' }
      },
      {
        path: '/task/selectObject',
        name: 'selectObject',
        hidden: true,
        component: () => import('@/views/singleapp/task/selectObject'),
        meta: { title: '对象选择', icon: 'rsstat' }
      },
      {
        path: '/task/appObjectDetail',
        name: 'appObjectDetail',
        hidden: true,
        component: () => import('@/views/singleapp/task/appObjectDetail'),
        meta: { title: '估价对象详情', icon: 'rsstat' }
      },
      {
        path: '/task/objectDescription',
        name: 'objectDescription',
        hidden: true,
        component: () => import('@/views/singleapp/task/objectDescription'),
        meta: { title: '对象描述', icon: 'rsstat' }
      },
      {
        path: '/task/addExample',
        name: 'addExample',
        hidden: true,
        component: () => import('@/views/singleapp/task/addExample'),
        meta: { title: '价格评估', icon: 'rsstat' }
      },
      {
        path: '/task/appraisedPrice',
        name: 'appraisedPrice',
        hidden: true,
        component: () => import('@/views/singleapp/task/appraisedPrice'),
        meta: { title: '价格评估', icon: 'rsstat' }
      },
      {
        path: '/task/incomeApproach',
        name: 'incomeApproach',
        hidden: true,
        component: () => import('@/views/singleapp/task/incomeApproach'),
        meta: { title: '收益法', icon: 'rsstat' }
      },
      {
        path: '/task/appraisedAll',
        name: 'appraisedAll',
        hidden: true,
        component: () => import('@/views/singleapp/task/appraisedAll'),
        meta: { title: '评估所有对象', icon: 'rsstat' }
      },
      {
        path: '/task/report',
        name: 'report',
        hidden: true,
        component: () => import('@/views/singleapp/task/report'),
        meta: { title: '报告撰写', icon: 'rsstat' }
      },
      {
        path: '/task/taskDetail',
        name: 'taskDetail',
        hidden: true,
        component: () => import('@/views/singleapp/task/taskDetail'),
        meta: { title: '任务详情', icon: 'rsstat' }
      }
    ]
  },
  {
    path: '/massAppraisal',
    component: Layout,
    name: 'Mass',
    meta: { title: '批量评估', icon: 'casemanage' },
    children: [
      {
        path: '/massAppraisal/paramManage',
        name: 'ParamManage',
        component: () =>
          import('@/views/massAppraisal/index.vue'),
        meta: { title: '参数管理', icon: 'filter' },
        children: [{
          path: 'appraisalParam',
          name: 'AppraisalParam',
          component: () =>
            import('@/views/massAppraisal/paramManage/AppraisalParam.vue'),
          meta: { title: '估价参数', icon: 'datasearch' }
        },
        {
          path: 'priceMap',
          name: 'PriceMap',
          hidden: true,
          component: () =>
            import('@/views/massAppraisal/paramManage/PriceMap'),
          meta: { title: '基准地价图', icon: 'datasearch' }
        },
        {
          path: 'housingCost',
          name: 'HousingCost',
          hidden: true,
          component: () =>
            import('@/views/massAppraisal/paramManage/HousingCost'),
          meta: { title: '建安造价详情', icon: 'datasearch' }
        },
        {
          path: 'basicLandPrice',
          name: 'BasicLandPrice',
          hidden: true,
          component: () =>
            import('@/views/massAppraisal/paramManage/BasicLandPrice'),
          meta: { title: '基准地价详情', icon: 'datasearch' }
        },
        {
          path: 'buildingDepre',
          name: 'BuildingDepre',
          hidden: true,
          component: () =>
            import('@/views/massAppraisal/paramManage/BuildingDepre'),
          meta: { title: '建筑物折旧详情', icon: 'datasearch' }
        },
        {
          path: 'costParam',
          name: 'CostParam',
          hidden: true,
          component: () =>
            import('@/views/massAppraisal/paramManage/CostParam'),
          meta: { title: '成本参数详情', icon: 'datasearch' }
        }
        ]
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/resultaudit',
    component: Layout,
    redirect: '/resultaudit/rateanal',
    name: 'Resultaudit',
    meta: { title: '检验审核', icon: 'resultaudit' },
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/resultaudit/index'),
        meta: { title: '比率分析', icon: 'rate' }
      },
      {
        path: 'personaudit',
        name: 'personaudit',
        component: () => import('@/views/resultaudit/personaudit'),
        meta: { title: '人工审核', icon: 'audittask' }
      },
      {
        path: '/audittask/paramset',
        name: 'paramset',
        hidden: true,
        component: () => import('@/views/resultaudit/paramset.vue'),
        meta: { title: '参数设置', icon: 'rate' }
      },
      {
        path: '/audittask/rateanal',
        name: 'rateanal',
        hidden: true,
        component: () => import('@/views/resultaudit/rateanal.vue'),
        meta: { title: '分析结果', icon: 'districtgroup' }
      },
      {
        path: '/audittask/detail',
        name: 'detail',
        hidden: true,
        component: () => import('@/views/resultaudit/detail.vue'),
        meta: { title: '任务详情', icon: 'allcondition' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
