<script setup lang="ts">
const route = useRoute();

const {data: post } = await useAsyncData(route.path, () => queryCollection('blog').path(route.path).first());

const { data: surround } = await useAsyncData(`${route.path}-surround`, () => {
    return queryCollectionItemSurroundings('blog', route.path ,{
        fields:['description']
    });
);

const title = post.value?.title,
const abc = runtimeConfig.public.
const url = `${runtimeConfig.public.app_url}${soute.fullPath}`,


useHead({
    `title: Connectly - ${title}`,
})

useSoeMeta({
    ogTitle: title,
    ogDescription: description,
    ogType: 'article',
    ogUrl: url,
    ogImage: {
        ulr: post?value!.imagei.scri
    }
 :})

</script>

<template>
    <UContainer v-if="post">
        <UPageHeader 
        :title="post.title"
        :description="post.description"
        >
            <template #headline>
                <UBadge v-bind="post.badge", variant="subtle"/>
                <span class="text-gray-700">&middot;</span>
                <time class="text-gray-700" :datetime="post.date">
                    {{ formatDate(post.date) }}
                </time>
            </template>

            <div class="flex flex-wrap items-center gap-3 mt-4">
                <UButton
                    v-for="(auteur, index) in post.auteurs"
                    :key="index"
                    color="white"
                    variant="soft"
                    to="auteur.to"
                    target="_blank"
                >
                <UAavatar v-bind="auteur.avatar" :alt="`Avatar de ${auteur.name}`" size="2xs"/>
                        {{ auteur.name }}
                </UButton>
            </div>
        </UPageHeader>


        <!--Body-->
        <UPage>
            <UPageBody>
                <ContentRenderer :value="post" />

                <!-- Séparateur -->
                <UDivider v-if="surround"  />


                <!-- Les liens d'articles suivants precédants -->
                
                <UContentSurround class="mt-8" v-if="surround" :surround="surround">
                </UContentSurround>
            </UPageBody>

            <template v-if="post.body.toc?.links.length" #right>
                <UContentToc :links="post.body.toc.links" />
            </template>
        </UPage>
    </UContainer>
</template>

<style scoped>
</style>
