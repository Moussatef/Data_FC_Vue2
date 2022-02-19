<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class="pb-5 bg-light">
      <v-expansion-panels>
        <v-expansion-panel v-for="(cat, x) in categories" :key="x">
          <v-expansion-panel-header class="fs-4">
            {{ cat.codeF }} : {{ cat.titre }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
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
              <v-sheet
                v-if="!loading_F"
                :color="`grey ${isDark ? 'darken-2' : 'lighten-4'}`"
                class="pa-3"
              >
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="300"
                  type="card"
                ></v-skeleton-loader> </v-sheet
              ><v-sheet
                v-if="!loading_F"
                :color="`grey ${isDark ? 'darken-2' : 'lighten-4'}`"
                class="pa-3"
              >
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="300"
                  type="card"
                ></v-skeleton-loader> </v-sheet
              ><v-sheet
                v-if="!loading_F"
                :color="`grey ${isDark ? 'darken-2' : 'lighten-4'}`"
                class="pa-3"
              >
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="300"
                  type="card"
                ></v-skeleton-loader>
              </v-sheet>
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
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

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
                <span class="text-h5">Formation programme</span>
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

      <!-- Demande devis Dialog -->
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog_devis" persistent max-width="900px">
            <v-card>
              <v-toolbar color="primary" dark
                ><span class="text-h4">Demander un devis</span></v-toolbar
              >

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
                          v-model="companyname_Mo"
                          :counter="20"
                          :rules="nameRules"
                          label="Entreprise*"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="raisonsociale_Mo"
                          :counter="20"
                          :rules="nameRules"
                          label="Raison sociale *"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Adresse*"
                          v-model="address_Mo"
                          :rules="addressRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="phone_Mo"
                          label="Téléphone*"
                          :rules="teleRules"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          v-model="email_Mo"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="responsable_Mo"
                          label="Responsable ou Interlocuteur :"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          v-model="responsablephone_Mo"
                          label="Téléphone :"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>

                      <v-row class="align-items-center">
                        <v-col cols="12" md="6">
                          <h6>Nombre de participants à former :</h6>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-text-field
                            v-model="nbperson_Mo"
                            id="participants_nb"
                            type="number"
                            style="width: 100px"
                            min="1"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                      <v-col cols="12" md="12">
                        <label for="" class="mb-2"
                          >Lieux ou ville souhaitée pour la formation : possible
                          partout au Maroc
                        </label>
                      </v-col>
                    </v-row>

                    <!-- person == 'physique' -->
                    <v-row v-if="person == 'physique'">
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="firstname_Ph"
                          :counter="20"
                          :rules="nameRules"
                          label="Nom *"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="lastname_Ph"
                          :counter="20"
                          :rules="nameRules"
                          label="Prenom *"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          label="Adresse"
                          v-model="address_Ph"
                          :rules="addressRules"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="phone_Ph"
                          label="Téléphone"
                          :counter="20"
                          :rules="teleRules"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12">
                        <v-text-field
                          label="Email*"
                          v-model="email_Ph"
                          :rules="emailRules"
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="6">
                        <v-select
                          v-model="typedorganisme_ph"
                          :items="items"
                          :rules="[(v) => !!v || 'd’organisme est requis']"
                          label="Pour quel type d’organisme travaillez-vous ? "
                          required
                        ></v-select>
                      </v-col>
                      <v-col cols="12" md="6" v-if="typedorganisme_ph">
                        <v-text-field
                          v-model="organismename_ph"
                          :label="'Nom de ' + typedorganisme_ph"
                          :rules="[
                            (v) => !!v || 'Nom de d’organisme est requis',
                          ]"
                          :counter="20"
                          persistent-hint
                          required
                        ></v-text-field>
                      </v-col>

                      <v-col cols="12" md="12" class="text-start">
                        <label for="" class="fs-5"
                          >Souhaitez-vous un devis pour vous seul ou pour un
                          groupe de participants ?</label
                        >

                        <v-radio-group
                          v-model="devis_participant"
                          column
                          class="ms-4"
                        >
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
                        <v-row
                          class="align-items-center m-0 p-0"
                          v-if="devis_participant == 'groupe'"
                        >
                          <v-col cols="12" md="6">
                            <h6>Indiquez le nombre de participants :</h6>
                          </v-col>
                          <v-col cols="12" md="2">
                            <v-text-field
                              v-model="nbperson_ph"
                              id="participants_nb"
                              type="number"
                              min="1"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="12" class="mt-0"> </v-col>
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
                    v-if="person == 'physique'"
                    color="blue darken-1"
                    text
                    :disabled="
                      !valid ||
                      !devis_participant ||
                      !validNbparticipant ||
                      !typedorganisme_ph ||
                      !organismename_ph
                    "
                    @click="
                      validate;
                      dialog_confirmation = true;
                    "
                  >
                    Envoyer la demande
                  </v-btn>
                  <v-btn
                    v-if="person == 'morale'"
                    color="blue darken-1"
                    text
                    :disabled="!valid"
                    @click="
                      validate;
                      dialog_confirmation_mo = true;
                    "
                  >
                    Envoyer la demande
                  </v-btn>
                </v-card-actions>
              </v-form>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
      <!-- confiramstion for person physique -->
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog_confirmation" persistent max-width="590">
            <v-card>
              <v-overlay :value="overlay">
                <v-progress-circular
                  indeterminate
                  size="64"
                ></v-progress-circular>
              </v-overlay>
              <v-card-title class="text-h5">
                Confirmation de demande
              </v-card-title>
              <v-card-text>Je confirme ma demande</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog_confirmation = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="
                    overlay = !overlay;
                    demandEnvoyer(
                      formationShow.id,
                      firstname_Ph,
                      lastname_Ph,
                      email_Ph,
                      phone_Ph,
                      address_Ph,
                      typedorganisme_ph,
                      organismename_ph,
                      nbperson_ph
                    );
                  "
                >
                  Agréé
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
      <!-- confirmation for person morale -->
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog_confirmation_mo" persistent max-width="590">
            <v-card>
              <v-overlay :value="overlay">
                <v-progress-circular
                  indeterminate
                  size="64"
                ></v-progress-circular>
              </v-overlay>
              <v-card-title class="text-h5">
                Confirmation de demande
              </v-card-title>
              <v-card-text>Je confirme ma demande</v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="green darken-1"
                  text
                  @click="dialog_confirmation_mo = false"
                >
                  Annuler
                </v-btn>
                <v-btn
                  color="green darken-1"
                  text
                  @click="
                    overlay = true;
                    demandEnvoyerMo(
                      formationShow.id,
                      companyname_Mo,
                      raisonsociale_Mo,
                      email_Mo,
                      phone_Mo,
                      address_Mo,
                      responsable_Mo,
                      responsablephone_Mo,
                      nbperson_Mo
                    );
                  "
                >
                  Agréé
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>
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
      inject: {
        theme: {
          default: { isDark: false },
        },
      },

      overlay: false,

      active2: false,
      active22: false,

      formationShow: undefined,

      btnactive: false,
      activeVd: false,
      dialog_devis: false,

      person: undefined,
      devis_participant: undefined,

      valid: false,
      select_organism: null,

      // Varibals for person physique
      firstname_Ph: null,
      lastname_Ph: null,
      email_Ph: null,
      phone_Ph: null,
      address_Ph: null,
      typedorganisme_ph: null,
      organismename_ph: null,
      nbperson_ph: 1,
      validNbparticipant: false,
      dialog_confirmation: false,

      // Varibals for person morale
      companyname_Mo: null,
      raisonsociale_Mo: null,
      email_Mo: null,
      phone_Mo: null,
      address_Mo: null,
      responsable_Mo: null,
      responsablephone_Mo: null,
      nbperson_Mo: 1,
      dialog_confirmation_mo: false,

      items: [
        "Entreprise privée",
        "Administration publique",
        "Association",
        "Fondation",
      ],
      name: "",
      entrepriseName: undefined,
      addressRules: [
        (v) => !!v || "adresse est requis",
        (v) =>
          (v && v.length <= 100) ||
          "Adresse doit comporter moins de 100 caractères",
      ],
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
        (v) => !!v || "Téléphone is required",
        (v) => (v && v.length <= 20) || "Téléphone doit être valide",
      ],
      description: "",
    };
  },
  watch: {
    person: function (val) {
      this.reset;
      this.resetValidation();
      this.select = null;
    },

    nbperson_ph: function (val) {
      if (this.devis_participant == "groupe") {
        if (val == 1) {
          this.validNbparticipant = false;
        } else this.validNbparticipant = true;
      }
    },

    devis_participant: function (val) {
      if (val != "groupe") {
        this.validNbparticipant = true;
      }
    },
  },
  methods: {
    ...mapActions([
      "getAllFormationEn",
      "getAllCategories",
      "sendDemandPersonPh",
    ]),

    demandEnvoyer(
      formation_id,
      firstname,
      lastname,
      email,
      phone,
      address,
      typedorganisme,
      organismename,
      nbperson
    ) {
      if (
        formation_id &&
        firstname &&
        lastname &&
        email &&
        phone &&
        address &&
        typedorganisme &&
        organismename &&
        nbperson &&
        this.devis_participant
      ) {
        this.$store
          .dispatch("sendDemandPersonPh", [
            formation_id,
            firstname,
            lastname,
            email,
            phone,
            address,
            typedorganisme,
            organismename,
            nbperson,
          ])
          .then((res) => {
            this.description = "La demande a été envoyée avec succès";
            this.dialog_devis = false;
            this.dialog_confirmation = false;
            this.overlay = false;
            this.showAlert();

            this.firstname_Ph =
              this.lastname_Ph =
              this.email_Ph =
              this.phone_Ph =
              this.address_Ph =
              this.typedorganisme_ph =
              this.organismename_ph =
                undefined;

            this.nbperson_ph = 1;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
      }
    },

    demandEnvoyerMo(
      formation_id,
      companyname,
      raisonsociale,
      email,
      phone,
      address,
      responsable,
      responsablephone,
      nbperson
    ) {
      if (
        formation_id &&
        companyname &&
        raisonsociale &&
        email &&
        phone &&
        address &&
        responsable &&
        responsablephone &&
        nbperson
      ) {
        this.$store
          .dispatch("sendDemandPersonMo", [
            formation_id,
            companyname,
            raisonsociale,
            email,
            phone,
            address,
            responsable,
            responsablephone,
            nbperson,
          ])
          .then((res) => {
            this.description = "La demande a été envoyée avec succès";
            this.dialog_devis = false;
            this.dialog_confirmation_mo = false;
            this.overlay = false;
            this.showAlert();

            this.companyname_Mo =
              this.raisonsociale_Mo =
              this.email_Mo =
              this.phone_Mo =
              this.address_Mo =
              this.responsable_Mo =
              this.responsablephone_Mo =
                undefined;

            this.nbperson_Mo = 1;
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
      }
    },

    showAlert() {
      // Use sweetalert2
      // this.$swal('Hello Vue world!!!');

      this.$swal.fire({
        position: "center",
        icon: "success",
        title: this.description,
        showConfirmButton: false,
        timer: 1500,
      });
    },

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
    ...mapGetters([
      "formationEnt",
      "categories",
      "auth",
      "loading_F",
      "demandLoading",
    ]),
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
