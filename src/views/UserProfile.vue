<template>
  <div class=" overflow-hidden">
    <AppNavS class="nav_z poition-fixed" />

    <div class="content">
      <h1 class="my-5">Participants</h1>
      <div class=" d-flex justify-content-center text-start mt-4">
        <div class="col-lg-12">
          <AppFormation />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppFormation from "@/components/Admin/AppFormation.vue";
import AppClient from "@/components/Admin/AppClient.vue";
import AppNavS from "@/components/layout/AppNavS.vue";
export default {
  data: () => ({
    active_alert: false,
  }),
  components: {
    AppNavS,
    AppFormation,
    AppClient,
  },
};
</script>

<style lang="scss" scoped>
.nav_z {
  z-index: 9999;
}
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}
.con-form {
  width: 100%;
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      font-size: 0.8rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
}
// .sidediv {
//   width: 50px;
// }
.content {
  position: relative;
  width: calc(100% - 120px);
  left: 100px;
  min-height: 100vh;
  transition: 0.5s ease;
}
.top-navbar {
  margin-top: 3.2rem;
  width: (rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  // padding: 7px 20px;
}

#menu-icon {
  font-size: 34px;
  cursor: pointer;
  color: #fff;
}
.btn_nav {
  display: none;
  font-size: 34px;
  cursor: pointer;
  color: rgb(0, 0, 0);
}
.content.active {
  width: calc(100% - 60px);
  left: 60px;
}

@media (max-width: 868px) {
  .content {
    width: 100%;
    left: 0;
  }

  .content.active {
    width: calc(100% - 60px);
    left: 60px;
  }

  #menu-icon {
    display: none;
  }
}
</style>
