/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('callback - particles.js config loaded');
});

var c = [false, false, false, false];

var changeState = function(input, state) {
  var o = $('#' + input);
  var p = o.parent();
  o.removeClass('form-control-success form-control-warning form-control-error');
  p.removeClass('has-success has-warning has-error');
  switch (state) {
    case 'success':
      o.addClass('form-control-success');
      p.addClass('has-success');
      break;
    case 'warning':
      o.addClass('form-control-warning');
      p.addClass('has-warning');
      break;
    case 'error':
      o.addClass('form-control-error');
      p.addClass('has-error');
      break;
    default:
      break;
  }
}

var checkUsername = function() {
  if ($('#inputUsername').val() == ''){
    changeState('inputUsername', 'warning');
    c[0] = false;
  }else {
    changeState('inputUsername', 'success');
    c[0] = true;
  }
}

var checkEmail = function() {
  if ($('#inputEmail').val() == ''){
    changeState('inputEmail', 'warning');
    c[1] = false;
  }else {
    changeState('inputEmail', 'success');
    c[1] = true;
  }
}

var pw_check = false;

var checkPassword = function() {
  // console.log(pw_check);
  var a = $('#inputPassword').val();
  var b = $('#inputConfirmPassword').val();
  if (pw_check) {
    c[2] = false;
    if (a == '' && b == '') {
      changeState('inputPassword', 'warning');
      changeState('inputConfirmPassword', '');
    }else if (a == '') {
      changeState('inputPassword', 'warning');
      changeState('inputConfirmPassword', '');
    }else if (b == '') {
      changeState('inputPassword', '');
      changeState('inputConfirmPassword', 'warning');
    }else if (a != b) {
      changeState('inputPassword', 'error');
      changeState('inputConfirmPassword', 'error');
    }else if (a == b) {
      changeState('inputPassword', 'success');
      changeState('inputConfirmPassword', 'success');
      c[2] = true;
    };
  }else{
    if (a == ''){
      changeState('inputPassword', 'warning');
      changeState('inputConfirmPassword', '');
    }
  };
  pw_check = true;
}

var checkRobot = function() {
  if ($('#inputRobot').prop( "checked")) {
    c[3] = true;
  }else{
    c[3] = false;
  }
}

var resetState = function() {
  var l = ['inputUsername', 'inputEmail', 'inputPassword', 'inputConfirmPassword'];
  for (x in l) {
    changeState(l[x], null);
    $('#' + l[x]).val('');
  }
}

var submit = function() {
  if (c[0] && c[1] && c[2]) {
    console.log("yay");
    $('#successModal').modal('show')
  }else{
    checkUsername()
    checkEmail()
    pw_check = true
    checkPassword()
  }
}

$(document).ready(function() {
  resetState();
  $('#credit').popover({
    trigger: 'focus'
  });
})

