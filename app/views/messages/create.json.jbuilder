json.content  @message.content
json.user_id  @message.user_id
json.user_name  @message.user.name
json.image @message.image.url
json.date @message.created_at.strftime("%Y/%m/%d %H:%M");
json.id @message.id
json.group_id @message.group_id