class Comment < ApplicationRecord
    validates :body, :user_id, :post_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :post,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: :Post
end
