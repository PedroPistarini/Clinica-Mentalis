<script setup>
import { route } from '@inertiajs/inertia-vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

</script>

<template>
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard 
            </h2>
        </template>
        <div v-if="$page.props.auth.user.permissao !== 2" class="flex flex-col items-center space-y-4">
            <h1 class="text-3xl mt-4 font-semibold text-blue-800">Bem Vindo a Clínica Mentalis</h1>
            <h2 class="text-2xl font-semibold text-gray-800">Clique aqui para ver os seus agendamentos</h2>
            <a href="/agendamentos" class="nav-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" v-if="$page.props.auth.user.permissao !== 2" style="float: right;">Agendamentos</a>
        </div>
        <div v-if="$page.props.auth.user.permissao === 2" class="flex flex-col items-center space-y-4">
            <h1 class="text-3xl mt-4 font-semibold text-blue-800">Bem Vindo a página da Secretaria</h1>
            <h2 class="text-2xl font-semibold text-gray-800">Clique aqui para realizar o cadastro de novos usuários</h2>
            <a href="/register" class="nav-button bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                Cadastro
            </a>
        </div>

    </AuthenticatedLayout>
</template>