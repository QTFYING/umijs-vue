import { $ajax } from '@/services/request';

export async function login(params: { username: string; password: string }) {
  return $ajax('/login', { data: params, requestType: 'form' });
}

export async function logout(params: {}) {
  return $ajax('/logout', { data: params });
}
