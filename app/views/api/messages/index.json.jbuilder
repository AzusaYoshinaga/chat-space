json.array! @comments do |comment|
  json.content comment.content
  json.image comment.image.url
  json.date comment.created_at.strftime("%Y年%m月%d日 %H時%M分")
  json.user_name comment.user.name
  json.id comment.id
  json.group_id comment.group.id
end