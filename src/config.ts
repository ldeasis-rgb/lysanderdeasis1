const API_BASE_URL =
  import.meta.env.NEXT_PUBLIC_API_BASE_URL ??
  import.meta.env["NEXT PUBLIC API_BASE_URL"];

if (!API_BASE_URL) {
  throw new Error("NEXT_PUBLIC_API_BASE_URL must be set.");
}

export const CONFIG = {
  API_BASE_URL,
};
