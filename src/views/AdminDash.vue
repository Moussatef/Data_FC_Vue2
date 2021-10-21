<template>
  <div class=" overflow-hidden bg-light">
    <div class="hidden">
      <div class="mt-4"></div>
      <div class="main ">
        <div class="side-navbar">
          <ul>
            <li class="my-5">
              <div class="bx bx-menu" @click="menu()" id="menu-icon"></div>
            </li>
            <li :class="{ isActive: homeAct }">
              <a  @click="doHome()">
                <span class="icon"><i class="bx bxs-home"></i></span>
                <span class="text">Home</span>
              </a>
            </li>
            <li :class="{ isActive: formationAct }">
              <a @click="doFormation()" >
                <span class="icon"
                  ><i class="bx bxs-server" aria-hidden="true"></i
                ></span>
                <span class="text">Formation</span>
              </a>
            </li>

            <li :class="{ isActive: participantsAct }">
              <a  @click="doParticipants()">
                <span class="icon"><i class="bx bxs-group"></i></span>
                <span class="text">participants</span>
              </a>
            </li>
            <li :class="{ isActive: profile }">
              <a  @click="doProfile()">
                <span class="icon"><i class="bx bxs-user"></i></span>
                <span class="text">Profile</span>
              </a>
            </li>
            <li>
              <a >
                <span class="icon"><i class="bx bxs-cloud-upload"></i></span>
                <span class="text">Upload</span>
              </a>
            </li>
            <li>
              <a >
                <span class="icon"><i class="bx bxs-cog"></i></span>
                <span class="text">Setting</span>
              </a>
            </li>
            <li>
              <a >
                <span class="icon"><i class="bx bxs-log-out"></i></span>
                <span class="text">Log-Out</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="content ">
          <div class="top-navbar position-fixed bg-light ">
            <div class="bx bx-menu btn_nav" @click="menu()"></div>
            <div class="profile"></div>
          </div>
        </div>
      </div>
      <div class="row bdy">
        <div class=" col-lg-2 col-1"></div>
        <div class="col-lg-10 col-11 mt-5">
          <h1 class="my-5">Administrateur</h1>
          <div class=" container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-3 ">
                <div class="bg-white  ">
                  <div
                    class="row align-items-center justify-content-center status-card "
                  >
                    <div class="col-lg-3">
                      <img
                        src="../assets/book1.png"
                        class=""
                        width="50"
                        height="50"
                        alt=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <h3>23</h3>
                      <p><b>NB</b> Formations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 ">
                <div class="bg-white  ">
                  <div
                    class="row align-items-center justify-content-center status-card "
                  >
                    <div class="col-lg-3">
                      <img
                        src="../assets/student1.png"
                        class=""
                        width="50"
                        height="50"
                        alt=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <h3>23</h3>
                      <p><b>NB</b> Participants</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 ">
                <div class="bg-white  ">
                  <div
                    class="row align-items-center justify-content-center status-card "
                  >
                    <div class="col-lg-3">
                      <img
                        src="../assets/group1.png"
                        class=""
                        width="50"
                        height="50"
                        alt=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <h3>23</h3>
                      <p><b>NB</b> D'enseignants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="homeAct"
              class="row justify-content-center text-start mt-4"
            >
              <div class="col-lg-12">
                <AppFormation />
              </div>
              <div class="col-lg-12">
                <AppClient check="0" />
              </div>
            </div>
            <div
              v-if="formationAct"
              class="row justify-content-center text-start mt-4"
            >
              <div class="col-lg-7">
                <AppAddFormation />
              </div>
              <div class="col-lg-12">
                <AppFormation />
              </div>
            </div>
            <div
              v-if="participantsAct"
              class="row justify-content-center text-start mt-4"
            >
              <div class="col-lg-12">
                <AppClient check="0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppFormation from "@/components/Admin/AppFormation.vue";
import AppAddFormation from "@/components/Admin/AppAddFormation.vue";
import AppClient from "@/components/Admin/AppClient.vue";
export default {
  name: "AdminDash",
  components: {
    AppFormation,
    AppClient,
    AppAddFormation,
  },
  data: () => ({
    homeAct: true,
    formationAct: false,
    participantsAct: false,
    activeSidebar: false,
    profile: false,
  }),

  methods: {
    doFormation() {
      this.formationAct = true;
      this.homeAct = false;
      this.participantsAct = false;
      this.profile = false;
    },
    doHome() {
      this.formationAct = false;
      this.homeAct = true;
      this.participantsAct = false;
      this.profile = false;
    },
    doParticipants() {
      this.formationAct = false;
      this.homeAct = false;
      this.participantsAct = true;
      this.profile = false;
    },
    doProfile() {
      this.formationAct = false;
      this.homeAct = false;
      this.participantsAct = false;
      this.profile = true;
    },

    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        title: "Administrateur",
        text: "Bienvenue dans le tableau de bord de l'administrateur",
      });
    },
    menu() {
      let sidenavbar = document.querySelector(".side-navbar");
      let content = document.querySelector(".content");
      sidenavbar.classList.toggle("active");
      content.classList.toggle("active");
    },
  },
  mounted() {
    this.openNotification(null, "rgb(59,222,200)");
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
a{
  cursor: pointer;
}

/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
}
.main {
  width: 100%;
  background-color: #fff;
}
.side-navbar {
  position: fixed;
  height: 100vh;
  width: 200px;
  background: linear-gradient(130deg, #25767a 0%, #52a79888 100%);
  overflow: hidden;
  transition: 0.5s ease;
}
.side-navbar ul {
  top: 0;
  left: 0;
  width: 100%;
}
.side-navbar ul li {
  width: 100%;
}
.side-navbar ul li:hover {
  background: #0f7892;
}
.isActive {
  background: #0f7892;
}
.side-navbar ul li:first-child {
  margin-bottom: 1rem;
  background: none;
}
.side-navbar ul li a {
  display: block;
  width: 100%;
  display: flex;
  color: #fff;
}
.side-navbar ul li a .icon {
  min-width: 60px;
  display: block;
  font-size: 25px;
  line-height: 60px;
  height: 60px;
  text-align: center;
}
.side-navbar ul li a .text {
  display: block;
  padding: 0 10px;
  line-height: 60px;
  height: 60px;
  white-space: nowrap;
}
.content {
  position: absolute;
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
.profile img {
  width: 44px;
  height: 44px;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
  cursor: pointer;
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
.side-navbar.active {
  width: 60px;
}
@media (max-width: 768px) {
  .content {
    width: 100%;
    left: 0;
  }
  .side-navbar {
    width: 60px;
    left: -60px;
  }
  .content.active {
    width: calc(100% - 60px);
    left: 60px;
  }
  .side-navbar.active {
    left: 0;
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
