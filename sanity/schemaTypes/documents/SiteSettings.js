import { defineField, defineType } from "sanity";

export default defineType({
  name: "site_settings",
  title: "Site Settings",
  type: "document",
  groups: [
    { name: "general", title: "General", default: true },
    { name: "navigation", title: "Navigation" },
  ],
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      group: "general",
    }),
    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      group: "general",
    }),
    defineField({
      name: "ogimage",
      title: "Open Graph Image (Site-wide)",
      description:
        "Used for social sharing previews. Set page-specific images in Page documents.",
      type: "image",
      group: "general",
    }),
  ],
  preview: {
    prepare: () => ({
      title: "Site settings",
    }),
  },
});
