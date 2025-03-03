import { defineCollection,defineContentConfig,z } from '@nuxt/content'

export default defineContentConfig({
   collections: {
       blog: defineCollection({
           type: 'page',
           source: 'blog/**/*.md',
           schema: z.object({
                title: z.string(),
                description: z.string(),
                image: z.object({
                    src: z.string(),
                }),
                auteurs:z.array(
                    z.object({
                        name:z.string(),
                        to:z.string(),
                        avatar:z.object({
                            src:z.string(),
                        }),
                    }),
                ),
                date:z.string(),
                badge:z.object({
                    label:z.string(),
                })
           })
       }),

       data: defineCollection({
        type: 'data',
        source: '0.index.yml',
        schema: z.object({
                title: z.string(),
                description: z.string(),
                navigation: z.boolean(),
                hero: z.object({
                    title: z.string(),
                    description: z.string(),
                    links: z.array(
                        z.object({
                            label: z.string(),
                            icon: z.string(),
                            trailing: z.boolean().optional(),
                            to: z.string(),
                            target: z.string(),
                            size: z.string().optional(),
                            color: z.string().optional(),
                            variant: z.string().optional(),
                        })
                    )
                }),
                sections: z.array(
                    z.object({
                        title: z.string(),
                        description: z.string(),
                        id: z.string().optional(),
                        orientation: z.string(),
                        reverse: z.boolean().optional(),
                        features: z.array(
                            z.object({
                                name: z.string(),
                                description: z.string(),
                                icon: z.string(),
                            })
                        )
                    })
                ),
                features: z.object({
                    title: z.string(),
                    description: z.string(),
                    items: z.array(
                        z.object({
                            title: z.string(),
                            description: z.string(),
                            icon: z.string(),
                        })
                    )
                }),
                cta: z.object({
                    title: z.string(),
                    description: z.string(),
                    links: z.array(
                        z.object({
                            label: z.string(),
                            to: z.string(),
                            target: z.string(),
                            icon: z.string().optional(),
                            trailingIcon: z.string().optional(),
                            variant: z.string().optional(),
                        })
                    )
                })
            }),
            
        })
   },
})