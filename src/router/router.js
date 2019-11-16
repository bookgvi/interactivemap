import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/hello', component: () => import('../components/Hello/HelloWorld.vue') },
    { path: '/leafletMap', component: () => import('../components/LeafLet/map') }
  ]
})
