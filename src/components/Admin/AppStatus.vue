<template>
    <div class="overflow-hidden">
        <div class="row justify-content-center">
          <div class="col-lg-3 ">
            <div class="bg-white  ">
              <div
                class="row align-items-center justify-content-center status-card "
              >
                <div class="col-lg-3">
                  <img
                    src="../../assets/book1.png"
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
                    src="../../assets/student1.png"
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
                    src="../../assets/group1.png"
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

    </div>
</template>

<script>
export default {
    name: "AppStatus"
    
}
</script>

<style lang="scss" scoped>
.top-10 {
  top: 5rem;
  position: sticky;
}
.mt-100 {
  margin-top: 100%;
}
.mt-20 {
  margin-top: 10%;
}
.status-card {
  min-height: 150px;
  margin-bottom: 20px;
}
</style>