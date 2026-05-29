// 🟥 ── Utility function to inject SPZ social proof section
function injectSPZSocialProof() {
    const socialProofLogos = [
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773659/matik/2003/container_13.svg',
            alt: 'Asana',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1779101355/matik/2003/container_25.svg',
            alt: 'Greenhouse',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773662/matik/2003/container_15.svg',
            alt: 'Zapier',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773672/matik/2003/container_21.svg',
            alt: 'Glassdoor',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773661/matik/2003/container_14.svg',
            alt: 'Salesloft',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773664/matik/2003/container_16.svg',
            alt: 'Samsara',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773670/matik/2003/container_20.svg',
            alt: 'Bazaarvoice',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773665/matik/2003/container_17.svg',
            alt: 'Modern Health',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773667/matik/2003/container_18.svg',
            alt: 'Handshake',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773673/matik/2003/container_22.svg',
            alt: 'Autodesk',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773675/matik/2003/container_23.svg',
            alt: 'Zuora',
        },
        {
            url: 'https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1778773669/matik/2003/container_19.svg',
            alt: 'Okta',
        },
    ];

    const sectionHTML = `
        <!-- hero auto scrolling social proof -->
        <div class="spz-socialproof-tiles">
            <div class="spz-socialproof-tiles__wrapper">
                <div class="spz-socialproof-tiles__main">
                    <ul class="spz-socialproof-tiles__list">
                        ${socialProofLogos.map((logo) => {
                            return `
                                <li>
                                    <div class="spz-socialproof-tile">
                                        <div class="spz-socialproof-tile__logo">
                                            <img src="${ logo.url }" alt="${ logo.alt }" loading="eager">
                                        </div>
                                    </div>
                                </li>
                            `;
                        }).join('')}

                        ${socialProofLogos.map((logo) => {
                            return `
                                <li>
                                    <div class="spz-socialproof-tile">
                                        <div class="spz-socialproof-tile__logo">
                                            <img src="${ logo.url }" alt="${ logo.alt }" loading="eager">
                                        </div>
                                    </div>
                                </li>
                            `;
                        }).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;

    return sectionHTML;
}


// 🟥 ── Helper function for SPZ social proof behavior (added for https://app.asana.com/1/77217210692853/project/1208736341602818/task/1214145752683267?focus=true)
function initSPZHero() {
    // Add this after your HTML is rendered
    const lists = document.querySelectorAll('.spz-socialproof-tiles__list');

    lists.forEach( list => {
        // Pause animation until images are ready
        list.style.animationPlayState = 'paused';
        
        const images = list.querySelectorAll('img');
        let loaded = 0;
        
        const onLoad = () => {
            loaded++;
            if (loaded === images.length) {
                // Small delay so Safari fully composites before starting
                setTimeout(() => {
                    list.style.animationPlayState = 'running';
                }, 100);
            }
        };
        
        images.forEach(img => {
            if (img.complete) {
                onLoad(); // already cached
            }
            else {
                img.addEventListener('load', onLoad);
                img.addEventListener('error', onLoad); // don't hang on broken images
            }
        });
    });
}




var CSS = `

/* ====================================================
   🟥 SPZ Social Proof (Auto Scrolling)
==================================================== */
@-webkit-keyframes spzSocialProofAutoScroll {
    from { -webkit-transform: translateX(0); transform: translateX(0); }
    to   { -webkit-transform: translateX(calc(-50% - var(--gap)/2)); transform: translateX(calc(-50% - var(--gap)/2)); }
}

@keyframes spzSocialProofAutoScroll {
    from { transform: translateX(0); }
    to { transform: translateX(calc(-50% - var(--gap)/2)); }
}

.spz_2003_v .spz-socialproof-h3 { align-self: stretch; color: var(--spz-2001-FFFFFF); text-align: left; font-family: var(--spz-2001-rm-nue-font); font-size: 24px; line-height: 110%; font-weight: 600; margin: 0; padding: 0; }

.spz_2003_v .spz-socialproof-tiles { width: 100%; display: block; position: relative; margin: 0 0 0 0; height: 50px; /* background-color: #4f23d3; */ -webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 12.02%, #FFF 87.5%, rgba(255, 255, 255, 0.00) 100%); -webkit-mask-repeat: no-repeat; -webkit-mask-size: cover; mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, #FFF 12.02%, #FFF 87.5%, rgba(255, 255, 255, 0.00) 100%); mask-repeat: no-repeat; mask-size: cover; background-color: transparent; }

.spz_2003_v .spz-socialproof-tiles--desktop-only { display: block; }
.spz_2003_v .spz-socialproof-tiles--tablet-mobile-only { display: none; }

.spz_2003_v .spz-socialproof-tiles__wrapper { display: flex; align-items: center; width: 100%; height: 100%; position: absolute; top: 0; left: 50%; transform: translateX(-50%); }
.spz_2003_v .spz-socialproof-tiles__main { --gap: 0px; /* 0rem */ display: flex; justify-content: flex-start; align-items: center; overflow: hidden; user-select: none; gap: var(--gap); transform: translateZ(0); -webkit-transform: translateZ(0); }

.spz_2003_v .spz-socialproof-tiles__list { flex-shrink: 0; display: flex; justify-content: space-around; align-items: flex-start; min-width: 100%; gap: var(--gap); margin: 0; padding: 0; list-style: none; -webkit-animation: spzSocialProofAutoScroll 40s linear infinite; animation: spzSocialProofAutoScroll 40s linear infinite; -webkit-backface-visibility: hidden; backface-visibility: hidden; }
.spz_2003_v .spz-socialproof-tiles__list li { display: flex; height: 50px; margin: 0; padding: 0px; flex-direction: column; justify-content: center; align-items: flex-start; }

.spz_2003_v .spz-socialproof-tile { display: flex; height: 50px; padding-right: 0px; align-items: center; gap: 40px; flex-shrink: 0; overflow: hidden; pointer-events: none; }

.spz_2003_v .spz-socialproof-tile__logo { display: flex; padding: 0px; flex-direction: column; justify-content: center; align-items: flex-start; gap: 8px; align-self: stretch; position: relative; }
.spz_2003_v .spz-socialproof-tile__logo img { display: flex; position: relative; z-index: 2; height: 50px; opacity: 1; }

@media all and (max-width: 1169.98px) {
    .spz_2003_v .spz-socialproof-tiles--desktop-only { display: none; }
    .spz_2003_v .spz-socialproof-tiles--tablet-mobile-only { display: block; }

    .spz_2003_v .spz-socialproof-tiles__list li { display: flex; /* filter: grayscale(1) brightness(2); opacity: 0.6; */ }
}

@media all and (max-width: 1023.98px) {
    /* .spz_2003_v .spz-socialproof-tiles--desktop-only { display: none; }
    .spz_2003_v .spz-socialproof-tiles--tablet-mobile-only { display: block; }

    .spz_2003_v .spz-socialproof-tiles__list li { filter: grayscale(1) brightness(2); opacity: 0.6; } */
}

@media all and (max-width: 767.98px) {
    .spz_2003_v .spz-socialproof-h3 { font-size: 20px; line-height: 110%; font-weight: 600; margin: 0; padding: 0; }

    .spz_2003_v .spz-socialproof-tiles__list li { display: flex; /* filter: grayscale(1) brightness(2); opacity: 0.6; */ }
}
    
`;