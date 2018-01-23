import Vue from 'vue'
import Router from 'vue-router'
import INDEX from '@/components/index'
import HOME from '@/components/pages/main/home'
import SEARCH from '@/components/pages/main/search'
import ZHOUWEI from '@/components/pages/main/zhouwei'
import GEREN from '@/components/pages/main/geren'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: INDEX,
        children: [{
                path: '/index/home',
                component: HOME
            },
            {
                path: '/index/search',
                component: SEARCH
            },
            {
                path: '/index/zhouwei',
                component: ZHOUWEI
            },
            {
                path: '/index/geren',
                component: GEREN
            }
        ]
    }]
})