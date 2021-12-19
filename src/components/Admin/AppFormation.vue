<template>
  <div class="py-5 bg-light">
    <div class="text-center">
      <vs-dialog
        class="py-5"
        prevent-close
        not-padding
        v-if="formationObj"
        v-model="dialog"
        width="1200px"
      >
        <v-card class="">
          <v-card-title>
            <span class="text-h5">Modifier formation</span>
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
                      src="../../assets/cover/formation.jpg"
                      width="200"
                      height="200"
                      class="rounded-lg"
                      alt=""
                      id="src_formation"
                    />
                    <!-- <img
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
                    </vs-button> -->
                  </div>
                </v-col>
                <v-col cols="12" sm="12" md="10" lg="8" xl="7">
                  <h5 class="mb-3">Type de formation</h5>
                  <div class="d-flex">
                    <v-select
                      v-model="valueSe"
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
                <v-col cols="12" sm="12" md="6">
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
                </v-col>
                <v-col cols="12" sm="12" md="6">
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
                </v-col>
                <v-col cols="12" sm="12" md="6">
                  <textarea
                    v-model="inpObj"
                    class="form-control mb-2"
                    placeholder="objectifs"
                    rows="3"
                  ></textarea>
                </v-col>
                <v-col cols="12" sm="12" md="6">
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
                </v-col>
                <v-col cols="12">
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
                </v-col>
                <v-col cols="12">
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
                      <vs-button
                        size="large"
                        @click="putProgramme(inpProgramme)"
                      >
                        <i class="fa fa-plus" aria-hidden="true"></i>
                      </vs-button>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div
                    class="
                      col-lg-12
                      d-flex
                      flex-wrap
                      justify-content-evenly
                      align-items-center
                    "
                  >
                    <div
                      v-for="(pro, i) in programme"
                      :key="i"
                      class="
                        col-5
                        d-flex
                        justify-content-between
                        align-items-center
                        fs-6
                        my-1
                        border
                        rounded
                      "
                    >
                      <div class="d-flex">
                        <i class="fa fa-check mt-1 mx-2"></i>

                        {{ pro }}
                      </div>
                      <vs-button size="small" class="" @click="removeEl(pro)">
                        <i class="fa fa-close"></i>
                      </vs-button>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Quitter
            </v-btn>
            <v-btn
              color="blue darken-1"
              v-if="
                inpCodeF &&
                inpTitre &&
                inpObj &&
                inpPc &&
                inpDf &&
                programme.length &&
                valueSe
              "
              text
              @click="
                upFormation([
                  inpCodeF,
                  inpTitre,
                  inpObj,
                  inpPc,
                  inpDf,
                  programme,
                  image,
                  valueSe,
                  id,
                ])
              "
            >
              Enregistrer
            </v-btn>
          </v-card-actions>
        </v-card>
      </vs-dialog>
    </div>
    <h2 class="">Formations interentreprises</h2>
    <hr />
    <div
      v-if="!showFormation"
      class="accordion accordion-flush"
      id="accordionFlushExample"
    >
      <div class="accordion-item" :key="x" v-for="(cat, x) in categories">
        <h2 class="accordion-header" :id="'flush-headingOne' + cat.id">
          <button
            class="accordion-button collapsed fs-4"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapseOne' + cat.id"
            aria-expanded="false"
            :aria-controls="'flush-collapseOne' + cat.id"
          >
            {{ cat.codeF }} : {{ cat.titre }}
          </button>
        </h2>
        <div
          :id="'flush-collapseOne' + cat.id"
          class="accordion-collapse collapse"
          :class="{ show: cat.id == 1 }"
          :aria-labelledby="'flush-headingOne' + cat.id"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="center my-4">
                <vs-table striped>
                  <template #header>
                    <vs-input v-model="search" border placeholder="Search" />
                  </template>
                  <template #thead>
                    <vs-tr>
                      <vs-th class="fs-6"> Code </vs-th>
                      <vs-th class="fs-6"> Titre </vs-th>
                      <vs-th class="fs-6"> Objectifs </vs-th>
                      <vs-th class="fs-6"> Population cible </vs-th>
                      <vs-th class="fs-6"> Durée de la formation </vs-th>
                      <vs-th class="fs-6"> Programme de formation </vs-th>
                      <vs-th v-if="auth.role == 'admin'" class="fs-6"> </vs-th>
                      <vs-th v-if="auth.role == 'admin'"> </vs-th>
                      <vs-th v-if="auth.role == 'admin'"> </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      class="bg-white"
                      :key="i"
                      v-for="(tr, i) in $vs.getSearch(cat.formation, search)"
                      :data="tr"
                      :danger="tr.id == 3"
                      :success="tr.id == 5"
                      :primary="tr.id == 8"
                      :warn="tr.id == 9"
                    >
                      <vs-td class="text-start fs-6">
                        {{ tr.codeF }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.titre }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.objectifs }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.population_cible }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.duree_dormation }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        <ul>
                          <li :key="j" v-for="(li, j) in tr.programme">
                            {{ li.description }}
                          </li>
                        </ul>
                      </vs-td>
                      <vs-td v-if="auth.role == 'admin'">
                        <vs-button
                          flat
                          icon
                          @click="openMd(tr, [cat.codeF, cat.titre])"
                        >
                          Modifier
                        </vs-button>
                      </vs-td>
                      <vs-td v-if="auth.role == 'admin'">
                        <vs-button
                          @click="
                            idFormation = tr.id;
                            idCategory = tr.formationcategorie_id;
                            activeConfirmation = true;
                          "
                          border
                          danger
                        >
                          Supprimer
                        </vs-button>
                      </vs-td>
                      <vs-td v-if="auth.role == 'admin'">
                        <vs-button @click="showFormationApp(tr.id)" flat icon>
                          <i class="bi bi-eye"></i>
                        </vs-button>
                      </vs-td>
                    </vs-tr>
                  </template>
                </vs-table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showFormation">
      <vs-button
        size="xl"
        @click="
          showFormation = false;
          formation_id = undefined;
        "
        border
        shadow
        square
      >
        <i class="bi bi-arrow-bar-left me-2"></i> Revenir
      </vs-button>
      <FormationShow :formation_id="formation_id" />
    </div>
    <!-- notification success -->
    <vs-dialog
      v-if="formationObj"
      width="550px"
      prevent-close
      not-center
      v-model="activeDilogS"
    >
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
    <vs-dialog
      v-if="formationObj"
      width="550px"
      prevent-close
      not-center
      v-model="activeDilogF"
    >
      <template #header>
        <h4 class="not-margin">Modifier avec succès</h4>
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
              activeDilogF = false;
              dialog = false;
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
          mise à jour a échoué
        </vs-alert>
      </div>
    </vs-dialog>

    <!-- Container add formation an inputs Dailog -->

    <!-- Dialog for adding type formation -->
    <vs-dialog
      v-if="formationObj"
      width="50vw"
      not-center
      v-model="activeTypeF"
    >
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

    <vs-dialog width="550px" not-center v-model="activeConfirmation">
      <template #header>
        <h4 class="not-margin" style="color: red">
          Confirmation de <b>Suppression</b>
        </h4>
      </template>

      <div class="con-content">
        <p>Êtes-vous sûr de vouloir supprimer cette catégorie</p>
      </div>

      <template #footer>
        <div class="d-flex align-items-center justify-content-end">
          <vs-button
            @click="deleteFormation(idFormation, idCategory)"
            transparent
          >
            Oui
          </vs-button>
          <vs-button @click="activeConfirmation = false" dark transparent>
            Annuler
          </vs-button>
        </div>
      </template>
    </vs-dialog>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import AppUpdateFormation from "@/components/Admin/AppUpdateFormation.vue";
