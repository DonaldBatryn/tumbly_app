class User < ApplicationRecord
    validates :username, :email, :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :username, :email, uniqueness: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :posts,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Post

    has_many :comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Comment

    has_many :likes,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Like

    has_many :received_follows,
    primary_key: :id,
    foreign_key: :followee_id,
    class_name: :Follow

    # the user in question is the followed_user.
    has_many :followers,
    through: :received_follows,
    source: :follower

    # follows where the user is the follower.
    has_many :given_follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

    # all of the users a user follows
    has_many :followings,
    through: :given_follows,
    source: :followee


    has_one_attached :image

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end


    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
