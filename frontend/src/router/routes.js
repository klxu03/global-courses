const routes = [
  {
    path: "/",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }],
  },
  {
    path: "/create/:courseTitle/author/:authorName",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/Create.vue") }],
  },
  {
    path: "/course/:courseId/unit/:unitId/ep/:epId",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/Lesson.vue") }],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
