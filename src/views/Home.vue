<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible flex-row>
      <div class="logo flex-row"><img src="../assets/svg/MF_logo_about.svg" alt="联影"><span>Share Happiness</span></div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="defult_key">
        <a-menu-item key="1" @click="$router.push('/')">
          <a-icon type="right-square" :style="{marginLeft: '4px'}" />
          <span :style="{ marginLeft : '20px'}">2020/7/25</span>
        </a-menu-item>
        <a-menu-item key="2" @click="$router.push('/second_share')">
          <a-icon type="right-square" :style="{marginLeft: '4px'}"/>
          <span :style="{ marginLeft : '20px'}">Stay tuned</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      collapsed: false, 
      defult_key: ['1']
    }
  }, 
  methods: {
  },

  beforeRouterUpdate(to , from , next ){
  }

}
</script>

<style lang="less" scoped>

  #components-layout-demo-custom-trigger{
    width: 100%;
    height: 100%;
  }
  #components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  overflow: hidden;
  cursor: pointer;
  img{
    width: 32px;
    height: 32px;
    margin: 0 0 0 20px;
  }

  span{
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    line-height: 32px;
    margin-left: 10px;
  }
}
</style>
