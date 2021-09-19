<template>
  <q-header bordered class="bg-primary text-white" elevated>
    <q-toolbar>
      <q-toolbar-title> {{ courseTitle }} </q-toolbar-title>

      <q-avatar>
        <input
          type="image"
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          @click="goHome"
        />
      </q-avatar>
      <div style="visibility: hidden">s</div>
      <div onclick="goHome">Global Courses</div>
    </q-toolbar>
  </q-header>

  <!-- Bleh -->

  <q-page class="flex flex-center">
    <div class="top-buttons">
      <q-btn
        style="margin-right: 5px"
        push
        color="primary"
        label="Add Unit"
        @click="addUnit"
      />
      <q-btn
        style="margin-left: 5px"
        push
        color="green"
        label="Create Class"
        @click="createClass"
      />
    </div>

    <CreateUnit
      class="unit"
      v-for="unit in currentCourseCreateState.units"
      :key="unit.unitId"
      :unit="unit.unitId"
    />
  </q-page>
</template>

<script>
import CreateUnit from "components/CreateUnit.vue";
import { currentCourseCreateState } from "src/state";

import { defineComponent, ref } from "vue";

import { useRouter, useRoute } from "vue-router";

import ky from "ky";
import uniqid from "uniqid";

export default defineComponent({
  components: { CreateUnit },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const courseTitle = ref(route.params.courseTitle.toString());
    const author = ref(route.params.authorName.toString());

    currentCourseCreateState.courseName = courseTitle.value;
    currentCourseCreateState.courseAuthor = author.value;

    const addUnit = () => {
      currentCourseCreateState.units.push({
        unitId: currentCourseCreateState.units.length + 1,
        modules: [],
      });
    };

    const createClass = async () => {
      currentCourseCreateState.courseId = uniqid();

      console.log(
        JSON.stringify({
          course: currentCourseCreateState,
        })
      );

      const json = await ky
        .post("http://localhost:8000/course", {
          json: currentCourseCreateState,
        })
        .json();

      goHome();
    };

    const goHome = () => {
      router.push("/");
    };

    return {
      addUnit,
      currentCourseCreateState,
      createClass,
      goHome,
      courseTitle,
    };
  },
});
</script>

<style lang="scss">
.top-buttons {
  margin: 10px 20%;
}

.unit {
  margin: 1% 0;
}
</style>
