import { defineField, defineType } from "sanity";
import { scopedCss, generateHeadingTagField } from "../defaultFields";

const blockLabel = `Content Variant 06`;
const blockCategory = "content";
const ContentVariant06 = defineType({
  name: "ContentVariant06",
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
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      rows: 4,
      group: "content",
    }),
    defineField({
      name: "button_title",
      title: "Button Title",
      type: "string",
      initialValue: null,
    }),
    defineField({
      name: "button_destination",
      title: "Button Destination",
      type: "string",
    }),
    defineField({
      name: "button_theme",
      title: "Button Theme",
      type: "string",
      initialValue: "primary",
      group: "content",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Link", value: "link" },
        ],
      },
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


    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          name: "image",
          title: "Image",
          type: "image",
          group: "content",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        }
      ],
    }),

















    defineField({
      name: "repeater",
      title: "Repeater",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            }),
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              initialValue: "Card Heading",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              initialValue:
                "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
              rows: 2,
            }),
          ],
        },
      ],
    }),
    defineField(
      generateHeadingTagField(`card_heading_tag`, `Card Heading Tag`)
    ),
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

export default ContentVariant06;
