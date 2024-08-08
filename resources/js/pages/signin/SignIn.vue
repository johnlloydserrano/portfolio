<script setup>
import { ref, reactive } from 'vue';
import { signIn } from '@/data/api/signIn';
import { setCookie } from '@services/cookie/cookie';

const data = reactive({
    email: ref(null),
    password: ref(null)
})

const submitForm = async () => {
    try {
        const response = await signIn(data);

        if (response.result.access_token){
            setCookie('access_token', response.result.access_token)
            console.log("success login and cookie has been set")
        }
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
    <div class="flex justify-center min-h-screen items-center">
        <div class="bg-gray-200 p-6 h-1/2 w-78">
            <form @submit.prevent="submitForm">
                <div class="flex">
                    <p class="pr-14">Email:</p>
                    <input type="email" name="email" v-model="data.email">
                </div>
                <div class="flex mt-2">
                    <p class="pr-[26px]">password:</p>
                    <input type="password" name="password" v-model="data.password">
                </div>

                <button type="submit" class="w-full mt-6 bg-gray-400 rounded-sm text-white">
                    Signin
                </button>
            </form>
        </div>
    </div>
</template>
