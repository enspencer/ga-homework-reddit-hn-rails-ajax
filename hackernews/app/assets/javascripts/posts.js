$(document).ready(function(){
//    $('#new_song').submit(function(event){
// event.preventDefault();
// sendForm();
//    });

  $('#new_post').click(function(event){
    event.preventDefault();
    $.ajax({
      url: '/posts/new',
      dataType: 'script',
      success: function(data){
        console.log(data);
      }
    })
    // we prevented the default but we need to return false because if the ajax method returns truthy then the click will be like "yeah!"
    return false;
  });

  $('#edit_post').click(function(event){
    event.preventDefault();
  //   var formData = {};
  //   formData.title = $('#post_title').val();
  //   formData.url = $('#post_url').val();
  //   formData.body = $('#post_body').val();
  //   $.ajax({
  //     url: '/posts/id/edit',
  //     dataType: 'script',
  //     success: function(data){
  //       console.log(data);
  //     }
  //   })
  // return false
  });

  $('#delete_post').click(function(event){
    var id = $(this).attr('id');
    debugger;
    event.preventDefault();
    $.ajax({
      url: '/posts' + $("post").attr('id'),
      dataType: 'script',
      data: {"_method":"delete"},
      success: function(data){
        console.log(data);
      }
    })
    return false;
  });


});