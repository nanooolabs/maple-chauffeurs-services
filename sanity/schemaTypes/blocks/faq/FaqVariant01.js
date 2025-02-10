import { defineField, defineType } from "sanity";
import { scopedCss } from "../defaultFields";
const blockCategory = "faq";
const FaqVariant01 = defineType({
  name: "FaqVariant01",
  title: "FAQ Variant 01",
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
              initialValue:
                "Powerful Section Heading to Insure Readability​​​​‌",
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
        subtitle: "FAQ Variant 01",
      };
    },
  },
});

export default FaqVariant01;
