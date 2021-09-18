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

      <q-toolbar-title> {{ title }} </q-toolbar-title>

      <q-avatar onclick="console.log('Pressed home');">
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

  <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
    <q-list>
      <q-item-label header>
        <q-btn-dropdown
          class="dropdown"
          color="primary"
          label="Unit 5 - Cellular Resp"
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Unit 1 - Sah</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Unit 2 - Sah</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick">
              <q-item-section>
                <q-item-label>Unit 3 - Sah</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-item-label>
      <LessonCard
        v-for="lesson in lessons"
        :key="lesson.title"
        v-bind="lesson"
      />
    </q-list>
  </q-drawer>

  <!-- Bleh -->

  <q-page class="flex flex-center">
    <div class="content">
      <LessonContent
        :youtube="true"
        link="https://www.youtube.com/watch?v=AfxxFE3gqAM"
        :title="'Random Vid Title'"
      />
    </div>

    <div class="description">
      <LessonDescription :description="'lorem ipsum'" />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

import LessonCard from "components/LessonCard.vue";
import LessonContent from "components/LessonContent.vue";
import LessonDescription from "components/LessonDescription.vue";

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

export default defineComponent({
  name: "Lesson",

  components: {
    LessonCard,
    LessonContent,
    LessonDescription,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const title = ref("Sample title");

    const onItemClick = () => {
      console.log("Clicked on something");
    };

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    return {
      lessons: lessons,
      title,
      leftDrawerOpen,
      toggleLeftDrawer,
      onItemClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.content {
  height: 95%;
}

.description {
  width: 100%;
}

.dropdown {
  width: 100%;
}
</style>
