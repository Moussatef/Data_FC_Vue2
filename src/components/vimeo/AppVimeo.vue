<template>
    <!-- <vimeo-player
      ref="player"
      :password="password"
      :video-id="videoID"
      @ready="onReady"
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%"
    ></vimeo-player> -->
    <div style="padding: 56.25% 0 0 0; position: relative">
            <iframe
              :src="'https://player.vimeo.com/video/'+videoID+'?h=8677866509&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
              title="DFC"
            ></iframe>
          </div>
  
</template>
<script>
export default {
  props: ["id_video"],

  data: () => {
    return {
      videodata: "",
      formation_id: "",
      imagepreview:
        "https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",
      password: "Data@Fc@2020_adm",
      videoID: "643715888",
      height: "",
      width: "",
      options: {
        muted: true,
        autoplay: false,
      },
      playerReady: false,
    };
  },
  methods: {
    onReady() {
      this.playerReady = true;
    },
    play() {
      this.$refs.player.play();
    },
    pause() {
      this.$refs.player.pause();
    },
  },
};
</script>