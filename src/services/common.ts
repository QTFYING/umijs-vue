import { $ajax } from '@/services/request';

/**
 * 字典
 * @param params
 * @returns
 */
export async function findDictByCode(params: { dictCode: string }) {
  return $ajax('/system/findDictByCode', { data: params, method });
}

/**
 * 字典
 * @param params
 * @returns
 */
export async function findDictByCodeByGms(params: { dictCode: string }) {
  return $ajax('/game/dict/findDictByCode', {
    data: params,
  });
}
