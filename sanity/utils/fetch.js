import clientConfig from "../config/clientConfig";
import { createClient } from "next-sanity";
import { dev } from "./helpers";
import { draftMode } from "next/headers";

export { default as groq } from "groq";

export async function fetchSanity(query, params, ...next) {
    try {
        const preview = dev || draftMode().isEnabled;
        const options = preview
            ? {
                stega: true,
                perspective: "previewDrafts",
                useCdn: false,
                token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
                next: {
                    revalidate: 0,
                    ...next,
                },
            }
            : {
                perspective: "published",
                useCdn: true,
                next: {
                    revalidate: 15,
                    ...next,
                },
            };

        return await createClient(clientConfig).fetch(query, params, options);
    } catch (error) {
        console.error("Error in fetchSanity:", error);
        throw error;
    }
}
