<template>
  <PageComponent title="View or create a survey">
    <template v-slot:header>
      <div class="flex item-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ model.id ? model.title : "Create Survey" }}
        </h1>
      </div>
    </template>
    <form @submit.prevent="saveSurvey">
      <div class="shadow sm:rounded-md sm:overflow-hidden">
        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
          <!-- image -->
          <div>
            <label for="block text-sm font-medium text-gray-700">Image</label>
            <div class="mt-1 flex items-center">
              <img v-if="model.image" :src="model.image" :alt="model.title" class="w-64 h-48 object-cover" />
              <span v-else class="flex items-center justify-center h-12 w-12 rounded-full overflow-hidded bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="h-[80%] w-[80%] text-gray-300">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </span>
              <button type="button"
                class=" relative overflow-hidden ml-5 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <input type="file" class="absolute left-0 top-0 right-0 bottom-0 opacity-0 cursor-pointer" />
                Change
              </button>
            </div>
          </div>
          <!-- image -->

          <!-- title -->
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
            <input type="text" name="title" id="title" v-model="model.title" autocomplete="survey_title"
              class="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-30 rounded-md" />
          </div>
          <!-- title -->

          <!-- description -->
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <div class="mt-1">
              <textarea name="description" id="description" v-model="model.description" rows="3"
                autocomplete="survey_description"
                class="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-30 rounded-md"
                placeholder="Describe your survey"></textarea>
            </div>
          </div>
          <!-- description -->

          <!-- expire date -->
          <div>
            <label for="expire_date" class="block text-sm font-medium text-gray-700">Expire date</label>
            <input type="date" name="expire_date" id="expire_date" v-model="model.expire_date"
              class="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-30 rounded-md" />
          </div>
          <!-- expire date -->

          <!-- status -->
          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input type="checkbox" name="status" id="status" v-model="model.status"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            </div>
            <div class="ml-3 text-sm">
              <label for="status" class="font-medium text-gray-700">Active</label>
              <p class="text-gray-500">If you want to activate this survey, check this box.</p>
            </div>
          </div>
          <!-- status -->
        </div>
      </div>
    </form>
  </PageComponent>
</template>

<script setup>
import PageComponent from '../components/PageComponent.vue';
import { ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute();

// create empty survey model
let model = ref({
  title: "",
  status: false,
  description: null,
  image: null,
  expire_date: null,
  questions: [],
});

if (route.params.id) {
  // find survey by id
  model.value = store.state.surveys.find(
    (s) => s.id === parseInt(route.params.id)
  );
}
</script>
