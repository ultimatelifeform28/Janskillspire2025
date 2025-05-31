import React, { useState, useEffect } from 'react';

function A14() {
    const [posts] = useState([
        { id: 1, title: "Hello World" },
        { id: 2, title: "Introduction" },
        { id: 3, title: "using useEffect and useState" }
    ]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            console.log("Fetching posts...");
        }, 5000);
    }, []);

        if (loading === true) return <h1>Loading...</h1>
        else
            setLoading(false);
        console.log("Posts fetched successfully!");

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default A14;