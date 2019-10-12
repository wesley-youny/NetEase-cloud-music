/* eslint-disable func-call-spacing */
/* eslint-disable no-undef */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
    // eslint-disable-next-line quotes
    linkActiveClass: "router-link-exact-active",
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
                path: '/find',
                redirect: '/find/referrer',
            },
            {
                path: '/find/referrer',
                name: 'find',
                component: () =>
                    import ('./views/Find.vue'),
                children: [{
                        path: '/find/referrer',
                        redirect: '/find/referrer'
                    },
                    {
                        path: '/referrer',
                        name: 'referrer',
                        component: () =>
                            import ('./components/Referrer.vue'),
                    },
                    {
                        path: '/ranking',
                        name: 'ranking',
                        component: () =>
                            import ('./components/Ranking.vue'),
                    },
                    {
                        path: '/playlist',
                        name: 'playlist',
                        component: () =>
                            import ('./components/Playlist.vue'),
                    },
                    {
                        path: '/anchor',
                        name: 'anchor',
                        component: () =>
                            import ('./components/Anchor.vue'),
                    },
                    {
                        path: '/singer',
                        name: 'singer',
                        component: () =>
                            import ('./components/Singer.vue'),
                    },
                    {
                        path: '/putaway',
                        name: 'putaway',
                        component: () =>
                            import ('./components/Putaway.vue'),
                    },
                ]
            },
            {
                path: '/mymusic',
                name: 'mymusic',
                component: () =>
                    import ('./views/Mymusic.vue')
            },
            {
                path: '/friend',
                name: 'friend',
                component: () =>
                    import ('./views/Friend.vue')
            },
            {
                path: '/download',
                name: 'download',
                component: () =>
                    import ('./views/Download.vue')
            }
        ]
        // eslint-disable-next-line eol-last
})