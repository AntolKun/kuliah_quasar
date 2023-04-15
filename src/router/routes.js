const routes = [
  {
    path: "/admin/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "dashboard",
        name: "dashboardAdmin",
        component: () => import("pages/admin/IndexAdmin.vue"),
      },
      {
        path: "datakopi",
        name: "dataKopiAdmin",
        component: () => import("pages/admin/kopi/DataKopi.vue"),
      },
      {
        path: "formInputKopi",
        name: "formInputKopiAdmin",
        component: () => import("pages/admin/kopi/FormKopi.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
