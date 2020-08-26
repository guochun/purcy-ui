<template>
  <div>
    导航栏 |
    <router-link to="/">首页</router-link>> |
    <router-link to="/">文档页</router-link>> |
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
