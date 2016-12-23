$(document).ready(function() {
	moment.locale('tr');
	$('#today').text();
	$('#today').text(moment().format('LLLL'));

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

	/*
	axios.get('https://newsapi.org/v1/articles?source=bloomberg&category=business&apiKey=170acfbecb234dc78fdd82b28c52e944')
		.then(function (response) {
		$('.news').html();
		$.each(response.data.articles, function(i, item) {
			$('.news').append('<li>' + item.title + '</li>');
		})
	})
		.catch(function (error) {
			console.log(error);
	});
	*/
});


$('button.close').click(function() {
	window.close();
});

// You can also require other files to run in this process
//require('./renderer.js')
