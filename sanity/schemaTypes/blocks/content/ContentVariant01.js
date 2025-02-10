import { defineField, defineType } from "sanity";
import { scopedCss } from "../defaultFields";
const blockCategory = "content";
const ContentVariant01 = defineType({
  name: "ContentVariant01",
  title: "Content Variant 01",
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
      initialValue: "Powerful Section Heading",
      group: "content",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      initialValue:
        "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      of: [
        {
          type: "block",
        },
      ],
      group: "content",
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
        subtitle: "Content Variant 01",
      };
    },
  },
});

export default ContentVariant01;
