<script setup lang="ts">
const route = useRoute();

const { data: post } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first());
const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
    return queryCollectionItemSurroundings('blog', route.path, {
        fields: ['description']
    });
});
const runtimeConfig = useRuntimeConfig()
const title = post.value?.title;
const description = post.value?.description;
const url = `${runtimeConfig.public.appUrl}${route.path}`;
useHead({
    title: `Connectly - ${title}`
})

useSeoMeta({
    ogTitle: title,
    ogDescription: description,
    ogType: 'article',
    ogUrl: url,
    ogImage: post.value!.image.src,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
})

</script>


<template>
    <UContainer v-if="post">
        <UPageHeader :title="post.title" :description="post.description">
            <template #headline>
                <UBadge v-bind="post.badge" variant="outline" />
                <span class="text-gray-700">&middot;</span>
                <time class="text-gray-700" :datetime="post.date">{{ formatDate(post.date) }}</time>
            </template>

            <div class="flex flex-wrap items-center gap-3 mt-4">
                <UButton v-for="(auteur, index) in post.auteurs" :key="index" color="white" variant="soft"
                    :to="auteur.to" target="_blank">
                    <UAvatar v-bind="auteur.avatar" :alt="`Avatar de ${auteur.name}`" size="2xs" />
                    {{ auteur.name }}
                </UButton>
            </div>
        </UPageHeader>

        <UPage>
            <UPageBody prose>
                <ContentRenderer :value="post" />

                <!-- Séparateur -->
                <UDivider v-if="surround" class="my-8" />

                <!-- Les liens d'articles suivants et précédents -->
                <UContentSurround v-if="surround" :surround="surround" />
            </UPageBody>

            <template v-if="post.body.toc?.links.length" #right>
                <UContentToc :links="post.body.toc.links" />
            </template>
        </UPage>
    </UContainer>

</template>


<style scoped></style>