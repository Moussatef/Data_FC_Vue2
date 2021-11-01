<template>
  <div>
    <div v-if="auth.role == 'client'" class=" overflow-hidden bg-light">
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
    <div v-else-if="loading" class="box-loading" ref="content"></div>
    <div v-else>
      <h1>You don't have permission to this page</h1>
      <div>
        <img src="../assets/SvgUl/Questions-amico.svg" width="700" alt="" />
      </div>
      <!-- <router-link
        to="/"
        type="button"
        class="btn btn-outline-secondary btn-lg"
      >
        <i class="bi bi-arrow-bar-left"></i>return back
      </router-link> -->
      <button
        @click="$router.go(-1)"
        type="button"
        class="btn btn-outline-secondary btn-lg"
      >
        <i class="bi bi-arrow-bar-left"></i>return back
      </button>
    </div>
  </div>
</template>

<script>
import AppFormation from "@/components/Admin/AppFormation.vue";
import AppClient from "@/components/Admin/AppClient.vue";
import AppNavS from "@/components/layout/AppNavS.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data: () => ({
    active_alert: false,
  }),
  components: {
    AppNavS,
    AppFormation,
    AppClient,
  },
  computed: {
    ...mapGetters(["auth", "loading"]),
  },
  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: "Loading",
        color: "#d5397b",
        circles,
      });
      // setTimeout(() => {
      //   loading.close();
      // }, 3000);
    },
    closeLoading() {
      const loading = this.$vs.loading({
        target: this.$refs.content,
        text: "Loading..",
        color: "#257579",
        type: "circles",
      });
      setTimeout(() => {
        loading.close();
      }, 500);
    },
  },
  watch: {
    loading: function(val) {
      if (val) {
        // console.log(val);
        this.openLoading()
      } else {
        this.closeLoading()
        // console.log(val);
      }
    },
  },
  created() {},
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
