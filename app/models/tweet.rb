# == Schema Information
#
# Table name: tweets
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  author_id         :bigint           not null
#  mentioned_user_id :bigint
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Tweet < ApplicationRecord
  validates :body, presence: true, length: { maximum: 280 }

  belongs_to :author, 
    foreign_key: :author_id,
    class_name: :User
  belongs_to :mentioned_user,
    foreign_key: :mentioned_user_id,
    class_name: :User,
    optional: true
end
