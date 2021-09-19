<template>
  <q-item clickable v-close-popup @click="changeUnits">
    <q-item-section>
      <q-item-label>Unit {{ unit + 1 }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  props: {
    unit: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const changeUnits = () => {
      ctx.emit("changeUnit", props.unit);
    };

    return {
      changeUnits,
    };
  },
};
</script>
