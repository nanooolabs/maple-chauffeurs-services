import { defineField, defineType } from "sanity";
import { scopedCss, generateHeadingTagField } from "../defaultFields";

const blockLabel = `CTA Variant 01`;
const blockCategory = "cta";
const CtaVariant01 = defineType({
  name: "CtaVariant01",
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
      initialValue: `Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. <br class="u__show-after-992" />Lorem ipsum dolor sit amet`,
      rows: 4,
      group: "content",
    }),
    defineField(generateHeadingTagField(`description_tag`, `Description Tag`)),
    defineField({
      name: "button_title",
      title: "Button Title",
      type: "string",
      initialValue: "Learn More",
      group: "content",
    }),
    defineField({
      name: "button_destination",
      title: "Button Destination",
      type: "string",
      group: "content",
    }),
    defineField({
      name: "button_theme",
      title: "Button Theme",
      type: "string",
      initialValue: "inverted",
      group: "content",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
          { title: "Inverted", value: "inverted" },
        ],
      },
    }),
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

export default CtaVariant01;
