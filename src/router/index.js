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
        name: 'Search',
        component: () =>
          import('@/views/casemanage/search/index'),
        meta: { title: '案例查询', icon: 'datasearch' }
      },
      {
        path: '/case/filter',
        name: 'Filter',
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
          name: 'Auto',
          component: () =>
            import('@/views/casemanage/match/auto'),
          meta: { title: '自动匹配', icon: 'datasearch' }
        },
          {
            path: 'labour',
            name: 'Labour',
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
  
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
