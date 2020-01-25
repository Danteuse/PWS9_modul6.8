let percent = 0;

const increaseSmall = 1;
const increaseMedium = 3;
const increaseBig = 7;

var myFunction = function() {
    console.log(percent);
    if (percent < 101) {
    	$("#my-progress-bar").width(percent + "%");
    } else {
    	$("#text").removeClass("not-visible");
    	alert ('вы достигли максимума');
    	$("#my-progress-bar").width(100 + "%");
    }
};

$('.btn').on('click', myFunction);

function increase() {

$('#increaseSmall').click(function() {
	percent = percent + increaseSmall;
	return(percent);
});

$('#increaseMedium').click(function() {
	percent = percent + increaseMedium;
	return(percent);
});

$('#increaseBig').click(function() {
	percent = percent + increaseBig;
	return(percent);
});

};

$(document).ready(increase); 
	console.log('Готов!');
