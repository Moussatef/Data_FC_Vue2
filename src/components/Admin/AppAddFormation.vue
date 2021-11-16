<template>
  <div class="overflow-hidden">
    <!-- Dialog for succes adding -->
    <vs-dialog width="550px" prevent-close not-center v-model="activeDilogS">
      <template #header>
        <h4 class="not-margin">Ajouter avec succès</h4>
      </template>

      <div class="con-content">
        <p>
          {{ description }}
        </p>
      </div>

      <template #footer>
        <div class="">
          <vs-button
            class="px-2 py-1"
            @click="
              activeDilogS = false;
              activeTypeF = false;
            "
            transparent
          >
            Ok
          </vs-button>
        </div>
      </template>
    </vs-dialog>
    <!-- Dialog if eny Error happened whene we adding -->
    <vs-dialog
      width="550px"
      not-padding
      prevent-close
      not-center
      v-model="alertDanger"
    >
      <div>
        <vs-alert danger v-model="alertDanger">
          <template #title> Error message </template>
          {{ errorDesc }}
        </vs-alert>
      </div>
    </vs-dialog>

    <!-- Container add formation an inputs Dailog -->

    <div class="container my-4">
      <div class="row justify-content-between bg-white py-3 px-5">
        <div class="col-lg-10 col-10">
          <h2>Ajouter Formation</h2>
        </div>
        <div class="col-lg-2 col-2">
          <vs-button
            size="large"
            gradient
            :active="activebtn == 1"
            @click="
              activebtn = 1;
              dialog_v = true;
            "
          >
            Ajouter
          </vs-button>
        </div>
        <v-dialog v-model="dialog_v" persistent max-width="1200px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Ajouter une formation</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="10" lg="8" xl="5">
                    <div
                      class="
                        card
                        border-0
                        shadow
                        justify-content-center
                        align-items-center
                      "
                    >
                      <img
                        v-if="img_src == false"
                        src="../../assets/OrongeUL/Attheofficerafiki.png"
                        width="200"
                        height="200"
                        class="rounded-lg"
                        alt=""
                        id="src_formation"
                      />
                      <img
                        v-if="img_src == true"
                        :src="imagepreview"
                        width="200"
                        height="200"
                        class="rounded-lg mt-2"
                        alt=""
                        id="src_formation"
                      />
                      <input
                        type="file"
                        accept="image/*"
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
                        :active="activeImg == 6"
                        @click="
                          activeImg = 6;
                          $refs.formation_img.click();
                        "
                      >
                        <i class="fa fa-upload"></i>
                      </vs-button>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="12" md="10" lg="8" xl="7">
                    <h5>Type de formation</h5>
                    <div class="d-flex">
                      <!-- <vs-select
                      placeholder="sélectionner le type de formation"
                      v-model="value1"
                    >
                      <vs-option
                        class="overflow-hidden mb-2 py-4"
                        v-for="cat in categories"
                        :key="cat.id"
                        :label="cat.codeF + ' : ' + cat.titre"
                        :value="cat.id"
                      >
                        {{ cat.codeF }} : {{ cat.titre }}
                      </vs-option>
                    </vs-select> -->

                      <v-select
                        v-model="value1"
                        :items="categories"
                        :item-text="title"
                        :item-value="value"
                        label="sélectionner le type de formation"
                        data-vv-name="select"
                        required
                      ></v-select>
                      <div class="mx-3 py-4">
                        <vs-button border @click="activeTypeF = !activeTypeF">
                          <i class="fa fa-plus" aria-hidden="true"></i>
                        </vs-button>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      label="Legal last name*"
                      hint="example of persistent helper text"
                      persistent-hint
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      label="Password*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      :items="['0-17', '18-29', '30-54', '54+']"
                      label="Age*"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-autocomplete
                      :items="[
                        'Skiing',
                        'Ice hockey',
                        'Soccer',
                        'Basketball',
                        'Hockey',
                        'Reading',
                        'Writing',
                        'Coding',
                        'Basejump',
                      ]"
                      label="Interests"
                      multiple
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog_v = false">
                Close
              </v-btn>
              <v-btn color="blue darken-1" text @click="dialog_v = false">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

      <!-- Dialog for adding type formation -->
      <vs-dialog width="50vw" not-center v-model="activeTypeF">
        <template #header>
          <h4 class="not-margin">Type de <b>Formation</b></h4>
        </template>

        <div class="row px-4">
          <div class="col-12 my-3">
            <vs-input
              v-model="inpCodeType"
              class="my-3"
              border
              success
              icon-after
              label-placeholder="Code Type du formation"
            >
              <template #icon>
                <i class="fa fa-tag"></i>
              </template>
            </vs-input>
          </div>
          <div class="col-12 my-2">
            <vs-input
              v-model="inpTitreType"
              class="my-3"
              border
              success
              icon-after
              label-placeholder="Titre Type du formation"
            >
              <template #icon>
                <i class="fa fa-sticky-note-o"></i>
              </template>
            </vs-input>
          </div>
        </div>

        <template #footer>
          <div
            class="
              d-flex
              align-items-center
              justify-content-center
              flex-direction-column
            "
          >
            <vs-button @click="addType" class="px-2 py-1" transparent>
              Ok
            </vs-button>
            <vs-button
              @click="activeTypeF = false"
              class="px-2 py-1"
              dark
              transparent
            >
              Cancel
            </vs-button>
          </div>
        </template>
      </vs-dialog>
      <!-- Model for adding formation -->

      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="row justify-content-between">
            <div class="col-10"></div>

            <vs-button
              class="close float-right col-2"
              squire
              shadow
              @click="closeM()"
            >
              <i class="fa fa-close"></i>
            </vs-button>
          </div>
          <div class="con-form">
            <h2 class="text-center mb-4">Ajouter une formation</h2>
            <div class="row justify-content-evnly align-items-center">
              <div class="col-12 row justify-content-between mb-5">
                <div class="col-lg-5 col-md-12 col-12">
                  <div
                    class="
                      card
                      border-0
                      shadow
                      justify-content-center
                      align-items-center
                    "
                  >
                    <img
                      v-if="img_src == false"
                      src="../../assets/OrongeUL/Attheofficerafiki.png"
                      width="200"
                      height="200"
                      class="rounded-lg"
                      alt=""
                      id="src_formation"
                    />
                    <img
                      v-if="img_src == true"
                      :src="imagepreview"
                      width="200"
                      height="200"
                      class="rounded-lg mt-2"
                      alt=""
                      id="src_formation"
                    />
                    <input
                      type="file"
                      accept="image/*"
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
                      :active="activeImg == 6"
                      @click="
                        activeImg = 6;
                        $refs.formation_img.click();
                      "
                    >
                      <i class="fa fa-upload"></i>
                    </vs-button>
                  </div>
                </div>
                <div class="col-lg-7 col-md-12 col-sm-12 col-12 my-4">
                  <h5>Type de formation</h5>
                  <div class="d-flex">
                    <!-- <vs-select
                      placeholder="sélectionner le type de formation"
                      v-model="value1"
                    >
                      <vs-option
                        class="overflow-hidden mb-2 py-4"
                        v-for="cat in categories"
                        :key="cat.id"
                        :label="cat.codeF + ' : ' + cat.titre"
                        :value="cat.id"
                      >
                        {{ cat.codeF }} : {{ cat.titre }}
                      </vs-option>
                    </vs-select> -->

                    <v-select
                      v-model="select"
                      :items="items"
                      label="Select"
                      data-vv-name="select"
                      required
                    ></v-select>

                    <vs-button
                      class="mx-3"
                      size="large"
                      border
                      @click="activeTypeF = !activeTypeF"
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                    </vs-button>
                  </div>
                </div>
              </div>

              <div class="col-lg-6 col-12">
                <vs-input
                  v-model="inpCodeF"
                  class="my-3"
                  border
                  primary
                  icon-after
                  label-placeholder="Code formation"
                >
                  <template #icon>
                    <i class="fa fa-tag"></i>
                  </template>
                </vs-input>
              </div>
              <div class="col-lg-6 col-12">
                <vs-input
                  v-model="inpTitre"
                  class="my-3"
                  border
                  primary
                  icon-after
                  label-placeholder="Titre"
                >
                  <template #icon>
                    <i class="fa fa-sticky-note-o"></i>
                  </template>
                </vs-input>
              </div>
              <!-- //row 2 -->
              <div class="col-lg-6 col-12">
                <textarea
                  v-model="inpObj"
                  class="form-control mb-2"
                  placeholder="objectifs"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-lg-6 col-12">
                <vs-input
                  v-model="inpPc"
                  class="my-3"
                  border
                  primary
                  icon-after
                  label-placeholder="Population cible"
                >
                  <template #icon>
                    <i class="fa fa-tasks"></i>
                  </template>
                </vs-input>
              </div>
              <!-- //row 3 -->
              <div class="col-lg-12 col-12">
                <vs-input
                  v-model="inpDf"
                  class="my-3"
                  border
                  primary
                  icon-after
                  label-placeholder="Durée de la formation"
                >
                  <template #icon>
                    <i class="fa fa-clock-o"></i>
                  </template>
                </vs-input>
              </div>
              <div
                class="
                  col-lg-12 col-12
                  row
                  justify-content-between
                  align-items-center
                "
              >
                <div class="col-10">
                  <vs-input
                    v-model="inpProgramme"
                    class="my-3"
                    border
                    primary
                    icon-after
                    label-placeholder="Programme de formation"
                  >
                    <template #icon>
                      <i class="fa fa-puzzle-piece"></i>
                    </template>
                  </vs-input>
                </div>
                <div class="col-1">
                  <vs-button size="large" @click="putProgramme(inpProgramme)">
                    <i class="fa fa-plus" aria-hidden="true"></i>
                  </vs-button>
                </div>
              </div>
              <div
                class="
                  col-lg-12
                  d-flex
                  flex-wrap
                  justify-content-center
                  align-items-center
                "
              >
                <vs-alert shadow>
                  <template #title> </template>
                  <div v-for="(pro, i) in programme" :key="i" class="m-1">
                    <div
                      class="
                        d-flex
                        justify-content-start
                        align-items-center
                        fs-6
                      "
                    >
                      <i class="fa fa-check mt-1 mx-2"></i>

                      {{ pro }}
                      <vs-button
                        size="small"
                        class="ms-5"
                        @click="removeEl(pro)"
                      >
                        <i class="fa fa-close"></i>
                      </vs-button>
                    </div>
                  </div>
                </vs-alert>
              </div>
              <div
                class="row col-4 offset-md-8"
                v-if="
                  inpCodeF &&
                  inpTitre &&
                  inpObj &&
                  inpPc &&
                  inpDf &&
                  programme.length &&
                  value1
                "
              >
                <vs-button
                  size="large"
                  class="my-4"
                  @click="
                    addFormation([
                      inpCodeF,
                      inpTitre,
                      inpObj,
                      inpPc,
                      inpDf,
                      programme,
                      image,
                      value1,
                    ])
                  "
                >
                  <i class="fa fa-plus me-3" aria-hidden="true"></i>Ajouter
                </vs-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <AppDenger title="Error" :description="errorDesc" :activeDang="alertDanger"/> -->
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AppDenger from "../Alert/AppDenger.vue";
import axios from "axios";
export default {
  components: {
    AppDenger,
  },
  data: () => ({
    activeDilogS: false,
    activebtn: 0,
    activeDlg: false,
    value1: "",
    programme: [],
    inpProgramme: undefined,
    inpCodeF: undefined,
    inpTitre: undefined,
    inpDf: undefined,
    inpPc: undefined,
    inpObj: undefined,

    inpCodeType: undefined,
    inpTitreType: undefined,

    activeTypeF: false,
    activeClos: 0,
    activeImg: 0,
    imagepreview: null,
    image: null,
    img_src: false,
    token: localStorage.getItem("token"),

    errorDesc: "",
    alertDanger: false,

    description: "",

    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],

    dialog_v: false,
  }),

  methods: {
    ...mapActions([
      "getAllFormationEn",
      "getAllCategories",
      "addTypeFormation",
    ]),
    addType() {
      this.$store
        .dispatch("addTypeFormation", [this.inpCodeType, this.inpTitreType])
        .then((res) => {
          this.description =
            "Type formation est ajoutée avec succès à la base de données";
          this.activeDilogS = true;
          this.inpCodeType = undefined;
          this.inpTitreType = undefined;
        })
        .catch((err) => {
          this.errorDesc = err.message;
          this.alertDanger = true;
        });
      // this.addTypeFormation([this.inpCodeType, this.inpTitreType])
      // this.$store.dispatch()
    },
    title: (item) => item.codeF + " : " + item.titre,
    value: (item) => item.id,
    async addFormation(param) {
      this.$store
        .dispatch("addFormation", param)
        .then((res) => {
          this.description =
            "La formation est ajoutée avec succès à la base de données";
          this.activeDilogS = true;
          this.inpProgramme = undefined;
          this.inpCodeF = undefined;
          this.inpTitre = undefined;
          this.inpDf = undefined;
          this.inpPc = undefined;
          this.inpObj = undefined;
          this.programme.splice(0, this.programme.length);
          this.closeM();
        })
        .catch((err) => {
          this.errorDesc = err;
          this.alertDanger = true;
        });
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
    putProgramme(item) {
      if (item) {
        this.programme.push(item);
        this.inpProgramme = undefined;
      }
    },
    removeEl(element) {
      this.programme = this.programme.filter((e) => e !== element);
      //   e.preventDefault();
    },

    openM() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeM() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    },
    exitModal() {
      var modal = document.getElementById("myModal");
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
  create() {
    this.exitModal();
  },
  computed: mapGetters(["formationEnt", "categories"]),
  mounted() {
    this.getAllFormationEn();
    this.getAllCategories();
  },
};
</script>

<style scoped>
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow-y: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 8% auto 3%; /* 15% from the top and centered */
  padding: 10px 40px;
  border: 1px solid #888;
  width: 50%; /* Could be more or less, depending on screen size */
}

/* The Close Button */
.close {
  color: #aaa;
  float: right;
  font-size: 18px;
  font-weight: bold;
  width: 40px;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

.badge_prm {
  background: linear-gradient(130deg, #0fc6eb85 0%, #9c9c9cb6 100%);
  color: #fff;
}
</style>
