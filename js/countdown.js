const countdown = () => {
	// declare what time it is now and a date to count to
	const now = new Date();
	const event = new Date(2019, 3, 8);		// SET THE CORRECT DATE HERE!

	// get the timestamps and calculate the remainder
	let timeNow = now.getTime();
	let timeEvent = event.getTime();
	let remaining = timeEvent - timeNow;

	// calculate the values for each time segment
	let ss = Math.floor(remaining / 1000);
	let mm = Math.floor(ss / 60);
	let hh = Math.floor(mm / 60);
	let dd = Math.floor(hh / 24);
	let mon = Math.floor(dd / 30);
	dd %= 30;
	hh %= 24;
	mm %= 60;
	ss %= 60;

	// single-digit integersshould get a zero prefix
	hh = (hh < 10) ? `0${hh}` : hh;
	mm = (mm < 10) ? `0${mm}` : mm;
	ss = (ss < 10) ? `0${ss}` : ss;

	// place the values
	$('#months').html(mon);
	$('#days').html(dd);
	$('#hours').html(hh);
	$('#minutes').html(mm);
	$('#seconds').html(ss);

	// renew every second
	setTimeout(countdown, 1000);
};

// initialize
$(function() {
	countdown();
});