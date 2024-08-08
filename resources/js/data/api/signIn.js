import axiosClient from '@/services/axios-client/axiosClient';

export async function signIn(payload) {
    const { data } = await axiosClient.post('auth/signin', payload);

    return data;
}