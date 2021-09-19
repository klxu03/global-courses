<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <!-- <q-item clickable tag="a" target="_blank" :href="link"> -->
    <q-card class="my-card">
      <q-item clickable @click="changeEpisodes">
        <q-item-section avatar>
          <q-avatar>
            <img :src="avatar" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ title }}</q-item-label>
          <q-item-label caption>{{ author }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-card-section horizontal>
        <q-img :src="thumbnail" class="img-size" :ratio="16 / 9">
          <div class="text-subtitle2 absolute-bottom text-right">
            {{ ep }}
          </div>
        </q-img>

        <q-card-actions vertical class="justify-around q-px-md">
          <q-btn
            flat
            round
            :color="liked ? 'red' : 'black'"
            icon="favorite"
            @click="toggleLike"
          />
          <q-btn
            flat
            round
            :color="watched ? 'green' : 'black'"
            icon="done"
            @click="toggleWatched"
          />
        </q-card-actions>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "LessonCard",
  props: {
    title: {
      type: String,
      required: true,
    },

    author: {
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

    unit: {
      type: Number,
      required: true,
    },

    courseId: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const liked = ref(false);
    const watched = ref(false);

    const toggleLike = () => {
      liked.value = !liked.value;
    };

    const toggleWatched = () => {
      watched.value = !watched.value;
    };

    const changeEpisodes = () => {
      router.push(
        "/course/" +
          props.courseId +
          "/unit/" +
          (props.unit + 1) +
          "/ep/" +
          props.ep
      );
    };

    return {
      liked,
      toggleLike,
      watched,
      toggleWatched,
      changeEpisodes,
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
