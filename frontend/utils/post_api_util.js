
export const fetchPosts = (page) => (
    $.ajax({
        method: 'GET',
        url: '/api/posts',
        data: { page }
    })
)

export const fetchPost = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/posts/${id}`
    })
)

export const createPost = (post) => (
    $.ajax({
        method: 'POST',
        url: `/api/posts`,
        data: { post }
    })
)

export const createImagePost = formData => (
    $.ajax({
        url: '/api/posts',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
    })
)

export const updatePost = (post) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/posts/${post.id}`,
        data: { post }
    })
)

export const deletePost = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${id}`
    })
)