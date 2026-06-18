import { useFetch } from "../hooks/useFetch.ts";

function ComponentNormal() {
	const { data, isLoading, error } = useFetch<{ title: string }>(
		"https://dummyjson.com/products/1111111",
	);

	return (
		<div
			style={{
				border: "1px solid black",
				padding: "16px",
			}}
		>
			<h1>Error</h1>
			{error && <p>{error.message}</p>}
			{isLoading && <p>Loading</p>}
			{!!data && <p>{data.title}</p>}
		</div>
	);
}

export default ComponentNormal;
