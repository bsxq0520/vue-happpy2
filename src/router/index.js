import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/page/home/index'
import Item from '@/page/item/index'
import Score from '@/page/score/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/item',
      name: 'item',
      component: Item,
      beforeEnter: (to, from, next) => {
        if (from.name === 'score') {
          document.body.style.backgroundImage = 'url(./static/img/1-1.jpg)'
        }
        next()
      }
    }, {
      path: '/score/:userId',
      name: 'score',
      component: Score,
      props: true
    }
  ]
})
