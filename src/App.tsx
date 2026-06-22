import ComponentError from "./components/ComponentError.tsx";
import ComponentPost from "./components/ComponentPost.tsx";
import ComponentRefetch from "./components/ComponentRefetch.tsx";
import ComponentNormal from "./components/ComponentsNormal.tsx";

function App() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}
		>
			<ComponentNormal />
			<ComponentError />
			<ComponentPost />
			<ComponentRefetch />
		</div>
	);
}

export default App;
