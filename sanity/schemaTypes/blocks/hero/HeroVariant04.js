import { defineField, defineType } from "sanity";
import { generateHeadingTagField, scopedCss } from "../defaultFields";
const blockCategory = "hero";
const HeroVariant04 = defineType({
  name: "HeroVariant04",
  title: "Hero Variant 04",
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
      name: "label",
      title: "Label",
      type: "string",
      initialValue: "Section Label",
      group: "content",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Data to enrich your online business",
      group: "content",
    }),
    defineField(generateHeadingTagField(`heading_tag`, `Heading Tag`)),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "Gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
      rows: 4,
      group: "content",
    }),
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
      initialValue: "primary",
      group: "content",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
    }),
    defineField({
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
    }),
    defineField({
      name: "enable_image_shape",
      title: "Enable Image Shape",
      description: "Renders when screen width is greater than 1200px",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "enable_blobs",
      title: "Enable Blobs",
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
        subtitle: "Hero Variant 04",
      };
    },
  },
});

export default HeroVariant04;
