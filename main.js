// element selector:

$(document).ready(function(){
  $("#buttonA").click(function(){
    $("p").hide();
  });
});

$(document).ready(function(){
  $("#buttonB").click(function(){
    $("p").show();
  });
});

// id selector:

$(document).ready(function(){
  $("#buttonId").click(function(){
    $("#coba").hide();
  });
});

$(document).ready(function(){
  $("#buttonIdShow").click(function(){
    $("#coba").show();
  });
});

// class selector:

$(document).ready(function(){
  $("#buttonClass").click(function(){
    $(".coba").hide();
  });
});

$(document).ready(function(){
  $("#buttonClassShow").click(function(){
    $(".coba").show();
  });
});

$(document).ready(function(){
  $("#buttonClickMe").click(function(){
    $(this).hide();
  });
});

// Events : focus, blur

$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "blue");
  });
  $("input").blur(function(){
    $(this).css("background-color", "cyan");
  });
});

// effects: slideup, slidedown, slidetoggle
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideUp("slow");
  });
  $("#flipD").click(function(){
    $("#panel").slideDown("fast");
  });
  $("#flipT").click(function(){
    $("#panel").slideToggle("fast");
  });
});


// animate
$(document).ready(function(){
  $("#buttonC").click(function(){
    $("#animate").animate({left: '250px'});
  });
});

// get value
$(document).ready(function(){
  $("#buttonD").click(function(){
    alert("Value:"+ $("#test").val());
  });
});

// get text and HTML
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text:"+ $("#test2").text());
  });
  $("#btn2").click(function(){
    $("HTML:"+ $("#test2").html());
  });
});






