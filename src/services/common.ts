import { $ajax } from '@/services/request';

/**
 * 通过字典编码查询字典信息
 * @param params 包含字典编码的对象
 * @returns 返回通过字典编码查询到的字典信息
 */

export async function findDictByCode(params: { dictCode: string }) {
  return $ajax('/system/findDictByCode', { data: params });
}
