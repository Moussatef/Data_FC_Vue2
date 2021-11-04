<template>
  <div class=" py-5 bg-light">
    <h2 class="">Formations interentreprises</h2>
    <hr />
    <div class="accordion accordion-flush " id="accordionFlushExample">
      <div class="accordion-item" :key="x" v-for="(cat, x) in categories">
        <h2 class="accordion-header " :id="'flush-headingOne' + cat.id">
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
          class="accordion-collapse collapse "
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
                      <vs-th class="fs-6">
                        Code
                      </vs-th>
                      <vs-th class="fs-6">
                        Titre
                      </vs-th>
                      <vs-th class="fs-6">
                        Objectifs
                      </vs-th>
                      <vs-th class="fs-6">
                        Population cible
                      </vs-th>
                      <vs-th class="fs-6">
                        Durée de la formation
                      </vs-th>
                      <vs-th class="fs-6">
                        Programme de formation
                      </vs-th>
                      <vs-th v-if="auth.role == 'admin'" class="fs-6"> </vs-th>
                      <vs-th v-if="auth.role == 'admin'"> </vs-th>
                      <vs-th v-if="auth.role == 'admin'"> </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      class="bg-white "
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
                          @click="
                            activebtn = 1;
                            openMd(tr, [cat.codeF, cat.titre]);
                          "
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
                        <vs-button v-if="tr.block == 1" danger flat icon>
                          <i class="bx bx-lock"></i>
                        </vs-button>

                        <vs-button v-if="tr.block == 0" flat icon>
                          <i class="bx bx-lock-open-alt"></i>
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
    <AppUpdateFormation
      v-if="openModel"
      :formation="formationObj"
      :categorie="categorieName"
      @closeModel="closeModel"
    />
    <vs-dialog width="550px" not-center v-model="activeConfirmation">
      <template #header>
        <h4 class="not-margin" style="color:red;">
          Confirmation de <b>Suppression</b>
        </h4>
      </template>

      <div class="con-content">
        <p>
          Êtes-vous sûr de vouloir supprimer cette catégorie
        </p>
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
export default {
  name: "AppFormation",
  components: {
    AppUpdateFormation,
  },
  data: function() {
    return {
      search: "",
      activeConfirmation: false,
      idFormation: undefined,
      idCategory: undefined,
      openModel: false,
      formationObj: undefined,
      categorieName: undefined,
    };
  },
  methods: {
    ...mapActions(["getAllFormationEn", "getAllCategories", "removeFoemation"]),
    // function delete formation
    async deleteFormation(id, idCat) {
      this.$store
        .dispatch("removeFormation", [id, idCat])
        .then((result) => {
          console.log(result);
          this.activeConfirmation = false;
          this.idFormation = undefined;

          // this.activeConfirmation = false;
        })
        .catch((err) => {
          this.errorDesc = err.message;
          this.alertDanger = true;
        });
    },
    openMd(formation, categories) {
      this.formationObj = formation;
      this.categorieName = categories[0] + " " + categories[1];
      this.openModel = true;
    },
    closeModel() {
      this.openModel = false;
    },
  },
  computed: {
    ...mapGetters(["formationEnt", "categories", "auth", "loading"]),
  },

  mounted() {
    // this.getAllFormationEn();
    this.getAllCategories();
  },
};
</script>
