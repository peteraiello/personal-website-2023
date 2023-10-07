import { useEffect, useState } from 'react';

function BlogPost({ postId }) {
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/blog/test`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          console.error('Error fetching post data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching post data:', error);
      }
    }

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;
