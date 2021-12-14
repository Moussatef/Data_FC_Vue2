<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class="pb-5 bg-light">
      <div class="accordion accordion-flush mx-1" id="accordionFlushExample">
        <div class="accordion-item" :key="x" v-for="(cat, x) in categories">
          <h2 class="accordion-header" :id="'flush-headingOne' + cat.codeF">
            <button
              class="accordion-button collapsed fs-4"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="'#flush-collapseOne' + cat.codeF"
              aria-expanded="false"
              :aria-controls="'flush-collapseOne' + cat.codeF"
            >
              {{ cat.codeF }} : {{ cat.titre }}
            </button>
          </h2>
          <div
            :id="'flush-collapseOne' + cat.codeF"
            class="accordion-collapse collapse"
            :class="{ show: cat.id == 1 }"
            :aria-labelledby="'flush-headingOne' + cat.codeF"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body p-3">
              <div
                class="
                  row
                  row-cols-1
                  row-cols-md-1
                  row-cols-lg-2
                  row-cols-xl-3
                  row-cols-xxl-4
                  g-5
                  justify-content-center
                "
              >
                <div :key="i" v-for="(tr, i) in cat.formation">
                  <v-card
                    max-width="374"
                    class="mx-auto my-4 text-start card-form"
                    data-aos="zoom-out-down"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in"
                  >
                    <template slot="progress">
                      <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                      ></v-progress-linear>
                    </template>
                    <v-img height="250" :src="tr.imgFormation"></v-img>

                    <v-card-title class="text-start text-wrap">
                      <h4>{{ tr.codeF }} : {{ tr.titre }}</h4>
                    </v-card-title>
                    <v-card-text>
                      <v-row align="center" class="mx-0 mb-1">
                        <v-rating
                          :value="5"
                          color="amber"
                          dense
                          half-increments
                          readonly
                          size="22"
                        ></v-rating>
                        <!-- <div class="grey--text ms-3 mb-5">4.5 (413)</div> -->
                      </v-row>
                      <!-- <div class="my-4 text-subtitle-1">
                          $ • Italian, Cafe
                           </div> -->
                    </v-card-text>
                    <v-divider class="mx-4"></v-divider>
                    <v-card-actions>
                      <div
                        class="
                          container
                          row
                          justify-content-start
                          align-items-center
                        "
                      >
                        <vs-button
                          border
                          square
                          class="p-1"
                          color="#25767a"
                          @click="
                            formationShow = tr;
                            active2 = true;
                          "
                        >
                          Voir fiche technique de la formation
                        </vs-button>
                        <vs-button
                          border
                          square
                          class="p-1"
                          color="#fe6f2e"
                          @click="
                            showFormDevis(tr);
                            formationShow = tr;
                          "
                        >
                          Demander un devis
                        </vs-button>
                      </div>
                      <div v-if="auth.role == 'client'">
                        <vs-button
                          v-if="tr.block == 0"
                          flat
                          icon
                          color="danger"
                          border
                        >
                          <i class="bi bi-star"></i>
                        </vs-button>
                        <vs-button
                          v-if="tr.block == 1"
                          icon
                          color="danger"
                          border
                          active
                        >
                          <i class="bi bi-star-fill"></i>
                        </vs-button>
                      </div>
                    </v-card-actions>
                  </v-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <vs-dialog
        v-if="formationShow"
        width="1400px"
        not-center
        v-model="activeVd"
      >
        <template #header>
          <h4 class="not-margin">Bande <b> annonce </b></h4>
        </template>

        <div class="container">
          <div class="row" v-if="formationShow.trailer"></div>
        </div>
        <template #footer>
          <div class="d-flex justify-content-end">
            <vs-button
              @click="
                active2 = true;
                activeVd = false;
              "
              transparent
            >
              Suivant
            </vs-button>
            <vs-button @click="activeVd = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog> -->

      <vs-dialog
        v-if="formationShow"
        width="1600px"
        not-center
        v-model="active22"
      >
        <template #header>
          <h4 class="not-margin">Formations<b> Interentreprises </b></h4>
        </template>
        <div class="row justify-content-between">
          <div
            class="
              col-xxl-4 col-xl-8 col-lg-12 col-12
              card
              border-0
              shadow
              justify-content-center
              align-items-center
              my-4
              mx-ms-auto
            "
          >
            <img
              :src="formationShow.imgFormation"
              width="400"
              height="400"
              class="rounded-lg mt-2"
              alt=""
              id="src_formation"
            />
          </div>
          <div class="col-xxl-8 col-xl-12 col-lg-12 col-12 row text-start my-4">
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Code Formation :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.codeF }}
                </p>
              </div>
            </div>
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Titre :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.titre }}
                </p>
              </div>
            </div>
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Objectifs :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.objectifs }}
                </p>
              </div>
            </div>
            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Population cible :</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.population_cible }}
                </p>
              </div>
            </div>

            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Durée de la formation:</b></p>
              </div>
              <div class="col-lg-7">
                <p>
                  {{ formationShow.duree_dormation }}
                </p>
              </div>
            </div>

            <div class="col-12 row align-items-start">
              <div class="col-lg-4">
                <p><b>Programme de formation :</b></p>
              </div>
              <div class="col-lg-7">
                <div
                  class="d-flex align-items-start"
                  :key="j"
                  v-for="(li, j) in formationShow.programme"
                >
                  <i class="fa fa-check mt-1 me-3" aria-hidden="true"></i>
                  <p>
                    {{ li.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="d-flex justify-content-end">
            <vs-button @click="dialog_devis = true" transparent>
              Demander un devis
            </vs-button>
            <vs-button @click="active2 = false" dark transparent>
              Annuler
            </vs-button>
          </div>
        </template>
      </vs-dialog>
      <!-- dialog for domand -->
      <template>
        <v-row justify="center">
          <v-dialog v-model="active2" persistent max-width="1600px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Demander un devis</span>
              </v-card-title>

              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                  <v-container>
                    <div
                      v-if="formationShow"
                      class="row justify-content-between"
                    >
                      <div
                        class="
                          col-xxl-4 col-xl-8 col-lg-12 col-12
                          card
                          border-0
                          shadow
                          justify-content-center
                          align-items-center
                          my-4
                          mx-ms-auto
                        "
                      >
                        <img
                          :src="formationShow.imgFormation"
                          width="400"
                          height="400"
                          class="rounded-lg mt-2"
                          alt=""
                          id="src_formation"
                        />
                      </div>
                      <div
                        class="
                          col-xxl-8 col-xl-12 col-lg-12 col-12
                          row
                          text-start
                          my-4
                        "
                      >
                        <div class="col-12 row align-items-start">
                          <div class="col-lg-4">
                            <p><b>Code Formation :</b></p>
                          </div>
                          <div class="col-lg-7">
                            <p>
                              {{ formationShow.codeF }}
                            </p>
                          </div>
                        </div>
                        <div class="col-12 row align-items-start">
                          <div class="col-lg-4">
                            <p><b>Titre :</b></p>
                          </div>
                          <div class="col-lg-7">
                            <p>
                              {{ formationShow.titre }}
                            </p>
                          </div>
                        </div>
                        <div class="col-12 row align-items-start">
                          <div class="col-lg-4">
                            <p><b>Objectifs :</b></p>
                          </div>
                          <div class="col-lg-7">
                            <p>
                              {{ formationShow.objectifs }}
                            </p>
                          </div>
                        </div>
                        <div class="col-12 row align-items-start">
                          <div class="col-lg-4">
                            <p><b>Population cible :</b></p>
                          </div>
                          <div class="col-lg-7">
                            <p>
                              {{ formationShow.population_cible }}
                            </p>
                          </div>
                        </div>

                        <div class="col-12 row align-items-start">
                          <div class="col-lg-4">
                            <p><b>Durée de la formation:</b></p>
                          </div>
                          <div class="col-lg-7">
                            <p>
                              {{ formationShow.duree_dormation }}
                            </p>
                          </div>
                        </div>

                        <div class="col-12 row align-items-start">
                          <div class="col-lg-4">
                            <p><b>Programme de formation :</b></p>
                          </div>
                          <div class="col-lg-7">
                            <div
                              class="d-flex align-items-start"
                              :key="j"
                              v-for="(li, j) in formationShow.programme"
                            >
                              <i
                                class="fa fa-check mt-1 me-3"
                                aria-hidden="true"
                              ></i>
                              <p>
                                {{ li.description }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="active2 = false">
                    Annuler
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog_devis = true"
                  >
                    Demander un devis
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog_devis" persistent max-width="900px">
            <v-card>
              <v-card-title>
                <span class="text-h5">Demander un devis</span>
              </v-card-title>

              <v-form ref="form" v-model="valid" lazy-validation>
                <v-card-text>
                  <v-container>
                    <v-row v-if="formationShow" class="text-start">
                      <v-col cols="12" sm="6" md="4">
                        <h6>Code de Formation :</h6>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <p class="fs-5">{{ formationShow.codeF }}</p>
                      </v-col>
                    </v-row>
                    <v-row v-if="formationShow" class="text-start">
                      <v-col cols="12" sm="6" md="4">
                        <h6>Thème de l’action :</h6>
                      </v-col>
                      <v-col cols="12" sm="6" md="8">
                        <p class="fs-5">{{ formationShow.titre }}</p>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-radio-group v-model="person" column>
                        <v-radio
                          label="Personne morale"
                          color="info"
                          value="morale"
                        ></v-radio>
                        <v-radio
                          label="Personne physique"
                          color="info"
                          value="physique"
                        ></v-radio>
                      </v-radio-group>
                    </v-row>

                    <v-row v-if="person == 'morale'">
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          :counter="20"
                          :rules="nameRules"
                          label="Entreprise*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          :counter="20"
                          :rules="nameRules"
                          label="Raison sociale *"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Adresse"
                          v-model="email"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Téléphone"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          v-model="email"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          label="Responsable ou Interlocuteur :"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          label="TEL :"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-row class="align-items-center">
                          <v-col cols="12" md="6">
                            <h6>Nombre de participants à former :</h6>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-text-field
                              v-model="participants_nb_mo"
                              id="participants_nb"
                              type="number"
                              style="width: 100px"
                              min="1"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="12">
                        <label for="" class="mb-2"
                          >Lieux ou ville souhaitée pour la formation : possible
                          partout au Maroc
                        </label>
                      </v-col>
                    </v-row>

                    <!-- person == 'physique' -->
                    <v-row v-if="person == 'physique'">
                      <v-col cols="12" sm="6" md="12">
                        <v-text-field
                          v-model="entrepriseName"
                          :counter="20"
                          :rules="nameRules"
                          label="Entreprise *"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          v-model="emailEn"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Téléphone"
                          :counter="20"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-select
                          v-model="select_organism"
                          :items="items"
                          :rules="[(v) => !!v || 'L’article est requis']"
                          label="Pour quel type d’organisme travaillez-vous ? "
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="6" v-if="select_organism">
                        <v-text-field
                          :label="'Nom de ' + select_organism"
                          :counter="20"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <!-- <v-col cols="12">
                        <v-text-field
                          label="Prestation(s) demandée(s) "
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col> -->
                      <v-col cols="12" md="12">
                        <v-radio-group v-model="devis_participant" column>
                          <v-radio
                            label="Pour moi seul "
                            color="info"
                            value="seul"
                          ></v-radio>
                          <v-radio
                            label="Pour un groupe de participants,"
                            color="info"
                            value="groupe"
                          ></v-radio>
                        </v-radio-group>
                      </v-col>
                      <v-col cols="12" v-if="devis_participant == 'groupe'">
                        <v-row class="align-items-center">
                          <v-col cols="12" md="6">
                            <h6>Indiquez le nombre de participants :</h6>
                          </v-col>
                          <v-col cols="12" md="6">
                            <v-text-field
                              v-model="participants_nb_ph"
                              id="participants_nb"
                              type="number"
                              style="width: 100px"
                              min="1"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" md="12">
                        <label for="" class="mb-2"
                          >Lieux ou ville souhaitée pour la formation : possible
                          partout au Maroc
                        </label>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indique un champ obligatoire</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="blue darken-1"
                    text
                    @click="dialog_devis = false"
                  >
                    Annuler
                  </v-btn>
                  <v-btn
                    color="blue darken-1"
                    text
                    :disabled="!valid"
                    @click="validate"
                  >
                    Demander
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AppSection from "@/components/inc/AppSection.vue";

export default {
  name: "FormationEn",
  data() {
    return {
      titre: "Formations Interentreprises",
      participants_nb_mo: 1,
      active2: false,
      formationShow: undefined,
      btnactive: false,
      activeVd: false,
      dialog_devis: false,
      person: undefined,
      devis_participant: undefined,
      participants_nb_ph: 1,
      valid: true,
      select_organism: null,
      items: [
        "Entreprise privée",
        "Administration publique",
        "Association",
        "Fondation",
      ],
      name: "",
      entrepriseName: undefined,
      nameRules: [
        (v) => !!v || "Le nom est requis",
        (v) =>
          (v && v.length <= 20) ||
          "Le nom doit comporter moins de 20 caractères",
      ],
      email: "",
      emailEn: "",
      emailRules: [
        (v) => !!v || "L'e-mail est requis",
        (v) => /.+@.+\..+/.test(v) || "L'email doit être valide",
      ],
      teleRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
    };
  },
  watch: {
    person: function (val) {
      this.reset;
      this.resetValidation();
      this.select = null;
    },
  },
  methods: {
    ...mapActions(["getAllFormationEn", "getAllCategories"]),
    showFormation(formation) {
      this.formationShow = formation;
      // this.active2 = true;
    },
    showFormDevis(formation) {
      this.person = undefined;
      this.dialog_devis = true;
    },
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },

  computed: {
    ...mapGetters(["formationEnt", "categories", "auth", "loading"]),
  },

  components: {
    AppSection,
  },

  mounted() {
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped>
.vs-dialog {
  background: rgba(var(--vs-background), 1);
  color: rgba(var(--vs-text), 1);
  position: relative;
  min-width: 400px;
  border-radius: var(--vs-radius);
  -webkit-transition: all 0.25s ease;
  transition: all 0.25s ease;
  -webkit-box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, var(--vs-shadow-opacity));
  max-width: 1800px;
  margin: auto;
}
.video--player__vid {
  width: 100%;
  height: 600px;
  z-index: 0;
}
.card-form {
  min-height: 580px;
}
.card_formation {
  transition: transform 250ms;
  overflow: hidden;
  transition: 0.8s;

  .card {
    overflow: hidden;
    min-height: 500px;
    // border-bottom: none;
    // border-top: none;
    // border-right: solid 1px rgb(255, 123, 0);
    // border-left: solid 1px rgb(255, 123, 0);
    border: none;
    border-radius: 10px;
    transition: 0.6s;
    // &:hover {
    //   border: solid 2px rgba(51, 161, 165, 0.486);
    //   // border-left: solid 2px rgb(36, 110, 112);
    //   transition: 0.6s;
    // }
  }
  img {
    transition: transform 250ms;
    overflow: hidden;
    transition: 0.8s;
    &:hover {
      // transform: translateY(-13px);
      // // cursor: pointer;
      // transition: 0.8s;

      transform: scaleX(1.2);
      transition: 0.8s;
    }
  }

  .card-text {
    color: #266874;
  }
  .card-footer {
    background: linear-gradient(
      180deg,
      #ffffffd3 0%,
      #2c968d7a 100%
    ) !important;
  }
}
</style>
