import { defineField, defineType } from "sanity";
import { scopedCss, generateHeadingTagField } from "../defaultFields";

const blockLabel = `Hero Variant 01`;
const blockCategory = "hero";

const HeroVariant01 = defineType({
  name: "HeroVariant01",
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
      name: "enable_blobs",
      title: "Enable Blobs",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "align_left",
      title: "Align Left",
      type: "boolean",
      initialValue: () => false,
      group: "style",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: `Data to enrich your <br class="u__show-after-992" />online business`,
      group: "content",
    }),
    defineField(generateHeadingTagField(`heading_tag`, `Heading Tag`)),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      initialValue:
        "Gubergren, no sea takimata sanctus est <br>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet",
      rows: 4,
      group: "content",
    }),
    defineField(
      generateHeadingTagField(
        `description_heading_tag`,
        `Description Heading Tag`
      )
    ),
    defineField({
      name: "content",
      title: "Content",
      type: "text",
      initialValue: `consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.`,
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
  ],
  preview: {
    select: {
      heading: "heading",
    },
    prepare(selection) {
      console.log(selection);
      const { heading } = selection;
      return {
        title: heading || "Heading needs to be set",
        subtitle: blockLabel,
      };
    },
  },
});

export default HeroVariant01;
