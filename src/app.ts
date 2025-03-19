import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import { i18n } from './i18n';
import { useGlobalStore } from './stores/global';
// echarts
import { LineChart } from 'echarts/charts';
import {
    GridComponent,
    LegendComponent,
    TitleComponent,
    ToolboxComponent,
    TooltipComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    LineChart,
    CanvasRenderer,
    UniversalTransition
]);

export async function onAppCreated({ app }: any) {
    app.use(Antd);
    app.use(createPinia())
    app.use(i18n)
}

export async function onMounted({ app, router }: any) {
    // console.log('onMounted', app, router);
    // 此处写路由拦截
    router.beforeEach((to: any, from: any, next: Function) => {
        const global = useGlobalStore()
        global.setSelectedKeys(to.path)
        // console.log('router beforeEach', to, from);

        next();
    });
}
