json.extract! @user, :id, :username, :email, :created_at
json.imageUrl url_for(@user.image) if @user.image.attached?
# json.posts @user.posts do |post|
#     if post.imageUrls.length > 0
#         json.title post.title
#         json.body post.body
#         json.images post.images do |image|
#             json.imageUrl url_for(image)
#         end
#     end
# end