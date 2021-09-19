<template>
  <q-item-label header>
    <q-btn-dropdown
      class="dropdown"
      color="primary"
      :label="'Unit ' + (activeUnit + 1)"
    >
      <q-list>
        <LessonDropdownOption
          v-for="unit in [...Array(numUnits).keys()]"
          :key="unit"
          :unit="unit"
          @changeUnit="changeUnit($event)"
        />
      </q-list>
    </q-btn-dropdown>
  </q-item-label>
</template>

<script>
import LessonDropdownOption from "components/LessonDropdownOption.vue";
import { ref } from "vue";

export default {
  components: {
    LessonDropdownOption,
  },
  props: {
    numUnits: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    const activeUnit = ref(0);

    const changeUnit = (val) => {
      activeUnit.value = val;
      ctx.emit("changeUnit", val);
    };

    return {
      activeUnit,
      changeUnit,
    };
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  width: 100%;
}
</style>
