import { reactive } from "vue";

export const currentCourseWatchState = reactive({
  courseName: "",
  courseID: "",
  units: [
    {
      unitId: 1,
      modules: [
        {
          ep: 1,
          title: "title",
          author: "author",
          liked: false,
          watched: false,
        },
        {
          ep: 2,
          title: "title2",
          author: "author2",
          liked: false,
          watched: false,
        },
      ],
    },
    {
      unitId: 2,
      modules: [
        {
          ep: 1,
          title: "title",
          author: "author",
          liked: false,
          watched: false,
        },
      ],
    },
  ],
});

export const currentCourseCreateState = reactive({
  courseName: "",
  courseId: "",
  units: [
    {
      unitId: 1,
      modules: [
        {
          ep: 1,
          title: "title",
          author: "author",
          thumbnail: "https://cdn.quasar.dev/img/avatar2.jpg",
          avatar: "https://cdn.quasar.dev/img/parallax2.jpg",
          description: "This is description",
          youtube: true,
          link: "https://www.youtube.com/watch?v=AfxxFE3gqAM",
        },
        {
          ep: 2,
          title: "title2",
          author: "author2",
        },
        {
          ep: 3,
          title: "title3",
          author: "author3",
        },
      ],
    },
    {
      unitId: 2,
      modules: [
        {
          ep: 1,
          title: "title",
          author: "author",
        },
      ],
    },
  ],
});
