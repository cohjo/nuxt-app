<script setup>
onBeforeMount(() => {
  console.log('mounting... 🔄')
})
onMounted(() => {
  console.log('mounted! ✅')
})
</script>

<template>
  <main class="mx-auto my-0 text-yellow-50 h-full">
    <Countries />
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

#__nuxt {
  height: 100%;
}

body {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
  height: 100%;
}
</style>
