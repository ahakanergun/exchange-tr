$(document).ready(function() {
	moment.locale('tr');
	$('#today').text();
	$('#today').text(moment().format('LL') + ', ' + moment().format('dddd'));

	axios.get('http://api.fixer.io/latest?base=USD')
		.then(function(response) {
			$('#ustl').text();
			$('#ustl').text((response.data.rates.TRY).toFixed(3));
		})
		.catch(function(error) {
			console.log(error);
		});

	axios.get('http://api.fixer.io/latest?base=EUR')
		.then(function(response) {
			$('#eutl').text();
			$('#eutl').text((response.data.rates.TRY).toFixed(3));
		})
		.catch(function(error) {
			console.log(error);
		});
});

$("#toDollar").keyup(function(event) {
	var dollarRate = parseFloat($('#ustl').text()),
		turkLira = $("#toDollar").val();
	$('#dollarResult span').text((turkLira * dollarRate).toFixed(2));
});

$("#toEuro").keyup(function(event) {
	var euroRate = parseFloat($('#eutl').text()),
		turkLira = $("#toEuro").val();
	$('#euroResult span').text((turkLira * euroRate).toFixed(2));
});


$("#dollarToLira").keyup(function(event) {
	var dollarRate = parseFloat($('#ustl').text()),
		dollar = $("#dollarToLira").val();
	$('#dollarToLiraResult span').text((dollar * dollarRate).toFixed(2));
});

$("#euroToLira").keyup(function(event) {
	var euroRate = parseFloat($('#eutl').text()),
		euro = $("#euroToLira").val();
	$('#euroToLiraResult span').text((euro * euroRate).toFixed(2));
});

$('button.close').click(function() {
	window.close();
});

// You can also require other files to run in this process
//require('./renderer.js')
