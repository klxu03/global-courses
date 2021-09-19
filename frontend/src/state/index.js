import { reactive, ref } from "vue";

export const currentCourseWatchState = reactive({});

export const currentCourseCreateState = reactive({
  courseName: "",
  courseAuthor: "",
  courseId: "",
  units: [
    {
      unitId: 1,
      modules: [],
    },
  ],
});

export const allClassesState = reactive({});

export const joinedClassesState = ref([]);
