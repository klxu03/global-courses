<template>
  <div>
    <div v-if="youtube">
      <h3>Here is a youtube video {{ title }}</h3>
      <q-video :ratio="16 / 9" :src="embed_link" />
    </div>
    <div v-else>Here is the URL Link: {{ link }}</div>
    <!-- https://stackoverflow.com/questions/2478391/get-youtube-videos-title-with-jquery-using-youtube-api -->
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: {
    youtube: {
      type: Boolean,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const embed_link = computed(() => {
      return "https://www.youtube.com/embed/" + props.link.substring(32, 43);
    });

    console.log("embed_link", embed_link);
    return {
      embed_link,
    };
  },
});
</script>

<style scoped>
iframe {
  border: 1px solid black;
  width: 100%;
}
</style>
