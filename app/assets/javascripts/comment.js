$(document).on('turbolinks:load', function(){
  function buildHTML(comment){
    var MessageImage = (comment.image) ? `<img class="lower-message__image" src="${ comment.image }">`: "";
    var html = `<div class="message">
        <div class="upper-message" data-message-id="${comment.user_id}">
          <div class="upper-message__user-name">${comment.user_name}</div>
          <div class="upper-message__date">${comment.date}</div>
        </div>
        <div class="lower-meesage">
          <p class="lower-message__content">${comment.content}</p>
          ${MessageImage}
        </div>
      </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('.messages').animate({scrollTop: $(".messages")[0].scrollHeight}, "fast");
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
});



