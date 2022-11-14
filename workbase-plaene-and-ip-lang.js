// ----------------- Select all Input when .pricing-input-field is clicked ----------------- //
$('.pricing-input-field').click(function() {
    $(this).select();
});

// ----------------- Prices (Monthly and Yearly) for Pricing Plans ----------------- //
var selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
var selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
var selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();


// ----------------- Prices Variables (Monthly and Yearly) for Pricing Plans ----------------- //
// Prices Variables Yearly
// For DE and AT
var priceYearlyEssentialDEAT = $('.essential-yearly-deat').html();      // for every 3 Mitarbeiter
var priceYearlyBusinessDEAT = $('.business-yearly-deat').html();        // for every 10 Mitarbeiter
var priceYearlyEnterpriseDEAT = $('.enterprise-yearly-deat').html();    // for every 25 Mitarbeiter
// For CH
var priceYearlyEssentialCH = $('.essential-yearly-ch').html();          // for every 3 Mitarbeiter
var priceYearlyBusinessCH = $('.business-yearly-ch').html();            // for every 10 Mitarbeiter
var priceYearlyEnterpriseCH = $('.enterprise-yearly-ch').html();        // for every 25 Mitarbeiter
// For US
var priceYearlyEssentialUS = $('.essential-yearly-us').html();          // for every 3 Mitarbeiter
var priceYearlyBusinessUS = $('.business-yearly-us').html();            // for every 10 Mitarbeiter
var priceYearlyEnterpriseUS = $('.enterprise-yearly-us').html();        // for every 25 Mitarbeiter

// Prices Variables Monthly
// For DE and AT
var priceMonthlyEssentialDEAT = $('.essential-monthly-deat').html();    // for every 3 Mitarbeiter
var priceMonthlyBusinessDEAT = $('.business-monthly-deat').html();      // for every 10 Mitarbeiter
var priceMonthlyEnterpriseDEAT = $('.enterprise-monthly-deat').html();  // for every 25 Mitarbeiter
// For CH
var priceMonthlyEssentialCH = $('.essential-monthly-ch').html();        // for every 3 Mitarbeiter
var priceMonthlyBusinessCH = $('.business-monthly-ch').html();          // for every 10 Mitarbeiter
var priceMonthlyEnterpriseCH = $('.enterprise-monthly-ch').html();      // for every 25 Mitarbeiter
// For US
var priceMonthlyEssentialUS = $('.essential-monthly-us').html();        // for every 3 Mitarbeiter
var priceMonthlyBusinessUS = $('.business-monthly-us').html();          // for every 10 Mitarbeiter
var priceMonthlyEnterpriseUS = $('.enterprise-monthly-us').html();      // for every 25 Mitarbeiter



// ----------------- Initialize Weglot ----------------- //
Weglot.initialize({
	api_key: 'wg_21e28f0fa5231b99b05a6eecffaee81f3'
});

