import React from 'react';
import { useSelector} from "react-redux";
import { selectAllPosts } from '../feature/posts.slice';
import PostAuthor from './PostAuthor';

const PostsList = () => {
    const posts = useSelector(selectAllPosts);

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{ post.content}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.user} />
            </p>
        </article>
    ))
    return (
        <div>
            <h2> Posts </h2>
            {renderedPosts}
        </div>
    );
};

export default PostsList;