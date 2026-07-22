import React from 'react';
import Post from './Post';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [] 
        };
    }

    loadPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                const formattedPosts = data.map(item => new Post(item.id, item.title, item.body));
                this.setState({ posts: formattedPosts });
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }

    componentDidMount() {
        this.loadPosts();
    }

    componentDidCatch(error, info) {
        alert("An error occurred: " + error.message);
    }

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