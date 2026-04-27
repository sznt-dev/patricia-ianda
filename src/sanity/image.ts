import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "./env";
import type { SanityImageSource } from "./types";

const builder = projectId
    ? imageUrlBuilder({ projectId, dataset })
    : null;

export function urlFor(source: SanityImageSource | undefined | null) {
    if (!builder || !source) return null;
    return builder.image(source);
}
