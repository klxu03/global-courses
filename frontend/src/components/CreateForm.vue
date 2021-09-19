<template>
  <q-card class="my-card">
    <q-form @submit="onSubmit" @reset="onReset">
      <q-input
        filled
        v-model="title"
        label="Title of lesson*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="author"
        label="Original creator*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="link"
        label="URL Link*"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Please type something']"
      />

      <q-input
        filled
        v-model="thumbnail"
        label="Module thumbnail link"
        lazy-rules
      />

      <q-input
        filled
        v-model="avatar"
        label="Creator avatar thumbnail link"
        lazy-rules
      />

      <q-input
        filled
        v-model="description"
        label="Description of module"
        lazy-rules
      />

      <q-toggle v-model="youtube" label="Is this a YouTube Video?" />

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";

import { currentCourseCreateState } from "src/state";

export default defineComponent({
  props: {
    unit: {
      type: Number,
      required: true,
    },
    courseID: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const title = ref("");
    const author = ref("");
    const thumbnail = ref("");
    const avatar = ref("");
    const description = ref("");
    const link = ref("");
    const youtube = ref(false);

    const $q = useQuasar();
    const onSubmit = () => {
      $q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Submitted",
      });

      let newEpisodeNumber = 1; // Default episode number is 1, unless there already exists episodes in the unit then you add +1
      const arr = currentCourseCreateState.units[props.unit - 1].modules;
      if (arr.length != 0) {
        newEpisodeNumber = arr[arr.length - 1].ep + 1;
      }

      const newEpisode = {
        ep: newEpisodeNumber,
        title: title.value,
        author: author.value,
        thumbnail: thumbnail.value,
        avatar: avatar.value,
        description: description.value,
        youtube: youtube.value,
        link: link.value,
      };
      currentCourseCreateState.units[props.unit - 1].modules.push(newEpisode);
    };

    const onReset = () => {
      title.value = null;
      author.value = null;
      description.value = null;
    };

    return {
      onSubmit,
      onReset,
      title,
      author,
      thumbnail,
      avatar,
      description,
      link,
      youtube,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}
</style>
