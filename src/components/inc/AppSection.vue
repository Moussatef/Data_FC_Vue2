<template>
  <div class="overflow-hidden ">
    <section class=" text-center ">
      <div class="row py-lg-5 position-relative section-place">
        <div class="wrapper">
          <svg
            class="position-absolute mt-5  translate-middle  "
            width="350"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#9EF0F0"
              d="M41.4,-46.8C57.2,-45.5,76.1,-38.2,83.4,-24.9C90.7,-11.7,86.5,7.5,79,24.1C71.5,40.7,60.7,54.8,47,60.9C33.3,67,16.7,65.1,-1.2,66.8C-19.1,68.4,-38.1,73.6,-50.7,67.1C-63.2,60.6,-69.3,42.6,-74.8,24.6C-80.3,6.6,-85.2,-11.4,-82.1,-28.5C-79,-45.6,-67.9,-61.8,-52.9,-63.5C-37.8,-65.1,-18.9,-52,-3.1,-47.8C12.8,-43.6,25.6,-48.2,41.4,-46.8Z"
              transform="translate(100 100)"
            /></svg
          ><svg
            class="position-absolute   translate-middle   "
            width="250"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#A7F0BA"
              d="M53.9,-66.2C66,-54.1,69.4,-33.5,70.9,-14.1C72.4,5.3,72.1,23.3,64.5,37.8C56.8,52.3,41.9,63.2,26.3,66.1C10.8,69,-5.3,64,-19.4,57.2C-33.5,50.4,-45.6,41.8,-58.1,29.2C-70.5,16.5,-83.5,-0.3,-83.7,-17.5C-83.9,-34.7,-71.3,-52.3,-55.2,-63.8C-39.1,-75.2,-19.6,-80.5,0.7,-81.3C20.9,-82.1,41.8,-78.4,53.9,-66.2Z"
              transform="translate(100 100)"
            />
          </svg>

          <div class="typing-demo h2-one fw-light text-uppercase ">
            {{ titre }}
          </div>
        </div>
        <p class=" fs-5 mt-3 ">
        </p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  props: ["titre"],
  name: "AppSection",
};
</script>
<style lang="scss" scoped>
section {
  padding: 100px 10px;

  background: url("../../assets/back-header.jpg") repeat;

  .wrapper {
    /*This part is important for centering*/
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      opacity: 25%;
      animation: tst 4s infinite, down-d 0.5s step-end alternate;
    }
  }
}

@keyframes down_d {
  from {
    transform: translateY(-20px);
  }
}
@keyframes tst {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
  // 50% {
  //   transform: translateY(5px);
  // }
}
</style>
