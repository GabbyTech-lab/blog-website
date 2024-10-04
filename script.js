// Store posts in localStorage
const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];

// Display posts on the homepage
document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    
    if (postsContainer) {
        if (savedPosts.length === 0) {
            postsContainer.innerHTML = '<p>No posts yet. Be the first to create one!</p>';
        } else {
            savedPosts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <small>Posted on: ${new Date(post.date).toLocaleString()}</small>
                `;
                postsContainer.appendChild(postDiv);
            });
        }
    }
});

// Handle form submission to create a new post
const postForm = document.getElementById('post-form');
if (postForm) {
    postForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // Create a new post object
        const newPost = {
            title: title,
            content: content,
            date: new Date().toISOString()
        };

        // Add post to savedPosts array
        savedPosts.push(newPost);

        // Save posts array to localStorage
        localStorage.setItem('posts', JSON.stringify(savedPosts));

        // Redirect back to the homepage
        window.location.href = 'index.html';
    });
}
