import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./Layer";
import Products from "./pages/Products/Products"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layer />}>
						<Route path="/" element={<Landing />} />
						<Route path="/search" element={<Products />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
