<script setup lang="ts">
const links = [
  {
    label:'Blog',
    to:'/blog',
  },
  {
    label:'A propos',
    to:'/about',
  }
];
</script>

<template>
  <UHeader>
    <template #left>
      <NuxtLink to="/">
        <img src="/logo.png" alt="Loge de Connectly" class="w-auto h-6 shrink-0">
      </NuxtLink>
    </template>

    <UNavigationLinks :links="links" />

    <template #right>
        <UButton label="Se connecter" variant="solid" color= "orange" to"/login" />
    </template>
  </UHeader>
</template>

<style scoped></style>
