import { useEffect, useState } from "react";

type FetchState<T> = { data: DataState<T> } & ApiState;

type DataState<T> = T | null;
type ApiState = {
	isLoading: boolean;
	error: Error | null;
};

function useFetch<T = unknown>(url: string, options?: RequestInit): FetchState<T> {
	const [data, setData] = useState<DataState<T>>(null);
	const [apiStatus, setApiStatus] = useState<ApiState>({
		isLoading: true,
		error: null,
	});

	useEffect(() => {
		if (!url) return;

		const abortController = new AbortController();

		async function fetchData() {
			setData(null);
			setApiStatus((prev) => ({ ...prev, isLoading: true, error: null }));

			try {
				const response = await fetch(url, {
					...options,
					method: options?.method ?? "GET",
					signal: abortController.signal,
				});

				if (!response.ok) {
					throw new Error(
						`Error: ${response.status} ${response.statusText}`,
					);
				}

				const data = (await response.json()) as T;

				setData(data);
				setApiStatus((prev) => ({ ...prev, isLoading: false, error: null }));
			} catch (error) {
				if (error instanceof Error && error.name === "AbortError") {
					return;
				}

				setData(null);
				setApiStatus((prev) => ({
					...prev,
					isLoading: false,
					error:
						error instanceof Error ? error : (
							new Error("An unknown error occurred")
						),
				}));
			}
		}

		fetchData();

		return () => abortController.abort();
	}, [url, options]);

	return { data, isLoading: apiStatus.isLoading, error: apiStatus.error };
}

export { type FetchState, useFetch };
