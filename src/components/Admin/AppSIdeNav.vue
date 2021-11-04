<template>
  <div class="main ">
    <div class="side-navbar">
      <ul>
        <li class="my-5">
          <div class="bx bx-menu" @click="menu()" id="menu-icon"></div>
        </li>
        <li>
          <router-link to="/admin-dashboard">
            <span class="icon"><i class="bx bxs-home"></i></span>
            <span class="text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin-formation-en">
            <span class="icon"
              ><i class="bx bxs-server" aria-hidden="true"></i
            ></span>
            <span class="text">Formation</span>
          </router-link>
        </li>

        <li>
          <router-link to="/admin-client">
            <span class="icon"><i class="bx bxs-group"></i></span>
            <span class="text">participants</span>
          </router-link>
        </li>

        <li>
          <router-link to="/info-admin">
            <span class="icon"><i class="bx bxs-user"></i></span>
            <span class="text">Profile</span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin-formation">
            <span class="icon"><i class="bx bxs-cloud-upload"></i></span>
            <span class="text">Upload</span>
          </router-link>
        </li>
        <li>
          <router-link to="/admin-formation">
            <span class="icon"><i class="bx bxs-cog"></i></span>
            <span class="text">Setting</span>
          </router-link>
        </li>
        <li>
          <a @click="logout()">
            <span class="icon"><i class="bx bxs-log-out"></i></span>
            <span class="text">Log-Out</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSideNav",
  data: () => ({
    homeAct: true,
    formationAct: false,
    participantsAct: false,
    activeSidebar: false,
    profile: false,
  }),

  methods: {
    menu() {
      let sidenavbar = document.querySelector(".side-navbar");
      let content = document.querySelector(".content");
      sidenavbar.classList.toggle("active");
      content.classList.toggle("active");
    },
    async logout() {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        "Bearer " + localStorage.getItem("accessToken")
      );

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
      const res = await fetch(
        "http://127.0.0.1:8000/api/datafc/auth/logout",
        requestOptions
      );
      if (res.status === 200) {
        const result = await res.json();
        console.log(result);
        localStorage.clear();
        location.replace("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a {
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
  a {
    &.router-link-exact-active {
      background: #0f7892;
    }
  }
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
@media (max-width: 868px) {
  .side-navbar {
    width: 60px;
    left: -60px;
  }

  .side-navbar.active {
    left: 0;
  }

  #menu-icon {
    display: none;
  }
}
</style>
