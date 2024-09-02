<script setup>
// const username = defineModel()
// const password = defineModel()

import { ref } from 'vue'

const username = ref()
const password = ref()

function login() {
  console.log(username.value, password.value)
}
</script>

<template>
  <div class="flex flex-col justify-center min-h-full px-6 py-12 lg:px-8">
    <!-- <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        class="w-auto h-10 mx-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 class="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
        Sign in to your account
      </h2>
    </div> -->

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="username" class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input
              id="username"
              name="username"
              autocomplete="username"
              required
              v-model="username"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900"
              >Password</label
            >
            <!-- <div class="text-sm">
              <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
                >Forgot password?</a
              >
            </div> -->
          </div>
          <div class="mt-2">
            <input
              id="password"
              type="password"
              autocomplete="current-password"
              required
              v-model="password"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <!-- type="submit" -->
          <button
            @click="login"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
        </div>
      </form>

      <p class="mt-10 text-sm text-center text-gray-500">
        Not a member?
        <RouterLink
          to="/register"
          class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Create account
        </RouterLink>
      </p>
    </div>
  </div>
</template>
