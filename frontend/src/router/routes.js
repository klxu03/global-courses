const routes = [
  {
    path: "/",
  },
  {
    path: "/lesson",
    component: () => import("layouts/TempLayout.vue"),
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
