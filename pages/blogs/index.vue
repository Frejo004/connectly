<script setup lang="ts">

const {data: posts} = await useAsyncData('posts',  () => queryCollection('blog').all());
</script>


<template>
    <UContainer>
        <UBlogList>
            <UBlogPost v-for ="post in posts"
            :key="post.id" 
            :title="post.title" 
            :description="post.description" 
            :image="post.image" 
            :authors="post.auteurs"
            :date="formatDate(post.date)"
            :badge="{...post.badge,  variant: 'subtle'}">
            :to="post.path"
            </UBlogPost>
        </UBlogList>
    </UContainer>

</template>


<style scoped>


</style>