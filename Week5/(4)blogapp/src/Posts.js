import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    // Step 5: Initialize the component state using the constructor
    constructor(props) {
        super(props);
        this.state = {
            posts: [] // Start with an empty list
        };
    }

    // Step 6: Fetch data from the URL and update the state
    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                // Map the JSON data into our custom Post class instances
                const formattedPosts = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ posts: formattedPosts });
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }

    // Step 7: Call loadPosts when the component mounts
    componentDidMount() {
        this.loadPosts();
    }

    // Step 9: Catch errors and display them as an alert
    componentDidCatch(error, info) {
        alert("An error occurred: " + error.message);
    }

    // Step 8: Display the title (heading) and post (paragraph)
    render() {
        return (
            <div style={{ padding: '20px' }}>
                <h1>Latest Blog Posts</h1>
                {this.state.posts.map(post => (
                    <div key={post.id} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;