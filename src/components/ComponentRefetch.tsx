import { useFetch } from "../hooks/useFetch.ts";

function ComponentRefetch() {
	const { data, isLoading, refetch } = useFetch<{ title: string }>(
		"https://dummyjson.com/products/1",
	);

	return (
		<div>
			<div
				style={{
					border: "1px solid black",
					padding: "16px",
				}}
			>
				<h1>Normal</h1>
				{!!data && <p>{data.title}</p>}
				{isLoading && <p>Loading</p>}
			</div>

			<button onClick={refetch}>Refetch data</button>
		</div>
	);
}

export default ComponentRefetch;
