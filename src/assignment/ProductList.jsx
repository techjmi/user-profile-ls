import React, { useMemo } from 'react';

const ProductList = ({ products }) => {
    const cachedValue = useMemo(() => {
        console.log("processing list");
        return products.map(product => ({
            ...product,
            totalCost: product.price * product.quantity
        }));
    }, [products]);

    return (
        <div>
            {cachedValue.map(product => (
                <div key={product.id}>
                    <p>{product.name} - Total Cost: ${product.totalCost}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
