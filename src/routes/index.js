import DashboardLayout from '@/components/layouts/DashboardLayout'
import HomeLayout from '@/components/layouts/HomeLayout'
import NotFound from '@/views/Errors/NotFound.vue'
import AuthRoutes from '@/routes/modules/auth'

const routes = [
    {
        path: '/',
        component: HomeLayout,
        redirect: 'home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home/Home.vue'),
                name: 'Home',
                meta: { title: 'Home', auth: true }
            }
        ]
    },
    {
        path: '/admin',
        component: DashboardLayout,
        redirect: 'dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import('@/views/Dashboard/Dashboard.vue'),
                name: 'Admin',
                meta: { title: 'Admin', auth: true }
            }
        ]
    },
    ...AuthRoutes,
    { path: '*', component: NotFound }
];

export default routes

