import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';

function Product() {
    const { id } = useParams();
    const url = `https://5fc59f034931580016e3bf0d.mockapi.io/api/v1/products/${id}`;
    const [product, setProduct] = useState({
        loading: false,
        data: null
    });

    let content = null;

    useEffect(() => {
        setProduct({
            loading: true,
            data: null
        })
        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data
                })
            })

    }, [url] );

    if (product.loading) {
        content = <Loader />
    }
    
    if (product.data) {
        content =
        <div>
            <h1 className="text-2xl font-bold mb-3">
                {product.data.name}
            </h1>

            <div>
                <img 
                    src={product.data.images[0].imageUrl} 
                    alt={product.data.name} 
                />
            </div>

            <div className="font-bold text-xl mb-3">
                $ {product.data.price}
            </div>

            <div>
                {product.data.description}
            </div>
        </div>
    }

    return ( <div>{content}</div> );
}

export default Product;