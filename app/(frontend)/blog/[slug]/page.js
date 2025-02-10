import PostVariant01 from "@/components/templates/post/PostVariant01";
import { getMetaData } from "@/lib/seo";
import { getPostBySlug } from "@/sanity/utils/queries";
import { notFound } from "next/navigation";

export default async function Post({ params }) {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  if (!data) {
    return notFound();
  }
  return <PostVariant01 data={data} />;
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const data = await getPostBySlug(slug);
  if (!data) return {};
  return getMetaData(data, `blog`);
};
