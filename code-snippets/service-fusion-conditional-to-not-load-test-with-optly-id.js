if (window.location.pathname.indexOf('/field-service-management-software') > -1) {
    var checkBody = setInterval(function () {
        if (document.querySelectorAll('body').length > 0) {
            clearInterval(checkBody);
            detect_browser();
            var OStype = detectOS();
            var bodyEle = document.querySelector('body');

            // 🟥 check if Soft launched test is present, if present then do not execute the test functions (Delete timeout after AQA is done)
            setTimeout(() => {
                var state = window.optimizely.get('state');
                var activeExperiments = state.getActiveExperimentIds();

                console.log('activeExperiments: ', activeExperiments);

                // do not execute test function if soft launhed test id is present - change the test ID based on optimizely test no (Delete after AQA is done)
                if (activeExperiments.includes('5400617275883520')) {
                    console.log('%c[SPZ] Soft Launched Test 4026 Present... Skipping Test 4030...', 'color: white; background: #EF3F42; font-size: 14px; padding: 3px 6px; border-radius: 3px');
                    return;
                }
                else {
                    console.log('load test 4030');
                    if (!bodyEle.classList.contains('spz_4030_tc')) {
                        bodyEle.classList.add('spz_4030_tc');
                    }
                }
            }, 500);
            
            if (OStype == 'MacOS' || OStype == 'iOS') {
                bodyEle.classList.add('spz-ios-device');
            }
            var swiper_script = document.createElement('script');
            swiper_script.src = '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js';
            swiper_script.type = 'text/javascript';
            document.getElementsByTagName('head')[0].appendChild(swiper_script);
            var swiper_link = document.createElement('link');
            swiper_link.rel = 'stylesheet';
            swiper_link.type = 'text/css';
            swiper_link.href = '//cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css';
            document.getElementsByTagName('head')[0].appendChild(swiper_link);
            swiper_script.onload = function () {
                is_swiper_loaded = 1;
            };

            // 🟥 check if Soft launched test is present, if present then do not execute the test functions (Delete timeout after AQA is done)
            setTimeout(() => {
                var state = window.optimizely.get('state');
                var activeExperiments = state.getActiveExperimentIds();

                console.log('activeExperiments: ', activeExperiments);

                // do not execute test function if soft launhed test id is present - change the test ID based on optimizely test no (Delete after AQA is done)
                if (activeExperiments.includes('5400617275883520')) {
                    console.log('%c[SPZ] Soft Launched Test 4026 Present... Skipping Test 4030...', 'color: white; background: #EF3F42; font-size: 14px; padding: 3px 6px; border-radius: 3px');
                    return;
                }
                else {
                    console.log('load test 4030');
                    load4001();
                    load4009();
                    load4029();
                    load4015();
                    setHiddenValue();
                }
            }, 1000);

            // waitForElm('body form').then(function () {
            //     optimizely_test_check();
            // });
        }
    });
}