@posts.with_attached_images.each do |post|
    json.set! post.id do
        json.extract! post, :id, :title, :body, :user_id, :post_type, :created_at
        json.imageUrls post.images.map { |image| url_for(image) } if post.images.attached?

        json.comments post.comments.map do |comment|
            json.extract! comment, :id, :body, :user_id, :created_at
        end
    end
end