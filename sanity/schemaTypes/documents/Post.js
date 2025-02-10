import { Groups } from "@/sanity/utils/constants";
import { isUniqueAcrossAllDocuments } from "@/sanity/utils/helpers";
import { defineField } from "sanity";

const Post = {
  name: "post",
  title: "Posts",
  type: "document",
  groups: Groups,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title",
        isUnique: isUniqueAcrossAllDocuments,
      },
    },
    {
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      group: "seo",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      rows: 2,
      group: "seo",
      validation: (rule) => rule.warning("Meta description is required"),
    },
    {
      name: "seo_no_index",
      title: "Do not index this page",
      description:
        "If checked, this content won't be indexed by search engines.",
      type: "boolean",
      group: "seo",
      initialValue: () => false,
    },
    {
      name: "featured_image",
      title: "Featured Image",
      type: "image",
      group: "seo",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    defineField({
      name: "publish_date",
      type: "date",
      validation: (Rule) => Rule.required(),
      group: "content",
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "post_category" }],
        },
      ],
      group: "content",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "",
      group: "content",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
        {
          type: "code",
          options: {
            language: "html",
            languageAlternatives: [{ title: "HTML", value: "html" }],
          },
        },
      ],
      group: "content",
    }),
  ],
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
      featured_image: "featured_image",
    },
    prepare(selection) {
      const { title, slug, featured_image } = selection;
      return {
        title,
        subtitle: slug && (slug === "index" ? "/" : `/${slug}`),
        media: featured_image,
      };
    },
  },
};

export default Post;
