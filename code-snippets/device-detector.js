/**
 * Comprehensive browser/device detector.
 *
 * Returns a snapshot of:
 *   - device classification
 *   - mobile/tablet/desktop/touch classification
 *   - OS/platform
 *   - browser
 *   - screen resolution
 *   - viewport size
 *   - orientation
 *   - DPR / effective resolution
 *   - touch / pointer / hover capabilities
 *   - PWA / fullscreen information
 *   - foldable / multi-screen hints where supported
 *   - media capabilities
 *   - hardware/network hints
 *
 * NOTE:
 * Browser APIs intentionally do not expose enough information to
 * identify every physical device model reliably.
 */
function deviceDetector() {
    const nav = window.navigator;
    const screenObj = window.screen;

    /* -----------------------------------------------------------
     * Helpers
     * --------------------------------------------------------- */

    const has = (obj, key) =>
        obj != null && key in obj;

    const safe = (fn, fallback = null) => {
        try {
            const value = fn();
            return value === undefined ? fallback : value;
        } catch {
            return fallback;
        }
    };

    const media = query =>
        safe(() => window.matchMedia(query).matches, false);

    const numberOrNull = value =>
        Number.isFinite(value) ? value : null;

    const normalize = value =>
        typeof value === "string"
            ? value.toLowerCase()
            : "";

    /* -----------------------------------------------------------
     * User agent
     * --------------------------------------------------------- */

    const ua = nav.userAgent || "";
    const uaLower = ua.toLowerCase();

    const userAgentData = nav.userAgentData || null;

    const platform = safe(
        () => nav.platform,
        ""
    );

    const platformLower = normalize(platform);

    /* -----------------------------------------------------------
     * UA-CH platform / architecture
     * --------------------------------------------------------- */

    const uaPlatform = safe(
        () => userAgentData?.platform,
        null
    );

    const uaMobile = safe(
        () => userAgentData?.mobile,
        null
    );

    const uaArchitecture = safe(
        () => userAgentData?.architecture,
        null
    );

    const uaBitness = safe(
        () => userAgentData?.bitness,
        null
    );

    const uaModel = safe(
        () => userAgentData?.model,
        null
    );

    /* -----------------------------------------------------------
     * Touch detection
     * --------------------------------------------------------- */

    const maxTouchPoints = numberOrNull(
        nav.maxTouchPoints
    ) ?? 0;

    const msMaxTouchPoints = numberOrNull(
        nav.msMaxTouchPoints
    ) ?? 0;

    const hasTouchEvent = safe(
        () => "ontouchstart" in window,
        false
    );

    const touchCapable =
        maxTouchPoints > 0 ||
        msMaxTouchPoints > 0 ||
        hasTouchEvent;

    /* -----------------------------------------------------------
     * Pointer / hover capabilities
     * --------------------------------------------------------- */

    const pointer = {
        fine: media("(pointer: fine)"),
        coarse: media("(pointer: coarse)"),
        none: media("(pointer: none)"),

        anyFine: media("(any-pointer: fine)"),
        anyCoarse: media("(any-pointer: coarse)"),
        anyNone: media("(any-pointer: none)")
    };

    const hover = {
        hover: media("(hover: hover)"),
        none: media("(hover: none)"),
        anyHover: media("(any-hover: hover)"),
        anyNone: media("(any-hover: none)")
    };

    /* -----------------------------------------------------------
     * Screen information
     * --------------------------------------------------------- */

    const screenWidth = numberOrNull(screenObj.width);
    const screenHeight = numberOrNull(screenObj.height);

    const availWidth = numberOrNull(screenObj.availWidth);
    const availHeight = numberOrNull(screenObj.availHeight);

    const colorDepth = numberOrNull(screenObj.colorDepth);
    const pixelDepth = numberOrNull(screenObj.pixelDepth);

    const devicePixelRatio =
        numberOrNull(window.devicePixelRatio) || 1;

    const screenOrientation = safe(
        () => screenObj.orientation?.type,
        null
    );

    const screenOrientationAngle = numberOrNull(
        safe(() => screenObj.orientation?.angle, null)
    );

    /* -----------------------------------------------------------
     * Viewport
     * --------------------------------------------------------- */

    const viewportWidth = numberOrNull(
        window.innerWidth
    );

    const viewportHeight = numberOrNull(
        window.innerHeight
    );

    const clientWidth = numberOrNull(
        document.documentElement?.clientWidth
    );

    const clientHeight = numberOrNull(
        document.documentElement?.clientHeight
    );

    const outerWidth = numberOrNull(
        window.outerWidth
    );

    const outerHeight = numberOrNull(
        window.outerHeight
    );

    const visualViewport = window.visualViewport;

    const visualViewportInfo = visualViewport
        ? {
              width: numberOrNull(visualViewport.width),
              height: numberOrNull(visualViewport.height),
              offsetLeft: numberOrNull(visualViewport.offsetLeft),
              offsetTop: numberOrNull(visualViewport.offsetTop),
              pageLeft: numberOrNull(visualViewport.pageLeft),
              pageTop: numberOrNull(visualViewport.pageTop),
              scale: numberOrNull(visualViewport.scale)
          }
        : null;

    /* -----------------------------------------------------------
     * Orientation
     * --------------------------------------------------------- */

    let orientation = "unknown";

    if (viewportWidth != null && viewportHeight != null) {
        if (viewportWidth > viewportHeight) {
            orientation = "landscape";
        } else if (viewportHeight > viewportWidth) {
            orientation = "portrait";
        } else {
            orientation = "square";
        }
    }

    const isLandscape =
        orientation === "landscape";

    const isPortrait =
        orientation === "portrait";

    /* -----------------------------------------------------------
     * Operating system detection
     * --------------------------------------------------------- */

    let os = "unknown";
    let osVersion = null;

    if (/windows nt/i.test(ua)) {
        os = "windows";

        const match = ua.match(/Windows NT ([\d.]+)/i);

        if (match) {
            const versions = {
                "10.0": "10/11",
                "6.4": "10",
                "6.3": "8.1",
                "6.2": "8",
                "6.1": "7",
                "6.0": "Vista",
                "5.1": "XP"
            };

            osVersion =
                versions[match[1]] || match[1];
        }
    } else if (/android/i.test(ua)) {
        os = "android";

        const match = ua.match(
            /Android\s+([\d.]+)/i
        );

        osVersion = match?.[1] || null;
    } else if (
        /iphone|ipad|ipod/i.test(ua)
    ) {
        os = "ios";

        const match = ua.match(
            /OS\s+([\d_]+)/i
        );

        osVersion =
            match?.[1]?.replace(/_/g, ".") || null;
    } else if (/mac os x/i.test(ua)) {
        os = "macos";

        const match = ua.match(
            /Mac OS X\s*([\d_\.]+)/i
        );

        osVersion =
            match?.[1]?.replace(/_/g, ".") || null;
    } else if (/cros/i.test(ua)) {
        os = "chromeos";
    } else if (/linux/i.test(ua)) {
        os = "linux";
    }

    // iPadOS 13+ can sometimes identify itself as macOS.
    const possibleIPad =
        os === "macos" &&
        touchCapable &&
        maxTouchPoints > 1;

    if (possibleIPad) {
        os = "ipados";
        osVersion = null;
    }

    /* -----------------------------------------------------------
     * Browser detection
     * --------------------------------------------------------- */

    let browser = "unknown";
    let browserVersion = null;

    const browserTests = [
        {
            name: "edge",
            regex: /Edg\/([\d.]+)/i
        },
        {
            name: "opera",
            regex: /(?:OPR|Opera)\/([\d.]+)/i
        },
        {
            name: "samsung internet",
            regex: /SamsungBrowser\/([\d.]+)/i
        },
        {
            name: "firefox",
            regex: /Firefox\/([\d.]+)/i
        },
        {
            name: "chrome",
            regex: /(?:Chrome|CriOS)\/([\d.]+)/i
        },
        {
            name: "safari",
            regex: /Version\/([\d.]+).*Safari\//i
        },
        {
            name: "ie",
            regex: /(?:MSIE\s|rv:)([\d.]+)/i
        }
    ];

    for (const test of browserTests) {
        const match = ua.match(test.regex);

        if (match) {
            browser = test.name;
            browserVersion = match[1];
            break;
        }
    }

    /* -----------------------------------------------------------
     * Engine
     * --------------------------------------------------------- */

    let engine = "unknown";

    if (/Trident/i.test(ua)) {
        engine = "trident";
    } else if (/Gecko\//i.test(ua) &&
               /Firefox/i.test(ua)) {
        engine = "gecko";
    } else if (/AppleWebKit/i.test(ua)) {
        engine = "webkit/blink";
    }

    /* -----------------------------------------------------------
     * Device family heuristics
     * --------------------------------------------------------- */

    const uaSaysMobile =
        /mobile/i.test(ua);

    const uaSaysTablet =
        /tablet|ipad/i.test(ua) ||
        (
            /android/i.test(ua) &&
            !/mobile/i.test(ua)
        );

    const isIPhone =
        /iphone/i.test(ua);

    const isIPad =
        /ipad/i.test(ua) ||
        possibleIPad;

    const isIPod =
        /ipod/i.test(ua);

    const isAndroid =
        /android/i.test(ua);

    const isWindows =
        /windows/i.test(ua);

    const isMac =
        /macintosh|mac os x/i.test(ua);

    const isLinux =
        /linux/i.test(ua) &&
        !isAndroid;

    /* -----------------------------------------------------------
     * CSS media classification
     * --------------------------------------------------------- */

    const mediaMobile =
        media("(max-width: 767px)");

    const mediaTablet =
        media("(min-width: 768px) and (max-width: 1023px)");

    const mediaDesktop =
        media("(min-width: 1024px)");

    /* -----------------------------------------------------------
     * Determine primary device type
     * --------------------------------------------------------- */

    let deviceType = "desktop";

    if (
        isIPhone ||
        isIPod ||
        (
            isAndroid &&
            uaSaysMobile
        )
    ) {
        deviceType = "mobile";
    } else if (
        isIPad ||
        uaSaysTablet
    ) {
        deviceType = "tablet";
    } else if (
        uaMobile === true
    ) {
        deviceType = "mobile";
    } else if (
        mediaMobile &&
        touchCapable
    ) {
        deviceType = "mobile";
    } else if (
        mediaTablet &&
        touchCapable
    ) {
        deviceType = "tablet";
    } else {
        deviceType = "desktop";
    }

    /* -----------------------------------------------------------
     * Touch desktop / hybrid device
     * --------------------------------------------------------- */

    const desktopTouch =
        deviceType === "desktop" &&
        touchCapable;

    const desktopNonTouch =
        deviceType === "desktop" &&
        !touchCapable;

    const hybrid =
        deviceType === "desktop" &&
        touchCapable &&
        (
            pointer.fine ||
            hover.hover
        );

    /* -----------------------------------------------------------
     * Device subtype
     * --------------------------------------------------------- */

    let deviceSubtype = deviceType;

    if (deviceType === "mobile") {
        if (isIPhone) {
            deviceSubtype = "iphone";
        } else if (isIPod) {
            deviceSubtype = "ipod";
        } else if (isAndroid) {
            deviceSubtype = "android-phone";
        } else {
            deviceSubtype = "mobile";
        }
    }

    if (deviceType === "tablet") {
        if (isIPad) {
            deviceSubtype = "ipad";
        } else if (isAndroid) {
            deviceSubtype = "android-tablet";
        } else {
            deviceSubtype = "tablet";
        }
    }

    if (deviceType === "desktop") {
        if (desktopTouch && hybrid) {
            deviceSubtype = "desktop-touch-hybrid";
        } else if (desktopTouch) {
            deviceSubtype = "desktop-touch";
        } else {
            deviceSubtype = "desktop";
        }
    }

    /* -----------------------------------------------------------
     * Device class
     * --------------------------------------------------------- */

    let deviceClass = "desktop";

    if (deviceType === "mobile") {
        deviceClass = "mobile";
    } else if (deviceType === "tablet") {
        deviceClass = "tablet";
    } else if (desktopTouch) {
        deviceClass = "desktop-touch";
    } else {
        deviceClass = "desktop";
    }

    /* -----------------------------------------------------------
     * Physical-ish resolution
     *
     * CSS pixels × DPR is an approximation of backing resolution.
     * It is NOT guaranteed to equal the physical panel resolution.
     * --------------------------------------------------------- */

    const estimatedPhysicalResolution = {
        width:
            screenWidth != null
                ? Math.round(screenWidth * devicePixelRatio)
                : null,

        height:
            screenHeight != null
                ? Math.round(screenHeight * devicePixelRatio)
                : null
    };

    /* -----------------------------------------------------------
     * CSS viewport category
     * --------------------------------------------------------- */

    let viewportCategory = "unknown";

    if (
        viewportWidth != null &&
        viewportHeight != null
    ) {
        const minDimension =
            Math.min(
                viewportWidth,
                viewportHeight
            );

        if (minDimension < 480) {
            viewportCategory = "very-small";
        } else if (minDimension < 768) {
            viewportCategory = "small";
        } else if (minDimension < 1024) {
            viewportCategory = "medium";
        } else if (minDimension < 1440) {
            viewportCategory = "large";
        } else if (minDimension < 1920) {
            viewportCategory = "xlarge";
        } else {
            viewportCategory = "xxlarge";
        }
    }

    /* -----------------------------------------------------------
     * PWA / standalone
     * --------------------------------------------------------- */

    const standalone =
        media("(display-mode: standalone)") ||
        safe(() => nav.standalone === true, false);

    const fullscreen =
        media("(display-mode: fullscreen)");

    const minimalUi =
        media("(display-mode: minimal-ui)");

    const browserDisplayMode =
        standalone
            ? "standalone"
            : fullscreen
                ? "fullscreen"
                : minimalUi
                    ? "minimal-ui"
                    : "browser";

    /* -----------------------------------------------------------
     * Safe area support
     * --------------------------------------------------------- */

    const safeAreaSupported =
        CSS?.supports?.(
            "padding-top: env(safe-area-inset-top)"
        ) || false;

    /* -----------------------------------------------------------
     * Color / visual capabilities
     * --------------------------------------------------------- */

    const visual = {
        darkMode: media(
            "(prefers-color-scheme: dark)"
        ),

        lightMode: media(
            "(prefers-color-scheme: light)"
        ),

        reducedMotion: media(
            "(prefers-reduced-motion: reduce)"
        ),

        reducedTransparency: media(
            "(prefers-reduced-transparency: reduce)"
        ),

        forcedColors: media(
            "(forced-colors: active)"
        ),

        contrastMore: media(
            "(prefers-contrast: more)"
        ),

        hdr: media(
            "(dynamic-range: high)"
        ),

        srgb: media(
            "(color-gamut: srgb)"
        ),

        p3: media(
            "(color-gamut: p3)"
        ),

        rec2020: media(
            "(color-gamut: rec2020)"
        )
    };

    /* -----------------------------------------------------------
     * Hardware information
     * --------------------------------------------------------- */

    const hardware = {
        cpuCores: numberOrNull(
            nav.hardwareConcurrency
        ),

        deviceMemoryGB:
            numberOrNull(nav.deviceMemory),

        maxTouchPoints
    };

    /* -----------------------------------------------------------
     * Network information
     * --------------------------------------------------------- */

    const connection =
        nav.connection ||
        nav.mozConnection ||
        nav.webkitConnection ||
        null;

    const network = connection
        ? {
              effectiveType:
                  safe(
                      () => connection.effectiveType,
                      null
                  ),

              downlinkMbps:
                  numberOrNull(
                      safe(
                          () => connection.downlink,
                          null
                      )
                  ),

              rttMs:
                  numberOrNull(
                      safe(
                          () => connection.rtt,
                          null
                      )
                  ),

              saveData:
                  safe(
                      () => connection.saveData,
                      false
                  ),

              type:
                  safe(
                      () => connection.type,
                      null
                  )
          }
        : null;

    /* -----------------------------------------------------------
     * Battery
     * --------------------------------------------------------- */

    // BatteryManager is generally unavailable/restricted in modern
    // browsers, so this will normally be null.
    const batterySupported =
        "getBattery" in nav;

    /* -----------------------------------------------------------
     * Foldable / viewport segments
     * --------------------------------------------------------- */

    const viewportSegments = [];

    // Newer CSS viewport segment environment variables can be
    // detected through CSS.supports, but exact segments are
    // browser/device dependent.
    const viewportSegmentSupported =
        safe(
            () =>
                CSS?.supports?.(
                    "top: env(viewport-segment-top 0 0)"
                ),
            false
        );

    /* -----------------------------------------------------------
     * Web API capabilities
     * --------------------------------------------------------- */

    const capabilities = {
        serviceWorker:
            "serviceWorker" in nav,

        webWorker:
            typeof Worker !== "undefined",

        webGL:
            safe(() => {
                const canvas =
                    document.createElement("canvas");

                return !!(
                    canvas.getContext("webgl") ||
                    canvas.getContext("experimental-webgl")
                );
            }, false),

        webGL2:
            safe(() => {
                const canvas =
                    document.createElement("canvas");

                return !!canvas.getContext("webgl2");
            }, false),

        webGPU:
            "gpu" in nav,

        bluetooth:
            "bluetooth" in nav,

        usb:
            "usb" in nav,

        serial:
            "serial" in nav,

        nfc:
            "NDEFReader" in window,

        geolocation:
            "geolocation" in nav,

        mediaDevices:
            "mediaDevices" in nav,

        notifications:
            "Notification" in window,

        pushManager:
            "PushManager" in window,

        share:
            typeof nav.share === "function",

        clipboard:
            !!nav.clipboard,

        credentials:
            "credentials" in nav,

        webAuthn:
            typeof window.PublicKeyCredential !==
            "undefined"
    };

    /* -----------------------------------------------------------
     * Fullscreen / display
     * --------------------------------------------------------- */

    const display = {
        standalone,
        fullscreen,
        minimalUi,
        mode: browserDisplayMode,

        screen: {
            width: screenWidth,
            height: screenHeight,
            availableWidth: availWidth,
            availableHeight: availHeight,
            colorDepth,
            pixelDepth
        },

        viewport: {
            width: viewportWidth,
            height: viewportHeight,
            clientWidth,
            clientHeight,
            outerWidth,
            outerHeight,

            category: viewportCategory
        },

        visualViewport: visualViewportInfo,

        pixelRatio: {
            devicePixelRatio,

            estimatedPhysicalWidth:
                estimatedPhysicalResolution.width,

            estimatedPhysicalHeight:
                estimatedPhysicalResolution.height
        }
    };

    /* -----------------------------------------------------------
     * Orientation information
     * --------------------------------------------------------- */

    const orientationInfo = {
        type: screenOrientation,
        angle: screenOrientationAngle,

        calculated: orientation,

        isPortrait,
        isLandscape,

        portraitMediaQuery:
            media("(orientation: portrait)"),

        landscapeMediaQuery:
            media("(orientation: landscape)")
    };

    /* -----------------------------------------------------------
     * Device confidence
     *
     * This is intentionally heuristic rather than pretending
     * the classification is 100% certain.
     * --------------------------------------------------------- */

    let confidence = "medium";

    if (
        isIPhone ||
        isIPad ||
        isIPod ||
        uaSaysTablet ||
        (
            isAndroid &&
            uaSaysMobile
        )
    ) {
        confidence = "high";
    } else if (
        deviceType === "desktop" &&
        !touchCapable
    ) {
        confidence = "high";
    }

    if (
        desktopTouch &&
        deviceType === "desktop"
    ) {
        confidence = "medium";
    }

    /* -----------------------------------------------------------
     * Platform details
     * --------------------------------------------------------- */

    const platformInfo = {
        navigatorPlatform: platform,
        userAgentPlatform: uaPlatform,

        architecture: uaArchitecture,
        bitness: uaBitness,
        model: uaModel,
        mobileFromUAData: uaMobile
    };

    /* -----------------------------------------------------------
     * Return
     * --------------------------------------------------------- */

    return {
        timestamp: new Date().toISOString(),

        device: {
            type: deviceType,
            subtype: deviceSubtype,
            class: deviceClass,

            isMobile:
                deviceType === "mobile",

            isTablet:
                deviceType === "tablet",

            isDesktop:
                deviceType === "desktop",

            isTouchDevice:
                touchCapable,

            isDesktopTouch:
                desktopTouch,

            isDesktopNonTouch:
                desktopNonTouch,

            isHybrid:
                hybrid,

            confidence
        },

        operatingSystem: {
            name: os,
            version: osVersion
        },

        browser: {
            name: browser,
            version: browserVersion,
            engine
        },

        platform: platformInfo,

        userAgent: {
            raw: ua,

            mobile: uaMobile,

            userAgentDataAvailable:
                !!userAgentData
        },

        touch: {
            supported: touchCapable,

            maxTouchPoints,

            msMaxTouchPoints,

            ontouchstart:
                hasTouchEvent
        },

        pointer,

        hover,

        screen: display,

        orientation: orientationInfo,

        visual,

        hardware,

        network,

        battery: {
            apiAvailable: batterySupported
        },

        displayMode: {
            mode: browserDisplayMode,
            standalone,
            fullscreen,
            minimalUi
        },

        safeArea: {
            supported:
                safeAreaSupported
        },

        foldable: {
            viewportSegmentsSupported:
                viewportSegmentSupported,

            segments:
                viewportSegments
        },

        capabilities,

        mediaQueries: {
            mobile: mediaMobile,
            tablet: mediaTablet,
            desktop: mediaDesktop
        },

        raw: {
            userAgent: ua,
            platform,
            maxTouchPoints,
            devicePixelRatio
        }
    };
}


// Example Use
const device = deviceDetector();

console.log(device);
console.log(device.device.type);
console.log(device.device.subtype);
console.log(device.screen.viewport.width);
console.log(device.screen.viewport.height);
console.log(device.screen.pixelRatio.devicePixelRatio);
console.log(device.orientation.calculated);