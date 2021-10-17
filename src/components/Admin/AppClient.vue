<template>
  <div class=" py-5 bg-light">
    <h2 class="">Les Participants</h2>
    <hr />
    <div class="accordion accordion-flush " id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header " id="'flush-headingOne'">
          <button
            class="accordion-button collapsed fs-4"
            type="button"
            data-bs-toggle="collapse"
            :data-bs-target="'#flush-collapseOne'"
            aria-expanded="false"
            :aria-controls="'flush-collapseOne'"
          >Les Participants</button>
        </h2>
        <div
          :id="'flush-collapseOne'"
          class="accordion-collapse collapse"
          :aria-labelledby="'flush-headingOne'"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="center my-4">
                <vs-table striped>
                  <template #thead>
                    <vs-tr>
                      <vs-th>
                        Nom
                      </vs-th>
                      <vs-th>
                        Prenom
                      </vs-th>
                      <vs-th>
                        Email
                      </vs-th>
                      <vs-th>
                        Id
                      </vs-th>
                      <!-- <vs-th>
                        Durée de la formation
                      </vs-th>
                      <vs-th>
                        Programme de formation
                      </vs-th> -->
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      class="bg-white"
                      :key="tr.id"
                      v-for="tr in client"
                      :data="tr"
                      :danger="tr.id == 3"
                      :success="tr.id == 5"
                      :primary="tr.id == 8"
                      :warn="tr.id == 9"
                    >
                      <vs-td class="text-start">
                        {{ tr.nom }}
                      </vs-td>
                      <vs-td class="text-start">
                        {{ tr.prenom }}
                      </vs-td>
                      <vs-td class="text-start">
                        {{ tr.email }}
                      </vs-td>
                      <vs-td class="text-start">
                        {{ tr.id }}
                      </vs-td>
                      <!-- <vs-td class="text-start">
                        <ul>
                          <li :key="j" v-for="(li, j) in tr.programme">
                            {{ li.description }}
                          </li>
                        </ul>
                      </vs-td> -->
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
  data: () => ({}),
  methods: mapActions(["getAllClient"]),

  computed: mapGetters(["client"]),

  mounted() {
    this.getAllClient();
  },
};
</script>
