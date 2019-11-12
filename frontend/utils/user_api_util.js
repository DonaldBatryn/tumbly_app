
export const fetchUsers = () => (
    $.ajax({
        method: 'GET',
        url: `/api/users`
    })
)

export const fetchUser = id => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`
    })
)

export const updateUser = (userId, formData) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/users/${userId}`,
        data: formData,
        contentType: false,
        processData: false
    })
)