<script setup>
import { ref } from 'vue';
import {reactive} from 'vue';
import { useForm } from '@inertiajs/inertia-vue3';
import { route } from '@inertiajs/inertia-vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

import axios from 'axios';

defineProps({
  psicologos: Array,
  agendamentos: Array,
  users: Array,
});

const form = ref({
  psicologo_id: '',
  data: '',
  hora: '',
});

const submitForm = async () => {
  try {
    const response = await axios.post('/agendar', form.value);
    form.value.psicologo_id = '';
    form.value.data = '';
    form.value.hora = '';

  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
  }
};
</script>

<template>
  <AuthenticatedLayout>
    <template #header>
      <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Agenda
        <a
          href="/agendamentos"
          class="nav-button ml-4"
          v-if="$page.props.auth.user.permissao === 0"
          style="float: right;"
        >
          Voltar
        </a>
      </h2>
    </template>
    <div class="agenda-container">
      <div class="agenda">
        <div v-for="psicologo in psicologos" :key="psicologo.id" class="item">
          <p>Nome do Psicologo: {{ users[psicologo.user_id - 1].name }}</p>
          <form @submit.prevent="submitForm" class="form">
            <div>
              <label>
                <input
                  type="radio"
                  id="psicologo_id"
                  name="psicologo_id"
                  :value="psicologo.id"
                  v-model="form.psicologo_id"
                  class="radio-button"
                />
                Selecionar
              </label>
            </div>

            <div>
              <label for="data">Data:</label>
              <input v-model="form.data" id="data" type="date" />
            </div>

            <div>
              <label for="hora">Horário:</label>
              <select v-model="form.hora" id="hora">
                <option value="08:00">08h00</option>
                <option value="09:00">09h00</option>
                <option value="10:00">10h00</option>
                <option value="11:00">11h00</option>
                <option value="13:00">13h00</option>
                <option value="14:00">14h00</option>
                <option value="15:00">15h00</option>
              </select>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  </AuthenticatedLayout>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Playfair+Display:wght@400;700&display=swap');

.page {
  font-family: 'Playfair Display', serif;
  background-color: #f4f4f9;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.message {
  text-align: center;
  margin-bottom: 30px;
}

.button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 12px 24px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

.agenda-container {
  padding: 30px; /* Espaçamento entre as bordas da página */
}

.agenda {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: space-between; /* Separar as caixas */
}

.item {
  border: 1px solid #bdc3c7;
  padding: 25px;
  width: calc(33.33% - 30px); /* Definindo a largura para 1/3 do espaço disponível */
  text-align: center;
  border-radius: 15px; /* Bordas arredondadas nas caixas */
  background-color: #ffffff; /* Adicione uma cor de fundo para melhor visualização */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-bottom: 1rem; /* Margem inferior de 1 rem para separação entre os itens */
}

form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ecf0f1;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
}

div {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
}

input,
select,
button {
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

button {
  background: #006503;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: #003116;
  transform: scale(1.05);
}

.radio-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  margin: 0;
  border: 2px solid #006503;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  position: relative;
}

.radio-button:checked::before {
  content: '';
  display: block;
  width: 10px;
  height: 10px;
  background: #003116;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>