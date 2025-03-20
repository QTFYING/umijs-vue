import { ResultVO } from "@/types/common";
import eventBus, { EVENT_TYPE } from "@/utils/eventBus";
import { ElNotification } from 'element-plus';
import { extend, RequestOptionsInit } from 'umi-request';
import { i18n } from '../i18n';
const { t } = i18n.global;



const codeMessage: { [status: number]: string } = {
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
};

const error_code = [
    { result: '11000', message: 'token为空，请重新登录' },
    { result: '11002', message: 'token校验失败或已过期，请重新登录' },
    { result: '10001', message: 'token刷新成功' },
]

let $notify;

/** 异常处理程序 */
const errorHandler = (error: { response: Response }): any => {
    const { response } = error;

    if (response && response.status) {
        const { status, url } = response;
        $notify = ElNotification({
            title: '1',
            message: `${t('notification.error.message.requestError')} ${status}: ${url}`,
            type: 'error',
        })
    } else if (!response) {
        if($notify) $notify.close()
        $notify = ElNotification({
            title: '2',
            message: t('notification.error.message.network'),
            type: 'error',
        });
    }

    return response || {};
};

const responseLog = (response: Response, res: any, options: any) => {

    const randomColor = `rgba(${Math.round(Math.random() * 255)},${Math.round(
        Math.random() * 255,
    )},${Math.round(Math.random() * 255)})`;

    console.log(
        '%c┍------------------------------------------------------------------┑',
        `color:${randomColor};`,
    );
    console.log('| 请求地址：', response.url);
    // console.log('| 请求方式：', options.method);
    // console.log('| 请求头：', options.headers);
    console.log('| 请求参数：', options?.data || {});
    console.log('| 返回数据：', res);
    console.log(
        '%c┕------------------------------------------------------------------┙',
        `color:${randomColor};`,
    );
};

const request = extend({prefix: process.env.apiUrl, errorHandler, responseLog, timeout: 100000,});

const toLoign = () => {
    eventBus.emit(EVENT_TYPE.LOGOUT, '')
}

request.interceptors.request.use((url, options) => {
    const token = sessionStorage.getItem('token') || ''
    if (!token && !url.includes('/login')) {
        console.warn('token为空，重新登录!')
        toLoign()
    }
    return {
        url,
        options: {
            ...options,
            headers: {
                token
            },
        },
    };
},
    { global: true },
);

request.interceptors.response.use(async (response, options): Promise<any> => {

    const res = await response.clone().json();
    // !isEnvProduction && res && responseLog(response, res, options);
    const findItem: any = error_code.find(item => res.result === item.result)
    if (['10001', '11002', '11000'].includes(findItem?.result)) toLoign()

    if (res.code !== '0000' && res.message) {
        if ($notify) $notify.close();
        $notify = ElNotification({ message: t('notification.error.message.tip'), title: '3', type: 'error' })
    }

    return response;
});

export const $ajax =  function (url: string, options: RequestOptionsInit) {
    return request<ResultVO>(url, { method: 'POST', ...options })
}
