<template>
  <div class="row justify-content-evenly">
    <div class="col-xxl-4 col-lg-8 col-12 bg-white">
      <div class="text-center p-2 shadow-md">
        <img
          v-if="!imagepreview"
          :src="company.img"
          class=" my-3 mx-auto"
          width="300"
          height="80"
          alt=""
        />
        <vs-avatar
          v-if="imagepreview"
          class="rounded-circle my-3 mx-auto"
          size="150"
          badge
          history
          history-gradient
          badge-position="top-left"
          badge-color="success"
        >
          <img
            v-if="imagepreview"
            :src="imagepreview"
            width="100"
            height="100"
            alt=""
          />
          <template #icons>
            <i
              class="fa fa-pencil-square-o"
              @click="$refs.profile_img.click()"
              aria-hidden="true"
            ></i>
          </template>
        </vs-avatar>
        <input
          type="file"
          accept="image/*"
          ref="profile_img"
          class="invisible"
          id="img_profile"
          @change="imageSelected"
        />
        <div class="d-flex justify-content-center align-items-center">
          <h5 class="text-uppercase">{{ company.nom }}</h5>
          <vs-button class="" shadow>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </vs-button>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <h6>{{ company.email }}</h6>
          <vs-button class="" shadow>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </vs-button>
        </div>
        <p>Entreprise</p>
      </div>
    </div>
    <div class="col-xxl-7 col-lg-10 col-12 bg-white">
      <div class="p-2">
        <div
          class="row justify-content-start align-items-start mt-3"
          v-if="company.adresse"
        >
          <h5 class="col-lg-2 col-12 text-start">Directeur :</h5>
          <p class="text-uppercase text-start col-lg-8 col-10">
            {{ company.personne.nom }} {{ company.personne.prenom }}
          </p>
          <vs-button class=" col-1" shadow>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </vs-button>
        </div>
        <div class="row justify-content-start align-items-start mt-3">
          <h5 class="col-lg-2 col-12 text-start">Adresse :</h5>
          <p class="text-uppercase text-start col-lg-8 col-10" v-if="company.adresse">
            {{ company.adresse }}
          </p>
          <p class="text-uppercase text-start col-4 text-muted" v-else>
            Ajouter entreprise adresse
          </p>
          <vs-button class="col-1" shadow>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </vs-button>
        </div>
        <div class="row justify-content-start align-items-start mt-3">
          <h5 class="col-lg-2 col-12 text-start">Ville :</h5>
          <p class="text-uppercase text-start col-lg-4 col-10" v-if="company.ville">
            {{ company.ville }}
          </p>
          <p class="text-uppercase text-start col-lg-4 col-10 text-muted" v-else>
            Ajoute entreprise ville
          </p>
          <vs-button class="col-1" shadow>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </vs-button>
        </div>

        <div class="row justify-content-start align-items-start mt-3">
          <h5 class="col-lg-2 col-12 text-start">Telephone:</h5>
          <p class="text-uppercase text-start text-muted col-lg-4 col-10">
            {{ company.tele }}
          </p>
          <vs-button class="col-1" shadow>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </vs-button>
        </div>
        <div class="row justify-content-start align-items-start mt-3">
          <h5 class="col-lg-2 col-12 text-start">Fixe:</h5>
          <p class="text-uppercase text-start text-muted col-lg-4 col-10">
            {{ company.fixe }}
          </p>
          <vs-button class="col-1" shadow>
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppADminInfo",
  data: function () {
    return {
      imagepreview: undefined,
    };
  },
  computed: {
    ...mapGetters(["auth", "loading", "company"]),
  },

  methods: {
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
};
</script>

