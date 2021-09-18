<template>
  <q-card-section>
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img
            :src="
              avatar == ''
                ? 'https://cdn.discordapp.com/attachments/723923486950817864/888842912358596648/unknown.png'
                : avatar
            "
          />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ author }}</q-item-label>
      </q-item-section>

      <q-btn flat round color="red" icon="delete" @click="deleteModule" />
    </q-item>
  </q-card-section>
</template>

<script>
import { currentCourseCreateState } from "src/state";
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
    ep: {
      type: Number,
      required: true,
    },
    unit: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://cdn.quasar.dev/img/avatar2.jpg",
    },
  },
  setup(props) {
    const deleteModule = () => {
      console.log("Want to delete the module", props.ep);

      currentCourseCreateState.units[props.unit - 1].modules =
        currentCourseCreateState.units[props.unit - 1].modules.filter(
          (ep) => ep.ep != props.ep
        );
    };

    return {
      deleteModule,
    };
  },
};
</script>