import FormationShow from "@/components/Admin/AppShowFormation.vue";
export default {
  name: "AppFormation",
  components: {
    AppUpdateFormation,
    FormationShow,
  },
  data: function () {
    return {
      dialog: false,
      search: "",
      activeConfirmation: false,
      idFormation: undefined,
      idCategory: undefined,
      openModel: false,
      formationObj: undefined,
      categorieName: undefined,
      showFormation: false,
      formation_id: undefined,

      dialog_v: false,
      value3: "",
      activeDilogS: false,
      activeDilogF: false,
      activebtn: 0,
      activeDlg: false,
      programme: undefined,
      inpProgramme: undefined,
      inpCodeF: undefined,
      inpTitre: undefined,
      inpDf: undefined,
      inpPc: undefined,
      inpObj: undefined,
      id: undefined,
      valueSe: undefined,

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
      imgFormation: undefined,
    };
  },
  watch: {
    dialog: function (val) {
      if (val == false) {
        this.imagepreview = null;
        this.img_src = false;
      }
    },
  },
  methods: {
    ...mapActions(["getAllFormationEn", "getAllCategories", "removeFoemation"]),
    showFormationApp(id) {
      this.formation_id = id;
      this.showFormation = true;
    },
    // function delete formation
    async deleteFormation(id, idCat) {
      this.$store
        .dispatch("removeFormation", [id, idCat])
        .then((result) => {
          console.log(result);
          this.activeConfirmation = false;
          this.idFormation = undefined;
        })
        .catch((err) => {
          this.errorDesc = err.message;
          this.alertDanger = true;
        });
    },
    openMd(formation, categories) {
      this.formationObj = formation;
      this.categorieName = categories[0] + " " + categories[1];
      this.valueSe = formation.formationcategorie_id;
      this.programme = formation.programme.map((el) => el.description);
      this.inpCodeF = formation.codeF;
      this.inpTitre = formation.titre;
      this.inpDf = formation.duree_dormation;
      this.inpPc = formation.population_cible;
      this.inpObj = formation.objectifs;
      this.id = formation.id;
      this.imgFormation = formation.imgFormation;
      this.dialog = true;
    },
    closeModel() {
      this.openModel = false;
    },

    title: (item) => item.codeF + " : " + item.titre,
    value: (item) => item.id,
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
    },
    async upFormation(param) {
      this.$store
        .dispatch("updateFormation", param)
        .then((res) => {
          this.description =
            "La formation est modifié avec succès à la base de données";
          this.activeDilogF = true;
          this.inpProgramme = undefined;
          this.inpCodeF = undefined;
          this.inpTitre = undefined;
          this.inpDf = undefined;
          this.inpPc = undefined;
          this.inpObj = undefined;
          this.programme.splice(0, this.programme.length);

          this.dialog = false;
        })
        .catch((err) => {
          this.errorDesc = err.response.data.message;
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
        this.programme.unshift(item);
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
  },
  create() {},
  computed: {
    ...mapGetters(["formationEnt", "categories", "auth", "loading"]),
  },

  mounted() {
    // this.getAllFormationEn();
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped>
.z_index {
  z-index: 9999 !important;
}
</style>
