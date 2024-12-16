import { useEffect, useState } from 'react';
import Brands from './Brands/Brands';
import Header from './Header/Header';
import { getApi, getCommentsApi } from '../../js/api';
import ShowProducts from '../../Components/ShowItems/ShowProducts';
import DressStyle from './DressStyle/DressStyle';
import Comments from './Comments/Comments';
import Product from '../ProductInfo/Product';
import Loading from '../LOADING/Loading';

export default function Landing({ product }) {
    const [products, setProducts] = useState(product);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        const reqComments = getCommentsApi();
        reqComments
            .then((comments) => comments.data)
            .then((comments) =>
                setComments(comments.comments),
            )
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        setProducts(product);
    }, [product]);

    const cate1 =
        products &&
        products.filter(
            (item) => item.category == "men's clothing",
        );

    const cate2 =
        products &&
        products.filter(
            (item) => item.category == 'jewelery',
        );

    return (
        <>
            {products && comments ? (
                <div>
                    <Header />
                    <Brands />

                    <div className="max-w-310 container">
                        <h2 className="font-extrabold text-3xl mt-10 text-center">
                            men&apos;s clothing
                        </h2>
                        <ShowProducts myArray={cate1} />

                        <h2 className="font-extrabold text-3xl mt-10 text-center">
                            jewelery
                        </h2>
                        <ShowProducts myArray={cate2} />

                        <DressStyle />
                    </div>
                    <Comments
                        comments={comments.slice(3, 10)}
                    />
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
