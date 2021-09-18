const routes = [
  {
    path: "/",
  },
  {
    path: "/create",
    component: () => import("layouts/NoLayout.vue"),
    children: [{ path: "", component: () => import("pages/Create.vue") }],
  },
  {
    path: "/course",
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
