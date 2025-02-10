import { defineField, defineType } from "sanity";
import { scopedCss, generateHeadingTagField } from "../defaultFields";
const blockCategory = "feature";
const FeatureVariant02 = defineType({
  name: "FeatureVariant02",
  title: "Feature Variant 02",
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
      initialValue: "Powerful Section Heading to Insure Readability",
      group: "content",
    }),
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
      name: "justify_content",
      title: "Justify Content",
      type: "string",
      initialValue: "start",
      group: "content",
      options: {
        list: [
          { title: "Start", value: "start" },
          { title: "Center", value: "center" },
        ],
      },
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
              initialValue: "Learn More",
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
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare(selection) {
      const { heading } = selection;
      return {
        title: heading || "Heading needs to be set",
        subtitle: "Feature Variant 02",
      };
    },
  },
});

export default FeatureVariant02;
