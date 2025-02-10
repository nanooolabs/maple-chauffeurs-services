import { defineField, defineType } from "sanity";
import { scopedCss, generateHeadingTagField } from "../defaultFields";

const blockLabel = `Content Variant 05`;
const blockCategory = "content";
const ContentVariant05 = defineType({
  name: "ContentVariant05",
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
        "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      rows: 4,
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
            defineField({
              name: "button_title",
              title: "Button Title",
              type: "string",
              initialValue: "",
            }),
            defineField({
              name: "button_destination",
              title: "Button Destination",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField(
      generateHeadingTagField(`card_heading_tag`, `Card Heading Tag`)
    ),
    defineField({
      name: "card_style",
      title: "Card Style",
      type: "string",
      initialValue: "shadow",
      group: "style",
      options: {
        list: [
          { title: "Solid", value: "solid" },
          { title: "Outlined", value: "outlined" },
          { title: "Shadow", value: "shadow" },
        ],
      },
    }),
    defineField({
      name: "align_items_center",
      title: "Align Items Center",
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

export default ContentVariant05;
