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
            <router-link class="nav-link" to="/sommes-nous"
              >Qui sommes nous</router-link
            >
          </li>
          <li>
            <router-link class="nav-link" to="/contact-nous"
              >Contact</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/demande-de-devis"
              >Demande de devis</router-link
            >
          </li>
          <div class="d-flex btn-conx">
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
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    active: 0,
    active_con: 0,
  }),
  methods: {},
};
</script>

<style lang="scss" scoped>
.btn-conx {
  margin-left: 7rem;
}
#mynavi {
  z-index: 9999999;
}
@media screen and (max-width: 1000px) {
  .btn-conx {
    margin: 5px auto;
  }
}
</style>
