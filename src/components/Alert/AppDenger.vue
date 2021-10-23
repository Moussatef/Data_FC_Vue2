<template>
  <div>
    <vs-alert closable  v-model="active">
      <template #title>
        {{ title }}
      </template>
      {{ description }}
    </vs-alert>
  </div>
</template>

<script>
export default {
  props: ["title", "description", "activeDang"],
  name: "AppDenger",
  data: () => ({
    active: this.activeDang || false,
    time: 6000,
    // progress: 0,
  }),
//   watch: {
//     active(val) {
//       if (val) {
//         var interval = setInterval(() => {
//           this.progress++;
//         }, this.time / 100);

//         setTimeout(() => {
//           this.active = false;
//           clearInterval(interval);
//           this.progress = 0;
//         }, this.time);
//       }
//     },
//   },
};
</script>
