import ComponentError from "./components/ComponentError.tsx";
import ComponentPost from "./components/ComponentPost.tsx";
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
		</div>
	);
}

export default App;
