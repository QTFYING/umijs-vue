import { EventEmitter } from 'events';

export default new EventEmitter();

/** 事件类型 **/
export const EVENT_TYPE = {
    'LOGOUT': 'logout',
    'APP_LIST_CHANGE_BY_GAME': 'appListChangeByGame',
}
