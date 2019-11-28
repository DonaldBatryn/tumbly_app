
export const createFollow = (userId, follow) => {
    return $.ajax({
        method: 'POST',
        url: `/api/users/${userId}/follows`,
        data: { follow }
    })
}

export const deleteFollow = (userId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/users/${userId}/follow`
    })
}