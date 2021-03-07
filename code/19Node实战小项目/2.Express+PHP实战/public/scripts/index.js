$(function(){
  $('#submitbtn').click(function (e) { 
    e.preventDefault(); // 因为btn 是submit事件，所以清楚默认行为
    $.ajax({
      type: "get",
      url: "/receive",
      data: {
        username:$('#username').val()
      },
      dataType: "json",
      success: function (response) {
        alert(response)
      },
      error:function () {
        alert('error')
      }
    });
    
  });
})