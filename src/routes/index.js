import { Home, Following, Upload } from '~/pages';
import { DefaultLayout, HeaderOnly } from '~/components/layouts';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/following',
        component: Following,
        layout: DefaultLayout,
    },
    {
        path: '/upload',
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: '/@:nickname',
        component: Upload,
        layout: DefaultLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
