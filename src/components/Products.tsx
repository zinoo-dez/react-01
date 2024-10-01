import React, { useEffect, useState } from 'react';
import { Product } from '../types/type';


const Products: React.FC = (id) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategoryProducts = async () => {
            try {
                const response = await fetch(`http://localhost:4400/products`);
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                setProducts(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCategoryProducts();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Products in Category</h1>
            <ul>
                {products.map(product => (
                    <li key={product.product_id}>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
