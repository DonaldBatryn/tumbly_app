json.extract! @post, :id, :title, :body, :user_id, :post_type

json.imageUrls @post.images.map { |image| url_for(image) } if @post.images.attached?

json.comments @post.comments.map do |comment|
    json.extract! comment, :body, :user_id, :created_at
end