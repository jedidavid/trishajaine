import axios from "axios";

export function getStrapiURL(path = "") {
  return `${process.env.NEXT_PULIC_API_URL || "http://localhost:1337"}${path}`;
}

export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const res = await axios.get(requestUrl);
  const data = res.data;

  return data;
}
