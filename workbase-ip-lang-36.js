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
	$('.is-language-switch-cb').text('Global - English');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-global').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-global').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'true', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').addClass('is-active');
	$('.english-global-lang-switcher').addClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// English US Top Switcher
$('.english-us-lang-switcher').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-us').addClass('is-active');

	$('.is-language-switch').text('United States');
	$('.is-language-switch-cb').text('United States - English');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-us').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-us').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'true', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').addClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// English Native Deutschland Global Top Switcher
$('.english-de-lang-switcher').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-de').addClass('is-active');

	$('.is-language-switch').text('Deutschland');
	$('.is-language-switch-cb').text('Deutschland - English');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-de').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-de').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'true', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
    $('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').addClass('is-active');
    $('.english-de-lang-switcher').addClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').addClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// English Native Österreich Global Top Switcher
$('.english-at-lang-switcher').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-at').addClass('is-active');

	$('.is-language-switch').text('Österreich');
	$('.is-language-switch-cb').text('Österreich - English');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-at').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-at').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
	Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'true', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
	$('.english-de-lang-switcher').removeClass('is-active');
	$('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').addClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').addClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// English Native Schweiz Global Top Switcher
$('.english-ch-lang-switcher').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-ch').addClass('is-active');

	$('.is-language-switch').text('Schweiz');
	$('.is-language-switch-cb').text('Schweiz - English');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-ch').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-ch').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
	Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'true', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');
	
	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
	$('.english-de-lang-switcher').removeClass('is-active');
	$('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').addClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').addClass('is-visible');
});

// Native DE Top Switcher
$('.native-lang-de').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-de').addClass('is-active');

	$('.is-language-switch').text('Deutschland');
	$('.is-language-switch-cb').text('Deutschland - Deutsch');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-de').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-de').addClass('is-active');

	Cookies.set('setManualDE', 'true', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').addClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').addClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// Native AT Top Switcher
$('.native-lang-at').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-at').addClass('is-active');

	$('.is-language-switch').text('Österreich');
	$('.is-language-switch-cb').text('Österreich - Deutsch');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-at').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-at').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'true', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').addClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').addClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// Native CH Top Switcher
$('.native-lang-ch').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$('.country-ch').addClass('is-active');

	$('.is-language-switch').text('Schweiz');
	$('.is-language-switch-cb').text('Schweiz - Deutsch');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-ch').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-ch').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'true', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').addClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').addClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});


// on click .country-de
$('.country-de').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Deutschland');
	$('.is-language-switch-cb').text('Deutschland - Deutsch');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-de').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-de').addClass('is-active');

	Cookies.set('setManualDE', 'true', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').addClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').addClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// on click .country-at
$('.country-at').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Österreich');
	$('.is-language-switch-cb').text('Österreich - Deutsch');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-at').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-at').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'true', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').addClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').addClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// on click .country-ch
$('.country-ch').click(function() {
	Weglot.switchTo('de');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Schweiz');
	$('.is-language-switch-cb').text('Schweiz - Deutsch');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-ch').addClass('is-active');
	
	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-ch').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'true', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').addClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').addClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});
	
// on click .country-us
$('.country-us').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('United States');
	$('.is-language-switch-cb').text('United States - English');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-us').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-us').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'true', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'false', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').removeClass('is-active');
	$('.english-global-lang-switcher').removeClass('is-visible');
	$('.english-us-lang-switcher').addClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});

