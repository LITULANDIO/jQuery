console.log("otro hola");

$("#f1-calculate").on("click", function() {

	var input1 = $("#f1-a").val();

	var input2 = $("#f1-b").val();

	var result_input = input1 + input2;

	var result = parseInt(result_input);

	$("#f1-result").appendTo(result);

	console.log(result);

});
