<template>
  <div id="app">
    <div id="nav">
      <AppNavBoot />
    </div>
    <router-view />
  </div>
</template>

<script>
import AppNav from "@/components/layout/AppNav.vue";
import AppNavBoot from "@/components/layout/BootNav.vue";
export default {
  components: {
    AppNav,
    AppNavBoot
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.logo-nav {
  width: 300px;
}

#nav {
  padding: 30px;

  a {
    // font-weight: bold;
    // color: #5f5f5f;

    &.router-link-exact-active {
      color: #238a91;
    }
  }
}
.dropdown-menu {
  li {
    a {
      color: #161616;
    }
  }
}

#mynavi {
  background-color: white;
  // box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
}
#mynavi .container-fluid .mynaviItem {
  // color: #444444;
}
#mynavi .container-fluid a {
  color: #444444;
  text-decoration: none;
  font-size: 18px;
  // transition: 200ms;
  &.router-link-exact-active  {
    color: #238a91;
    border-bottom: 2px solid #238a91;
    // transition: 200ms;
  }
}
#mynavi .container-fluid a:hover {
  color: #238a91;
}
#mynavi .container-fluid .logo span {
  color: #238a91;
  font-size: 25px;
}
#mynavi .container-fluid .logo {
  font-size: 25px;
}
.navbar .dropdown-menu {
  // background-color: #354046;
  // color: #0188df;
}
.navbar .dropdown-menu li:hover {
  background-color: #000000;
}
</style>
