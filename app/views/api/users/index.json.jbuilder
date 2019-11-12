@users.each do |user|
    json.extract! user, :id, :username, :email, :created_at
    json.imageUrl url_for(user.image) if user.image.attached?
end