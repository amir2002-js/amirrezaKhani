import Landing from './pages/Landing/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layer from './Layer';
import Products from './pages/Products/Products';
import Product from './pages/ProductInfo/Product';
import Basket from './pages/Basket/Basket';
import { useEffect, useState } from 'react';
import { getApi } from './js/api';

function App() {
    const [products, setProducts] = useState(null);
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const reqData = getApi.get('/products');

        reqData.then((res) => res.data).then((res) => setProducts(res));
    }, []);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layer setAdded={setAdded} added={added}/>}>
                        <Route
                            path="/"
                            element={<Landing product={products} />}
                        />
                        <Route
                            path="/basket"
                            element={<Basket products={products} />}
                        />
                        <Route
                            path="/search"
                            element={<Products product={products} />}
                        />
                        <Route path="/search/:id" element={<Product setAdded={setAdded} />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
