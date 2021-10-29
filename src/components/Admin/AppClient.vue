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
                <vs-table striped>
                  <template #header>
                    <vs-input v-model="search" border placeholder="Search" />
                  </template>
                  <template #thead>
                    <vs-tr>
                      <vs-th class="fs-6">
                        Nom
                      </vs-th>
                      <vs-th class="fs-6">
                        Prenom
                      </vs-th>
                      <vs-th class="fs-6">
                        Email
                      </vs-th>
                      <vs-th> </vs-th>
                      <vs-th> </vs-th>
                      <vs-th> </vs-th>
                    </vs-tr>
                  </template>
                  <template #tbody>
                    <vs-tr
                      class="bg-white "
                      :key="i"
                      v-for="(tr, i) in $vs.getSearch(client, search)"
                      :data="tr"
                      :danger="tr.id == 3"
                      :success="tr.id == 5"
                      :primary="tr.id == 8"
                      :warn="tr.id == 9"
                    >
                      <vs-td class="text-start fs-6">
                        <div class="d-flex align-items-center">
                          <vs-avatar class="me-4">
                            <img
                              :src="'http://127.0.0.1:8000' + tr.image"
                              alt=""
                            />
                          </vs-avatar>
                          {{ tr.nom }}
                        </div>
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.prenom }}
                      </vs-td>
                      <vs-td class="text-start fs-6">
                        {{ tr.email }}
                      </vs-td>
                      <vs-td>
                        <vs-button flat icon>
                          Send Email
                        </vs-button>
                      </vs-td>
                      <vs-td>
                        <vs-button border danger>
                          Remove User
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
  props: ["check"],
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
