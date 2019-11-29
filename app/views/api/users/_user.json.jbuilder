json.extract! user, :id, :username, :email, :created_at
json.imageUrl url_for(user.image) if user.image.attached?
json.followed_users user.followings.each do |followed_user|
    json.username followed_user.username
    json.id followed_user.id
    json.imageUrl url_for(followed_user.image) if followed_user.image.attached?
end
json.followers user.followers.each do |follower|
    json.username follower.username
    json.id follower.id
    json.imageUrl url_for(follower.image) if follower.image.attached?
end
