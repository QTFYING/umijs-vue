import { IApi } from 'umi';

export default (api: IApi) => {
    api.modifyHTML(($) => {
        return $;
    });
    api.addHTMLLinks(() => [{ rel: 'icon', href: `${api.config.publicPath}favicon.ico`, type: 'image/x-icon' }]);
};