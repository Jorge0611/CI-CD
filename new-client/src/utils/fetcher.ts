import { useAuthStore } from "@/stores/authStore";

export async function handleApiResponse(response: Response) {
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    console.error(JSON.stringify(data, null, 2));
    return Promise.reject(data);
  }
}

export function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
  return fetch(url, {
    headers: {
      Authorization: "Bearer " + useAuthStore.getState().token,
      ...options?.headers,
    },
    ...options,
  }).then(handleApiResponse);
}
