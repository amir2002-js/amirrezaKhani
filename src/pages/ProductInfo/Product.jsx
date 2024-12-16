import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getApi, getCommentsApi } from '../../js/api';
import Info from './Info/Info';
import Comments from './Comments/Comments';
import Divider from '../../Components/Divider/Divider';
import Header from './Header/Header';
import Loading from '../LOADING/Loading';

export default function Product({setAdded}) {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        const reqData = getApi(`/products/${id}`);
        reqData
            .then((res) => res.data)
            .then((res) => setProduct(res));

        const reqComments = getCommentsApi();
        reqComments
            .then((comments) => comments.data)
            .then((comments) =>
                setComments(comments.comments),
            )
            .catch((err) => console.log(err));
    }, []);

    return (
        <>
            {product ? (
                // <div className="grid grid-cols-2 max-w-310 container">
                // 	<img src={product.image} alt="" />
                // </div>
                <div className="container max-w-310">
                    <div className="flex justify-between items-center gap-20 max-sm:gap-10 max-lg:flex-col *:mx-auto">
                        <img
                            src={product.image}
                            alt=""
                            className="w-[319px]"
                        />

                        {/* info */}
                        <Info product={product} setAdded={setAdded} />
                    </div>

                    <Divider />
                    <Header />

                    <div className="">
                        <Comments comments={comments} />
                    </div>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
