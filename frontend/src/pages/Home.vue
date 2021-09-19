<template>
  <q-header bordered class="bg-primary text-white" elevated>
    <q-toolbar>
      <q-toolbar-title> Home </q-toolbar-title>

      <q-avatar>
        <input
          type="image"
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
        />
      </q-avatar>
      <div style="visibility: hidden">s</div>
      <div onclick="goHome">Global Courses</div>
    </q-toolbar>
  </q-header>

  <!-- Bleh -->

  <q-page class="flex flex-center">
    <h3 style="width: 100%; margin: 0 auto" class="text-center">
      Come Create a Class!
    </h3>
    <q-btn
      style="width: 20%; margin: 1% 0"
      push
      color="green"
      label="Create a Class!"
      @click="confirm = true"
    />

    <q-dialog v-model="confirm">
      <q-card style="width: 50%">
        <q-form @submit="createClass">
          <q-input
            filled
            v-model="title"
            label="Title of lesson*"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            v-model="author"
            label="Original creator*"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <div style="">
            <q-btn label="Submit" type="submit" color="primary" />
          </div>
        </q-form>
      </q-card>
    </q-dialog>

    <h3 style="width: 100%; margin: 0 auto" class="text-center">
      All Classes Available:
    </h3>
    <div class="classes row">
      <HomeClass
        v-for="course in allClassesState.state"
        :key="course.courseId"
        :title="course.courseName"
        :courseId="course.courseId"
        :author="course.courseAuthor"
        actionText="Go to Class"
      />
    </div>
  </q-page>
</template>

<script>
import { onMounted, ref } from "vue";
import HomeClass from "components/HomeClass.vue";

import { useRouter } from "vue-router";
import ky from "ky";

import { allClassesState } from "src/state";

export default {
  components: {
    HomeClass,
  },
  setup() {
    const router = useRouter();
    const user = ref("");

    const confirm = ref(false);

    const title = ref("");
    const author = ref("");
    const createClass = () => {
      router.push("/create/" + title.value + "/author/" + author.value);
    };

    onMounted(async () => {
      const json = (await ky.get("http://localhost:8000/course").json())
        .courses;
      console.log("json", json);
      allClassesState.state = json;
    });

    return {
      user,
      title,
      author,
      createClass,
      confirm,
      allClassesState,
    };
  },
};
</script>

<style lang="scss" scoped>
.classes {
  width: 100%;
  margin: 5% auto;
}
</style>
