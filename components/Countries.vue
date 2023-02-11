<script setup>
const { supabase } = useSupabase()
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <section class="mx-auto flex flex-col justify-center items-start w-fit h-full space-y-4">
    <h1 class="text-3xl font-semibold">Countries:</h1>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </section>

</template>