// init Weglot
Weglot.initialize({
	api_key: 'wg_21e28f0fa5231b99b05a6eecffaee81f3'
});

// on Weglot init
Weglot.on('initialized', ()=>{
	// get the current active language
	const currentLang = Weglot.getCurrentLang();
	console.log ("currentLang:" + currentLang);


});

// Upper Language Selectors
// English Global Top Switcher
$('.english-global-lang-switcher').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-global').addClass('is-active');

	$('.is-language-switch').text('Global');

	// flags
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-global').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'true', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});

// English US Top Switcher
$('.english-us-lang-switcher').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-us').addClass('is-active');

	$('.is-language-switch').text('United States');

	// flags
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-us').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'true', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});

// Native DE Top Switcher
$('.native-lang-de').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-de').addClass('is-active');

	$('.is-language-switch').text('Deutschland');

	// flags
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-de').addClass('is-active');

	Cookies.set('setManualDE', 'true', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});

// Native AT Top Switcher
$('.native-lang-at').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-at').addClass('is-active');

	$('.is-language-switch').text('Österreich');

	// flags
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-at').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'true', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
});

// Native CH Top Switcher
$('.native-lang-ch').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-ch').addClass('is-active');

	$('.is-language-switch').text('Schweiz');

	// flags
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-ch').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'true', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
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
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-us-lang-switcher').removeClass('is-active');
	$('.native-lang-de').addClass('is-active');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-active');
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
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-us-lang-switcher').removeClass('is-active');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-at').addClass('is-active');
	$('.native-lang-ch').removeClass('is-active');
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
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-us-lang-switcher').removeClass('is-active');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-ch').addClass('is-active');
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
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-us-lang-switcher').addClass('is-active');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-active');
});

// on click .country-global
$('.country-global').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Global');

	// flags
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-global').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'true', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');

	$('.english-global-lang-switcher').addClass('is-active');
	$('.english-us-lang-switcher').removeClass('is-active');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-active');
});


// ipapi.co
$.get('https://ipapi.co/country_code/', function(ipapicountrycode) {
  console.log("Country by ipapi: " + ipapicountrycode)

  var currentCountry = ipapicountrycode;
  console.log("currentCountry: " + currentCountry);


	// Deutschland
  	if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');
		$('.country-item').removeClass('is-active');
		$('.country-de').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').toggleClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').addClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}
	// if currentCountry is DE and Cookies are not set
	else if (currentCountry === 'DE' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined) {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');
		$('.country-item').removeClass('is-active');
		$('.country-de').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').toggleClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').addClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	if (Cookies.get('setManualDE') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');
		$('.country-item').removeClass('is-active');
		$('.country-de').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').addClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	// Österreich
	if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');
		$('.country-item').removeClass('is-active');
		$('.country-at').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').addClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}
	// if currentCountry is AT and Cookies are not set
	else if (currentCountry === 'AT' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined) {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');
		$('.country-item').removeClass('is-active');
		$('.country-at').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').addClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	if (Cookies.get('setManualAT') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');
		$('.country-item').removeClass('is-active');
		$('.country-at').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').addClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	// Schweiz
	if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');
		$('.country-item').removeClass('is-active');
		$('.country-ch').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').addClass('is-active');
	}

	// if currentCountry is CH and Cookies are not set
	else if (currentCountry === 'CH' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined) {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');
		$('.country-item').removeClass('is-active');
		$('.country-ch').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').addClass('is-active');
	}

	if (Cookies.get('setManualCH') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');
		$('.country-item').removeClass('is-active');
		$('.country-ch').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').addClass('is-active');
	}

	// United States
	if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');
		$('.country-item').removeClass('is-active');
		$('.country-us').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').addClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	// if currentCountry is US and Cookies are not set
	else if (currentCountry === 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined) {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');
		$('.country-item').removeClass('is-active');
		$('.country-us').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').addClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	if (Cookies.get('setManualEN') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');
		$('.country-item').removeClass('is-active');
		$('.country-us').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-us-lang-switcher').addClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	// Global
	// if currentCountry is not DE, AT, CH, US
	if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Global');
		$('.country-item').removeClass('is-active');
		$('.country-global').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-global').addClass('is-active');

		$('.english-global-lang-switcher').addClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	// if currentCountry is not DE, AT, CH, US and Cookies are not set
	else if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined) {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Global');
		$('.country-item').removeClass('is-active');
		$('.country-global').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-global').addClass('is-active');

		$('.english-global-lang-switcher').addClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}

	if (Cookies.get('setManualGLOBAL') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Global');
		$('.country-item').removeClass('is-active');
		$('.country-global').addClass('is-active');

		// flags
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-global').addClass('is-active');

		$('.english-global-lang-switcher').addClass('is-active');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-active');
	}
})

// open weglot popup
$(document).ready(function() {
	// on click on .footer_language-trigger add class is-active to .language-switch-popup
	$('.footer_language-trigger').click(function() {
		$('.language-switch-popup').toggleClass('is-active');
	});
	// when hover leave .language-switch-popup remove class is-active
	$('.language-switch-popup').mouseleave(function() {
		$('.language-switch-popup').removeClass('is-active');
	}
	);
});
