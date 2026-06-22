import { useFetch } from "../hooks/useFetch.ts";

const postRequestOptions = {
	method: "POST",
	headers: { "Content-Type": "application/json" },
	body: JSON.stringify({
		title: "Pencil",
	}),
};

function ComponentPost() {
	const { data, isLoading, error } = useFetch<{ title: string }>(
		"https://dummyjson.com/products/add",
		postRequestOptions,
	);

	return (
		<div
			style={{
				border: "1px solid black",
				padding: "16px",
			}}
		>
			<h1>Product Pencil Will be Added</h1>
			{error && <p>{error.message}</p>}
			{isLoading && <p>Loading</p>}
			{!!data && <p>{data.title}</p>}
		</div>
	);
}

export default ComponentPost;
