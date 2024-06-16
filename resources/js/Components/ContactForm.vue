<template>
  <section class="contact-form mt-8 container mx-auto text-center">
    <h2 class="text-3xl font-semibold mb-4">Formulário de Contato</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name" class="block mb-2 font-medium text-lg">Nome:</label>
        <input type="text" id="name" v-model="formData.name" required class="form-input block w-64 mb-4 mx-auto text-lg">
      </div>
      <div class="form-group">
        <label for="email" class="block mb-2 font-medium text-lg">E-mail:</label>
        <input type="email" id="email" v-model="formData.email" required class="form-input block w-64 mb-4 mx-auto text-lg">
      </div>
      <div class="form-group">
        <label for="description" class="block mb-2 font-medium text-lg">Descrição:</label>
        <textarea id="description" v-model="formData.description" class="form-textarea block w-64 mb-4 mx-auto text-lg" rows="5"></textarea>
      </div>
      <button type="submit" class="btn text-white bg-gray-900 rounded-full w-28">Enviar</button>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  description: ''
});

const submitForm = async () => {
  try {
    const csrfMetaTag = document.querySelector('meta[name="csrf-token"]');
    if (!csrfMetaTag) {
      throw new Error('CSRF token não encontrado');
    }

    const csrfToken = csrfMetaTag.getAttribute('content');

    const response = await fetch('/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': csrfToken
      },
      body: JSON.stringify(formData.value)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erro ao enviar formulário: ${errorData.message || 'Erro desconhecido'}`);
    }

    const responseData = await response.json();
    console.log('Resposta do servidor:', responseData);
    alert('Email enviado com sucesso!');
    
    // Limpar formulário após envio bem-sucedido
    formData.value.name = '';
    formData.value.email = '';
    formData.value.description = '';
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    alert(`Ocorreu um erro ao enviar o email: ${error.message}`);
  }
};
</script>
