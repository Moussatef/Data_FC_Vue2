<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <AppNavBoot :role="role" />
      </div>
      <v-main>
        <!-- Provides the application the proper gutter -->

        <!-- If using vue-router -->
        <router-view />
      </v-main>
      <footer class="footer-distributed">
        <div class="footer-left">
          <!-- <h3>DATA<span>FC</span></h3> -->
          <img
            class="logo-footer"
            src="https://backend-data-fc.herokuapp.com/storage/logo/logo.jpg"
            alt="DATA FORMATION & CONSULTING "
          />

          <p class="footer-links">
            <router-link class="nav-link mynaviItem" to="/"
              >Accueil</router-link
            >
            ·
            <router-link class="nav-link" to="/sommes-nous"
              >Qui sommes nous</router-link
            >
            ·
            <router-link to="/nos-formations">Nos formations</router-link>
            ·
            <router-link to="/formations-interentreprises"
              >Formations interentreprises</router-link
            >
            ·
            <router-link to="/assistance-conseil-en-recrutement"
              >Assistance conseil en recrutement</router-link
            >
            ·
            <router-link class="nav-link" to="/contact-nous"
              >Contact</router-link
            >
          </p>
        </div>

        <div class="footer-center">
          <div class="row justify-content-start align-items-start">
            <i class="fa fa-map-marker col-2"></i>
            <p class="col-10">
              <span>{{ company.adresse }}</span> {{ company.ville }}
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>Fixe :{{ company.fixe }}</p>
            /
            <p>Telephone : {{ company.tele }}</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a :href="'mailto:' + company.email">{{ company.email }}</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>À propos de la société</span>
            Fondée en 2019, DATA FC est spécialisée dans
          </p>

          <div class="footer-icons">
            <a
              href="https://www.facebook.com/DATA-FC-107230434780916"
              target="blanck"
              ><i class="fa fa-facebook"></i
            ></a>
            <a href="https://www.instagram.com/data.fc/" target="blanck"
              ><i class="fa fa-instagram"></i
            ></a>
            <a href="#"><i class="fa fa-linkedin"></i></a>
          </div>
          <br />
          <p class="footer-company-name">DATA FC &copy; 2021</p>
          <br />
          <p class="footer-company-name">
            Le site est crée par
            <a href="mailto:otman.moussetaf@gmail.com">Moussatef Othman</a>
          </p>
        </div>
      </footer>
    </div>
  </v-app>
</template>

<script>
import AppSideNav from "@/components/Admin/AppSIdeNav.vue";
import AppNavBoot from "@/components/layout/BootNav.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data: function () {
    return {
      role: "",
      color: "#d5397b",
      hasOpenLoading: false,
    };
  },

  methods: {
    openLoading() {
      const loading = this.$vs.loading({
        text: "Loading...",
        color: "#257579",
        type: "circles",
      });
      setTimeout(() => {
        loading.close();
      }, 600);
    },
    ...mapActions(["getAuthinfo", "getCompnyInfo"]),

    getInfoAuth() {
      this.$store
        .dispatch("getAuthinfo")
        .then((res) => {
          this.role = res.role;
          // console.log(res);
        })
        .catch((err) => {
          this.errorDesc = err.message;
          localStorage.clear();
          // this.$router.push({ name: "Accueil" });
        });
    },
  },
  computed: { ...mapGetters(["company"]) },
  components: {
    // AppNav,
    AppSideNav,
    AppNavBoot,
  },
  created() {
    this.openLoading();
    this.getInfoAuth();
    this.getCompnyInfo();
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
  z-index: 999;
}
.logo-nav {
  width: 300px;
}
#nav {
  padding: 30px;
  z-index: 9900 !important;
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
  z-index: 900 !important;
  background-color: white;
  // box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.3);
}
#mynavi .container-fluid a {
  color: #444444;
  text-decoration: none;
  font-size: 18px;
  // transition: 200ms;
  &.router-link-exact-active {
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

.logo-footer {
  margin-bottom: 40px;
  width: 60%;
}

body {
  margin: 0;
  padding: 0;
}
.main {
  max-height: 550px;
  background: linear-gradient(90deg, #288b9298 0%, #92feec88 100%);
  color: white;
  font-size: 38pt;
  text-align: center;
  line-height: 550px;
}
footer {
  position: relative;
  bottom: 0;
}
.footer-distributed {
  background: linear-gradient(90deg, #063a31 10%, #288b92 100%);
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;

  padding: 55px 50px;
  margin-top: 80px;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}

.footer-distributed .footer-left {
  width: 42%;
}

.footer-distributed h3 {
  color: #252525;
  font: normal 36px "Cookie", cursive;
  margin: 0;
}

.footer-distributed h3 span {
  color: #5383d3;
}

.footer-distributed .footer-links {
  color: #ffffff;
  margin: 20px 0 12px;
  padding: 0;
}

.footer-distributed .footer-links a {
  display: inline-block;
  line-height: 1.8;
  text-decoration: none;
  color: inherit;
}

.footer-distributed .footer-company-name {
  color: #dddddd;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
  a {
    text-decoration: underline;
    color: #aaaaaa;
  }
}

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  // background-color: #33383b;
  color: #ffffff;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 15px 10px;
  vertical-align: middle;
}

.footer-distributed .footer-center i.fa-envelope {
  font-size: 17px;
  line-height: 38px;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-distributed .footer-center p a {
  color: #5383d3;
  text-decoration: none;
}

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: #dddddd;
  font-size: 18px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

@media (max-width: 880px) {
  .footer-distributed {
    font: bold 14px sans-serif;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 40px;
    text-align: center;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
  .main {
    line-height: normal;
    font-size: auto;
  }
}
</style>
