<template>
  <div class="home bg-light overflow-hidden square">
    <main>
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/company/cover20.png"
              class="responsive_img"
              alt=""
            />
            <div class="container">
              <div
                class="carousel-caption text-start"
                data-aos="fade-up"
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              >
                <h1 class="text-uppercase h1-one-slide">
                  Ingénierie de formation
                </h1>
                <p class="p-one-slide fs-5">
                  Les actions de formation continue n’ont de sens que si elles
                  sont étroitement intégrées dans un processus visant l'atteinte
                  des orientations stratégiques de l’entreprise (ou de
                  l’organisation) .
                </p>

                <p>
                  <router-link
                    class="btn btn-lg btn-primary"
                    to="/ingenierie-de-formation"
                    >Lire la suite</router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/company/cover3.png"
              class="responsive_img"
              alt=""
            />

            <div class="container">
              <div class="carousel-caption text-start">
                <h1 class="h1-one-slide">FORMATION</h1>
                <h5 class="h5-one-slide">
                  Vous cherchez à développer vos compétences et améliorer la
                  compétitivité de votre entreprise ?
                </h5>
                <p class="p-one-slide fs-5">
                  La formation est le moyen idéal pour y aboutir, elle constitue
                  l’un des principaux leviers de management de votre capital
                  humain
                </p>

                <p>
                  <router-link class="btn btn-lg btn-primary" to="/formation"
                    >Apprendre encore plus</router-link
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/company/cover2.png"
              class="responsive_img"
              alt=""
            />
            <div class="container">
              <div class="carousel-caption text-start">
                <h1 class="h1-one-slide">L’EXTERNALISATION</h1>
                <h4 class="h5-one-slide">Vous avez une entreprise :</h4>

                <p class="p-one-slide fs-5">
                  vous cherchez à vous concentrer sur votre cœur de métier
                </p>

                <p class="p-one-slide fs-5">
                  Vous cherchez l’accès à des compétences nouvelles ou
                  supérieures, mais aussi de répondre aux évolutions
                  technologiques
                </p>

                <p>
                  <router-link
                    class="btn btn-lg btn-primary"
                    to="/l-externalisation"
                    >Apprendre encore plus</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container marketing my-2">
        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider my-5" />

        <div class="row featurette my-5 ">
          <div class="col-md-7 my-5 py-5 position-relative">
            <div
              class="care bg-white   p-5 position-absolute top-0 start-0 shadow  "
            ></div>
            <div
              class="my-3 "
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <h2 class="featurette-heading h2-one">
                Notre mission :
                <span class="text-muted"> Aider l’entreprise,</span>
              </h2>
              <p class="lead fs-3 m-4">
                grâce à nos prestations,à faire face aux changements fréquents
                pour assurer sa croissance et sa pérennité, suivre
                continuellement l'évolution technologique et préserver une place
                privilégiée sur le marché concurrentiel..
              </p>
            </div>

            <div
              class="my-4 pt-4 "
              data-aos="zoom-in"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <h2 class="featurette-heading h2-one">
                Notre vision :<span class="text-muted">
                  Devenir l’opérateur</span
                >
              </h2>
              <p class="lead fs-3 m-4">
                le plus performant dans l’accompagnement des entreprises et le
                meilleur créateur de la valeur pour nos clients.
              </p>
            </div>
          </div>
          <div
            class="col-md-5 mt-4"
            data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
          >
            <img
              src="../assets/prof1.png"
              class="d-block mx-lg-auto img-fluid rounded mt-5"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
        </div>
        <hr />
        <div
          class="row py-4 div-ch align-items-center justify-content-evenly my-5"
        >
          <div
            class="col-md-5 col-lg-5 "
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img
              src="../assets/ong1.png"
              class="d-block mx-lg-auto img-fluid rounded"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div
            class=" col-lg-6  m-1"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <h2 class="featurette-heading h2-one mb-4">
              Nos engagements
            </h2>
            <div class="list-group row  mb-2  ">
              <div class="row justify-content-evenly align-items-center  ">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1 ">
                  <div class="icon_span">
                    <img src="../assets/guarante.png" class="" />
                  </div>
                </div>
                <label
                  class="list-group-item py-3 col-lg-10 col-md-9 col-sm-8 col-7 border-0 "
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Garantir des prestations de qualité répondant aux exigences
                    de nos clients</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2  ">
              <div class="row justify-content-evenly align-items-center">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1">
                  <div class="icon_span">
                    <img src="../assets/cooperation.png" altr="" />
                  </div>
                </div>
                <label
                  class="list-group-item border-0 shadow py-3 col-lg-10 col-md-9 col-sm-8 col-7"
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Etre un partenaire d’excellence de nos clients</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2  ">
              <div class="row justify-content-evenly align-items-center">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1">
                  <div class="icon_span">
                    <img src="../assets/idea.png" altr="" />
                  </div>
                </div>
                <label
                  class="list-group-item border-0 shadow py-3 col-lg-10 col-md-9 col-sm-8 col-7"
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Fournir des solutions innovantes et sur mesure pour chaque
                    entreprise cliente</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2  ">
              <div class="row justify-content-evenly align-items-center">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1">
                  <div class="icon_span">
                    <img src="../assets/like.png" altr="" />
                  </div>
                </div>
                <label
                  class="list-group-item border-0 shadow py-3 col-lg-10 col-md-9 col-sm-8 col-7"
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Satisfaire nos clients dans le but de maintenir une
                    relation confirmée et durable</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2  ">
              <div class="row justify-content-evenly align-items-center">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1">
                  <div class="icon_span">
                    <img src="../assets/technology.png" altr="" />
                  </div>
                </div>
                <label
                  class="list-group-item border-0 shadow py-3 col-lg-10 col-md-9 col-sm-8 col-7"
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Proposer des services novateurs, un accompagnement
                    privilégié et des conseils personnalisés</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2  ">
              <div class="row justify-content-evenly align-items-center">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1">
                  <div class="icon_span">
                    <img src="../assets/balance-scale.png" altr="" />
                  </div>
                </div>
                <label
                  class="list-group-item border-0 shadow py-3 col-lg-10 col-md-9 col-sm-8 col-7"
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Assurer une déontologie de travail dans toutes nos
                    interventions</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2  ">
              <div class="row justify-content-evenly align-items-center">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1">
                  <div class="icon_span">
                    <img src="../assets/consult.png" altr="" />
                  </div>
                </div>
                <label
                  class="list-group-item border-0 shadow py-3 col-lg-10 col-md-9 col-sm-8 col-7"
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Viser l’excellence et la perfection dans la réalisation de
                    toutes nos prestations</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2  ">
              <div class="row justify-content-evenly align-items-center">
                <div class=" col-lg-1 col-md-1 col-sm-1 col-1">
                  <div class="icon_span">
                    <img src="../assets/authorized-dealer.png" altr="" />
                  </div>
                </div>
                <label
                  class="list-group-item border-0 shadow py-3 col-lg-10 col-md-9 col-sm-8 col-7"
                >
                  <span class="d-block fs-6 text-start text-start  opacity-90"
                    >Adopter des pratiques responsables et un comportement
                    éthique avec nos clients</span
                  >
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class=" container-fluid">
          <div class="row justify-content-center">
            <div
              class="col-12 "
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <!-- <iframe
                class="video--player__vid"
                allowfullscreen="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                title="YouTube video player"
                src="https://www.youtube.com/embed/4e4PxhRcxHw?rel=0&amp;controls=2&amp;disablekb=0&amp;modestbranding=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fwww.jechoisismontreal.com&amp;widgetid=1"
                id="widget2"
                data-gtm-yt-inspected-11225346_44="true"
                width="640"
                height="390"
                frameborder="0"
              ></iframe> -->
              <v-pip
                :video-options="videoOptions"
                :button-options="buttonOptions"
                @video-in-pip="handlePIP"
                @requesting-pip-failure="handlePipOpenFailure"
                @exiting-pip-failure="handlePipExitFailure"
              />
            </div>
            <div class="col-lg-6 col-12 my-3">
              <div
                class="shadow"
                data-aos="fade-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                <img
                  src="../assets/cover/m3.jpg"
                  class="d-block mx-lg-auto img-fluid scale-img"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="col-lg-6 col-12 my-3">
              <div
                class="shadow"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >
                <img
                  src="../assets/H3.jpg"
                  class="d-block mx-lg-auto img-fluid scale-img"
                  alt="Bootstrap Themes"
                  width="700"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="row justify-content-center text-center my-5 ">
            <div class="col-lg-4 col-sm-12 col-12 col-md-8 my-4 ">
              <div
                class="card p-2 border-0 rounded shadow"
                data-aos="fade-right"
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in"
              >
                <div>
                  <img src="../assets/book.png" width="100" alt="" />
                </div>
                <div class="d-flex justify-content-center">
                  <span id="count2" class="display-4 card_nb"></span>
                  <span class="fs-1 pluss">+</span>
                </div>

                <div class="chiffre ">FORMATIONS</div>
              </div>
            </div>
            <div
              class="col-lg-4 col-sm-12 col-12 col-md-8 my-4 "
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="2000"
              data-aos-easing="ease-in"
            >
              <div class="card p-2 border-0 rounded shadow">
                <div class="mb-3">
                  <img src="../assets/writing.png" width="84" alt="" />
                </div>
                <div class="d-flex justify-content-center">
                  <span id="count3" class="display-4 card_nb"></span>
                  <span class="fs-1 pluss">+</span>
                </div>
                <div class="chiffre text-uppercase">
                  formations interentreprises
                </div>
              </div>
            </div>
            <div
              class="col-lg-4 col-sm-12 col-12 col-md-8 my-4 "
              data-aos="fade-left"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
            >
              <div class="card p-2 border-0 rounded shadow">
                <div>
                  <img src="../assets/group(1).png" width="100" alt="" />
                </div>
                <div class="d-flex justify-content-center">
                  <span id="count4" class="display-4 card_nb"></span>
                  <span class="fs-1 pluss">+</span>
                </div>

                <div class="chiffre">ENSEIGNANTS</div>
              </div>
            </div>
          </div>
        </div>

        <hr class="featurette-divider" />

        <div
          class="row featurette"
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1400"
          data-aos-easing="ease-in"
        >
          <div class="container px-4 py-5 card-futur bg-white" id="featured-3">
            <h2 class="pb-2 border-bottom ">Nos valeurs</h2>

            <div
              id="carouselExampleInterval"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/invoch.png" class="" alt="" />
                  </div>

                  <div class="titre-info">
                    <p class="fs-3">L'innovation</p>
                  </div>
                </div>

                <div class="carousel-item" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/conf.png" class="" alt="" />
                  </div>

                  <div class="container">
                    <div class="titre-info">
                      <p class="fs-3">La confidentialité et l'honnêteté</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/resp.png" class="" alt="" />
                  </div>

                  <div class="container">
                    <div class="titre-info">
                      <p class="fs-3">La responsabilité</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/cooperation.png" class="" alt="" />
                  </div>

                  <div class="container">
                    <div class="titre-info">
                      <p class="fs-3">Le respect</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/dataanlity.png" class="" alt="" />
                  </div>

                  <div class="container">
                    <div class="titre-info">
                      <p class="fs-3">La performance</p>
                    </div>
                  </div>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span class="" aria-hidden="true"
                  ><img
                    src="../assets/leftarrow.png"
                    height="30"
                    width="30"
                    alt=""
                /></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span class="" aria-hidden="true">
                  <img
                    src="../assets/right-arrow.png"
                    height="30"
                    width="30"
                    alt=""
                  />
                </span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <hr class="featurette-divider" />

        <!-- /END THE FEATURETTES -->
      </div>
      <!-- Three columns of text below the carousel -->
      <div class=" container-fluid card_Item">
        <div class="row">
          <div class="col-lg-12">
            <div class="p-5 my-4 ">
              <div class="container-fluid py-5 h2-two">
                <h2 class="display-5 fw-bold  ">
                  Notre vivier de compétences
                </h2>
                <p class="col-md-8 fs-4">
                  Nous disposons d’un ensemble d’intervenants composés de
                </p>
              </div>
              <div class="row justify-content-center align-items-md-stretch">
                <div
                  class="col-md-6 col-sm-12 col-lg-4 col-12 "
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  <div class=" p-5 card_cmp  ">
                    <img src="../assets/formation.png" alt="" />
                    <h2>Formation</h2>
                    <p class="fs-4">
                      Formateurs expérimentés dans le domaine de la formation
                      continue .
                    </p>
                  </div>
                </div>
                <div
                  class="col-md-6 col-sm-12 col-lg-4 "
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  <div class=" p-5 card_cmp ">
                    <img src="../assets/pos.png" alt="" />
                    <h2>Consultants</h2>
                    <p class="fs-4">
                      Consultants en Droit, marketing, ressources humaines,
                      communication, recrutement, informatique, ingénierie,
                      management
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 col-sm-12 col-lg-4  "
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  <div class=" p-5 card_cmp  ">
                    <img src="../assets/acmp.png" alt="" />
                    <h2>Enseignants</h2>
                    <p class="fs-4">
                      Enseignants universitaires expérimentés dans les domaines
                      de la formation l’accompagnement et d’interventions
                      formatives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.col-lg-4 -->
        </div>
      </div>

      <!-- /.row -->
      <div class="container col-xxl-8 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-10 col-sm-8 col-lg-6">
            <img
              src="../assets/h16.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 h2-one">
              Lorem ipsum dolor
            </h1>
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
            </p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card  text-white border-0 overflow-hidden">
        <img
          class="card-img responsive_img"
          src="../assets/h11.jpg"
          alt="Card image"
        />
        <span class="mask bg-primary alpha-7"></span>
        <div class="card-img-overlay d-flex align-items-center">
          <div class="col-lg-8">
            <h4 class="heading  h3 text-white">
              La clé de la réussite est de trouver un véritable partenaire
              d’externalisation
            </h4>
            <h4 class="heading  h3 text-white">
              L’intérim est la solution idéale pour vous
            </h4>
            <p class="card-text"></p>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="container">
        <div class="float-end p-2 bg-white">
          <a href="#" class="btn btn-secander">Back to top</a>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import VPip from "v-pip";