// on click .country-global
$('.country-global').click(function() {
	Weglot.switchTo('en');
	currentLang = Weglot.getCurrentLang();

	$('.country-item').removeClass('is-active');
	$(this).addClass('is-active');

	$('.is-language-switch').text('Global');
	$('.is-language-switch-cb').text('Global - English');

	// flags in footer
	$('.footer_language-icon').removeClass('is-active');
	$('.footer_language-icon.is-global').addClass('is-active');

	// flags in Cookiebanner
	$('.cb_language-icon').removeClass('is-active');
	$('.cb_language-icon.is-global').addClass('is-active');

	Cookies.set('setManualDE', 'false', { expires: 1 })
	Cookies.set('setManualEN', 'false', { expires: 1 })
	Cookies.set('setManualAT', 'false', { expires: 1 })
	Cookies.set('setManualCH', 'false', { expires: 1 })
	Cookies.set('setManualGLOBAL', 'true', { expires: 1 })
    Cookies.set('setManualENDE', 'false', { expires: 1 })
	Cookies.set('setManualENAT', 'false', { expires: 1 })
	Cookies.set('setManualENCH', 'false', { expires: 1 })

	$('.language-switch-popup').toggleClass('is-active');
	$('.language-switch-popup-cb').toggleClass('is-active');

	$('.english-global-lang-switcher').addClass('is-active');
	$('.english-global-lang-switcher').addClass('is-visible');
	$('.english-us-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-active');
    $('.english-de-lang-switcher').removeClass('is-visible');
	$('.english-at-lang-switcher').removeClass('is-active');
	$('.english-at-lang-switcher').removeClass('is-visible');
	$('.english-ch-lang-switcher').removeClass('is-active');
	$('.english-ch-lang-switcher').removeClass('is-visible');
	$('.native-lang-de').removeClass('is-active');
	$('.native-lang-de').removeClass('is-visible');
	$('.native-lang-at').removeClass('is-active');
	$('.native-lang-at').removeClass('is-visible');
	$('.native-lang-ch').removeClass('is-active');
	$('.native-lang-ch').removeClass('is-visible');
});