// ----------------- On Weglot Initialize ----------------- //
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingUS();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingUS();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingDEAT();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingDEAT();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingCH();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingDEAT();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingDEAT();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingCH();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingDEAT();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingDEAT();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingCH();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingUS();
    }
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

    // if url is /pricing
    if (window.location.pathname == '/pricing') {
        calculatePricingUS();
    }
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

        // if url is /pricing
        if (window.location.pathname == '/pricing') {
        calculatePricingDEAT();
        }
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

        // if url is /pricing
        if (window.location.pathname == '/pricing') {
            calculatePricingDEAT();
        }
	}

	// if currentCountry is DE and Cookie SetManualENDE is true
	else if (Cookies.get('setManualENDE') === 'true') {
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

        // if url is /pricing
        if (window.location.pathname == '/pricing') {
            calculatePricingDEAT();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingDEAT();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingDEAT();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingDEAT();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingDEAT();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingDEAT();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingCH();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingCH();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingCH();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingCH();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingUS();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingUS();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingUS();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingUS();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingUS();
        }
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

        if (window.location.pathname == '/pricing') {
            calculatePricingUS();
        }
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

// ----------------- NEW Set Start Values of Pricing Plans Inputs ----------------- //
$(document).ready(function() {
    // Set Start Values for the Input Fields
    $('.pricing-input-field.essential').val(6);
    $('.pricing-input-field.business').val(20);
    $('.pricing-input-field.enterprise').val(100);

    // If DE
    if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'DE' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (Cookies.get('setManualENDE') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualDE') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If AT
    if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'AT' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    if (Cookies.get('setManualENAT') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualAT') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If CH
    if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    else if (currentCountry === 'CH' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualENCH') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualCH') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    // If US
    if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry === 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualEN') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    // If GLOBAL
    if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualGLOBAL') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }
});

// ----------------- Click Switcher Scripts ----------------- //
$('.pricing_switcher-monthly').click(function() {
    $('.pricing_switcher-toggle').removeClass('is-yearly');
    $('.pricing_switcher-monthly').addClass('is-active');
    $('.pricing_switcher-yearly').removeClass('is-active');

    // If DE
    if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'DE' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (Cookies.get('setManualENDE') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualDE') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If AT
    if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'AT' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    if (Cookies.get('setManualENAT') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualAT') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceMonthlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If CH
    if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialCH);
        $('.pricing-price-field.business').text(priceMonthlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    else if (currentCountry === 'CH' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialCH);
        $('.pricing-price-field.business').text(priceMonthlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualENCH') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialCH);
        $('.pricing-price-field.business').text(priceMonthlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualCH') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialCH);
        $('.pricing-price-field.business').text(priceMonthlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    // If US
    if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialUS);
        $('.pricing-price-field.business').text(priceMonthlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry === 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialUS);
        $('.pricing-price-field.business').text(priceMonthlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualEN') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialUS);
        $('.pricing-price-field.business').text(priceMonthlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    // If GLOBAL
    if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialUS);
        $('.pricing-price-field.business').text(priceMonthlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialUS);
        $('.pricing-price-field.business').text(priceMonthlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualGLOBAL') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceMonthlyEssentialUS);
        $('.pricing-price-field.business').text(priceMonthlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceMonthlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }
});

$('.pricing_switcher-yearly').click(function() {
    $('.pricing_switcher-toggle').addClass('is-yearly');
    $('.pricing_switcher-yearly').addClass('is-active');
    $('.pricing_switcher-monthly').removeClass('is-active');

    // If DE
    if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'DE' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (Cookies.get('setManualENDE') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualDE') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If AT
    if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'AT' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    if (Cookies.get('setManualENAT') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualAT') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialDEAT);
        $('.pricing-price-field.business').text(priceYearlyBusinessDEAT);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseDEAT);
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If CH
    if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    else if (currentCountry === 'CH' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualENCH') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualCH') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialCH);
        $('.pricing-price-field.business').text(priceYearlyBusinessCH);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseCH);
        // call function calculatePricing
        calculatePricingCH();
    }

    // If US
    if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry === 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualEN') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    // If GLOBAL
    if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualGLOBAL') === 'true') {
        // Set Start Values for the Price Fields
        $('.pricing-price-field.essential').text(priceYearlyEssentialUS);
        $('.pricing-price-field.business').text(priceYearlyBusinessUS);
        $('.pricing-price-field.enterprise').text(priceYearlyEnterpriseUS);
        // call function calculatePricing
        calculatePricingUS();
    }
});


// on click of .pricing-up and or .pricing-down
$('.pricing-up, .pricing-down').click(function() {
    // update var selectedMitarbeiterEssential
    selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
    // update var selectedMitarbeiterBusiness
    selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
    // update var selectedMitarbeiterEnterprise
    selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();

    // insert value in the text fields beneath switcher
    $('.selected-mitarbeiter.essential').text(selectedMitarbeiterEssential);
    $('.selected-mitarbeiter.business').text(selectedMitarbeiterBusiness);
    $('.selected-mitarbeiter.enterprise').text(selectedMitarbeiterEnterprise);

    // If DE
    if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'DE' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (Cookies.get('setManualENDE') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualDE') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If AT
    if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'AT' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    if (Cookies.get('setManualENAT') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualAT') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If CH
    if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {  
        // call function calculatePricing
        calculatePricingCH();
    }

    else if (currentCountry === 'CH' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) { 
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualENCH') === 'true') {
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualCH') === 'true') { 
        // call function calculatePricing
        calculatePricingCH();
    }

    // If US
    if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') { 
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry === 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {  
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualEN') === 'true') {   
        // call function calculatePricing
        calculatePricingUS();
    }

    // If GLOBAL
    if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') { 
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {    
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualGLOBAL') === 'true') {
        // call function calculatePricing
        calculatePricingUS();
    }
});

// on .pricing-input-field change
$('.pricing-input-field').change(function() {
    // update var selectedMitarbeiterEssential
    selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
    // update var selectedMitarbeiterBusiness
    selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
    // update var selectedMitarbeiterEnterprise
    selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();

    // insert value in the text fields beneath switcher
    $('.selected-mitarbeiter.essential').text(selectedMitarbeiterEssential);
    $('.selected-mitarbeiter.business').text(selectedMitarbeiterBusiness);
    $('.selected-mitarbeiter.enterprise').text(selectedMitarbeiterEnterprise);

    // if this has subclass .essential 
    if ($(this).hasClass('essential')) {
        // dont allow user to input below 6 and only allow input in steps of 3
        if (selectedMitarbeiterEssential < 6) {
            $('.pricing-input-field.essential').val(6);
        } else if (selectedMitarbeiterEssential % 3 != 0) {
            $('.pricing-input-field.essential').val(Math.floor(selectedMitarbeiterEssential / 3) * 3);
        }
    }

    // if this has subclass .business
    if ($(this).hasClass('business')) {
        // dont allow user to input below 20 and only allow input in steps of 10
        if (selectedMitarbeiterBusiness < 20) {
            $('.pricing-input-field.business').val(20);
        } else if (selectedMitarbeiterBusiness % 10 != 0) {
            $('.pricing-input-field.business').val(Math.floor(selectedMitarbeiterBusiness / 10) * 10);
        }
    }

    // if this has subclass .enterprise
    if ($(this).hasClass('enterprise')) {
        // dont allow user to input below 100 and only allow input in steps of 25
        if (selectedMitarbeiterEnterprise < 100) {
            $('.pricing-input-field.enterprise').val(100);
        } else if (selectedMitarbeiterEnterprise % 25 != 0) {
            $('.pricing-input-field.enterprise').val(Math.floor(selectedMitarbeiterEnterprise / 25) * 25);
        }
    }

    // If DE
    if (currentCountry === 'DE' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'DE' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (Cookies.get('setManualENDE') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualDE') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If AT
    if (currentCountry === 'AT' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    else if (currentCountry === 'AT' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    if (Cookies.get('setManualENAT') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }
    
    if (Cookies.get('setManualAT') === 'true') {
        // call function calculatePricing
        calculatePricingDEAT();
    }

    // If CH
    if (currentCountry === 'CH' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') {  
        // call function calculatePricing
        calculatePricingCH();
    }

    else if (currentCountry === 'CH' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) { 
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualENCH') === 'true') {
        // call function calculatePricing
        calculatePricingCH();
    }

    if (Cookies.get('setManualCH') === 'true') { 
        // call function calculatePricing
        calculatePricingCH();
    }

    // If US
    if (currentCountry === 'US' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') { 
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry === 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {  
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualEN') === 'true') {   
        // call function calculatePricing
        calculatePricingUS();
    }

    // If GLOBAL
    if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === 'false' && Cookies.get('setManualEN') === 'false' && Cookies.get('setManualAT') === 'false' && Cookies.get('setManualCH') === 'false' && Cookies.get('setManualGLOBAL') === 'false' && Cookies.get('setManualENDE') === 'false' && Cookies.get('setManualENAT') === 'false' && Cookies.get('setManualENCH') === 'false') { 
        // call function calculatePricing
        calculatePricingUS();
    }

    else if (currentCountry !== 'DE' && currentCountry !== 'AT' && currentCountry !== 'CH' && currentCountry !== 'US' && Cookies.get('setManualDE') === undefined && Cookies.get('setManualEN') === undefined && Cookies.get('setManualAT') === undefined && Cookies.get('setManualCH') === undefined && Cookies.get('setManualGLOBAL') === undefined && Cookies.get('setManualENDE') === undefined && Cookies.get('setManualENAT') === undefined && Cookies.get('setManualENCH') === undefined) {    
        // call function calculatePricing
        calculatePricingUS();
    }

    if (Cookies.get('setManualGLOBAL') === 'true') {
        // call function calculatePricing
        calculatePricingUS();
    }
});

// ----------------- Calculate DEAT Pricing ----------------- //
function calculatePricingDEAT() {
    // check if .pricing_switcher-monthly has Class is-active
    if ($('.pricing_switcher-monthly').hasClass('is-active')) {
            // calculate price pro mitarbeiter monthly
            priceProMitarbeiterEssentialMonthlyDEAT = priceMonthlyEssentialDEAT / 3;
            // insert priceProMitarbeiterEssentialMonthlyDEAT in .preis-pro-mitarbeiter.esential add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.essential').text(priceProMitarbeiterEssentialMonthlyDEAT.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' €');
            
            priceProMitarbeiterBusinessMonthlyDEAT = priceMonthlyBusinessDEAT / 10;
            // insert priceProMitarbeiterBusinessMonthlyDEAT in .preis-pro-mitarbeiter.business add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.business').text(priceProMitarbeiterBusinessMonthlyDEAT.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' €');
            
            priceProMitarbeiterEnterpriseMonthlyDEAT = priceMonthlyEnterpriseDEAT / 25;
            // insert priceProMitarbeiterEnterpriseMonthly in .preis-pro-mitarbeiter.enterprise add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.enterprise').text(priceProMitarbeiterEnterpriseMonthlyDEAT.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' €');

             // set .price-result-yearly to display none
            $('.price-result-yearly').css('display', 'none');

            // set .price-result-original text-decoration to none
            $('.price-result-original').css('text-decoration', 'none');

             // update values
            selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
            selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
            selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();

            // calculate price results monthly
            var priceResultMonthlyEssentialMonthlyDEAT = Math.round((selectedMitarbeiterEssential / 3) * priceMonthlyEssentialDEAT);
            $('.pricing-price-top.essential').html(priceResultMonthlyEssentialMonthlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            var priceResultMonthlyBusinessMonthlyDEAT = Math.round((selectedMitarbeiterBusiness / 10) * priceMonthlyBusinessDEAT);
            $('.pricing-price-top.business').html(priceResultMonthlyBusinessMonthlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            var priceResultMonthlyEnterpriseMonthlyDEAT = Math.round((selectedMitarbeiterEnterprise / 25) * priceMonthlyEnterpriseDEAT);
            $('.pricing-price-top.enterprise').html(priceResultMonthlyEnterpriseMonthlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');  

            // calculate price results yearly
            // priceResultMonthlyEssentialMonthlyDEAT *12
            var priceResultYearlyEssentialMonthlyDEAT = Math.round(priceResultMonthlyEssentialMonthlyDEAT * 12);
            // insert priceResultYearlyEssentialMonthlyDEAT in .price-result-yearly.essential
            $('.price-result-original.essential').html(priceResultYearlyEssentialMonthlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €");

            // priceResultMonthlyBusinessMonthlyDEAT *12
            var priceResultYearlyBusinessMonthlyDEAT = Math.round(priceResultMonthlyBusinessMonthlyDEAT * 12);
            // insert priceResultYearlyBusinessMonthlyDEAT in .price-result-yearly.business
            $('.price-result-original.business').html(priceResultYearlyBusinessMonthlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €");

            // priceResultMonthlyEnterpriseMonthlyDEAT *12
            var priceResultYearlyEnterpriseMonthlyDEAT = Math.round(priceResultMonthlyEnterpriseMonthlyDEAT * 12);
            // insert priceResultYearlyEnterpriseMonthlyDEAT in .price-result-yearly.enterprise
            $('.price-result-original.enterprise').html(priceResultYearlyEnterpriseMonthlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €");

        }

    // else if .pricing_switcher-yearly has Class is-active
    if ($('.pricing_switcher-yearly').hasClass('is-active')) {
            // calculate price pro mitarbeiter
            var priceProMitarbeiterEssentialYearlyDEAT = priceYearlyEssentialDEAT / 3;
            // insert priceProMitarbeiterEssentialYearlyDEAT in .preis-pro-mitarbeiter.esential add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.essential').html(priceProMitarbeiterEssentialYearlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            var priceProMitarbeiterBusinessYearlyDEAT = priceYearlyBusinessDEAT / 10;
            // insert priceProMitarbeiterBusinessYearlyDEAT in .preis-pro-mitarbeiter.business add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.business').html(priceProMitarbeiterBusinessYearlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            var priceProMitarbeiterEnterpriseYearlyDEAT = priceYearlyEnterpriseDEAT / 25;
            // insert priceProMitarbeiterEnterpriseYearlyDEAT in .preis-pro-mitarbeiter.enterprise add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.enterprise').html(priceProMitarbeiterEnterpriseYearlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            // set .price-result-yearly to display inline
            $('.price-result-yearly').css('display', 'inline');

            // set .price-result-original text-decoration to line-through
            $('.price-result-original').css('text-decoration', 'line-through');
        
            // update values
            selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
            selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
            selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();

            var priceResultMonthlyEssentialYearlyDEAT = Math.ceil(selectedMitarbeiterEssential / 3) * priceYearlyEssentialDEAT;
            $('.pricing-price-top.essential').html(priceResultMonthlyEssentialYearlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            var priceResultMonthlyBusinessYearlyDEAT = Math.ceil(selectedMitarbeiterBusiness / 10) * priceYearlyBusinessDEAT;
            $('.pricing-price-top.business').html(priceResultMonthlyBusinessYearlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            var priceResultMonthlyEnterpriseYearlyDEAT = Math.ceil(selectedMitarbeiterEnterprise / 25) * priceYearlyEnterpriseDEAT;
            $('.pricing-price-top.enterprise').html(priceResultMonthlyEnterpriseYearlyDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            // create var resultYearlyDiscountedEssentialDEAT = priceResultMonthlyEssentialYearlyDEAT * 12
            var resultYearlyDiscountedEssentialDEAT = priceResultMonthlyEssentialYearlyDEAT * 12;
            // create var resultYearlyDiscountedBusinessDEAT = priceResultMonthlyBusinessYearlyDEAT * 12
            var resultYearlyDiscountedBusinessDEAT = priceResultMonthlyBusinessYearlyDEAT * 12;
            // create var resultYearlyDiscountedEnterpriseDEAT = priceResultMonthlyEnterpriseYearlyDEAT * 12
            var resultYearlyDiscountedEnterpriseDEAT = priceResultMonthlyEnterpriseYearlyDEAT * 12;

            // insert. resultYearlyDiscountedEssentialDEAT in .price-result-yearly.essential add . after every 3 digits and add € at the end
            $('.price-result-yearly.essential').html(resultYearlyDiscountedEssentialDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');
            // insert. resultYearlyDiscountedBusiness in .price-result-yearly.business add . after every 3 digits and add € at the end
            $('.price-result-yearly.business').html(resultYearlyDiscountedBusinessDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');
            // insert. resultYearlyDiscountedEnterprise in .price-result-yearly.enterprise add . after every 3 digits and add € at the end
            $('.price-result-yearly.enterprise').html(resultYearlyDiscountedEnterpriseDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' €');

            // calculate original price
            var priceResultMonthlyEssentialMonthlyDEAT = Math.round((selectedMitarbeiterEssential / 3) * priceMonthlyEssentialDEAT);
            var priceResultMonthlyBusinessMonthlyDEAT = Math.round((selectedMitarbeiterBusiness / 10) * priceMonthlyBusinessDEAT);
            var priceResultMonthlyEnterpriseMonthlyDEAT = Math.round((selectedMitarbeiterEnterprise / 25) * priceMonthlyEnterpriseDEAT);

            var resultYearlyOriginalEssentialDEAT = priceResultMonthlyEssentialMonthlyDEAT * 12;
            // insert. resultYearlyOriginalEssentialDEAT in .price-result-original.essential add . after every 3 digits and add € at the end to fixed
            $('.price-result-original.essential').html(resultYearlyOriginalEssentialDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €");

            var resultYearlyOriginalBusinessDEAT = priceResultMonthlyBusinessMonthlyDEAT * 12;
            // insert. resultYearlyOriginalBusinessDEAT in .price-result-original.business
            $('.price-result-original.business').html(resultYearlyOriginalBusinessDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €");

            var resultYearlyOriginalEnterpriseDEAT = priceResultMonthlyEnterpriseMonthlyDEAT * 12;
            // insert. resultYearlyOriginalEnterpriseDEAT in .price-result-original.enterprise
            $('.price-result-original.enterprise').html(resultYearlyOriginalEnterpriseDEAT.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " €");        
        }
}

// ----------------- Calculate CH Pricing ----------------- //
function calculatePricingCH() {
    // check if .pricing_switcher-monthly has Class is-active
    if ($('.pricing_switcher-monthly').hasClass('is-active')) {
            // calculate price pro mitarbeiter monthly
            priceProMitarbeiterEssentialMonthlyCH = priceMonthlyEssentialCH / 3;
            // insert priceProMitarbeiterEssentialMonthlyCH in .preis-pro-mitarbeiter.esential add . after every 3 digits and add CHF at the end
            $('.preis-pro-mitarbeiter.essential').text(priceProMitarbeiterEssentialMonthlyCH.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' CHF');
                
            priceProMitarbeiterBusinessMonthlyCH = priceMonthlyBusinessCH / 10;
            // insert priceProMitarbeiterBusinessMonthlyCH in .preis-pro-mitarbeiter.business add . after every 3 digits and add CHF at the end
            $('.preis-pro-mitarbeiter.business').text(priceProMitarbeiterBusinessMonthlyCH.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' CHF');
                
            priceProMitarbeiterEnterpriseMonthlyCH = priceMonthlyEnterpriseCH / 25;
            // insert priceProMitarbeiterEnterpriseMonthlyCH in .preis-pro-mitarbeiter.enterprise add . after every 3 digits and add CHF at the end
            $('.preis-pro-mitarbeiter.enterprise').text(priceProMitarbeiterEnterpriseMonthlyCH.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' CHF');
    
            // set .price-result-yearly to display none
            $('.price-result-yearly').css('display', 'none');
    
            // set .price-result-original text-decoration to none
            $('.price-result-original').css('text-decoration', 'none');
    
            // update values
            selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
            selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
            selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();

            // calculate price results monthly
            var priceResultMonthlyEssentialMonthlyCH = Math.round((selectedMitarbeiterEssential / 3) * priceMonthlyEssentialCH);
            $('.pricing-price-top.essential').html(priceResultMonthlyEssentialMonthlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

            var priceResultMonthlyBusinessMonthlyCH = Math.round((selectedMitarbeiterBusiness / 10) * priceMonthlyBusinessCH);
            $('.pricing-price-top.business').html(priceResultMonthlyBusinessMonthlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

            var priceResultMonthlyEnterpriseMonthlyCH = Math.round((selectedMitarbeiterEnterprise / 25) * priceMonthlyEnterpriseCH);
            $('.pricing-price-top.enterprise').html(priceResultMonthlyEnterpriseMonthlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

            // calculate price results yearly
            // priceResultMonthlyEssentialMonthlyCH *12
            var priceResultYearlyEssentialMonthlyCH = Math.round(priceResultMonthlyEssentialMonthlyCH * 12);
            // insert priceResultYearlyEssentialMonthlyCH in .price-result-yearly.essential
            $('.price-result-original.essential').html(priceResultYearlyEssentialMonthlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " CHF");

            // priceResultMonthlyBusinessMonthlyCH *12
            var priceResultYearlyBusinessMonthlyCH = Math.round(priceResultMonthlyBusinessMonthlyCH * 12);
            // insert priceResultYearlyBusinessMonthlyCH in .price-result-yearly.business
            $('.price-result-original.business').html(priceResultYearlyBusinessMonthlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " CHF");

            // priceResultMonthlyEnterpriseMonthlyCH *12
            var priceResultYearlyEnterpriseMonthlyCH = Math.round(priceResultMonthlyEnterpriseMonthlyCH * 12);
            // insert priceResultYearlyEnterpriseMonthlyCH in .price-result-yearly.enterprise
            $('.price-result-original.enterprise').html(priceResultYearlyEnterpriseMonthlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " CHF");
        }

    // else if .pricing_switcher-yearly has Class is-active
    if ($('.pricing_switcher-yearly').hasClass('is-active')) {
          // calculate price pro mitarbeiter
          var priceProMitarbeiterEssentialYearlyCH = priceYearlyEssentialCH / 3;
          // insert priceProMitarbeiterEssentialYearlyCH in .preis-pro-mitarbeiter.esential add . after every 3 digits and add € at the end
          $('.preis-pro-mitarbeiter.essential').html(priceProMitarbeiterEssentialYearlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

          var priceProMitarbeiterBusinessYearlyCH = priceYearlyBusinessCH / 10;
          // insert priceProMitarbeiterBusinessYearlyCH in .preis-pro-mitarbeiter.business add . after every 3 digits and add € at the end
          $('.preis-pro-mitarbeiter.business').html(priceProMitarbeiterBusinessYearlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

          var priceProMitarbeiterEnterpriseYearlyCH = priceYearlyEnterpriseCH / 25;
          // insert priceProMitarbeiterEnterpriseYearlyCH in .preis-pro-mitarbeiter.enterprise add . after every 3 digits and add € at the end
          $('.preis-pro-mitarbeiter.enterprise').html(priceProMitarbeiterEnterpriseYearlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

          // set .price-result-yearly to display inline
          $('.price-result-yearly').css('display', 'inline');

          // set .price-result-original text-decoration to line-through
          $('.price-result-original').css('text-decoration', 'line-through');
      
          // update values
          selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
          selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
          selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();

          var priceResultMonthlyEssentialYearlyCH = Math.ceil(selectedMitarbeiterEssential / 3) * priceYearlyEssentialCH;
          $('.pricing-price-top.essential').html(priceResultMonthlyEssentialYearlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

          var priceResultMonthlyBusinessYearlyCH = Math.ceil(selectedMitarbeiterBusiness / 10) * priceYearlyBusinessCH;
          $('.pricing-price-top.business').html(priceResultMonthlyBusinessYearlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

          var priceResultMonthlyEnterpriseYearlyCH = Math.ceil(selectedMitarbeiterEnterprise / 25) * priceYearlyEnterpriseCH;
          $('.pricing-price-top.enterprise').html(priceResultMonthlyEnterpriseYearlyCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

          // create var resultYearlyDiscountedEssentialCH = priceResultMonthlyEssentialYearlyCH * 12
          var resultYearlyDiscountedEssentialCH = priceResultMonthlyEssentialYearlyCH * 12;
          // create var resultYearlyDiscountedBusinessCH = priceResultMonthlyBusinessYearlyCH * 12
          var resultYearlyDiscountedBusinessCH = priceResultMonthlyBusinessYearlyCH * 12;
          // create var resultYearlyDiscountedEnterpriseCH = priceResultMonthlyEnterpriseYearlyCH * 12
          var resultYearlyDiscountedEnterpriseCH = priceResultMonthlyEnterpriseYearlyCH * 12;

          // insert. resultYearlyDiscountedEssentialCH in .price-result-yearly.essential add . after every 3 digits and add € at the end
          $('.price-result-yearly.essential').html(resultYearlyDiscountedEssentialCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');
          // insert. resultYearlyDiscountedBusiness in .price-result-yearly.business add . after every 3 digits and add € at the end
          $('.price-result-yearly.business').html(resultYearlyDiscountedBusinessCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');
          // insert. resultYearlyDiscountedEnterprise in .price-result-yearly.enterprise add . after every 3 digits and add € at the end
          $('.price-result-yearly.enterprise').html(resultYearlyDiscountedEnterpriseCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' CHF');

          // calculate original price
          var priceResultMonthlyEssentialMonthlyCH = Math.round((selectedMitarbeiterEssential / 3) * priceMonthlyEssentialCH);
          var priceResultMonthlyBusinessMonthlyCH = Math.round((selectedMitarbeiterBusiness / 10) * priceMonthlyBusinessCH);
          var priceResultMonthlyEnterpriseMonthlyCH = Math.round((selectedMitarbeiterEnterprise / 25) * priceMonthlyEnterpriseCH);

          var resultYearlyOriginalEssentialCH = priceResultMonthlyEssentialMonthlyCH * 12;
          // insert. resultYearlyOriginalEssentialCH in .price-result-original.essential add . after every 3 digits and add € at the end to fixed
          $('.price-result-original.essential').html(resultYearlyOriginalEssentialCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " CHF");

          var resultYearlyOriginalBusinessCH = priceResultMonthlyBusinessMonthlyCH * 12;
          // insert. resultYearlyOriginalBusinessCH in .price-result-original.business
          $('.price-result-original.business').html(resultYearlyOriginalBusinessCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " CHF");

          var resultYearlyOriginalEnterpriseCH = priceResultMonthlyEnterpriseMonthlyCH * 12;
          // insert. resultYearlyOriginalEnterpriseDEAT in .price-result-original.enterprise
          $('.price-result-original.enterprise').html(resultYearlyOriginalEnterpriseCH.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " CHF");          
        }
}

// ----------------- Calculate US Pricing ----------------- //
function calculatePricingUS() {
    // check if .pricing_switcher-monthly has Class is-active
    if ($('.pricing_switcher-monthly').hasClass('is-active')) {
            // calculate price pro mitarbeiter monthly
            priceProMitarbeiterEssentialMonthlyUS = priceMonthlyEssentialUS / 3;
            // insert priceProMitarbeiterEssentialMonthlyUS in .preis-pro-mitarbeiter.esential add . after every 3 digits and add USD at the end
            $('.preis-pro-mitarbeiter.essential').text(priceProMitarbeiterEssentialMonthlyUS.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' USD');
                    
            priceProMitarbeiterBusinessMonthlyUS = priceMonthlyBusinessUS / 10;
            // insert priceProMitarbeiterBusinessMonthlyUS in .preis-pro-mitarbeiter.business add . after every 3 digits and add USD at the end
            $('.preis-pro-mitarbeiter.business').text(priceProMitarbeiterBusinessMonthlyUS.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' USD');
                    
            priceProMitarbeiterEnterpriseMonthlyUS = priceMonthlyEnterpriseUS / 25;
            // insert priceProMitarbeiterEnterpriseMonthlyUS in .preis-pro-mitarbeiter.enterprise add . after every 3 digits and add USD at the end
            $('.preis-pro-mitarbeiter.enterprise').text(priceProMitarbeiterEnterpriseMonthlyUS.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' USD');
        
            // set .price-result-yearly to display none
            $('.price-result-yearly').css('display', 'none');
        
            // set .price-result-original text-decoration to none
            $('.price-result-original').css('text-decoration', 'none');
        
            // update values
            selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
            selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
            selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();
    
            // calculate price results monthly
            var priceResultMonthlyEssentialMonthlyUS = Math.round((selectedMitarbeiterEssential / 3) * priceMonthlyEssentialUS);
            $('.pricing-price-top.essential').html(priceResultMonthlyEssentialMonthlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');
    
            var priceResultMonthlyBusinessMonthlyUS = Math.round((selectedMitarbeiterBusiness / 10) * priceMonthlyBusinessUS);
            $('.pricing-price-top.business').html(priceResultMonthlyBusinessMonthlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            var priceResultMonthlyEnterpriseMonthlyUS = Math.round((selectedMitarbeiterEnterprise / 25) * priceMonthlyEnterpriseUS);
            $('.pricing-price-top.enterprise').html(priceResultMonthlyEnterpriseMonthlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            // calculate price results yearly
            // priceResultMonthlyEssentialMonthlyUS *12
            var priceResultYearlyEssentialMonthlyUS = Math.round(priceResultMonthlyEssentialMonthlyUS * 12);
            // insert priceResultYearlyEssentialMonthlyUS in .price-result-yearly.essential
            $('.price-result-original.essential').html(priceResultYearlyEssentialMonthlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " USD");

            // priceResultMonthlyBusinessMonthlyUS *12
            var priceResultYearlyBusinessMonthlyUS = Math.round(priceResultMonthlyBusinessMonthlyUS * 12);
            // insert priceResultYearlyBusinessMonthlyUS in .price-result-yearly.business
            $('.price-result-original.business').html(priceResultYearlyBusinessMonthlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " USD");

            // priceResultMonthlyEnterpriseMonthlyUS *12
            var priceResultYearlyEnterpriseMonthlyUS = Math.round(priceResultMonthlyEnterpriseMonthlyUS * 12);
            // insert priceResultYearlyEnterpriseMonthlyUS in .price-result-yearly.enterprise
            $('.price-result-original.enterprise').html(priceResultYearlyEnterpriseMonthlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " USD");
        }

    // else if .pricing_switcher-yearly has Class is-active
    if ($('.pricing_switcher-yearly').hasClass('is-active')) {
            // calculate price pro mitarbeiter
            var priceProMitarbeiterEssentialYearlyUS = priceYearlyEssentialUS / 3;
            // insert priceProMitarbeiterEssentialYearlyUS in .preis-pro-mitarbeiter.esential add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.essential').html(priceProMitarbeiterEssentialYearlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            var priceProMitarbeiterBusinessYearlyUS = priceYearlyBusinessUS / 10;
            // insert priceProMitarbeiterBusinessYearlyUS in .preis-pro-mitarbeiter.business add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.business').html(priceProMitarbeiterBusinessYearlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            var priceProMitarbeiterEnterpriseYearlyUS = priceYearlyEnterpriseUS / 25;
            // insert priceProMitarbeiterEnterpriseYearlyCH in .preis-pro-mitarbeiter.enterprise add . after every 3 digits and add € at the end
            $('.preis-pro-mitarbeiter.enterprise').html(priceProMitarbeiterEnterpriseYearlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            // set .price-result-yearly to display inline
            $('.price-result-yearly').css('display', 'inline');

            // set .price-result-original text-decoration to line-through
            $('.price-result-original').css('text-decoration', 'line-through');
        
            // update values
            selectedMitarbeiterEssential = $('.pricing-input-field.essential').val();
            selectedMitarbeiterBusiness = $('.pricing-input-field.business').val();
            selectedMitarbeiterEnterprise = $('.pricing-input-field.enterprise').val();

            var priceResultMonthlyEssentialYearlyUS = Math.ceil(selectedMitarbeiterEssential / 3) * priceYearlyEssentialUS;
            $('.pricing-price-top.essential').html(priceResultMonthlyEssentialYearlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            var priceResultMonthlyBusinessYearlyUS = Math.ceil(selectedMitarbeiterBusiness / 10) * priceYearlyBusinessUS;
            $('.pricing-price-top.business').html(priceResultMonthlyBusinessYearlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            var priceResultMonthlyEnterpriseYearlyUS = Math.ceil(selectedMitarbeiterEnterprise / 25) * priceYearlyEnterpriseUS;
            $('.pricing-price-top.enterprise').html(priceResultMonthlyEnterpriseYearlyUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            // create var resultYearlyDiscountedEssentialUS = priceResultMonthlyEssentialYearlyUS * 12
            var resultYearlyDiscountedEssentialUS = priceResultMonthlyEssentialYearlyUS * 12;
            // create var resultYearlyDiscountedBusinessUS = priceResultMonthlyBusinessYearlyUS * 12
            var resultYearlyDiscountedBusinessUS = priceResultMonthlyBusinessYearlyUS * 12;
            // create var resultYearlyDiscountedEnterpriseUS = priceResultMonthlyEnterpriseYearlyUS * 12
            var resultYearlyDiscountedEnterpriseUS = priceResultMonthlyEnterpriseYearlyUS * 12;

            // insert. resultYearlyDiscountedEssential in .price-result-yearly.essential add . after every 3 digits and add € at the end
            $('.price-result-yearly.essential').html(resultYearlyDiscountedEssentialUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');
            // insert. resultYearlyDiscountedBusiness in .price-result-yearly.business add . after every 3 digits and add € at the end
            $('.price-result-yearly.business').html(resultYearlyDiscountedBusinessUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');
            // insert. resultYearlyDiscountedEnterprise in .price-result-yearly.enterprise add . after every 3 digits and add € at the end
            $('.price-result-yearly.enterprise').html(resultYearlyDiscountedEnterpriseUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' USD');

            // calculate original price
            var priceResultMonthlyEssentialMonthlyUS = Math.round((selectedMitarbeiterEssential / 3) * priceMonthlyEssentialUS);
            var priceResultMonthlyBusinessMonthlyUS = Math.round((selectedMitarbeiterBusiness / 10) * priceMonthlyBusinessUS);
            var priceResultMonthlyEnterpriseMonthlyUS = Math.round((selectedMitarbeiterEnterprise / 25) * priceMonthlyEnterpriseUS);

            var resultYearlyOriginalEssentialUS = priceResultMonthlyEssentialMonthlyUS * 12;
            // insert. resultYearlyOriginalEssentialUS in .price-result-original.essential add . after every 3 digits and add € at the end to fixed
            $('.price-result-original.essential').html(resultYearlyOriginalEssentialUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " USD");

            var resultYearlyOriginalBusinessUS = priceResultMonthlyBusinessMonthlyUS * 12;
            // insert. resultYearlyOriginalBusinessUS in .price-result-original.business
            $('.price-result-original.business').html(resultYearlyOriginalBusinessUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " USD");

            var resultYearlyOriginalEnterpriseUS = priceResultMonthlyEnterpriseMonthlyUS * 12;
            // insert. resultYearlyOriginalEnterpriseUS in .price-result-original.enterprise
            $('.price-result-original.enterprise').html(resultYearlyOriginalEnterpriseUS.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " USD");        
        }
}
