<template>
  <div class=" py-5 bg-light">
    <h2 class="">Formations interentreprises</h2>
    <hr />
    <div class="accordion accordion-flush " id="accordionFlushExample">
      <div class="accordion-item" :key="x" v-for="(cat, x) in categories">
        <h2 class="accordion-header " :id="'flush-headingOne' + cat.codeF">
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
          class="accordion-collapse collapse "
          :class="{ show: cat.id == 1 }"
          :aria-labelledby="'flush-headingOne' + cat.codeF"
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
                      <vs-th class="fs-6"> </vs-th>
                      <vs-th> </vs-th>
                      <vs-th> </vs-th>
                      <vs-th> </vs-th>
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
                      <vs-td class="text-start fs-6"> </vs-td>
                      <vs-td>
                        <vs-button flat icon>
                          Modifier
                        </vs-button>
                      </vs-td>
                      <vs-td>
                        <vs-button border danger>
                          Supprimer
                        </vs-button>
                      </vs-td>
                      <vs-td>
                        <vs-button flat icon>
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
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "AppFormation",
  data: () => ({
    search: "",
  }),
  methods: mapActions(["getAllFormationEn", "getAllCategories"]),

  computed: mapGetters(["formationEnt", "categories"]),

  mounted() {
    // this.getAllFormationEn();
    this.getAllCategories();
  },
};
</script>
