
$("#f1-calculate").on("click", function() {

  var op1 = $("#f1-a").val();
  var op2 = $("#f1-b").val();
  var result = op1 / 100 * op2;
  if ( isNaN(result) ) {
    $("#f1").addClass("has-error")
  } else {
    $("#f1").removeClass("has-error")
    $("#f1-result").val(result)
  }

})

$("#f2-calculate").on("click", function() {
  var op1 = $("#f2-a").val();
  var op2 = $("#f2-b").val();
  var result = op1 / op2 * 100;
  $("#f2-result").val(result)
})

$("#f3-calculate").on("click", function() {
  var op1 = $("#f3-a").val();
  var op2 = $("#f3-b").val();
  var result = (op2 - op1) / op1  * 100;
  $("#f3-result").val(result)
})