import { getStrapiURL } from "./api";

export function getStrapiMedia(media) {
  const mediaUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
  return mediaUrl;
}
