@posts.with_attached_images.each do |post|
    json.set! post.id do
        json.extract! post, :id, :title, :body, :user_id, :post_type, :created_at
        json.imageUrls post.images.map { |image| url_for(image) } if post.images.attached?

        json.comments post.comments.each do |comment|
            json.authorPic url_for(comment.user.image) if comment.user.image.attached?
            json.author comment.user.username
            json.user_id comment.user_id
            json.body comment.body
            json.post_id comment.post_id
            json.id comment.id
            json.created_at comment.created_at
        end

        json.likes post.likes.each do |like|
            json.likerImage url_for(like.user.image) if like.user.image.attached?
            json.user like.user.username
            json.userId like.user.id
            json.likeId like.id
        end
    end
end