// ipapi.co
$.get('https://ipapi.co/country_code/', function(ipapicountrycode) {
  console.log("Country by ipapi: " + ipapicountrycode)

  var currentCountry = ipapicountrycode;
  console.log("currentCountry: " + currentCountry);


	// Deutschland
  	if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');
		$('.is-language-switch-cb').text('Deutschland - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-de').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').toggleClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-de').toggleClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').addClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').addClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}
	// if currentCountry is DE and Cookies are not set
	else if (currentCountry === 'DE' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');
		$('.is-language-switch-cb').text('Deutschland - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-de').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').toggleClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-de').toggleClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').addClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').addClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// if currentCountry is DE and Cookie SetManualENDE is true
	else if (currentCountry === 'DE' && Cookies.get('setManualENDE') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();

		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');
		$('.is-language-switch-cb').text('Deutschland - English');

		$('.country-item').removeClass('is-active');
		$('.country-de').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').toggleClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-de').toggleClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.english-de-lang-switcher').addClass('is-active');
		$('.english-de-lang-switcher').addClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').addClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	if (Cookies.get('setManualDE') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Deutschland');
		$('.is-language-switch-cb').text('Deutschland - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-de').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-de').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-de').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').addClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').addClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// Österreich
	if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');
		$('.is-language-switch-cb').text('Österreich - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-at').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-at').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').addClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').addClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}
	// if currentCountry is AT and Cookies are not set
	else if (currentCountry === 'AT' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');
		$('.is-language-switch-cb').text('Österreich - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-at').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-at').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').addClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').addClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// if Cookie SetManualENAT is true
	if (Cookies.get('setManualENAT') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');
		$('.is-language-switch-cb').text('Österreich - English');

		$('.country-item').removeClass('is-active');
		$('.country-at').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-at').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.english-de-lang-switcher').removeClass('is-active');
		$('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').addClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').addClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	if (Cookies.get('setManualAT') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Österreich');
		$('.is-language-switch-cb').text('Österreich - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-at').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-at').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-at').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').addClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').addClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// Schweiz
	if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');
		$('.is-language-switch-cb').text('Schweiz - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-ch').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-ch').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').addClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').addClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// if currentCountry is CH and Cookies are not set
	else if (currentCountry === 'CH' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');
		$('.is-language-switch-cb').text('Schweiz - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-ch').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-ch').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').addClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').addClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// if Cookie SetManualENCH is true
	if (Cookies.get('setManualENCH') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();

		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');
		$('.is-language-switch-cb').text('Schweiz - English');

		$('.country-item').removeClass('is-active');
		$('.country-ch').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-ch').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
		$('.english-de-lang-switcher').removeClass('is-active');
		$('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').addClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').addClass('is-visible');
	}

	if (Cookies.get('setManualCH') === 'true') {
		Weglot.switchTo('de');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Schweiz');
		$('.is-language-switch-cb').text('Schweiz - Deutsch');

		$('.country-item').removeClass('is-active');
		$('.country-ch').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-ch').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-ch').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').addClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').addClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// United States
	if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');
		$('.is-language-switch-cb').text('United States - English');

		$('.country-item').removeClass('is-active');
		$('.country-us').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-us').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').addClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// if currentCountry is US and Cookies are not set
	else if (currentCountry === 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');
		$('.is-language-switch-cb').text('United States - English');

		$('.country-item').removeClass('is-active');
		$('.country-us').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-us').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').addClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	if (Cookies.get('setManualEN') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('United States');
		$('.is-language-switch-cb').text('United States - English');

		$('.country-item').removeClass('is-active');
		$('.country-us').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-us').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-us').addClass('is-active');

		$('.english-global-lang-switcher').removeClass('is-active');
		$('.english-global-lang-switcher').removeClass('is-visible');
		$('.english-us-lang-switcher').addClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// Global
	// if currentCountry is not DE, AT, CH, US
	if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Global');
		$('.is-language-switch-cb').text('Global - English');

		$('.country-item').removeClass('is-active');
		$('.country-global').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-global').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-global').addClass('is-active');

		$('.english-global-lang-switcher').addClass('is-active');
		$('.english-global-lang-switcher').addClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	// if currentCountry is not DE, AT, CH, US and Cookies are not set
	else if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Global');
		$('.is-language-switch-cb').text('Global - English');

		$('.country-item').removeClass('is-active');
		$('.country-global').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-global').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-global').addClass('is-active');

		$('.english-global-lang-switcher').addClass('is-active');
		$('.english-global-lang-switcher').addClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

	if (Cookies.get('setManualGLOBAL') === 'true') {
		Weglot.switchTo('en');
		currentLang = Weglot.getCurrentLang();
		// change text of .is-language-switch to 'Deutschland'
		$('.is-language-switch').text('Global');
		$('.is-language-switch-cb').text('Global - English');
		
		$('.country-item').removeClass('is-active');
		$('.country-global').addClass('is-active');

		// flags in footer
		$('.footer_language-icon').removeClass('is-active');
		$('.footer_language-icon.is-global').addClass('is-active');

		// flags in Cookiebanner
		$('.cb_language-icon').removeClass('is-active');
		$('.cb_language-icon.is-global').addClass('is-active');

		$('.english-global-lang-switcher').addClass('is-active');
		$('.english-global-lang-switcher').addClass('is-visible');
		$('.english-us-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-active');
        $('.english-de-lang-switcher').removeClass('is-visible');
		$('.english-at-lang-switcher').removeClass('is-active');
		$('.english-at-lang-switcher').removeClass('is-visible');
		$('.english-ch-lang-switcher').removeClass('is-active');
		$('.english-ch-lang-switcher').removeClass('is-visible');
		$('.native-lang-de').removeClass('is-active');
		$('.native-lang-de').removeClass('is-visible');
		$('.native-lang-at').removeClass('is-active');
		$('.native-lang-at').removeClass('is-visible');
		$('.native-lang-ch').removeClass('is-active');
		$('.native-lang-ch').removeClass('is-visible');
	}

    
})

// open weglot popup
$(document).ready(function() {
	// on click on .footer_language-trigger add class is-active to .language-switch-popup
	$('.footer_language-trigger').click(function() {
		$('.language-switch-popup').toggleClass('is-active');
		$('.language-switch-popup-cb').toggleClass('is-active');
	});
	// when hover leave .language-switch-popup remove class is-active
	$('.language-switch-popup').mouseleave(function() {
		$('.language-switch-popup').removeClass('is-active');
		$('.language-switch-popup-cb').removeClass('is-active');
	}
	);
	$('.language-switch-popup-cb').mouseleave(function() {
		$('.language-switch-popup-cb').removeClass('is-active');
		$('.language-switch-popup').removeClass('is-active');
	}
	);
});
