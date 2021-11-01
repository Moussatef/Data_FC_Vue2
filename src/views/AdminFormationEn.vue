<template>
  <div>
    <div v-if="auth.role == 'admin'" class=" overflow-hidden bg-light">
      <div class="mt-4"></div>
      <AppSideNav />
      <div class="content ">
        <div class="top-navbar position-fixed bg-light ">
          <div class="bx bx-menu btn_nav" @click="menu()"></div>
          <div class="profile"></div>
        </div>
        <div class="ms-5">
          <h1 class="my-5">FORMATIONS INTERENTREPRISES</h1>
          <div class=" container-fluid">
            <AppStatus />
            <div class="row justify-content-center text-start mt-4">
              <div class="col-lg-7">
                <AppGestionCategory />
              </div>
              <div class="col-lg-7">
                <AppAddFormation />
              </div>
              <div class="col-lg-12">
                <AppFormation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>You don't have permission to this page</h1>
      <div>
        <img src="../assets/SvgUl/Questions-amico.svg" width="700" alt="" />
      </div>
      <router-link to="/" type="button" class="btn btn-outline-secondary btn-lg">
        <i class="bi bi-arrow-bar-left"></i>return back
      </router-link>
    </div>
  </div>
</template>
<script>
import AppSideNav from "@/components/Admin/AppSIdeNav.vue";
import AppFormation from "@/components/Admin/AppFormation.vue";
import AppAddFormation from "@/components/Admin/AppAddFormation.vue";
import AppGestionCategory from "@/components/Admin/AppGestionCategory.vue";
import AppStatus from "@/components/Admin/AppStatus.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AdminFormationEn",
  components: {
    AppSideNav,
    AppFormation,
    AppAddFormation,
    AppStatus,
    AppGestionCategory,
  },
  data: () => ({
    homeAct: true,
    formationAct: false,
    participantsAct: false,
    activeSidebar: false,
    profile: false,
  }),
  computed: {
    ...mapGetters(["auth"]),
  },

  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.top-10 {
  top: 5rem;
  position: sticky;
}
.mt-100 {
  margin-top: 100%;
}
.mt-20 {
  margin-top: 10%;
}

.content {
  position: relative;
  width: calc(100% - 200px);
  left: 200px;
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
