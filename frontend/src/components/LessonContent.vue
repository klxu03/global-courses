<template>
  <div>
    <div v-if="youtube">
      <h2>Here is a youtube video</h2>
    </div>
    <div v-else>Here is the URL Link: {{ link }}</div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

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
  },
  setup() {},
});
</script>

<style scoped>
iframe {
  border: 1px solid black;
  width: 100%;
}
</style>
