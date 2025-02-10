import { defineField, defineType } from "sanity";
import {
  scopedCss,
  generateHeadingTagField,
  generateHeadingSizeField,
} from "../defaultFields";

const blockLabel = `Content Variant 07`;
const blockCategory = "content";
const ContentVariant07 = defineType({
  name: "ContentVariant07",
  title: blockLabel,
  type: "object",
  _menuCategory: blockCategory,
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "style",
      title: "Style",
    },
  ],
  fields: [
    defineField(scopedCss),
    defineField({
      name: "block_category",
      title: "Block Category",
      type: "string",
      initialValue: blockCategory,
      readOnly: true,
      hidden: true,
    }),

    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Data to Enrich Your Online Business",
      group: "content",
    }),
    defineField(generateHeadingTagField(`heading_tag`, `Heading Tag`)),
    defineField({
      name: "content_left",
      title: "Content Left",
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
    defineField({
      name: "content_right",
      title: "Content Right",
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
    defineField(generateHeadingSizeField(`content_size`, `Content Size`)),
    defineField({
      name: "theme",
      title: "Theme",
      type: "string",
      initialValue: "primary",
      group: "style",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    }),
    defineField({
      name: "disable_inverted_text",
      title: "Disable Inverted Text",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "disable_second_column",
      title: "Disable Second Column",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare(selection) {
      const { heading } = selection;
      return {
        title: heading || "Heading needs to be set",
        subtitle: blockLabel,
      };
    },
  },
});

export default ContentVariant07;
