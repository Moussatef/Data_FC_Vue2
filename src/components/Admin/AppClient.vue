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
          >
            Les Participants
          </button>
        </h2>
        <div
          :id="'flush-collapseOne'"
          class="accordion-collapse collapse show"
          :aria-labelledby="'flush-headingOne'"
          data-bs-parent="#accordionFlushExample"
        >
          <div class="accordion-body">
            <div class="row">
              <div class="center my-4">
                <vs-table striped v-model="selected">
                  <template #header>
                    <vs-input v-model="search" border placeholder="Search" />
                  </template>
                  <template #thead>
                    <vs-tr>
                      <vs-th  > </vs-th>
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
                      <vs-th>
                      </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      :key="i"
                      v-for="(tr, i) in 
                        $vs.getSearch(client, search)
                      "
                      :data="tr"
                      :is-selected="!!selected.includes(tr)"
                      not-click-selected
                      open-expand-only-td
                    >
                      <vs-td checkbox >
                        <vs-checkbox :val="tr" v-model="selected" />
                      </vs-td>
                      <vs-td>
                        {{ tr.nom }}
                      </vs-td>
                      <vs-td>
                        {{ tr.prenom }}
                      </vs-td>
                      <vs-td>
                        {{ tr.email }}
                      </vs-td>
                      <vs-td>
                        {{ tr.id }}
                      </vs-td>
                      <vs-td>
                      </vs-td>

                      <template #expand>
                        <div class="con-content row justify-content-between">
                          <div class="col-lg-9 d-flex align-items-center">
                            <vs-avatar>
                              <img
                                src="../../assets/OrongeUL/Analysis-amico.png"
                                alt=""
                              />
                            </vs-avatar>
                            <p class="mx-2">{{ tr.nom }} {{ tr.prenom }}</p>
                          </div>
                          <div class="col-lg-3 d-flex justify-content-end">
                            <vs-button flat icon>
                              <i class="bx bx-lock-open-alt"></i>
                            </vs-button>
                            <vs-button flat icon>
                              Send Email
                            </vs-button>
                            <vs-button border danger>
                              Remove User
                            </vs-button>
                          </div>
                        </div>
                      </template>
                    </vs-tr>
                  </template>
                  <!-- <template #footer>
                    <vs-pagination
                      v-model="page"
                      :length="
                        $vs.getLength($vs.getSearch(client, search), max)
                      "
                    />
                  </template> -->
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
  props:["check"],
  data: () => ({
    search: "",
    // page: 1,
    // max: 10,
    selected: [],

    
  }),
  methods: mapActions(["getAllClient"]),

  computed: mapGetters(["client"]),

  mounted() {
    this.getAllClient();
  },
};
</script>
