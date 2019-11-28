class Follow < ApplicationRecord
    validates :follower_id, :followee_id, presence: true
    validates :follower_id, uniqueness: { scope: :followee_id }

    # person who clicks follow button
    belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

    # person who got followed
    belongs_to :followee,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :User
end
