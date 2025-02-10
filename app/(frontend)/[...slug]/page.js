import PageBuilder from "@/components/wrappers/PageBuilder";
import { getMetaData } from "@/lib/seo";
import { getPageBySlug } from "@/sanity/utils/queries";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const slug = params.slug.join("/");
  const data = await getPageBySlug(slug);
  if (!data) {
    return notFound();
  }
  return (
    <>
      {data?.page_builder?.map((elem) => {
        return <PageBuilder key={elem._key} data={elem} />;
      })}
    </>
  );
}

export const generateMetadata = async ({ params }) => {
  const slug = params.slug.join("/");
  const data = await getPageBySlug(slug);
  if (!data) return {};
  return getMetaData(data);
};
