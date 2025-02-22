import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import '../style.css';  // Import the CSS file

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            const modifiedData = data.map(item => ({ ...item, units: 0 }));
            setPosts(modifiedData);
        } catch (error) {
            console.log("Error");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div>
            {loading ? <Spinner /> :
                posts.length > 0 ? (
                    <div className="product-list">  {/* Apply the product-list class here */}
                        {posts.map((post) => (
                            <Product key={post.id} post={post} />
                        ))}
                    </div>
                ) :
                <div>
                    <p>No Data Found</p>
                </div>
            }
        </div>
    );
}

export default Home;
