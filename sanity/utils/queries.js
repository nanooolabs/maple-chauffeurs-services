import { groq } from "next-sanity";
import { fetchSanity } from "./fetch";
import { QUERY_omitDrafts } from "./constants";

export async function getPageBySlug(slug) {
  return fetchSanity(
    groq`*[_type == "page" && slug.current == $slug][0]{
    ...,
    page_builder[] {
      ...,
      repeater[] {
        ...,
        image {
          ... {
            asset->
          }
        },
      },
      image {
        ... {
          asset->
        }
      },
      "form": form->
    }
}`,
    { slug },
    { tags: ["page"] }
  );
}

export async function getPostBySlug(slug) {
  return fetchSanity(
    groq`*[_type == "post" && slug.current == $slug][0]{
      ...,
      content[]{
        ...,
        _type == "image" => {
          ...,
          asset->
        }
      },
      featured_image {
        ... {
          asset->
        }
      },
      "primary_category": categories[0]->
    }`,
    { slug },
    { tags: ["post"] }
  );
}

export async function getPosts(start, end) {
  return fetchSanity(
    groq`*[_type == "post" && ${QUERY_omitDrafts}] | order(publish_date desc)[${start}...${end}] {
      ...,
      featured_image {
        ... {
          asset->
        }
      },
      "excerpt": array::join(string::split((pt::text(content)), "")[0..100], "") + "..."
    }`,
    { start, end },
    { tags: ["post"] }
  );
}

export async function getPostsByCategory(start, end, categorySlug) {
  return fetchSanity(
    groq`*[_type == "post" && ${QUERY_omitDrafts} && $categorySlug in categories[]->slug.current] | order(publish_date desc)[${start}...${end}] {
      ...,
      featured_image {
        ... {
          asset->
        }
      },
      "excerpt": array::join(string::split((pt::text(content)), "")[0..100], "") + "..."
    }`,
    { start, end, categorySlug },
    { tags: ["post"] }
  );
}

export async function getCategoryBySlug(categorySlug) {
  return fetchSanity(
    groq`*[_type == "post_category" && ${QUERY_omitDrafts} && slug.current == $categorySlug][0] {
      title,
      meta_title,
      meta_description,
      featured_image {
        ... {
          asset->
        }
      }
    }`,
    { categorySlug },
    { tags: ["post"] }
  );
}

export async function getPostsCount() {
  return fetchSanity(groq`count(*[_type == "post" && ${QUERY_omitDrafts}])`);
}

export async function getPostsByCategoryCount(categorySlug) {
  return fetchSanity(
    groq`count(*[_type == "post" && ${QUERY_omitDrafts} && $categorySlug in categories[]->slug.current])`,
    { categorySlug }
  );
}

export async function getNavigationBySlug(slug) {
  return fetchSanity(
    groq`*[_type == "navigation" && ${QUERY_omitDrafts} && slug.current == $slug][0]{
      ...,
      items[] {
        ...,
        "uid": uid.current,
        links[] {
          ...,
          "uid": uid.current,
          links[] {
            ...,
            "uid": uid.current,
            links[] {
              ...,
              "uid": uid.current,
            }
          }
        }
      }
    }`,
    { slug },
    { tags: ["navigation"] }
  );
}

export async function getSiteSettings() {
  return fetchSanity(
    groq`*[_type == "site_settings"][0]{
      ...,
      favicon {
        ... {
          asset->
        }
      },
      logo {
        ... {
          asset->
        }
      }
    }`,
    { tags: ["site_settings"] }
  );
}
