<template>
  <q-header bordered class="bg-primary text-white" elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        class="q-mr-sm"
        @click="toggleLeftDrawer"
      />

      <q-toolbar-title> {{ courseName }} </q-toolbar-title>

      <q-avatar>
        <input
          type="image"
          src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"
          @click="goHome"
        />
      </q-avatar>
      <div style="visibility: hidden">s</div>
      <div onclick="console.log('Pressed home');">Global Courses</div>
    </q-toolbar>
  </q-header>

  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <LessonDropdown :numUnits="numUnits" @changeUnit="changeUnit($event)" />
    <q-list>
      <LessonCard
        v-for="(lesson, index) in lessons"
        :key="lesson.title"
        v-bind="lesson"
        :ep="index + 1"
        :unit="activeUnit"
        :courseId="courseId"
      />
    </q-list>
  </q-drawer>

  <!-- Bleh -->

  <q-page class="flex flex-center">
    <div class="content">
      <LessonContent
        :youtube="episode.youtube"
        :link="episode.link"
        :title="episode.title"
      />
    </div>

    <div class="description">
      <LessonDescription :description="episode.description" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from "vue";

import LessonCard from "components/LessonCard.vue";
import LessonContent from "components/LessonContent.vue";
import LessonDescription from "components/LessonDescription.vue";
import LessonDropdown from "components/LessonDropdown.vue";

import { currentCourseWatchState } from "src/state";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "Lesson",

  components: {
    LessonCard,
    LessonContent,
    LessonDescription,
    LessonDropdown,
  },

  setup() {
    const courseName = currentCourseWatchState.state.courseName;
    const courseId = currentCourseWatchState.state.courseId;
    const units = ref(currentCourseWatchState.state.units);

    // console.log("units", units.value);

    const numUnits = units.value.length;
    const activeUnit = ref(0);

    const currentEpisode = computed(() => {
      return route.params.epId.toString();
    });

    const episode = computed(() => {
      const modules = units.value[activeUnit.value].modules;
      console.log("modules", modules);
      return modules.find((single) => single.ep == currentEpisode.value);
    });
    console.log("episode", episode);

    const route = useRoute();
    const router = useRouter();

    const changeUnit = (val) => {
      console.log("Parent changing activeUnit");
      activeUnit.value = val;
      router.push(
        "/course/" +
          currentCourseWatchState.state.courseId +
          "/unit/" +
          (val + 1) +
          "/ep/1/"
      );
    };

    const lessons = computed(() => {
      console.log("new activeUnit", activeUnit.value);
      return units.value[activeUnit.value].modules;
    });

    console.log("lessons", lessons);

    const leftDrawerOpen = ref(false);

    const onItemClick = () => {
      console.log("Clicked on something");
    };

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const goHome = () => {
      router.push("/");
    };

    return {
      numUnits,
      courseId,
      courseName,
      units: units,
      lessons: lessons,
      activeUnit,
      episode,
      changeUnit,
      leftDrawerOpen,
      toggleLeftDrawer,
      onItemClick,
      goHome,
    };
  },
});

const lessons = [
  {
    title: "Docs",
    author: "1/1/1",
    courseID: "12sfd3kj242134",
    unit: 3,
    ep: 1,
    thumbnail: "https://cdn.quasar.dev/img/avatar2.jpg",
    avatar: "https://cdn.quasar.dev/img/parallax2.jpg",
    liked: true,
    watched: true,
    description: "lorem ipsum (or can autogenerate from YouTube description)",
    link: "https://google.com",
    youtube: true,
  },
  {
    title: "Github",
    author: "2/2/2",
    ep: 2,
  },
  {
    title: "Discord Chat Channel",
    author: "3/3/3",
    ep: 3,
    thumbnail: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  {
    title: "Forum",
    author: "4/4/4",
    ep: 4,
    thumbnail: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  {
    title: "Twitter",
    author: "5/5/5",
    ep: 5,
    thumbnail: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  {
    title: "Facebook",
    author: "6/6/6",
    ep: 6,
    thumbnail: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
  {
    title: "Quasar Awesome",
    author: "7/7/7",
    ep: 7,
    thumbnail: "https://cdn.quasar.dev/img/parallax2.jpg",
  },
];
</script>

<style lang="scss" scoped>
.content {
  height: 95%;
}

.description {
  width: 100%;
}
</style>
