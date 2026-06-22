import { useFetch } from "../hooks/useFetch.ts";

function ComponentNormal() {
	const { data, isLoading } = useFetch<{ title: string }>(
		"https://dummyjson.com/products/1",
	);

	return (
		<div
			style={{
				border: "1px solid black",
				padding: "16px",
			}}
		>
			<h1>Normal</h1>
			{isLoading && <p>Loading</p>}
			{!!data && <p>{data.title}</p>}
		</div>
	);
}

export default ComponentNormal;
