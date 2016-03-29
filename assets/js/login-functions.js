$(function(){

  inputFocusOut();

});


function inputFocusOut() {
  $('.login-form .form-group input').focusout(function(){

    var text_val = $(this).val();

    if(text_val == "") {

      $(this).removeClass('has-value');

    } else {

      $(this).addClass('has-value');

    }

  });
}
