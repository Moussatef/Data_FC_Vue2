<template>
  <div class="overflow-hidden">
    <AppSection :titre="titre" />

    <div class="  bg-light">
      <div class="container">
        <div class="row">
          <div
            class="col-12 row  overflow-hidden my-5 justify-content-center  "
          >
            <div class="col-lg-6  order-lg-2">
              <img
                src="../assets/cover/info1.jpg"
                class="d-block mx-lg-auto img-fluid "
                alt="DATA FC"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 info-one bg-white row align-items-center  ">
              <div class="col-lg-12 col-12 ">
                <p class="fs-4 text-center">
                  Les actions de formation continue n’ont de sens que si elles
                  sont étroitement intégrées dans un processus visant l'atteinte
                  des orientations stratégiques de l’entreprise
                  <br />
                  (ou de l’organisation)
                </p>
              </div>
            </div>
          </div>
          <div
            class="col-12 row mb-5  overflow-hidden  justify-content-center  "
          >
            <div class="col-lg-6 ">
              <img
                src="../assets/cover/m2.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="DATA FC"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6 info-one bg-white row align-items-center  ">
              <div class="col-lg-12 col-12">
                <p class="fs-4 text-center">
                  Pour rendre la formation rentable, efficace et <br />utile, il
                  est très recommandé de se donner le temps, les moyens et la
                  capacité d’effectuer <br />
                  un diagnostic des besoins en formation afin <br />
                  de ne pas gaspiller le temps, <br />
                  l’énergie et l’argent.
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 row  overflow-hidden mb-5 justify-content-center ">
            <div class="col-lg-6  order-lg-2">
              <img
                src="../assets/cover/m1.jpg"
                class="d-block mx-lg-auto img-fluid"
                alt="DATA FC"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6  info-one bg-white row align-items-center ">
              <div class="col-lg-12  col-12">
                <p class="fs-4 text-center">
                  C’est dans cette optique que nous vous proposons dans le cadre
                  d’une action d’ingénierie, des interventions de <br />
                  spécialistes pour mettre en œuvre un processus de diagnostic
                  des besoins, allant de l’analyse des besoins, la conception
                  d’un plan de formation à la réalisation et l’évaluation de la
                  formation.
                </p>
              </div>
            </div>
          </div>

          <div class="col-12   mb-5 justify-content-center ">
            <!-- <v-pip
                :video-options="videoOptions"
                :button-options="buttonOptions"
                @video-in-pip="handlePIP"
                @requesting-pip-failure="handlePipOpenFailure"
                @exiting-pip-failure="handlePipExitFailure"
              /> -->

            <!-- 16:9 aspect ratio: default -->

            <!-- <v-pip
              :video-options="videoOptions"
              :button-options="buttonOptions"
            /> -->

            <plyr>
              <video>
                <source src="../assets/video/vdtest.mp4" type="video/mp4" />
              </video>
            </plyr>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" src="https://unpkg.com/vue@latest"></script>
  <script type="text/javascript" src="https://unpkg.com/vue-plyr@latest"></script>
<script>
import AppSection from "@/components/inc/AppSection.vue";
import VPip from "v-pip";
export default {
  data() {
    return {
      titre: "Ingénierie de formation",

       // Array of objects with path to video files and format.
            videos: [
                { src: 'path/to/video.mp4', format: 'mp4' },
                { src: 'path/to/video.webm', format: 'webm' }
            ],

            // Object with subtitles label, source, and language.
            subtitles: {
                label: "English Captions",
                src: "path/to/captions.vtt",
                srclang: "en"
            },

            // Array of objects with path to audio files and format.
            tracks: [
                { src: 'path/to/audio.mp3', format: 'mp3' },
                { src: 'path/to/audio.ogg', format: 'ogg' }
            ],

            // YouTube video ID or video URL.
            // https://www.youtube.com/watch?v=bTqVqk7FSmY & https://youtu.be/bTqVqk7FSmY would have the same effect.
            youtubeID: 'bTqVqk7FSmY',

            // Vimeo video ID or video URL.
            // https://vimeo.com/147865858 would have the same effect.
            vimeoID: '147865858'
       

      // isPip: false,
      // videoOptions: {
      //   wrapper: "w-full h-full",
      //   src:
      //     "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      //   class: "w-3/4 rounded",
      //   alt: "Placeholder Image",
      // },
      // buttonOptions: {
      //   wrapper: "",
      //   type: "button",
      //   class: "btn",
      //   label: "Toggle picture-in-picture",
      // },
    };
  },
  methods: {
    handlePIP(e) {
      this.isPip = e;
    },
    handlePipOpenFailure(err) {
      console.log("Video failed to enter Picture-in-Picture mode.", err);
    },
    handlePipExitFailure(err) {
      console.log("Video failed to leave Picture-in-Picture mode.", err);
    },
  },

  components: {
    AppSection,
    VPip,
  },
};
</script>
<style lang="scss" scoped>
img {
  object-fit: cover;
  width: 100%;
}
.info-one {
  min-height: 400px;
  p {
    color: rgb(107, 107, 107);
    text-align: initial;
    text-justify: auto;
  }
}
.w-1\/2 {
  width: 50%;
}
.w-3\/4 {
  width: 75%;
}
.btn {
  font-weight: 700 !important;
  margin-top: 0.75rem !important;
  color: white;
  background-color: #307fc0 !important;
  border: 0;
  font-size: 1rem;
  border-radius: 0.25rem !important;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.rounded {
  border-radius: 0.25rem;
}
</style>
