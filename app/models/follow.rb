# == Schema Information
#
# Table name: follows
#
#  id           :bigint           not null, primary key
#  follower_id  :bigint           not null
#  following_id :bigint           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Follow < ApplicationRecord
  validates :follower, uniqueness: { scope: :following }

  belongs_to :follower, 
    class_name: :User
  belongs_to :following, 
    class_name: :User
end
