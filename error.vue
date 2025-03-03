<script setup lang="ts">
    import type { NuxtError } from '#app';
    const   props = defineProps({
        error: Object as () => NuxtError })

</script>

<template>
    <div>
        <AppHeader />

        <UMain>
            <UPage>
                <UPageError :error="error"/>
            </UPage>
        </UMain>

        <AppFooter />
    </div>
</template>

<style scoped></style>