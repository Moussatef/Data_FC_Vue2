<template>
  <div class="home bg-light overflow-hidden square">
    <main>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/company/cover33.jpg"
              class="d-block responsive_img"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h1 class="text-uppercase">Ingénierie de formation</h1>
              <p>
                Les actions de formation continue n’ont de sens que si elles
                sont étroitement intégrées dans un processus visant l'atteinte
                des orientations stratégiques de l’entreprise (ou de
                l’organisation) .
              </p>
              <p>
                <vs-button
                  class="text-center mx-auto"
                  color="rgba(35, 138, 145, 1) "
                  to="/ingenierie-de-formation"
                  size="xl"
                >
                  Lire la suite
                </vs-button>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/company/cover3.jpg"
              class="d-block responsive_img"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h1>FORMATION</h1>
              <h5>
                Vous cherchez à développer vos compétences et améliorer la
                compétitivité de votre entreprise ?
              </h5>
              <p>
                La formation est le moyen idéal pour y aboutir, elle constitue
                l’un des principaux leviers de management de votre capital
                humain
              </p>
              <p>
                <vs-button
                  class="text-center mx-auto"
                  to="/formation"
                  color="rgba(35, 138, 145, 1) "
                  size="xl"
                >
                  Apprendre encore plus
                </vs-button>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/company/offic1.jpg"
              class="d-block responsive_img"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h1>ASSISTANCE CONSEIL EN RECRUTEMENT</h1>
              <p>
                Disposant des outils et des compétences nécessaires, DATA FC
                vous apporte conseil et soutien lors de votre processus de
                recrutement pour vous aider dans le cadre de votre stratégie de
                développement, à optimiser la gestion de vos ressources
                humaines.
              </p>
              <p>
                <vs-button
                  class="text-center mx-auto"
                  to="/assistance-conseil-en-recrutement"
                  color="rgba(35, 138, 145, 1) "
                  size="xl"
                >
                  Apprendre encore plus
                </vs-button>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/company/cover200.jpg"
              class="d-block responsive_img"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h1>L’EXTERNALISATION</h1>
              <h4 class="">Vous avez une entreprise :</h4>
              <p>vous cherchez à vous concentrer sur votre cœur de métier</p>
              <p class="">
                Vous cherchez l’accès à des compétences nouvelles ou
                supérieures, mais aussi de répondre aux évolutions
                technologiques
              </p>
              <p>
                <vs-button
                  class="text-center mx-auto"
                  to="/assistance-conseil-en-recrutement"
                  color="rgba(35, 138, 145, 1) "
                  size="xl"
                >
                  Apprendre encore plus
                </vs-button>
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="../assets/company/cover22.jpg"
              class="d-block responsive_img"
              alt="..."
            />
            <div class="carousel-caption d-md-block">
              <h1>L'INTERIM POUR L'ENTREPRISE</h1>
              <h4 class="">Vous êtes une entreprise et :</h4>
              <p>
                - Vous avez des besoins ponctuels en termes de qualifications ou
                de personnel ?
              </p>
              <p class="">
                - Vous cherchez à gérer des besoins non planifiés en main
                d’œuvre ?
              </p>
              <p>
                <vs-button
                  class="text-center mx-auto"
                  to="/l-interim-pour-l-entreprise"
                  color="rgba(35, 138, 145, 1) "
                  size="xl"
                >
                  Apprendre encore plus
                </vs-button>
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="container marketing my-2">
        <!-- START THE FEATURETTES -->

        <div class="row featurette my-3">
          <div class="col-md-7 my-5 py-5 position-relative">
            <div
              class="my-3"
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
              class="mt-4 pt-4"
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
              class="d-block mx-lg-auto img-fluid rounded"
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
            class="col-md-5 col-lg-5"
            data-aos="fade-down"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img
              src="../assets/ong1.jpg"
              class="d-block mx-lg-auto img-fluid rounded"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div
            class="col-lg-6 col-12"
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <h2 class="featurette-heading h2-one mb-4">Nos engagements</h2>
            <div class="list-group row mb-2">
              <div class="row justify-content-between align-items-center">
                <div class="col-lg-1 col-md-1 col-sm-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/guarante.png" class="" />
                  </div>
                </div>
                <label
                  class="list-group-item py-3 col-xxl-10 col-9 mb-2 border-0"
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Garantir des prestations de qualité répondant aux exigences
                    de nos clients</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2">
              <div class="row justify-content-between align-items-center">
                <div class="col-xxl-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/cooperation.png" altr="" />
                  </div>
                </div>
                <label
                  class="
                    list-group-item
                    border-0
                    shadow
                    py-3
                    col-xxl-10 col-9
                    mb-2
                  "
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Etre un partenaire d’excellence de nos clients</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2">
              <div class="row justify-content-between align-items-center">
                <div class="col-xxl-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/idea.png" altr="" />
                  </div>
                </div>
                <label
                  class="
                    list-group-item
                    border-0
                    shadow
                    py-3
                    col-xxl-10 col-9
                    mb-2
                  "
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Fournir des solutions innovantes et sur mesure pour chaque
                    entreprise cliente</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2">
              <div class="row justify-content-between align-items-center">
                <div class="col-xxl-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/like.png" altr="" />
                  </div>
                </div>
                <label
                  class="
                    list-group-item
                    border-0
                    shadow
                    py-3
                    col-xxl-10 col-9
                    mb-2
                  "
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Satisfaire nos clients dans le but de maintenir une
                    relation confirmée et durable</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2">
              <div class="row justify-content-between align-items-center">
                <div class="col-xxl-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/technology.png" altr="" />
                  </div>
                </div>
                <label
                  class="
                    list-group-item
                    border-0
                    shadow
                    py-3
                    col-xxl-10 col-9
                    mb-2
                  "
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Proposer des services novateurs, un accompagnement
                    privilégié et des conseils personnalisés</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2">
              <div class="row justify-content-between align-items-center">
                <div class="col-xxl-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/balance-scale.png" altr="" />
                  </div>
                </div>
                <label
                  class="
                    list-group-item
                    border-0
                    shadow
                    py-3
                    col-xxl-10 col-9
                    mb-2
                  "
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Assurer une déontologie de travail dans toutes nos
                    interventions</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row mb-2">
              <div class="row justify-content-between align-items-center">
                <div class="col-xxl-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/consult.png" altr="" />
                  </div>
                </div>
                <label
                  class="
                    list-group-item
                    border-0
                    shadow
                    py-3
                    col-xxl-10 col-9
                    mb-2
                  "
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Viser l’excellence et la perfection dans la réalisation de
                    toutes nos prestations</span
                  >
                </label>
              </div>
            </div>
            <div class="list-group row">
              <div class="row justify-content-between align-items-center">
                <div class="col-xxl-1 col-2">
                  <div class="icon_span">
                    <img src="../assets/authorized-dealer.png" altr="" />
                  </div>
                </div>
                <label
                  class="
                    list-group-item
                    border-0
                    shadow
                    py-3
                    col-xxl-10 col-9
                    mb-2
                  "
                >
                  <span class="d-block fs-6 text-start text-start opacity-90"
                    >Adopter des pratiques responsables et un comportement
                    éthique avec nos clients</span
                  >
                </label>
              </div>
            </div>
          </div>
        </div>
        <div
          class="row featurette"
          data-aos="zoom-in-down"
          data-aos-delay="50"
          data-aos-duration="1400"
          data-aos-easing="ease-in"
        >
          <div class="container px-4 py-5 card-futur" id="featured-3">
            <h2 class="pb-2 border-bottom">Nos valeurs</h2>

            <div
              id="carouselExampleInterval"
              class="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                  <div class="slide-img">
                    <img
                      src="../assets/SvgUl/inspiration-pana.svg"
                      class=""
                      alt=""
                    />
                  </div>

                  <div class="titre-info">
                    <p class="fs-3">L'innovation</p>
                  </div>
                </div>

                <div class="carousel-item" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/SvgUl/time-amico.svg" class="" alt="" />
                  </div>

                  <div class="container">
                    <div class="titre-info">
                      <p class="fs-3">La confidentialité et l'honnêteté</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item shadow" data-bs-interval="3000">
                  <div class="slide-img">
                    <img
                      src="../assets/SvgUl/Webinar-rafiki.svg"
                      class=""
                      alt=""
                    />
                  </div>

                  <div class="container">
                    <div class="titre-info">
                      <p class="fs-3">La responsabilité</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item shadow" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/cooperation.png" class="" alt="" />
                  </div>

                  <div class="container">
                    <div class="titre-info">
                      <p class="fs-3">Le respect</p>
                    </div>
                  </div>
                </div>
                <div class="carousel-item shadow" data-bs-interval="3000">
                  <div class="slide-img">
                    <img src="../assets/SvgUl/amico1.svg" class="" alt="" />
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

        <div class="container-fluid">
          <div class="row justify-content-center">
            <!-- <div
              class="col-12"
              data-aos="fade-up"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <AppVimeo :id_video="'645179394'" />
            </div> -->
            <div class="col-lg-6 col-12 my-3">
              <div
                class="shadow overflow-hidden"
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
                class="shadow overflow-hidden"
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

        <!-- /END THE FEATURETTES -->
      </div>
      <div class="p-2">
        <div class="row justify-content-center text-center my-5">
          <div class="col-lg-3 col-sm-12 col-12 col-md-8 my-4">
            <div
              class="card p-2 border-0 rounded-lg shadow"
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
            >
              <div class="mb-5">
                <img src="../assets/book.png" width="80" alt="" />
              </div>
              <div class="d-flex justify-content-center">
                <span id="count2" class="display-3 card_nb"></span>
                <span class="fs-1 pluss">+</span>
              </div>

              <div class="chiffre">FORMATIONS</div>
            </div>
          </div>
          <div
            class="col-lg-4 col-sm-12 col-12 col-md-8 my-4"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease-in"
          >
            <div class="card p-2 border-0 rounded-lg shadow">
              <div class="mb-5">
                <img src="../assets/writing.png" width="80" alt="" />
              </div>
              <div class="d-flex justify-content-center">
                <span id="count3" class="display-3 card_nb"></span>
                <span class="fs-1 pluss">+</span>
              </div>
              <div class="chiffre text-uppercase">
                formations interentreprises
              </div>
            </div>
          </div>
          <div
            class="col-lg-3 col-sm-12 col-12 col-md-8 my-4"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-in"
          >
            <div class="card p-2 border-0 rounded-lg shadow">
              <div class="mb-5">
                <img src="../assets/group(1).png" width="80" alt="" />
              </div>
              <div class="d-flex justify-content-center">
                <span id="count4" class="display-3 card_nb"></span>
                <span class="fs-1 pluss">+</span>
              </div>

              <div class="chiffre">ENSEIGNANTS</div>
            </div>
          </div>
        </div>
      </div>

      <hr class="featurette-divider" />

      <hr class="featurette-divider" />
      <!-- Three columns of text below the carousel -->
      <div class="container-fluid card_Item">
        <div class="row">
          <div class="col-12">
            <div class="my-4">
              <div class="h2-two">
                <h2 class="display-5 fw-bold">Notre vivier de compétences</h2>
                <p class="col-md-8 col-12 fs-4">
                  Nous disposons d’un ensemble d’intervenants composés de
                </p>
              </div>
              <div class="row justify-content-center align-items-md-stretch">
                <div
                  class="col-md-6 col-sm-12 col-lg-4 col-12"
                  data-aos="fade-right"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  <div class="p-5 card_cmp">
                    <img src="../assets/formation.png" alt="" />
                    <h2>Formation</h2>
                    <p class="">
                      Formateurs expérimentés dans le domaine de la formation
                      continue .
                    </p>
                  </div>
                </div>
                <div
                  class="col-md-6 col-sm-12 col-lg-4"
                  data-aos="fade-down"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  <div class="p-5 card_cmp">
                    <img src="../assets/pos.png" alt="" />
                    <h2>Consultants</h2>
                    <p class="">
                      Consultants en Droit, marketing, ressources humaines,
                      communication, recrutement, informatique, ingénierie,
                      management
                    </p>
                  </div>
                </div>

                <div
                  class="col-md-6 col-sm-12 col-lg-4"
                  data-aos="fade-left"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in"
                >
                  <div class="p-5 card_cmp">
                    <img src="../assets/acmp.png" alt="" />
                    <h2>Enseignants</h2>
                    <p class="">
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
      <div class="container-fluid col-xxl-10 px-4 py-5">
        <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div class="col-12 col-xxl-6">
            <img
              src="../assets/h16.jpg"
              class="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div class="col-12 col-xxl-6">
            <h1 class="display-5 fw-bold lh-1 mb-3 h2-one">
              Formations Interentreprises
            </h1>
            <p class="lead"></p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <vs-button
                to="/formations-interentreprises"
                size="xl"
                upload
                color="warn"
                gradient
                :active="active == 3"
                @click="active = 3"
              >
                Obtenez le maintenant <i class="bx bxs-bell-ring mx-2"></i>
              </vs-button>
            </div>
          </div>
        </div>
      </div>
      <div class="card text-white border-0 overflow-hidden">
        <img
          class="card-img responsive_img"
          src="../assets/h11.jpg"
          alt="Card image"
        />
        <span class="mask bg-primary alpha-7"></span>
        <div class="card-img-overlay d-flex align-items-center">
          <div class="col-lg-8">
            <h4 class="heading h3 text-white">
              La clé de la réussite est de trouver un véritable partenaire
              d’externalisation
            </h4>
            <h4 class="heading h3 text-white">
              L’intérim est la solution idéale pour vous
            </h4>
            <p class="card-text"></p>
          </div>
        </div>
      </div>
      <div class="my-5">
        <v-sheet class="mx-auto pt-3" elevation="8" max-width="900">
          <h2 class="text-center mt-3 text-muted">Notre clients</h2>
          <hr />
          <v-slide-group
            v-model="model"
            class="pa-4"
            active-class="success"
            show-arrows
          >
            <v-slide-item class="text-center">
              <v-card class="ma-4" height="200" width="200">
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <img
                      height="200"
                      width="200"
                      src="@/assets/company/itpm.png"
                      alt=""
                    />
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
            <v-slide-item class="text-center">
              <v-card class="ma-4" height="200" width="200">
                <v-row class="fill-height" align="center" justify="center">
                  <v-scale-transition>
                    <img
                      height="200"
                      width="200"
                      src="@/assets/company/fertitiech.png"
                      alt=""
                    />
                  </v-scale-transition>
                </v-row>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: false,
      model: null,
    };
  },
  components: {},
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
          counterAnim("#count2", 0, 100, 4000);
          counterAnim("#count3", 0, 125, 3500);
          counterAnim("#count4", 0, 30, 3500);
        }
      });
    },

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

