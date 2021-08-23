import Layout from '@/components/layouts/AuthLayout' 

export default [
    {
        path: '/auth',
        redirect: '/login',
        component: Layout,
        children: [
            {
                path: 'login',
                component: () => import('@/views/Authentication/Login.vue'),
                name: 'Login',
                meta: { title: 'Login', auth: false }
            },
        ]
    },
]