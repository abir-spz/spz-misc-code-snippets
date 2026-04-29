/**
 * Returns Promise<Object>
 *
 * result.allowed  = true / false
 * result.code     = country code
 * result.country  = country name
 *
 * Allowed countries:
 * India (IN)
 * Philippines (PH)
 *
 * Usage:
 *
 * isIndiaOrPhilippines().then(function(result){
 *     console.log(result.country);
 *
 *     if(result.allowed){
 *         // Run test
 *     }
 * });
 */

function isIndiaOrPhilippines() {
    return new Promise(function (resolve) {
        var ALLOWED = ['IN', 'PH'];
        var STORAGE_KEY = 'spz_country_check';

        /* Use cache first */
        try {
            var cached = sessionStorage.getItem(STORAGE_KEY);

            if (cached) {
                cached = JSON.parse(cached);
                console.log(cached.country);
                resolve(cached);
                return;
            }
        } catch (e) {}

        fetch('https://ipapi.co/json/', {
                method: 'GET',
                cache: 'no-store'
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var code = data && data.country_code ? data.country_code.toUpperCase() : '';

                var country = data && data.country_name ? data.country_name : 'Unknown';

                var allowed = ALLOWED.indexOf(code) > -1;

                var result = {
                    allowed: allowed,
                    code: code,
                    country: country
                };

                try {
                    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(result));
                } catch (e) {}

                console.log(country);
                resolve(result);
            })
            .catch(function () {
                var result = {
                    allowed: false,
                    code: '',
                    country: 'Unknown'
                };

                console.log(result.country);
                resolve(result);
            });
    });
}



/**
 * Native JS country heuristic using:
 * - navigator.language
 * - navigator.languages
 * - Intl.DateTimeFormat().resolvedOptions().timeZone
 *
 * NO API calls.
 * Returns TRUE only when signals strongly match:
 * India or Philippines
 *
 * Returns:
 * {
 *   allowed: true/false,
 *   country: "India" | "Philippines" | "Unknown",
 *   code: "IN" | "PH" | ""
 * }
 *
 * Usage:
 *
 * var result = isIndiaOrPhilippines();
 * console.log(result.country);
 *
 * if(result.allowed){
 *    load1003();
 * }
 */

function isIndiaOrPhilippines() {

    var lang = (navigator.language || '').toLowerCase();
    var langs = navigator.languages || [];
    var timeZone = '';

    try {
        timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch (e) {}

    timeZone = timeZone.toLowerCase();

    var allLangs = [lang].concat(langs).join('|').toLowerCase();

    /* ---------- INDIA ---------- */
    var indiaLangMatch =
        allLangs.indexOf('-in') > -1 ||
        allLangs.indexOf('en-in') > -1 ||
        allLangs.indexOf('hi-in') > -1 ||
        allLangs.indexOf('bn-in') > -1 ||
        allLangs.indexOf('ta-in') > -1 ||
        allLangs.indexOf('te-in') > -1;

    var indiaTZMatch =
        timeZone.indexOf('kolkata') > -1 ||
        timeZone.indexOf('calcutta') > -1;

    if (indiaLangMatch || indiaTZMatch) {
        console.log('India');
        return {
            allowed: true,
            country: 'India',
            code: 'IN'
        };
    }

    /* ---------- PHILIPPINES ---------- */
    var phLangMatch =
        allLangs.indexOf('-ph') > -1 ||
        allLangs.indexOf('en-ph') > -1 ||
        allLangs.indexOf('fil-ph') > -1 ||
        allLangs.indexOf('tl-ph') > -1;

    var phTZMatch =
        timeZone.indexOf('manila') > -1;

    if (phLangMatch || phTZMatch) {
        console.log('Philippines');
        return {
            allowed: true,
            country: 'Philippines',
            code: 'PH'
        };
    }

    /* ---------- FALLBACK ---------- */
    console.log('Unknown');

    return {
        allowed: false,
        country: 'Unknown',
        code: ''
    };
}