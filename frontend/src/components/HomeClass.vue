<template>
  <q-card class="my-card">
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">{{ title }}</div>
      <div class="text-subtitle2">by {{ author }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat @click="goToClass">{{ actionText }}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { currentCourseWatchState } from "src/state";
import ky from "ky";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    courseId: {
      type: String,
      required: true,
    },
    actionText: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const goToClass = async () => {
      const json = await ky
        .get("http://localhost:8000/course/" + props.courseId)
        .json();

      console.log("json", json);
      currentCourseWatchState.state = json;
      router.push("/course/" + props.courseId + "/unit/1/ep/1");
    };

    return { goToClass };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  margin: 1% 1%;
  max-width: 20%;
}
</style>
