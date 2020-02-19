$(function(){ 
  function buildHTML(comment){  
    
    var MessageImage = (comment.image) ? `<img class="lower-message__image" src="${ comment.image }">`: "";

    var html = `<div class="message" data-id="${comment.id}">
        <div class="upper-message">
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

  var reloadMessages = function() {
    last_message_id = $('.message:last').data("id");
    console.log(last_message_id);

    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log(messages);
      if (messages.length !== 0) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.messages').append(insertHTML);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    }
    })
    .fail(function() {
      console.log('error');
    });
  };
  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});
    






