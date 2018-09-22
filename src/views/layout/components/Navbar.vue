<template>
  <el-menu class="navbar" mode="horizontal">    
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <div class="logo">房地产税基批量估价系统平台</div>
    <breadcrumb></breadcrumb>
    <div class="right-menu"> 
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <screen-full class="screenfull right-menu-item"></screen-full>
      </el-tooltip>
      <el-badge :value="totalInfo" class="item">
        <el-popover
          placement="bottom-end"
          width="400"
          trigger="click">
          <el-tabs v-model="activeTabName" @tab-click="handleClick">
            <el-tab-pane :label="noticeTitle" name="first">通知</el-tab-pane>
            <el-tab-pane :label="messageTitle" name="second">消息</el-tab-pane>
            <el-tab-pane :label="todoTitle" name="third">待办</el-tab-pane>
          </el-tabs>
          <el-button type="text" icon="el-icon-ali-xiaoxi" class="notice right-menu-item" slot="reference">消息</el-button>
        </el-popover>
        
      </el-badge>      
      <el-button type="text" icon="el-icon-question" class="help right-menu-item">帮助</el-button>

      <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <!-- <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'"> -->
        <!-- <img class="user-avatar" :src="avatar"> -->
        <img class="user-avatar" src="http://211.154.135.29:88/public/user.png" />
        <i class="el-icon-caret-bottom"></i>
      </div>
      <el-dropdown-menu class="user-dropdown" slot="dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            设置
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span @click="logout" style="display:block;">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ScreenFull from '@/components/Screenfull'

export default {
  data() {
    return {
      activeTabName: 'first',
      noticeTitle: '通知（4）',
      messageTitle: '消息（2）',
      todoTitle: '待办',
      totalInfo: '6'
    }
  },
  components: {
    Breadcrumb,
    Hamburger,
    ScreenFull
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.item .el-badge__content.is-fixed{
    right: 20px;
    top: 10px !important;
  }
.navbar {  
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .logo {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight:bold;
    line-height: 50px;
    font-size: 22px;
    float: left;
  }
  .hamburger-container {
    line-height: 50px;
    height: 50px;
    float: left;
    padding: 5px 10px;
  }
  // .right-menu-item {
  //     display: inline-block;
  //     margin: 0 8px;
  // }
  .right-menu {
    float: right;
    height: 100%;    
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 10px;
    }
    .screenfull {
        // height: 20px;
      vertical-align: 15px;
    }
    .help {
      vertical-align: 15px;
      margin-right: 30px;
    }    
    .notice {
      vertical-align: 26px;
    }
    .usageSelect{
      vertical-align: 15px;
      width: 100px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>

