import { isUniqueAcrossAllDocuments } from "@/sanity/utils/helpers";

const Form = {
  name: "form",
  title: "Forms",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      // validation: (rule) => rule.warning("Title is required"),
      validation: (rule) => rule.required(),
    },
    {
      name: "formspark_id",
      title: "Formspark ID",
      type: "string",
      validation: (Rule) => Rule.required(),
      options: {
        isUnique: isUniqueAcrossAllDocuments,
      },
    },
    {
      name: "form_fields",
      title: "Form Fields",
      type: "code",
      options: {
        language: "js",
        languageAlternatives: [{ title: "JavaScript", value: "js" }],
      },
      validation: (rule) => rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      formspark_id: "formspark_id",
    },
    prepare(selection) {
      const { title, formspark_id } = selection;
      return {
        title,
        subtitle: `ID: ${formspark_id}`,
      };
    },
  },
};

export default Form;
