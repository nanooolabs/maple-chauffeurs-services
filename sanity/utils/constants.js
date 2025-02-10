export const Groups = [
  {
    name: "seo",
    title: "SEO",
  },
  {
    name: "content",
    title: "Content",
  },
];

export const QUERY_omitDrafts =
  process.env.NODE_ENV === "development"
    ? "!(_originalId in path('drafts.**'))"
    : "!(_id in path('drafts.**'))";
