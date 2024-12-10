import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./Layer";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layer />}>
						<Route path="/" element={<Landing />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
