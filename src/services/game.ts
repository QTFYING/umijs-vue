import { $ajax } from '@/services/request';
import { IGame } from '@/types/game';

/**
 * 游戏管理列表
 * @param params
 * @returns
 */
export async function findGameListPage(params: {
    page: number,
    row: number,
    queryValue: string,
}) {
    return $ajax('/game/findGameListPage', {
        data: params,
    });
}

/**
 * 添加游戏
 * @param params
 * @returns
 */
export async function addGame(params: IGame) {
    return $ajax('/game/addGame', {
        data: params,
    });
}

/**
 * 修改游戏
 * @param params
 * @returns
 */
export async function upateGame(params: IGame) {
    return $ajax('/game/upateGame', {
        data: params,
    });
}

/**
 * 查询游戏
 * @param params
 * @returns
 */
export async function findGameById(params: {
    id: string,
}) {
    return $ajax('/game/findGameById', {
        data: params,
    });
}
/**
 * 删除游戏
 * @param params
 * @returns
 */
export async function deleteGameById(params: {
    id: string,
}) {
    return $ajax('/game/deleteGameById', {
        data: params,
    });
}

/**
 * 所有游戏列（用户管理中使用，选择游戏）
 * @param params
 * @returns
 */
export async function findGameList(params: {
}) {
    return $ajax('/game/findGameList', {
        data: params,
    });
}

/**
 * 查询当前用户的游戏列表
 * @param params
 * @returns
 */
export async function findGamesByManager(params: {
}) {
    return $ajax('/manager/findGamesByManager', {
        data: params,
    });
}