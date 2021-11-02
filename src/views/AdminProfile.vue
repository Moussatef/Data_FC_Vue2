<template>
  <div>
    <div v-if="auth.role == 'admin'" class=" overflow-hidden bg-light">
      <div class="mt-4"></div>

      <AppSideNav />

      <div class="content  ">
        <div class="top-navbar position-fixed  ">
          <div class="bx bx-menu btn_nav" @click="menu()"></div>
        </div>
        <h1 class="my-5">Admin Profile</h1>

        <div class="container ">
          <div class="row  justify-content-center">
            <div class="col-10">
              <div class="bg-white text-center p-2 shadow-md">
                <vs-avatar
                  class="rounded-circle my-3 mx-auto"
                  size="150"
                  badge
                  history
                  history-gradient
                  badge-position="top-left"
                  badge-color="success"
                >
                  <img
                    :src="'http://127.0.0.1:8000'+auth.image"
                    width="100"
                    height="100"
                    alt=""
                  />
                  <template #icons>
                    <i
                      class="fa fa-pencil-square-o "
                      @click="$refs.profile_img.click()"
                      aria-hidden="true"
                    ></i>
                  </template>
                </vs-avatar>
                <input
                  type="file"
                  accept="image/*"
                  ref="profile_img"
                  class="invisible "
                  id="img_profile"
                  @change="imageSelected"
                />
                <div class="d-flex justify-content-center align-items-center">
                  <h5 class="text-uppercase">
                    {{ auth.nom }} {{ auth.prenom }}
                  </h5>
                  <i class="fa fa-pencil-square-o ms-2" aria-hidden="true"></i>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <h6>{{ auth.email }}</h6>
                  <i class="fa fa-pencil-square-o  ms-2" aria-hidden="true"></i>
                </div>
                <p>Administrateur</p>
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
      <router-link
        to="/"
        type="button"
        class="btn btn-outline-secondary btn-lg"
      >
        <i class="bi bi-arrow-bar-left"></i>return back
      </router-link>
    </div>
  </div>
</template>

<script>
import AppSideNav from "@/components/Admin/AppSIdeNav.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AdminProfile",
  components: {
    AppSideNav,
  },
  data: function() {
    return {
      imageSelected: undefined,
    };
  },
  computed: {
    ...mapGetters(["auth"]),
  },
  methods: {
    edit() {
      alert("HHHH");
    },
  },
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
.status-card {
  min-height: 150px;
  margin-bottom: 20px;
}
// .hidden {
//   overflow-y: scroll;
// }
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
