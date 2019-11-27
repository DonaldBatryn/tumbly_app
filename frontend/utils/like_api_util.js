
export const createLike = (postId, like) => {
    return $.ajax({
        method: 'POST',
        url: `/api/posts/${postId}/likes`,
        data: { like }
    })
}

export const deleteLike = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${id}`
    })
}