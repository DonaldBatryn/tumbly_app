json.extract! @post, :id, :title, :body, :user_id, :post_type

json.imageUrls @post.images.map { |image| url_for(image) } if @post.images.attached?