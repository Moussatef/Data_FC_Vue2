<template>
  <div>
    <div v-if="auth.role == 'admin'" class="overflow-hidden bg-light">
      <div class="mt-4"></div>

      <AppSideNav />

      <div class="content">
        <div class="top-navbar position-fixed bg-light">
          <div class="bx bx-menu btn_nav" @click="menu()"></div>
          <div class="profile"></div>
        </div>
        <h1 class="my-5">Participants</h1>
        <div class="container-fluid">
          <AppStatus />

          <div class="row justify-content-center text-start mt-4 bg-white p-4">
            <div class="col-12 text-center">
              <AppVimeo />
            </div>
            <div class="col-lg-6">
              <vs-input
                v-model="formation_id"
                class="my-3"
                border
                success
                icon-after
                label-placeholder="Formation ID"
              >
                <template #icon>
                  <i class="fa fa-sticky-note-o"></i>
                </template>
              </vs-input>
              <input
                type="file"
                accept=""
                ref="formation_img"
                class="invisible"
                id="img_formation"
                @change="imageSelected"
              />
              <vs-button
                class="col-lg-6 col-md-8 col-12"
                circle
                success
                border
                @click="$refs.formation_img.click()"
              >
                <i class="fa fa-upload"></i>
              </vs-button>
              <vs-button
                class="col-lg-6 col-md-8 col-12"
                circle
                primary
                border
                @click="addVideo(formation_id, videodata)"
              >
                <i class="fa fa-save"></i>
              </vs-button>
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
import AppSideNav from "@/components/Admin/AppSIdeNav.vue";
import AppStatus from "@/components/Admin/AppStatus.vue";
import AppVimeo from "@/components/vimeo/AppVimeo.vue";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
export default {
  name: "FormationVideo",
  data: () => {
    return {
      videodata: "",
      formation_id: "",
      imagepreview:
        "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",

      videoID: "643484066",
      height: 500,
      width: 1080,
    };
  },
  components: {
    AppSideNav,
    AppStatus,
    AppVimeo,
  },
  computed: {
    ...mapGetters(["auth", "loading"]),
  },
  methods: {
    async addVideo(id, video) {
      let data = new FormData();
      data.append("formation_id", id);
      data.append("video", video);
      data.append("title", "Test Upload video");
      data.append("description", "Data Fc Video");
      data.append("password", "Data@Fc@2020_admin");

      var config = {
        method: "post",
        url: "http://127.0.0.1:8000/api/admin/add-video",
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
          "Content-Type": "multipart/form-data",
          Connection: "keep-alive",
        },
        data: data,
      };

      axios(config)
        .then((response) => {
          let formation = response;
          // consoled for testing
          console.log(formation);
          // commit('setCategory', formation);
          // resolve('Success')
        })
        .catch((error) => {
          // reject(error)
          console.log(error);
        });
    },

    onReady() {
      this.playerReady = true;
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    },

    imageSelected(e) {
      this.videodata = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(this.videodata);
      reader.onload = (e) => {
        this.imagepreview = e.target.result;
      };
    },

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
  .btn_nav {
    display: block;
    margin-left: 10px;
  }

  #menu-icon {
    display: none;
  }
}
</style>