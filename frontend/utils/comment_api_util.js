
export const createComment = (postId, comment) => {
    return $.ajax({
        method: 'POST',
        url: `/api/posts/${postId}/comments`,
        data: { comment }
    })
}

export const deleteComment = (id) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/comments/${id}`
    })
}