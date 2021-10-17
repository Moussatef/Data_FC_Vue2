<template>
  <div class=" py-5 bg-light">
    <h2 class="">Formations interentreprises</h2>
              <hr />
    <div class="accordion accordion-flush " id="accordionFlushExample">
      <div class="accordion-item" :key="x" v-for="(cat, x) in categories">
        <h2 class="accordion-header " :id="'flush-headingOne'+cat.codeF">
          <button
            class="accordion-button collapsed fs-4"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapseOne'+cat.codeF"
            aria-expanded="false"
            :aria-controls="'flush-collapseOne'+cat.codeF"
          >
            {{cat.codeF}} : {{cat.titre}}
          </button>
        </h2>
        <div
          :id="'flush-collapseOne'+cat.codeF"
          class="accordion-collapse collapse"
          :aria-labelledby="'flush-headingOne'+cat.codeF"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="center my-4">
                <vs-table striped>
                  <template #thead>
                    <vs-tr>
                      <vs-th>
                        titre
                      </vs-th>
                      <vs-th>
                        Objectifs
                      </vs-th>
                      <vs-th>
                        Population cible
                      </vs-th>
                      <vs-th>
                        Durée de la formation
                      </vs-th>
                      <vs-th>
                        Programme de formation
                      </vs-th>
                      <vs-th>
                        Id
                      </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      class="bg-white"
                      :key="i"
                      v-for="(tr, i) in cat.formation"
                      :data="tr"
                      :danger="tr.id == 3"
                      :success="tr.id == 5"
                      :primary="tr.id == 8"
                      :warn="tr.id == 9"
                    >
                      <vs-td
                        class="text-start"
                      >
                        {{ tr.titre }}
                      </vs-td>
                      <vs-td class="text-start">
                        {{ tr.objectifs }}
                      </vs-td>
                      <vs-td class="text-start">
                        {{ tr.population_cible }}
                      </vs-td>
                      <vs-td class="text-start">
                        {{ tr.duree_dormation }}
                      </vs-td>
                      <vs-td class="text-start">
                        <ul>
                          <li :key="j" v-for="(li, j) in tr.programme">
                            {{ li.description }}
                          </li>
                        </ul>
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
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        website: "hildegard.org",
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        website: "anastasia.net",
      },
      {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        website: "ramiro.info",
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        website: "kale.biz",
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        website: "demarco.info",
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        website: "ola.org",
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        website: "elvis.io",
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        website: "jacynthe.com",
      },
      {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        website: "conrad.com",
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        website: "ambrose.net",
      },
    ],
  }),
  methods: mapActions(["getAllFormationEn", "getAllCategories"]),

  computed: mapGetters(["formationEnt", "categories"]),

  mounted() {
    this.getAllFormationEn();
    this.getAllCategories();
  },
};
</script>
