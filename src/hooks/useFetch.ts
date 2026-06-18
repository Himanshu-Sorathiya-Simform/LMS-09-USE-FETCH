import { useEffect, useState } from "react";

interface FetchState<T> {
	data: T | null;
	loading: boolean;
	error: Error | null;
}

function useFetch<T = unknown>(url: string): FetchState<T> {
	const [state, setState] = useState<FetchState<T>>({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		if (!url) return;

		const abortController = new AbortController();

		async function fetchData() {
			setState(
				(prevState): FetchState<T> => ({ ...prevState, loading: true }),
			);

			try {
				const response = await fetch(url, {
					signal: abortController.signal,
				});

				if (!response.ok) {
					throw new Error(
						`Error: ${response.status} ${response.statusText}`,
					);
				}

				const data = (await response.json()) as T;

				setState({ data, loading: false, error: null });
			} catch (error) {
				if (error instanceof Error && error.name === "AbortError") {
					return;
				}

				setState({
					data: null,
					loading: false,
					error:
						error instanceof Error ? error : (
							new Error("An unknown error occurred")
						),
				});
			}
		}

		fetchData();

		return () => abortController.abort();
	}, [url]);

	return state;
}

export { type FetchState, useFetch };
