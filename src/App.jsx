import Landing from "./pages/Landing/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layer from "./Layer";
import Products from "./pages/Products/Products"
import Product from './pages/ProductInfo/Product'

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<Layer />}>
						<Route path="/" element={<Landing />} />
						<Route path="/search" element={<Products />} />
						<Route path="/search/:id" element={<Product />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
