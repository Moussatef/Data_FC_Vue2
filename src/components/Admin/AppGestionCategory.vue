<template>
  <div class="overflow-hidden">
    <div class="container my-4 ">
      <div class="row justify-content-between  bg-white py-3 px-5">
        <div class="col-lg-10 col-10">
          <h2>Gestion de Type du Formation</h2>
        </div>
        <div class="col-lg-2 col-2">
          <vs-button
            size="large"
            :active="activebtn == 1"
            @click="
              activebtn = 1;
              active = true;
            "
          >
            Gestion
          </vs-button>
        </div>

        <vs-dialog class="m-t-20" prevent-close width="1200px" v-model="active">
          <template #header>
            <h4 class="not-margin">Gestion Type du <b>Formation</b></h4>
          </template>

          <div class="text-start">
            <vs-table>
              <template #header>
                <vs-input v-model="search" border placeholder="Search" />
              </template>
              <template #thead>
                <vs-tr>
                  <vs-th>
                    Id
                  </vs-th>
                  <vs-th>
                    Code
                  </vs-th>
                  <vs-th>
                    Titre
                  </vs-th>
                  <vs-th>
                    Date de création
                  </vs-th>
                  <vs-th> </vs-th>
                  <vs-th> </vs-th>
                </vs-tr>
              </template>
              <template #tbody>
                <vs-tr
                  :key="i"
                  v-for="(tr, i) in $vs.getPage(
                    $vs.getSearch(categories, search),
                    page,
                    max
                  )"
                  :data="tr"
                >
                  <vs-td>
                    {{ tr.id }}
                  </vs-td>
                  <vs-td>
                    {{ tr.codeF }}
                  </vs-td>
                  <vs-td>
                    {{ tr.titre }}
                  </vs-td>
                  <vs-td>
                    {{ tr.created_at }}
                  </vs-td>
                  <vs-td>
                    <vs-button flat icon>
                      Modifier
                    </vs-button>
                  </vs-td>
                  <vs-td>
                    <vs-button
                      @click="
                        idCategory = tr.id;
                        activeConfirmation = true;
                      "
                      border
                      danger
                    >
                      Supprimer
                    </vs-button>
                  </vs-td>
                </vs-tr>
              </template>
              <template #footer>
                <vs-pagination
                  v-model="page"
                  :length="$vs.getLength(categories, max)"
                />
              </template>
            </vs-table>
          </div>
          <template #footer>
            <div class="row mt-4 justify-content-center">
              <div class="col-8 row justify-content-center align-items-center">
                <div class="col-lg-10 col-10">
                  <h4>Ajouter Type du Formation</h4>
                </div>
                <div class="col-lg-2 col-2">
                  <vs-button
                    size="large"
                    :active="activebtnAj == 1"
                    @click="
                      activebtnAj = 1;
                      activeTypeF = true;
                    "
                  >
                    Ajouter
                  </vs-button>
                </div>
              </div>
            </div>
          </template>
        </vs-dialog>

        <!-- Adding type formation -->

        <vs-dialog width="50vw" not-center v-model="activeTypeF">
          <template #header>
            <h4 class="not-margin">Type de <b>Formation</b></h4>
          </template>

          <div class="row px-4 ">
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
              class="d-flex align-items-center justify-content-center flex-direction-column"
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
              <template #title>
                Error message
              </template>
              {{ errorDesc }}
            </vs-alert>
          </div>
        </vs-dialog>

        <!-- Dialog for succes adding -->
        <vs-dialog
          width="550px"
          prevent-close
          not-center
          v-model="activeDilogS"
        >
          <template #header>
            <h4 class="not-margin">
              Ajouter avec succès
            </h4>
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

        <!-- Confirmation for removeCategorie -->

        <vs-dialog width="550px" not-center danger v-model="activeConfirmation">
          <template #header>
            <h4 class="not-margin">Confirmation de <b>Suppression</b></h4>
          </template>

          <div class="con-content">
            <p>
              Êtes-vous sûr de vouloir supprimer cette catégorie
            </p>
          </div>

          <template #footer>
            <div class="d-flex align-items-center justify-content-end">
              <vs-button @click="deleteCategorie(idCategory)" transparent>
                Oui
              </vs-button>
              <vs-button @click="activeConfirmation = false" dark transparent>
                Annuler
              </vs-button>
            </div>
          </template>
        </vs-dialog>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppGestionCategory",

  data: () => ({
    activeTypeF: false,
    activebtnAj: 0,
    activebtn: 0,
    active: false,
    input1: "",
    input2: "",
    checkbox1: false,
    search: "",

    activeConfirmation: false,

    page: 1,
    max: 6,

    idCategory: undefined,

    inpCodeType: undefined,
    inpTitreType: undefined,

    activeDilogS: false,
    description: "",

    errorDesc: "",
    alertDanger: false,
  }),
  methods: {
    ...mapActions([
      "getAllFormationEn",
      "getAllCategories",
      "addTypeFormation",
      ,
      "removeCategorie",
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

    // function delete categorie
    async deleteCategorie(id) {
      this.$store
        .dispatch("removeCategorie", [id])
        .then((result) => {
          console.log(result);
          this.activeConfirmation = false;
        })
        .catch((err) => {
          this.errorDesc = err.message;
          this.alertDanger = true;
        });
    },
  },
  computed: {
    ...mapGetters(["formationEnt", "categories"]),
  },
  mounted() {
    // this.getAllFormationEn();
    this.getAllCategories();
  },
};
</script>

<style lang="scss" scoped>
.m-t-20 {
  margin-top: 5rem;
}
</style>
