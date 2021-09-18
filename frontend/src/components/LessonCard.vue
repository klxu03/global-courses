<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <!-- <q-item clickable tag="a" target="_blank" :href="link"> -->
    <q-card class="my-card">
      <q-item clickable>
        <q-item-section avatar>
          <q-avatar>
            <img :src="avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ title }}</q-item-label>
          <q-item-label caption>{{ date }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section horizontal>
        <q-img :src="thumbnail" class="img-size" :ratio="16 / 9">
          <div class="text-subtitle2 absolute-bottom text-right">
            {{ ep }}
          </div>
        </q-img>

        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="green" icon="done" />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LessonCard",
  props: {
    title: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      default: "",
    },

    ep: {
      type: Number,
      default: 0,
    },

    thumbnail: {
      type: String,
      default: "https://cdn.quasar.dev/img/parallax2.jpg",
    },

    avatar: {
      type: String,
      default: "https://cdn.quasar.dev/img/avatar2.jpg",
    },
  },
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
});
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
}

.img-size {
  height: 110px;
}
</style>