export default {
  name: "Home",
  data() {
    return {
      scrolledToBottom: false,
      // Array of objects with path to video files and format.
      videos: [
        { src: "path/to/video.mp4", format: "mp4" },
        { src: "path/to/video.webm", format: "webm" },
      ],

      // Object with subtitles label, source, and language.
      subtitles: {
        label: "English Captions",
        src: "path/to/captions.vtt",
        srclang: "en",
      },

      // Array of objects with path to audio files and format.
      tracks: [
        { src: "path/to/audio.mp3", format: "mp3" },
        { src: "path/to/audio.ogg", format: "ogg" },
      ],

      // YouTube video ID or video URL.
      // https://www.youtube.com/watch?v=bTqVqk7FSmY & https://youtu.be/bTqVqk7FSmY would have the same effect.
      youtubeID: "bTqVqk7FSmY",

      // Vimeo video ID or video URL.
      // https://vimeo.com/147865858 would have the same effect.
      vimeoID: "147865858",

      isPip: false,
      videoOptions: {
        wrapper: "w-full h-full",
        src:
          "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
        class: "w-3/4 rounded",
        alt: "Placeholder Image",
      },
      buttonOptions: {
        wrapper: "",
        type: "button",
        class: "btn",
        label: "Toggle picture-in-picture",
      },
    };
  },
  components: { VPip },
  methods: {
    calculate() {
      //#region - start of - number counter animation
      const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
        const target = document.querySelector(qSelector);
        let startTimestamp = null;
        const step = (timestamp) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          target.innerText = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };
      //#endregion - end of - number counter animation
      var isOk = false;

      document.addEventListener("scroll", () => {
        if (window.scrollY > 1400 && isOk == false) {
          isOk = true;
          counterAnim("#count2", 0, 16, 3000);
          counterAnim("#count3", 0, 25, 2500);
          counterAnim("#count4", 0, 20, 2500);
        }
      });
    },
    //     scroll() {
    //   window.onscroll = () => {
    //     let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

    //     if (bottomOfWindow) {
    //      this.scrolledToBottom = true // replace it with your code
    //     }
    //  }
    // }
    openLoading() {
      const loading = this.$vs.loading({
        text: "Loading...",
        color: "#257579",
        type: "circles",
      });
      setTimeout(() => {
        loading.close();
      }, 500);
    },
  },
  mounted() {
    this.calculate();
    this.openLoading();
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
* {
  font-family: Poppins;
  margin: 0;
  padding: 0;
}
.video--player__vid {
  width: 100%;
  height: 600px;
  z-index: 0;
}
.scale-img {
  transition: 1s;
  &:hover {
    transform: scale(0.9);
    transition: 1s;
  }
}
.responsive_img {
  width: 100%;
  height: 700px;
}
.card_Item {
  background: linear-gradient(90deg, #288b9298 0%, #92feec88 100%);
  .card_cmp {
    background: #fff;
    box-shadow: 10px 10px 25px -5px rgba(100, 100, 100, 0.644);
    border-radius: 15px;
    min-height: 380px;
    margin: 10px 5px;
    position: relative;
    transition: 1s box-shadow;

    img {
      width: 70px;
      height: 70px;
      margin: 5px;
    }
  }
  .card_cmp:hover {
    box-shadow: 0 5px 35px 0px rgba(0, 0, 0, 0.1);
  }
  .card_cmp {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-property: color;
    transition-property: color;
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    background: #fff;
    padding: 8px 15px;
  }
  .card_cmp:before {
    content: "";
    position: absolute;
    border-radius: 15px;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #8e2de9a8 0%, #00ff889f 100%);
    -webkit-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.6s;
    transition-duration: 0.6s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .card_cmp:hover,
  .card_cmp:focus,
  .card_cmp:active {
    color: white;
  }
  .card_cmp:hover:before,
  .card_cmp:focus:before,
  .card_cmp:active:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }

  // background: linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%);
}

.icon_span {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 10px 5px 25px -5px rgba(100, 100, 100, 0.644);

  img {
    margin-top: 4px;
    width: 40px;
    height: 40px;
  }
}
.list-group-item {
  border: none;
}

.h2-one {
  font-family: Poppins;
  font-size: 3.5vh;
  line-height: 1.2;
  font-weight: 700;
  color: rgba(35, 138, 145, 1);
  z-index: 10;
  text-align: start;
}
.lead {
  text-align: start;
}
.h2-two {
  h2 {
    font-family: Poppins;
    font-size: 5vh;
    line-height: 1.2;
    font-weight: 700;
    color: rgb(255, 255, 255);
    z-index: 10;
    text-align: start;
  }
  p {
    color: #fff;
  }
}
#featured-3 {
  h2 {
    font-size: 4vh;
    color: rgba(35, 138, 145, 1);
  }
}
.section-place {
  z-index: 11;
  margin-top: 5rem;
  p {
    z-index: 100;
    position: relative;
  }
}
.div-ch {
  background: linear-gradient(90deg, #288b9298 0%, #92feec88 100%);
  border-radius: 10px;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.card-futur {
  img {
    width: 50px;
    height: 50px;
    margin: 20px;
  }
}

.slide-img {
  overflow: hidden;
  img {
    width: 300px;
    height: 300px;
  }
}

.card_nb {
  font-family: Montserrat;
  color: rgb(121, 122, 122);
}
.chiffre {
  font-family: Poppins;
  font-size: 23px;
  color: rgb(99, 99, 99);
}
.pluss {
  color: rgba(35, 138, 145, 1);
  margin-top: 7px;
}
.care {
  width: 25vh;
  height: 17vh;
  transform: translate(-31%, 3%) !important;
  border-radius: 30px 0 30px 0;
}

.titre-info {
  color: rgb(97, 97, 97);
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

@media screen and (max-width: 478px) {
  .carousel-item {
    h1 {
      font-size: 1.4rem;
    }
    h5 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.905rem;
    }
  }
}
</style>
