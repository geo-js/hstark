// open weglot popup
$(document).ready(function() {
	// on click on .footer_language-trigger add class is-active to .language-switch-popup
	$('.footer_language-trigger').click(function() {
		$('.language-switch-popup').toggleClass('is-active');
	});
});

// init Weglot
Weglot.initialize({
	api_key: 'wg_21e28f0fa5231b99b05a6eecffaee81f3'
});

// on Weglot init
Weglot.on('initialized', ()=>{
	// get the current active language
	const currentLang = Weglot.getCurrentLang();
	console.log ("currentLang:" + currentLang);

	// run function CountryCheckAndSet
	CountryCheckAndSet();
});

// on click .country-de
$('.country-de').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Deutschland');

	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-de').addClass('is-active');

	Cookies.set('setManualDE', 'true', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});

// on click .country-at
$('.country-at').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Österreich');

	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-at').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'true', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});

// on click .country-ch
$('.country-ch').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Schweiz');

	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-ch').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'true', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});
	
// on click .country-us
$('.country-us').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');
	
	$('.is-language-switch').text('United States');

	// flags
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-us').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'true', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});


// function CountryCheckAndSet
function CountryCheckAndSet() {
// ipapi.co
$.get('https://ipapi.co/country_code/', function(ipapicountrycode) {
  console.log("Country by ipapi: " + ipapicountrycode)

  var currentCountry = ipapicountrycode;
  console.log("currentCountry: " + currentCountry);


	// Deutschland
  	if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').addClass('is-active');
	}

	if (Cookies.get('setManualDE') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').addClass('is-active');
	}

	// Österreich
	if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');
	}

	if (Cookies.get('setManualAT') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');
	}

	// Schweiz
	if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');
	}

	if (Cookies.get('setManualCH') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');
	}

	// United States
	if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');
	}

	if (Cookies.get('setManualEN') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');
	}
})
}
