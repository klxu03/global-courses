<template>
  <q-header bordered class="bg-primary text-white" elevated>
    <q-toolbar>
      <q-toolbar-title> Create a Lesson </q-toolbar-title>

      <q-avatar @click="console.log('Pressed home')">
        <input
          type="image"
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          onclick="console.log('Pressed home');"
        />
      </q-avatar>
      <div style="visibility: hidden">s</div>
      <div onclick="console.log('Pressed home');">Global Courses</div>
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

import { defineComponent } from "vue";
import ky from "ky";

export default defineComponent({
  components: { CreateUnit },
  setup() {
    const addUnit = () => {
      currentCourseCreateState.units.push({
        unitId: currentCourseCreateState.units.length + 1,
        modules: [],
      });
    };

    const createClass = async () => {
      const json = await ky
        .post("http://localhost:8000/class", {
          json: { course: currentCourseCreateState },
        })
        .json();
      console.log("LET'S FUCKING MAKE THE CLASS");
    };

    return {
      addUnit,
      currentCourseCreateState,
      createClass,
    };
  },
});
</script>

<style lang="scss">
.top-buttons {
  margin: 10px 1%;
}

.unit {
  margin: 1% 0;
}
</style>
