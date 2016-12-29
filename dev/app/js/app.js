$(document).ready(function() {
	moment.locale('tr');
	getCurrencyData();

	$('#today').text();
	$('#today').text(moment().format('LL') + ', ' + moment().format('dddd'));
	$('#today').append('<span class="clock"> ' + moment().format('H:mm:ss') + '</span>');

	function update() {
		$('.clock').remove();
		$('#today').append('<span class="clock"> ' + moment().format('H:mm:ss') + '</span>');
	}

	setInterval(update, 1000);

	function getCurrencyData() {
		axios.get('http://www.doviz.com/api/v1/currencies/USD/latest')
			.then(function(response) {
				$('#ustl').text();
				$('#ustl').text((response.data.selling).toFixed(4));
				$('#usSell').text();
				$('#usBuy').text();
				$('#usSell').text((response.data.selling).toFixed(4));
				$('#usBuy').text((response.data.buying).toFixed(4));
				$('#dollarRateBox').removeClass();
				if (response.data.change_rate < 0) {
					$('#dollarRateBox').addClass("card card-border-danger text-xs-center");
				} else {
					$('#dollarRateBox').addClass("card card-border-success text-xs-center");
				}
			})
			.catch(function(error) {
				console.log(error);
			});

		axios.get('http://www.doviz.com/api/v1/currencies/EUR/latest')
			.then(function(response) {
				$('#eutl').text();
				$('#eutl').text((response.data.selling).toFixed(4));
				$('#euSellBuy').text();
				$('#euSellBuy').text((response.data.buying).toFixed(4) + ' / ' + (response.data.selling).toFixed(4));
				$('#euroRateBox').removeClass();
				if (response.data.change_rate < 0) {
					$('#euroRateBox').addClass("card card-border-danger text-xs-center");
				} else {
					$('#euroRateBox').addClass("card card-border-success text-xs-center");
				}
			})
			.catch(function(error) {
				console.log(error);
			});

		axios.get('http://www.doviz.com/api/v1/golds/gram-altin/latest')
			.then(function(response) {
				$('#altl').text();
				$('#altl').text((response.data.selling).toFixed(2));
				$('#alSellBuy').text();
				$('#alSellBuy').text((response.data.buying).toFixed(2) + ' / ' + (response.data.selling).toFixed(2));
				$('#goldRateBox').removeClass();
				if (response.data.change_rate < 0) {
					$('#goldRateBox').addClass("card card-border-danger text-xs-center");
				} else {
					$('#goldRateBox').addClass("card card-border-success text-xs-center");
				}
			})
			.catch(function(error) {
				console.log(error);
			});

			axios.get('http://www.doviz.com/api/v1/indexes/XU100/latest')
				.then(function(response) {
					$('#bist').text();
					$('#bist').text(parseInt(response.data.latest));
					$('#bistRateBox').removeClass();
					if (response.data.change_rate < 0) {
						$('#bistRateBox').addClass("card card-border-danger text-xs-center");
					} else {
						$('#bistRateBox').addClass("card card-border-success text-xs-center");
					}
				})
				.catch(function(error) {
					console.log(error);
				});
	}
	setInterval(getCurrencyData, 60000);
});

$("#toDollar").keyup(function(event) {
	var dollarRate = parseFloat($('#ustl').text()),
		turkLira = $("#toDollar").val();
	$('#dollarResult span').text((turkLira / dollarRate).toFixed(2));
});

$("#toEuro").keyup(function(event) {
	var euroRate = parseFloat($('#eutl').text()),
		turkLira = $("#toEuro").val();
	$('#euroResult span').text((turkLira / euroRate).toFixed(2));
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

$("#dollarRateBox").click(function() {
	if ($('.dollarConverter').css('display') == 'none') {
		$(".dollarConverter").show();
	} else {
		$(".dollarConverter").hide();
	}
});

$("#euroRateBox").click(function() {
	if ($('.euSellBuyBlock').css('display') == 'none') {
		$(".euSellBuyBlock").show();
		$(".euDefaultBlock").hide();
	} else {
		$(".euSellBuyBlock").hide();
		$(".euDefaultBlock").show();
	}
});

$("#goldRateBox").click(function() {
	if ($('.alSellBuyBlock').css('display') == 'none') {
		$(".alSellBuyBlock").show();
		$(".alDefaultBlock").hide();
	} else {
		$(".alSellBuyBlock").hide();
		$(".alDefaultBlock").show();
	}
});

$('#firstCurrency').change(function(){
  	if($(this).val() == 0){
	    $('#firstCurrencyIcon').html('<i class="fa fa-try"></i>');
	} else if ($(this).val() == 1) {
		$('#firstCurrencyIcon').html('<i class="fa fa-usd"></i>');
	} else if ($(this).val() == 2) {
		$('#firstCurrencyIcon').html('<i class="fa fa-eur"></i>');
	}
});

$('#secondCurrency').change(function(){
  	if($(this).val() == 0){
	    $('#secondCurrencyIcon').html('<i class="fa fa-try"></i>');
	} else if ($(this).val() == 1) {
		$('#secondCurrencyIcon').html('<i class="fa fa-usd"></i>');
	} else if ($(this).val() == 2) {
		$('#secondCurrencyIcon').html('<i class="fa fa-eur"></i>');
	}
});

$('button.close').click(function() {
	window.close();
});

// You can also require other files to run in this process
//require('./renderer.js')
