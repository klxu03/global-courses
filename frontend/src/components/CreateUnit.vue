<template>
  <q-card class="unit">
    <q-card-section horizontal>
      <div class="text-h5 col">
        <div class="text-center">Unit {{ unit }}</div>
      </div>
    </q-card-section>

    <q-separator inset />

    <CreateModule
      v-for="module in currentCourseCreateState.units[unit - 1].modules"
      :key="module.ep"
      :title="module.title"
      :author="module.author"
      :ep="module.ep"
      :unit="unit"
      :avatar="module.avatar"
    />

    <q-card-actions>
      <q-dialog v-model="card">
        <CreateForm :unit="unit" :courseID="courseID" :episode="ep" />
      </q-dialog>

      <q-btn @click="card = true" flat>Add</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent, ref } from "vue";
import CreateForm from "components/CreateForm.vue";
import CreateModule from "components/CreateModule.vue";

import { currentCourseCreateState } from "src/state";

export default defineComponent({
  components: {
    CreateForm,
    CreateModule,
  },
  props: {
    unit: {
      type: Number,
      required: true,
    },
  },
  setup() {
    const card = ref(false);
    const courseID = ref("sfjekljsklfsefjskl");
    const ep = ref(1);

    return {
      card,
      courseID,
      ep,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      currentCourseCreateState,
    };
  },
});
</script>

<style lang="scss" scoped>
.unit {
  width: 80%;
}
</style>
