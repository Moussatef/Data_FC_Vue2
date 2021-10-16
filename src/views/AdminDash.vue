<template>
  <div class=" overflow-hidden bg-light">
    <div class="hidden">
      <div class="row bdy">
        <div class="hidden col-1">
          <div
            class="d-flex flex-column flex-shrink-0 bg-white position-fixed mt-20"
            style="width: 4.5rem;"
          >
            <a
              href="/"
              class="d-block p-3 link-dark text-decoration-none"
              title="Icon-only"
              data-bs-toggle="tooltip"
              data-bs-placement="right"
            >
              
              <span class="visually-hidden">Icon-only</span>
            </a>
            <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
              <li class="nav-item">
                <a
                  href="#"
                  class="nav-link active py-3 border-bottom"
                  aria-current="page"
                  title="Home"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="bx bx-home"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 border-bottom"
                  title="Dashboard"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class='bx bx-grid-alt'></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 border-bottom"
                  title="Orders"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class='bx bx-group'></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 border-bottom"
                  title="Products"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa fa-address-book-o"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="nav-link py-3 border-bottom"
                  title="Customers"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                >
                  <i class="fa fa-briefcase"></i>
                </a>
              </li>
            </ul>
            <div class="dropdown border-top mt-100">
              <a
                href="#"
                class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width="24"
                  height="24"
                  class="rounded-circle"
                />
              </a>
              <ul
                class="dropdown-menu text-small shadow"
                aria-labelledby="dropdownUser3"
              >
                <li><a class="dropdown-item" href="#">New project...</a></li>
                <li><a class="dropdown-item" href="#">Settings</a></li>
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-11 mt-5">
          <h1>Administrateur</h1>
          <div class=" container-fluid">
            <div class="row justify-content-center">
              <div class="col-lg-3 ">
                <div class="bg-white  ">
                  <div
                    class="row align-items-center justify-content-center status-card "
                  >
                    <div class="col-lg-3">
                      <img
                        src="../assets/book1.png"
                        class=""
                        width="50"
                        height="50"
                        alt=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <h3>23</h3>
                      <p><b>NB</b> Formations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 ">
                <div class="bg-white  ">
                  <div
                    class="row align-items-center justify-content-center status-card "
                  >
                    <div class="col-lg-3">
                      <img
                        src="../assets/student1.png"
                        class=""
                        width="50"
                        height="50"
                        alt=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <h3>23</h3>
                      <p><b>NB</b> Participants</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 ">
                <div class="bg-white  ">
                  <div
                    class="row align-items-center justify-content-center status-card "
                  >
                    <div class="col-lg-3">
                      <img
                        src="../assets/group1.png"
                        class=""
                        width="50"
                        height="50"
                        alt=""
                      />
                    </div>
                    <div class="col-lg-6">
                      <h3>23</h3>
                      <p><b>NB</b> D'enseignants</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center text-start">
              <h2 class="">Formations interentreprises</h2>
              <hr />
              <div class="col-lg-12">
                <AppFormation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AppFormation from "@/components/Admin/AppFormation.vue";
export default {
  name: "AdminDash",
  data: () => ({
    active: "home",
  }),

  methods: {
    openNotification(position = null, color) {
      const noti = this.$vs.notification({
        color,
        position,
        title: "Administrateur",
        text: "Bienvenue dans le tableau de bord de l'administrateur",
      });
    },
  },
  mounted() {
    this.openNotification(null, "rgb(59,222,200)");
  },
  components: {
    AppFormation,
  },
};
</script>

<style lang="scss" scoped>
.top-10 {
  top: 5rem;
  position: sticky;
}
.mt-100 {
  margin-top: 100%;
}
.mt-20{
    margin-top: 10%;
}
.status-card {
  min-height: 150px;
  margin-bottom: 20px;
}
// .hidden {
//   overflow-y: scroll;
// }
</style>
