// 2002 - MixPanel | Contact Us | Qualifying Questions  - TC Script (Hiddenfield) - (Primary Target - https://mixpanel.com/contact-us/sales/)
(function () {
    'use strict';

    // Test defaults and info vars
    const testInfo = {
        id: '2002',
        name: 'MixPanel | Contact Us | Qualifying Questions',
        variation: 'tc',
        controlURL: 'https://mixpanel.com/contact-us/sales/',
        squeezPage: true,
        hiddenValuePrefix: 'SPZ#',
        hiddenValueSuffix: '_true_control',
        bodyClass: 'spz_2002_tc',
    };

    // Check if we're on the correct page
    function isValidPage() {
        return window.location.href.includes('https://mixpanel.com/contact-us/sales/');
    }

    // Load CSS file
    function loadCSS(url) {
        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            link.onload = resolve;
            link.onerror = reject;
            document.head.appendChild(link);
        });
    }

    // Load JS file
    function loadJS(url) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
        });
    }

    // Initialize test
    async function initTest() {
        if (!isValidPage()) {
            console.log(`[SPZ] ${testInfo.id} - Not on valid page, skipping...`);
            return;
        }

        console.log(`[SPZ] ${testInfo.id} - Initializing test: ${testInfo.name}`);

        try {
            // Load CSS and JS
            // Note: Replace with actual CDN URLs when deploying
            // await loadCSS('https://cdn.example.com/mixpanel/3002/3002-style.css');
            // await loadJS('https://cdn.example.com/mixpanel/3002/3002-script.js');

            console.log(`[SPZ] ${testInfo.id} - Test loaded successfully`);
        } 
        catch (error) {
            console.error(`[SPZ] ${testInfo.id} - Error loading test:`, error);
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTest);
    } 
    else {
        initTest();
    }
})();
