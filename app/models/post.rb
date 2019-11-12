class Post < ApplicationRecord
    validates :user_id, presence: true

    has_many_attached :images
    scope :with_eager_loaded_images, -> { eager_load(images_attachments: :blob) }

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
