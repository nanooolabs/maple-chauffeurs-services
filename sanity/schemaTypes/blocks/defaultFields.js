import { defineField } from "sanity";
import { isUniqueAcrossAllDocuments } from "@/sanity/utils/helpers";
import { uuid } from "@sanity/uuid";

export const scopedCss = {
  name: "scoped_css",
  title: "Scoped CSS",
  type: "code",
  options: {
    language: "scss",
    languageAlternatives: [{ title: "SCSS", value: "scss" }],
  },
  group: "style",
};

export const generateHeadingTagField = (name, title) => {
  return {
    name,
    title,
    type: "string",
    group: "content",
    options: {
      list: [
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Paragraph", value: "p" },
        { title: "Span", value: "span" },
      ],
    },
  };
};

export const generateHeadingSizeField = (name, title) => {
  return {
    name,
    title,
    type: "string",
    group: "content",
    options: {
      list: [
        { title: "D1", value: "d1" },
        { title: "D2", value: "d2" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "H5", value: "h5" },
        { title: "H6", value: "h6" },
        { title: "Subtitle", value: "subtitle" },
        { title: "Paragraph", value: "p" },
      ],
    },
  };
};

export const generateLinkField = (name, title, depth = 2, maxDepth = 4) => {
  return {
    type: "object",
    name,
    title,
    fields: [
      defineField({
        name: "title",
        title: "Title",
        type: "string",
      }),
      defineField({
        name: "destination",
        title: "Destination",
        type: "string",
      }),
      defineField({
        name: "uid",
        title: "UID",
        type: "slug",
        description: "Please verify this is unique across all menu items",
        initialValue: uuid(),
        validation: (Rule) => Rule.required(),
        options: {
          source: () => {
            return `${uuid()}`;
          },
          isUnique: isUniqueAcrossAllDocuments,
        },
      }),
      ...(depth < maxDepth
        ? [
            defineField({
              name: "links",
              type: "array",
              of: [
                generateLinkField(
                  `link_count_${depth + 1}`,
                  `Link Count ${depth + 1}`,
                  depth + 1,
                  maxDepth
                ),
              ],
            }),
          ]
        : []),
    ],
    preview: {
      select: {
        title: "title",
        destination: "destination",
      },
      prepare: ({ title, destination }) => ({
        title,
        subtitle: destination,
      }),
    },
  };
};
