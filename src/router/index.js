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
    path: '/recheck',
    component: Layout,
    redirect: '/recheck/task',
    name: 'Recheck',
    meta: { title: '价格复核', icon: 'recheck' },
    children: [{
      path: 'task',
      name: 'Task',
      component: () =>
        import('@/views/pricerecheck/task'),
      meta: { title: '任务列表', icon: 'task' }
    },
    {
      path: 'process',
      name: 'Process',
      component: () =>
          import('@/views/pricerecheck/process'),
      meta: { title: '流程查看', icon: 'process' }
    },
    {
      path: 'detail',
      name: 'Detail',
      hidden: true,
      component: () =>
      import('@/views/pricerecheck/process/detail'),
      meta: { title: '详细流程' }
    },
    {
      path: 'log',
      name: 'Log',
      hidden: true,
      component: () =>
      import('@/views/pricerecheck/process/log'),
      meta: { title: '操作日志' }
    },
    {
      path: 'audit',
      name: 'Audit',
      component: () =>
          import('@/views/pricerecheck/audit'),
      meta: { title: '数据审核', icon: 'audit' }
    },
    {
      path: 'appraise',
      name: 'Appraise',
      component: () =>
          import('@/views/pricerecheck/appraise'),
      meta: { title: '复核评估', icon: 'appraise' }
    },
    {
      path: 'reason',
      name: 'Reason',
      hidden: true,
      component: () =>
          import('@/views/pricerecheck/appraise/reason'),
      meta: { title: '不调整原因' }
    },
    {
      path: 'survey',
      name: 'Survey',
      hidden: true,
      component: () =>
          import('@/views/pricerecheck/appraise/survey'),
      meta: { title: '现场查勘' }
    },
    {
      path: 'result',
      name: 'Result',
      component: () =>
          import('@/views/pricerecheck/result'),
      meta: { title: '结果终审', icon: 'result' }
    }
    ]
  },
  {
    path: '/valuation',
    component: Layout,
    redirect: '/data/valuation',
    name: 'Valuation',
    meta: { title: '个案估价', icon: 'valuation' },
    children: [
      {
        path: 'task',
        name: 'task',
        component: () => import('@/views/casevaluation/task/index'),
        meta: { title: '评估任务', icon: 'rsstat' }
      },
      {
        path: 'param',
        name: 'param',
        component: () => import('@/views/casevaluation/param/index'),
        meta: { title: '参数管理', icon: 'datatools' }
      },
      {
        path: '/task/addtask1',
        name: 'addtask1',
        hidden: true,
        component: () => import('@/views/casevaluation/task/addtask1')
      },
      {
        path: '/task/addtask2',
        name: 'addtask2',
        hidden: true,
        component: () => import('@/views/casevaluation/task/addtask2')
      },
      {
        path: '/task/addtask3',
        name: 'addtask3',
        hidden: true,
        component: () => import('@/views/casevaluation/task/addtask3')
      },
      {
        path: '/task/addtask4',
        name: 'addtask4',
        hidden: true,
        component: () => import('@/views/casevaluation/task/addtask4')
      },
      {
        path: '/task/addtask5',
        name: 'addtask5',
        hidden: true,
        component: () => import('@/views/casevaluation/task/addtask5')
      },
      {
        path: '/task/report',
        name: 'report',
        hidden: true,
        component: () => import('@/views/casevaluation/task/report')
      },
      {
        path: '/task/detail',
        name: 'detail',
        hidden: true,
        component: () => import('@/views/casevaluation/task/detail')
      }
    ]
  },
  {
    path: '/survey',
    component: Layout,
    redirect: '/data/survey',
    name: 'Survey',
    meta: { title: '查勘任务', icon: 'Survey' },
    children: [
      {
        path: 'task',
        name: 'Task',
        component: () => import('@/views/surveymanage/task/auto'),
        meta: { title: '任务统计', icon: 'casestat' }
      }
    ]
  },
  {
    path: '/management',
    component: Layout,
    redirect: '/data/survey',
    name: 'Management',
    meta: { title: '任务管理', icon: '任务管理' },
    children: [
      {
        path: 'taskmanage',
        name: 'Taskmanage',
        component: () => import('@/views/taskmanage/task/auto'),
        meta: { title: '调度中心', icon: '调度中心' }
      },
      {
        path: 'cemach1',
        name: 'Cemach1',
        component: () => import('@/views/taskmanage/cemach/auto'),
        meta: { title: '调查机构', icon: '机构' }
      },
      {
        path: 'statistics',
        name: 'statistics',
        hidden: true,
        component: () => import('@/views/taskmanage/task/statistics')
      },
      {
        path: 'addtask',
        name: 'Addtask',
        hidden: true,
        component: () => import('@/views/taskmanage/task/addtask')
      },
      {
        path: 'respondents',
        name: 'Respondents',
        hidden: true,
        component: () => import('@/views/taskmanage/task/respondents')
      },
      {
        path: 'resp',
        name: 'Resp',
        hidden: true,
        component: () => import('@/views/taskmanage/cemach/respondents')
      },
      {
        path: 'item',
        name: 'Item',
        hidden: true,
        component: () => import('@/views/taskmanage/task/item')
      },
      {
        path: 'building',
        name: 'Building',
        hidden: true,
        component: () => import('@/views/taskmanage/task/building')
      },
      {
        path: 'family',
        name: 'Family',
        hidden: true,
        component: () => import('@/views/taskmanage/task/family')
      }
    ]
  },
  {
    path: '/personnel',
    component: Layout,
    redirect: '/personnel/dispatch/auto',
    name: 'Personnel',
    meta: { title: '人员机构管理', icon: 'person' },
    children: [
      {
        path: '/personnel/dispatch',
        name: 'Dispatch',
        component: () => import('@/views/personnelmanage/index'),
        meta: { title: '调度中心', icon: '调度中心' },
        children: [
          {
            path: 'auto',
            name: 'auto',
            component: () => import('@/views/personnelmanage/dispatch/auto'),
            meta: { title: '机构详情', icon: '调度中心' }
          },
          {
            path: 'addagency',
            name: 'addagency',
            component: () => import('@/views/personnelmanage/dispatch/addagency'),
            meta: { title: '新增机构', icon: '新增' }
          }
        ]
      },
      {
        path: 'cemach',
        name: 'Cemach',
        component: () => import('@/views/personnelmanage/dispatch/cemach/agency'),
        meta: { title: '调度机构', icon: '调度中心' }
      },
      {
        path: 'agency',
        name: 'agency',
        hidden: true,
        component: () => import('@/views/personnelmanage/dispatch/agency')
      },
      {
        path: 'addagency2',
        name: 'addagency2',
        hidden: true,
        component: () => import('@/views/personnelmanage/dispatch/cemach/addagency')
      },
      {
        path: 'staff',
        name: 'staff',
        hidden: true,
        component: () => import('@/views/personnelmanage/dispatch/staff')
      },
      {
        path: 'details',
        name: 'details',
        hidden: true,
        component: () => import('@/views/personnelmanage/dispatch/details')
      },
      {
        path: 'details2',
        name: 'Details2',
        hidden: true,
        component: () => import('@/views/personnelmanage/dispatch/cemach/details')
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
    redirect: '/result/audit',
    name: 'Resultaudit',
    meta: { title: '检验审核', icon: 'resultaudit' },
    children: [
      {
      /*  path: '/resultaudit/rateanal',
        name: 'rateanal',
        component: () => import('@/views/resultaudit/audittask'),
        meta: { title: '比率分析', icon: 'rate' } */
        path: 'rateanal',
        name: 'rateanal',
        component: () => import('@/views/resultaudit/audittask'),
        meta: { title: '比率分析', icon: 'rate' }
      /*  children: [
          {
            path: 'audittask',
            name: 'audittask',
            component: () => import('@/views/resultaudit/audittask'),
            meta: { title: '结果审核', icon: 'allcondition' }
          },
          {
            path: 'paramset1',
            name: 'paramset1',
            component: () => import('@/views/resultaudit/paramset'),
            meta: { title: '参数设置', icon: 'rate' }
          },
          {
            path: 'rateanal',
            name: 'rateanal',
            component: () => import('@/views/resultaudit/rateanal'),
            meta: { title: '分析结果', icon: 'districtgroup' }
          }
        ] */
      },
      {
        path: 'personaudit',
        name: 'personaudit',
        component: () => import('@/views/resultaudit/personaudit'),
        meta: { title: '人工审核', icon: 'audittask' }
      },
      /* {
        path: '/resultaudit/rateanal',
        name: 'rateanal',
        component: () => import('@/views/resultaudit/rateanal'),
        redirect: '/primaryuse',
        meta: { title: '比率分析', icon: 'rate' },
        children: [
          {
            path: 'rateanal',
            name: 'rateanal',
            component: () => import('@/views/resultaudit/rateanal'),
            meta: { title: '比率分析', icon: 'rate' }
          },
          {
            path: 'allcondition',
            name: 'allcondition',
            component: () => import('@/views/resultaudit/allcondition'),
            meta: { title: '总体情况', icon: 'allcondition' }
          },
          {
            path: 'primaryuse',
            name: 'primaryuse',
            component: () => import('@/views/resultaudit/primaryuse'),
            meta: { title: '一级用途分析', icon: 'fristuse' }
          },
          {
            path: 'districtgroup',
            name: 'districtgroup',
            component: () => import('@/views/resultaudit/districtgroup'),
            meta: { title: '行政区分组', icon: 'districtgroup' }
          }
        ]
      }, */
      {
        path: '/audittask/paramset',
        name: 'paramSet',
        hidden: true,
        component: () => import('@/views/resultaudit/paramset.vue')
      },
      {
        path: '/audittask/rateanal',
        name: 'rateAnal',
        hidden: true,
        component: () => import('@/views/resultaudit/rateanal.vue')
      },
      {
        path: '/audittask/auditdetail',
        name: 'auditdetail',
        hidden: true,
        component: () => import('@/views/resultaudit/auditdetail.vue')
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
