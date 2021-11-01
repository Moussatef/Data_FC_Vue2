<template>
  <nav id="mynavi" class="navbar navbar-expand-xxl fixed-top navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../assets/logo.jpg" width="300" alt="" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-md-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link  mynaviItem" to="/"
              >Accueil</router-link
            >
          </li>
          <li>
            <router-link class="nav-link" to="/sommes-nous"
              >Qui sommes nous</router-link
            >
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle mynaviItem"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Nos services
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link class="dropdown-item" to="/ingenierie-de-formation"
                  >Ingénierie de formation</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/formation"
                  >FORMATION</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/l-externalisation"
                  >L’EXTERNALISATION</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/l-interim-pour-l-entreprise"
                  >L’INTERIM POUR L’ENTREPRISE</router-link
                >
              </li>
              <li>
                <router-link
                  class="dropdown-item"
                  to="/assistance-conseil-en-recrutement"
                  >Assistance conseil en recrutement</router-link
                >
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle mynaviItem"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Formation
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <router-link
                  class="dropdown-item"
                  to="/formations-interentreprises"
                  >Formations interentreprises</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/nos-formations"
                  >Nos formations</router-link
                >
              </li>
            </ul>
          </li>

          <li>
            <router-link class="nav-link" to="/contact-nous"
              >Contact</router-link
            >
          </li>

          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/demande-de-devis"
              >Demande de devis</router-link
            >
          </li> -->
          <div v-if="!token" class="d-flex btn-conx">
            <vs-button
              border
              class="p-1 fs-6 btn-conx "
              :active="active_con == 0"
              @click="active = 1"
              to="/login"
            >
              Se connecter
            </vs-button>
            <vs-button
              color="rgba(35, 138, 145, 1) "
              class="p-1 fs-6 "
              gradient
              :active="active == 6"
              @click="active = 6"
              to="/register"
            >
              S'inscrire
            </vs-button>
          </div>

          <div
            v-if="auth.role"
            class="flex-shrink-0 dropdown m-x-5 position-relative"
          >
          
            <a
              href="#"
              class="d-block link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
             
            >
              <img
                :src="host+auth.image"
                :alt="auth.nom[0]+'.'+auth.prenom[0]"
                width="32"
                height="32"
                class="rounded-circle"
                
              />
            </a>
            <ul
              class="dropdown-menu text-small shadow m-e-5"
              aria-labelledby="dropdownUser2"
            >
              <li v-if="auth.role == 'client'">
                <router-link class="dropdown-item" to="/client-profile"
                  ><i class="bx bxs-user me-2"></i>{{auth.nom}}
                </router-link>
              </li>
              <li v-if="auth.role == 'admin'">
                <router-link class="dropdown-item" to="/admin-dashboard"
                  ><i class="bx bxs-user me-2"></i>Profile A</router-link
                >
              </li>
              <li>
                <a class="dropdown-item" @click="logout()"
                  ><i class="bx bxs-log-out me-2"></i>Se déconnecter</a
                >
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: function() {
    return {
      active: 0,
      active_con: 0,
      token: localStorage.getItem("accessToken"),
      host:"http://127.0.0.1:8000",
    };
  },
  computed: {
    ...mapGetters(["auth"]),
  },
  methods: {
    ...mapActions(["mapActions"]),
    async logout() {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer " + this.token);

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
.btn-conx {
  margin-left: 7rem;
}
#mynavi {
  z-index: 9999999;
}
.m-x-5 {
  margin: 5px 9rem 5px 15rem;
}

@media screen and (max-width: 1400px) {
  .btn-conx {
    margin: 5px auto;
  }
  .m-x-5 {
    margin: 2% auto;
  }
}
</style>
