
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/cadastro', component: () => import('pages/cadastro.vue')},
      { path: '/produtos', component: () => import('pages/produtos.vue')},
      { path: '/sobre', component: () => import('pages/sobre.vue')},

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
  ,
  
]

export default routes