.carousel-item {
  h1 {
    font-size: 5.7rem;
  }
  h5 {
    font-size: 2.1rem;
  }
  h4 {
    font-size: 2.1rem;
  }
  p {
    font-size: 1.5rem;
  }
}
.vs-dialog {
  max-width: 1800px !important;
}
.vs-input {
  width: 100% !important;
}
.vs-select-content {
  width: 100%;
  max-width: 100% !important;
}

.scale-img {
  transition: 1s;
  &:hover {
    transform: scale(1.2);
    transition: 1s;
  }
}
.responsive_img {
  width: 100%;
  height: 700px;
}
ul {
  padding-left: 0px !important;
}
.card_Item {
  background: linear-gradient(90deg, #288b9298 0%, #92feec88 100%);
  .card_cmp {
    background: #fff;
    box-shadow: 10px 10px 25px -5px rgba(100, 100, 100, 0.644);
    min-height: 450px;
    margin: 10px 5px;
    position: relative;
    transition: 1s box-shadow;

    img {
      width: 100px;
      height: 100px;
      margin: 5px;
      margin-bottom: 25px;
    }
    h2 {
      color: rgb(42, 115, 124);
    }
    p {
      margin-top: 25px;
      font-size: 22px;
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
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, #237979a8 0%, #00ccff9f 100%);
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
    h2 {
      transition: 0.6s;
      color: rgb(255, 255, 255);
    }
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
@media (max-width: 968px) {
  .h2-two {
    h2 {
      font-size: 22px;
      text-align: left;
    }
    p {
      color: #fff;
      font-size: 18px !important;
      text-justify: distribute;
      text-align: left !important;
    }
  }
  .carousel-item {
    h1 {
      font-size: 5vw;
    }
    h5 {
      font-size: 3vw;
    }
    p {
      font-size: 3vw;
    }
  }
}

@media screen and (max-width: 578px) {
  .carousel-item {
    h1 {
      font-size: 8.7vw;
    }
    h5 {
      font-size: 6vw;
    }
    p {
      font-size: 4vw;
    }
  }
}
</style>
