import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/blog/` directory.
    loader: glob({ base: "./src/blog", pattern: "**/*.{md,mdx}" }),
    // Type-check frontmatter using a schema
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
        }),
});

export const collections = { blog };
