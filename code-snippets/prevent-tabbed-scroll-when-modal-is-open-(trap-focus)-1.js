// This code is taken from Matik 2003 as reference


// 🟥 ── Utility function to handle email capture + modal open + auto-populate modal form fields (Can be used for multiple instance)
function manageEmailCaptureAndPopulate({
    inputSelector = "#spzEmailCapture_hero", // Email input selector
    buttonSelector = "#spzGetDemoButton_hero", // CTA button selector
    storageKey = "spz_matik_email_capture", // Session storage key
    modalOpenClass = "spz-form-modal-open" // Class added to body when modal opens
} = {}) {

    /**
     * ----------------------------------------
     * Select Capture Elements
     * ----------------------------------------
     */
    const input = document.querySelector(inputSelector);
    const button = document.querySelector(buttonSelector);
    const controlRequestDemoButtons = Array.from(document.querySelectorAll('.button')).filter(btn => btn.textContent.trim() === 'Request Demo');

    let spzLockedScrollY = 0;

    // Exit if required elements do not exist
    if (!input || !button) return;

    /**
     * ----------------------------------------
     * Always Clear Previous Email on Fresh Load
     * ----------------------------------------
     */
    sessionStorage.removeItem(storageKey);

    /**
     * ----------------------------------------
     * Save Email While Typing
     * ----------------------------------------
     */
    input.addEventListener("input", function (e) {
        sessionStorage.setItem(storageKey, e.target.value);
    });

    /**
     * ----------------------------------------
     * Open Modal + Save Email
     * ----------------------------------------
     */
    function openModalAndPopulate() {
        // Get current email value
        const email = input.value || "";

        // Save in sessionStorage
        sessionStorage.setItem(storageKey, email);

        // Save scroll position
        spzLockedScrollY = window.scrollY;

        // Add modal open class on body
        document.body.classList.add(modalOpenClass);

        // Populate email inside modal form
        populateStoredEmail();

        // Focus first field inside modal
        setTimeout(() => {
            const firstInput = document.querySelector(
                '.spz-form-modal input, .spz-form-modal button, .spz-form-modal a'
            );

            if (firstInput) {
                firstInput.focus({ preventScroll: true });
            }
        }, 300);
    }

    /**
     * ----------------------------------------
     * CTA Button Click
     * ----------------------------------------
     */
    button.addEventListener("click", function (e) {
        e.preventDefault();
        openModalAndPopulate();
    });

    /**
     * ----------------------------------------
     * Control CTA Button Click
     * ----------------------------------------`
     */
    if (controlRequestDemoButtons.length > 0) {
        controlRequestDemoButtons.forEach(button => {
            button.setAttribute('href', '#');

            button.addEventListener("click", function (e) {
                e.preventDefault();
                openModalAndPopulate();
            });
        });
    }

    /**
     * ----------------------------------------
     * Enter Key Press on Input
     * ----------------------------------------
     */
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            openModalAndPopulate();
        }
    });

    /**
     * ----------------------------------------
     * Input UI States
     * ----------------------------------------
     */
    input.addEventListener("focus", function () {
        input.closest(".spz-email-input-wrapper")?.classList.add("field-focused");
    });

    input.addEventListener("blur", function () {
        const wrapper = input.closest(".spz-email-input-wrapper");

        wrapper?.classList.remove("field-focused");

        if (input.value.trim() !== "") {
            wrapper?.classList.add("input-filled");
        } else {
            wrapper?.classList.remove("input-filled");
        }
    });

    /**
     * ----------------------------------------
     * Close Modal on Close Button Click
     * ----------------------------------------
     */
    document.addEventListener("click", function (e) {
        const closeBtn = e.target.closest(".spz-form-modal__close");

        if (closeBtn) {
            document.body.classList.remove(modalOpenClass);
        }
    });

    /**
     * ----------------------------------------
     * Prevent Background Tab Scroll
     * ----------------------------------------
     */
    document.addEventListener("focusin", function (e) {
            //console.log("Focusin event:", e.target);

            // Only when modal open
            if (!document.body.classList.contains(modalOpenClass)) return;

            const modal = document.querySelector(".spz-form-modal");

            // If focus goes outside modal (CAN ALSO USE - if (modal && !e.target.closest('.spz-form-modal')) )
            if (modal && !modal.contains(e.target)) {
                //console.log("Focusin event not inside modal:", e.target);

                // Instantly restore scroll position
                window.scrollTo(0, spzLockedScrollY);

                // Bring focus back inside modal
                const firstInput = modal.querySelector(
                    'input, button, a, textarea, select'
                );

                if (firstInput) {
                    firstInput.focus({ preventScroll: true });
                }
            }
        },
        true
    );

    /**
     * ----------------------------------------
     * Populate Stored Email in Modal Fields
     * ----------------------------------------
     */
    function populateStoredEmail() {
        // Get Stored Email
        const savedEmail = sessionStorage.getItem(storageKey);

        // Exit if no email found
        if (!savedEmail) return;

        // Iterate Until Email Field Appears
        const interval = setInterval(function () {
            const emailFields = document.querySelectorAll(
                '.spz-form-card [name="Email"], .spz-form-card input[type="email"]'
            );

            // Stop if field(s) found
            if (emailFields.length > 0) {
                clearInterval(interval);

                emailFields.forEach(function (field) {
                    // Set Input Value
                    field.value = savedEmail;

                    // Trigger Input Event - (Important for HubSpot / React / Safari)
                    field.dispatchEvent(
                        new InputEvent("input", {
                            bubbles: true,
                            cancelable: true
                        })
                    );

                    // Add Filled Class Immediately - (Backup in case blur/focus fails)
                    const wrapper = field.closest(".spz-input-wrap");
                    if (wrapper) {
                        wrapper.classList.add("filled");
                    }

                    // Safari Safe Focus + Blur Delay - Wait for modal render / transition
                    requestAnimationFrame(function () {
                        setTimeout(function () {
                            try {
                                field.focus();

                                // Blur After Focus - Triggers floating labels / validations
                                setTimeout(function () {
                                    field.blur();

                                    field.dispatchEvent(
                                        new FocusEvent("focusout", {
                                            bubbles: true
                                        })
                                    );
                                }, 120);

                            } catch (err) {
                                console.warn("Focus error:", err);
                            }
                        }, 250); // Safari safe delay
                    });
                });
            }
        }, 100);

        /**
         * ----------------------------------------
         * Safety Timeout
         * ----------------------------------------
         */
        setTimeout(function () {
            clearInterval(interval);
        }, 5000);
    }
}