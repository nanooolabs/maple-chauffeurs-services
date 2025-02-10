import { defineField, defineType } from "sanity";
import { scopedCss } from "../defaultFields";
const blockCategory = "feature";
const FeatureVariant04 = defineType({
  name: "FeatureVariant04",
  title: "Feature Variant 04",
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
      name: "repeater",
      title: "Repeater",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "heading",
              title: "Heading",
              type: "string",
              initialValue: "80%",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              initialValue: "Lorem ipsum dolor sit amet",
              rows: 2,
            }),
          ],
        },
      ],
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
        subtitle: "Feature Variant 04",
      };
    },
  },
});

export default FeatureVariant04;
