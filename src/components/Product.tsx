import React, {useState} from 'react';
import {IProduct} from "../models";
interface ProductProps {
    product: IProduct;
}
const Product = ({product}: ProductProps) => {
    const [detail,setDetail] = useState(true)
    const btnClassName = detail ? "bg-yellow-400": 'bg-blue-400'
    const btnClasses = ['py-2', 'px-4' ,'border' ,btnClassName]
    return (
        <div className={'border py-2 px-4 rounded flex flex-col items-center mb-2'}>
            <img src={product.image} className='w-1/6' alt={product.title}/>
            <p>{product.title}</p>
            <p className='font-bold'>{product.price}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={()=>setDetail(prev=>!prev)}
            >
                {!detail? "Hide Details": "Show Details"}
            </button>
            <p hidden={detail}>
                {product.description}
                <br/>
                Rate: <span style={{fontWeight: "bold"}}>{product.rating.rate}</span>
            </p>

        </div>
    );
};

export default Product;