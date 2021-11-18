<template>
  <div>
    <div v-if="auth.role == 'client'" class=" overflow-hidden bg-light">
      <div class="mt-4"></div>
      <AppNavS class="nav_z poition-fixed" :activelink="'ClientInfo'" />
      <div class="content  ">
        <div class="top-navbar position-fixed  ">
          <div class="bx bx-menu btn_nav" @click="menu()"></div>
        </div>
        <h1 class="my-15">Client Information</h1>
        <div class="container-fluid ">
          <div class="row  justify-content-evenly">
            <div class="col-xxl-3 col-12 bg-white">
              <div class=" text-center p-2 shadow-md">
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
                    v-if="!imagepreview"
                    :src="auth.image"
                    width="100"
                    height="100"
                    alt=""
                  />
                  <img
                    v-if="imagepreview"
                    :src="imagepreview"
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
                <p>Client</p>
              </div>
            </div>
            <div class="col-xxl-8 col-12 bg-white">
              <div class="p-2">
                <div class="row justify-content-start align-items-start mt-3 ">
                  <h5 class="col-2 text-start">Adresse :</h5>
                  <p
                    v-if="auth.adresse"
                    class="text-uppercase text-start  col-8 "
                  >
                    {{ auth.adresse.adresse }}
                  </p>
                  <p v-else class="text-muted text-start  col-4 ">
                    Ajouter adresse
                  </p>
                  <i class="fa fa-pencil-square-o col-2" aria-hidden="true"></i>
                </div>
                <div class="row justify-content-start align-items-start mt-3 ">
                  <h5 class="col-2 text-start">Ville :</h5>
                  <p
                    v-if="auth.adresse"
                    class="text-uppercase text-start  col-4 "
                  >
                    {{ auth.adresse.ville }}
                  </p>
                  <p v-else class="text-muted text-start  col-4 ">
                    Ajouter Ville
                  </p>
                  <i class="fa fa-pencil-square-o col-2" aria-hidden="true"></i>
                </div>
                <div class="row justify-content-start align-items-start mt-3 ">
                  <h5 class="col-2 text-start">Genre :</h5>
                  <p class="text-uppercase text-start col-4 ">
                    {{ auth.genre }}
                  </p>
                  <i class="fa fa-pencil-square-o col-2" aria-hidden="true"></i>
                </div>
                <div class="row justify-content-start align-items-start mt-3 ">
                  <h5 class="col-2 text-start">Telephone:</h5>
                  <p class="text-uppercase text-start  col-4 ">
                    {{ auth.telephone }}
                  </p>
                  <i class="fa fa-pencil-square-o col-2" aria-hidden="true"></i>
                </div>

                <div class="row justify-content-center align-items-start my-3  ">
                  <div class="card col-4 text-center shadow border-none">
                    <p class="text-muted ">NB° Formation Favorits</p>
                    <p class="text-uppercase text-muted    fs-2">
                      <b>{{ auth.favorit.length }}</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
import AppNavS from "@/components/layout/AppNavS.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "InfoClient",
  components: {
    AppNavS,
  },
  data: function() {
    return {
      imagepreview: undefined,
    };
  },
  computed: {
    ...mapGetters(["auth", "loading"]),
  },
  methods: {
    menu() {
      let sidenavbar = document.querySelector(".side-navbar");
      let content = document.querySelector(".content");
      sidenavbar.classList.toggle("active");
      content.classList.toggle("active");
    },
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
      }, 1000);
    },
    edit() {
      alert("HHHH");
    },
    imageSelected(e) {
      this.img_src = true;
      this.image = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = (e) => {
        this.imagepreview = e.target.result;
      };
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.nav_z{
  z-index: 9999;
}
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

@media (max-width: 1200px) {
  

  .content {
    width: calc(100% - 60px);
    left: 60px;
  }
 
}
</style>
