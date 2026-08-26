/* Moorepay 2016 - Get Demo | Product Showcase (VARIANT) - built over TC (2006 + Hidden Value) - Target URLs (https://www.moorepay.co.uk/book-a-demo/, https://www.moorepay.co.uk/book-a-demo-bot/, https://www.moorepay.co.uk/speak-to-sales-bot/) */

(function (){
    // global variables
    const sectionSelector = `section.contact-form`;
    const placement = 'after';

    /* ===== 🟥🟥 Product showcase tiles (left panel) ===== */
    // Each tile = one non-clickable card in the auto-scrolling marquee.
    // title -> shown next to the icon, alt -> required alt tag on the feature image, img -> Cloudinary asset, icon -> inline white line icon.
    const showcase_tiles = [
        {
            title: 'Payroll Software',
            alt: 'Payroll Software',
            img: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2016/img-01.png',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.1321 24H4.92662C3.61711 24 2.55127 22.9221 2.55127 21.5972V2.40279C2.55127 1.07793 3.61711 0 4.92662 0H15.1321C16.4342 0 17.5344 1.10025 17.5344 2.40279V4.67026C17.5344 4.98322 17.2805 5.23712 16.9671 5.23712C16.6537 5.23712 16.3998 4.98322 16.3998 4.67026V2.40279C16.3998 1.71502 15.8194 1.13374 15.1321 1.13374H4.92662C4.2542 1.13374 3.68593 1.71502 3.68593 2.40279V21.5972C3.68593 22.3087 4.23095 22.8663 4.92662 22.8663H15.1321C15.8315 22.8663 16.3997 22.2971 16.3997 21.5972V19.3297C16.3997 19.0168 16.6537 18.7629 16.9671 18.7629C17.2805 18.7629 17.5344 19.0168 17.5344 19.3297V21.5972C17.5344 22.9221 16.4565 24 15.1321 24Z" fill="white"/>
                    <path d="M16.9671 4.34662H3.1186C2.80517 4.34662 2.55127 4.09272 2.55127 3.77976C2.55127 3.4668 2.80517 3.21289 3.1186 3.21289H16.9671C17.2805 3.21289 17.5344 3.46679 17.5344 3.77976C17.5344 4.09272 17.2805 4.34662 16.9671 4.34662Z" fill="white"/>
                    <path d="M16.9671 20.7872H3.1186C2.80517 20.7872 2.55127 20.5332 2.55127 20.2203C2.55127 19.9073 2.80517 19.6534 3.1186 19.6534H16.9671C17.2805 19.6534 17.5344 19.9073 17.5344 20.2203C17.5344 20.5332 17.2805 20.7872 16.9671 20.7872Z" fill="white"/>
                    <path d="M10.7039 22.3798H9.35444C9.04101 22.3798 8.78711 22.1259 8.78711 21.813C8.78711 21.5 9.04101 21.2461 9.35444 21.2461H10.7039C11.0174 21.2461 11.2713 21.5 11.2713 21.813C11.2713 22.1259 11.0174 22.3798 10.7039 22.3798Z" fill="white"/>
                    <path d="M20.8815 10.2315H5.79048C5.47705 10.2315 5.22314 9.97759 5.22314 9.66462C5.22314 9.35166 5.47705 9.09776 5.79048 9.09776H20.8815C21.1949 9.09776 21.4488 9.35166 21.4488 9.66462C21.4488 9.97759 21.1949 10.2315 20.8815 10.2315Z" fill="white"/>
                    <path d="M19.9635 18.1416H6.68147C5.8779 18.1416 5.22314 17.4757 5.22314 16.6568V7.34321C5.22314 6.53918 5.8779 5.88535 6.68147 5.88535H19.9635C20.782 5.88535 21.4488 6.53918 21.4488 7.34321V16.6568C21.4488 17.4896 20.7959 18.1416 19.9635 18.1416ZM6.68147 7.01909C6.50848 7.01909 6.35781 7.17069 6.35781 7.34321V16.6568C6.35781 16.8502 6.50289 17.0078 6.68147 17.0078H19.9635C20.1635 17.0078 20.3142 16.8567 20.3142 16.6568V7.34321C20.3142 7.16464 20.157 7.01909 19.9635 7.01909H6.68147Z" fill="white"/>
                    <path d="M9.30057 8.61186C8.98714 8.61186 8.72021 8.35796 8.72021 8.04499C8.72021 7.73203 8.96017 7.47813 9.2736 7.47813H9.30057C9.61399 7.47813 9.8679 7.73203 9.8679 8.04499C9.8679 8.35796 9.61399 8.61186 9.30057 8.61186Z" fill="white"/>
                    <path d="M7.6536 8.61186C7.34017 8.61186 7.07324 8.35796 7.07324 8.04499C7.07324 7.73203 7.3132 7.47813 7.62662 7.47813H7.65359C7.96702 7.47813 8.22092 7.73203 8.22092 8.04499C8.22093 8.35796 7.96702 8.61186 7.6536 8.61186Z" fill="white"/>
                    <path d="M10.9197 8.61186C10.6063 8.61186 10.3394 8.35796 10.3394 8.04499C10.3394 7.73203 10.5793 7.47813 10.8927 7.47813H10.9197C11.2331 7.47813 11.487 7.73203 11.487 8.04499C11.487 8.35796 11.2331 8.61186 10.9197 8.61186Z" fill="white"/>
                </svg>
            `
        },
        {
            title: 'HR Software',
            alt: 'HR Software',
            img: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2016/img-02.png',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.8126 21.5969H2.1874C0.981168 21.5969 0 20.6283 0 19.4374V17.8178C0 17.5048 0.253894 17.2509 0.56731 17.2509H23.4327C23.7461 17.2509 24 17.5048 24 17.8178V19.4374C24 20.6283 23.0188 21.5969 21.8126 21.5969ZM1.13462 18.3846V19.4374C1.13462 20.0028 1.60707 20.4632 2.1874 20.4632H21.8126C22.3929 20.4632 22.8654 20.0028 22.8654 19.4374V18.3846H1.13462Z" fill="white"/>
                    <path d="M12.3108 20.0042H10.9604C10.647 20.0042 10.3931 19.7503 10.3931 19.4374C10.3931 19.1244 10.647 18.8706 10.9604 18.8706H12.3108C12.6242 18.8706 12.8781 19.1244 12.8781 19.4374C12.8781 19.7503 12.6242 20.0042 12.3108 20.0042Z" fill="white"/>
                    <path d="M22.0554 18.3846C21.742 18.3846 21.4881 18.1307 21.4881 17.8177V7.99118C21.4881 7.52943 21.2584 7.11603 20.8734 6.88446C20.6046 6.7231 20.5181 6.37481 20.6799 6.1065C20.8399 5.83959 21.1877 5.75077 21.4574 5.91259C22.1866 6.35109 22.6227 7.12812 22.6227 7.99118V17.8177C22.6227 18.1307 22.3688 18.3846 22.0554 18.3846ZM1.94475 18.3846C1.63134 18.3846 1.37744 18.1307 1.37744 17.8177V7.99118C1.37744 7.12812 1.81362 6.3511 2.54275 5.91259C2.81153 5.75077 3.15935 5.83865 3.32025 6.1065C3.48207 6.37481 3.39558 6.7231 3.1268 6.88446C2.74178 7.11603 2.51206 7.52943 2.51206 7.99118V17.8177C2.51206 18.1307 2.25816 18.3846 1.94475 18.3846Z" fill="white"/>
                    <path d="M19.1406 6.37153H4.8593C4.54589 6.37153 4.29199 6.11763 4.29199 5.80468C4.29199 5.49173 4.54589 5.23784 4.8593 5.23784H19.1406C19.454 5.23784 19.7079 5.49173 19.7079 5.80468C19.7079 6.11763 19.454 6.37153 19.1406 6.37153Z" fill="white"/>
                    <path d="M18.2227 16.1437H5.77723C4.95881 16.1437 4.29199 15.4778 4.29199 14.6589V3.88794C4.29199 3.06906 4.95881 2.40317 5.77723 2.40317H18.2227C19.0551 2.40317 19.7079 3.05511 19.7079 3.88794V14.6589C19.7079 15.4918 19.0551 16.1437 18.2227 16.1437ZM5.77723 3.53686C5.61075 3.53686 5.42661 3.68101 5.42661 3.88794V14.6589C5.42661 14.8659 5.61075 15.01 5.77723 15.01H18.2227C18.4227 15.01 18.5733 14.8589 18.5733 14.6589V3.88794C18.5733 3.68799 18.4227 3.53686 18.2227 3.53686H5.77723Z" fill="white"/>
                    <path d="M7.82882 4.97145C7.6856 4.97145 7.53307 4.90495 7.42891 4.80963C7.32382 4.69524 7.26709 4.55248 7.26709 4.40042C7.26709 4.2479 7.32382 4.10514 7.42891 4.00005C7.63817 3.7908 8.01854 3.7908 8.22873 4.00005C8.33289 4.10514 8.39985 4.2479 8.39985 4.40042C8.39985 4.55248 8.33289 4.69524 8.22873 4.80033C8.12364 4.90496 7.98134 4.97145 7.82882 4.97145Z" fill="white"/>
                    <path d="M6.37135 4.96772C6.05793 4.96772 5.79102 4.71382 5.79102 4.40087C5.79102 4.08792 6.03096 3.83403 6.34438 3.83403H6.37135C6.68476 3.83403 6.93866 4.08792 6.93866 4.40087C6.93866 4.71382 6.68476 4.96772 6.37135 4.96772Z" fill="white"/>
                    <path d="M9.28536 4.97145C9.13377 4.97145 8.99055 4.90495 8.88545 4.80033C8.78129 4.69524 8.72363 4.55248 8.72363 4.40042C8.72363 4.2479 8.78129 4.10514 8.88545 4.00005C9.09564 3.7908 9.47602 3.7908 9.68527 4.00005C9.79966 4.10514 9.85732 4.2479 9.85732 4.40042C9.85732 4.55248 9.79036 4.69524 9.68527 4.80033C9.58111 4.90496 9.43788 4.97145 9.28536 4.97145Z" fill="white"/>
                </svg>
            `
        },
        {
            title: 'Payroll Outsourcing',
            alt: 'Payroll Outsourcing',
            img: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2016/img-03.png',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.6882 18.0604H2.07952C0.932806 18.0604 0 17.1281 0 15.9818V4.94069C0 3.79445 0.932806 2.86211 2.07952 2.86211H19.1407C20.2864 2.86211 21.2192 3.79445 21.2192 4.94069V9.90791C21.2192 10.2209 20.9654 10.4748 20.6519 10.4748C20.3385 10.4748 20.0846 10.2209 20.0846 9.90791V4.94069C20.0846 4.41988 19.6615 3.9958 19.1407 3.9958H2.07952C1.55871 3.9958 1.13462 4.41988 1.13462 4.94069V15.9818C1.13462 16.5027 1.55871 16.9267 2.07952 16.9267H12.6882C13.0016 16.9267 13.2555 17.1806 13.2555 17.4936C13.2555 17.8065 13.0016 18.0604 12.6882 18.0604Z" fill="white"/>
                    <path d="M20.6519 6.99233H0.56731C0.253894 6.99233 0 6.73844 0 6.42549C0 6.11254 0.253894 5.85864 0.56731 5.85864H20.6519C20.9654 5.85864 21.2192 6.11254 21.2192 6.42549C21.2192 6.73844 20.9654 6.99233 20.6519 6.99233Z" fill="white"/>
                    <path d="M20.6519 9.31411H0.56731C0.253894 9.31411 0 9.06021 0 8.74726C0 8.43431 0.253894 8.18042 0.56731 8.18042H20.6519C20.9654 8.18042 21.2192 8.43431 21.2192 8.74726C21.2192 9.06021 20.9654 9.31411 20.6519 9.31411Z" fill="white"/>
                    <path d="M7.96355 13.6331H2.80754C2.49413 13.6331 2.24023 13.3793 2.24023 13.0663C2.24023 12.7534 2.49413 12.4995 2.80754 12.4995H7.96355C8.27697 12.4995 8.53086 12.7534 8.53086 13.0663C8.53086 13.3793 8.27697 13.6331 7.96355 13.6331Z" fill="white"/>
                    <path d="M5.3995 15.6308H2.80754C2.49413 15.6308 2.24023 15.3769 2.24023 15.064C2.24023 14.751 2.49413 14.4971 2.80754 14.4971H5.3995C5.71291 14.4971 5.96681 14.751 5.96681 15.064C5.96681 15.3769 5.71291 15.6308 5.3995 15.6308Z" fill="white"/>
                    <path d="M18.8162 21.1379C15.9731 21.1379 13.6602 18.8128 13.6602 15.9549C13.6602 13.1118 15.9731 10.7989 18.8162 10.7989C21.6741 10.7989 24.0001 13.1118 24.0001 15.9549C24.0001 18.8128 21.6741 21.1379 18.8162 21.1379ZM18.8162 11.9326C16.599 11.9326 14.7948 13.7368 14.7948 15.9549C14.7948 18.1879 16.599 20.0042 18.8162 20.0042C21.0491 20.0042 22.8655 18.1879 22.8655 15.9549C22.8655 13.7368 21.0491 11.9326 18.8162 11.9326Z" fill="white"/>
                    <path d="M18.3845 18.2223C18.2115 18.2223 18.0469 18.1428 17.939 18.0061L16.6435 16.3595C16.45 16.1135 16.4919 15.7568 16.7383 15.5634C16.9848 15.3704 17.341 15.4118 17.5344 15.6582L18.338 16.6794L20.0938 13.9475C20.2631 13.6843 20.6128 13.6066 20.8778 13.7768C21.141 13.9466 21.2173 14.2972 21.048 14.5604L18.8616 17.9619C18.7621 18.1163 18.5946 18.213 18.4114 18.2218C18.4021 18.2223 18.3938 18.2223 18.3845 18.2223Z" fill="white"/>
                </svg>
            `
        },
        {
            title: 'HR & Payroll Software',
            alt: 'HR & Payroll Software',
            img: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2016/img-04.png',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M23.4326 11.6355H6.15569C5.84227 11.6355 5.58838 11.3816 5.58838 11.0686C5.58838 10.7557 5.84227 10.5018 6.15569 10.5018H23.4326C23.746 10.5018 23.9999 10.7557 23.9999 11.0686C23.9999 11.3816 23.746 11.6355 23.4326 11.6355Z" fill="white"/>
                    <path d="M22.4068 22.5148H7.1815C6.30356 22.5148 5.58838 21.8006 5.58838 20.9222V8.93613C5.58838 8.05773 6.30356 7.34348 7.1815 7.34348H22.4068C23.2847 7.34348 23.9999 8.05773 23.9999 8.93613V20.9222C23.9999 21.8006 23.2847 22.5148 22.4068 22.5148ZM7.1815 8.47717C6.92853 8.47717 6.723 8.68317 6.723 8.93613V20.9222C6.723 21.1751 6.92853 21.3811 7.1815 21.3811H22.4068C22.6598 21.3811 22.8653 21.1752 22.8653 20.9222V8.93613C22.8653 8.68317 22.6598 8.47717 22.4068 8.47717H7.1815Z" fill="white"/>
                    <path d="M9.47612 10.0697C9.1627 10.0697 8.88184 9.81585 8.88184 9.5029C8.88184 9.18995 9.10876 8.93606 9.42218 8.93606H9.47612C9.78953 8.93606 10.0434 9.18995 10.0434 9.5029C10.0434 9.81585 9.78953 10.0697 9.47612 10.0697Z" fill="white"/>
                    <path d="M7.82886 10.0697C7.51545 10.0697 7.24854 9.81585 7.24854 9.5029C7.24854 9.18995 7.48848 8.93606 7.80189 8.93606H7.82886C8.14228 8.93606 8.39617 9.18995 8.39617 9.5029C8.39617 9.81585 8.14228 10.0697 7.82886 10.0697Z" fill="white"/>
                    <path d="M11.096 10.0697C10.7825 10.0697 10.5156 9.81585 10.5156 9.5029C10.5156 9.18995 10.7556 8.93606 11.069 8.93606H11.096C11.4094 8.93606 11.6633 9.18995 11.6633 9.5029C11.6633 9.81585 11.4094 10.0697 11.096 10.0697Z" fill="white"/>
                    <path d="M17.8442 5.80471H0.56731C0.253894 5.80471 0 5.55081 0 5.23786C0 4.92491 0.253894 4.67102 0.56731 4.67102H17.8442C18.1576 4.67102 18.4115 4.92491 18.4115 5.23786C18.4115 5.55081 18.1576 5.80471 17.8442 5.80471Z" fill="white"/>
                    <path d="M4.53569 16.6566H1.59312C0.715183 16.6566 0 15.9424 0 15.064V3.0779C0 2.1995 0.715183 1.48525 1.59312 1.48525H16.8184C17.6963 1.48525 18.4115 2.1995 18.4115 3.0779V6.26367C18.4115 6.57662 18.1576 6.83052 17.8442 6.83052C17.5308 6.83052 17.2769 6.57662 17.2769 6.26367V3.0779C17.2769 2.82494 17.0714 2.61894 16.8184 2.61894H1.59312C1.34015 2.61894 1.13462 2.82494 1.13462 3.0779V15.064C1.13462 15.3169 1.34015 15.5229 1.59312 15.5229H4.53569C4.84911 15.5229 5.103 15.7768 5.103 16.0898C5.103 16.4027 4.8491 16.6566 4.53569 16.6566Z" fill="white"/>
                    <path d="M3.88746 4.21164C3.57404 4.21164 3.30713 3.95774 3.30713 3.64479C3.30713 3.33184 3.54707 3.07795 3.86049 3.07795H3.88746C4.20088 3.07795 4.45477 3.33184 4.45477 3.64479C4.45477 3.95774 4.20087 4.21164 3.88746 4.21164Z" fill="white"/>
                    <path d="M2.26832 4.21164C1.9549 4.21164 1.68799 3.95774 1.68799 3.64479C1.68799 3.33184 1.92793 3.07795 2.24135 3.07795H2.26832C2.58174 3.07795 2.83563 3.33184 2.83563 3.64479C2.83563 3.95774 2.58173 4.21164 2.26832 4.21164Z" fill="white"/>
                    <path d="M5.50758 4.21164C5.19416 4.21164 4.92725 3.95774 4.92725 3.64479C4.92725 3.33184 5.16719 3.07795 5.48061 3.07795H5.50758C5.82099 3.07795 6.07489 3.33184 6.07489 3.64479C6.07489 3.95774 5.82099 4.21164 5.50758 4.21164Z" fill="white"/>
                </svg>
            `
        },
        {
            title: 'HR Services',
            alt: 'HR Services',
            img: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2016/img-05.png',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12.0141 18.1681C8.75348 18.1681 6.10107 15.5162 6.10107 12.2565C6.10107 8.9963 8.75348 6.34436 12.0141 6.34436C15.2589 6.34436 17.8993 8.9963 17.8993 12.2565C17.8993 15.5162 15.2589 18.1681 12.0141 18.1681ZM12.0141 7.47805C9.37938 7.47805 7.23569 9.62174 7.23569 12.2565C7.23569 14.8912 9.37938 17.0344 12.0141 17.0344C14.634 17.0344 16.7646 14.8912 16.7646 12.2565C16.7646 9.62174 14.634 7.47805 12.0141 7.47805Z" fill="white"/>
                    <path d="M12.0141 12.715C10.9474 12.715 10.1504 11.5608 10.1504 10.5285C10.1504 9.50176 10.9865 8.66614 12.0141 8.66614C13.026 8.66614 13.85 9.50176 13.85 10.5285C13.85 11.5608 13.0651 12.715 12.0141 12.715ZM12.0141 9.79983C11.6114 9.79983 11.285 10.1267 11.285 10.5285C11.285 11.0205 11.6728 11.5813 12.0141 11.5813C12.3285 11.5813 12.7154 11.0009 12.7154 10.5285C12.7154 10.1337 12.3945 9.79983 12.0141 9.79983Z" fill="white"/>
                    <path d="M14.1735 15.8194C13.8601 15.8194 13.6062 15.5655 13.6062 15.2526V14.821C13.6062 14.4337 13.2918 14.1189 12.904 14.1189H11.0961C10.7082 14.1189 10.3939 14.4337 10.3939 14.821V15.2526C10.3939 15.5655 10.14 15.8194 9.82659 15.8194C9.51317 15.8194 9.25928 15.5655 9.25928 15.2526V14.821C9.25928 13.8087 10.0833 12.9852 11.0961 12.9852H12.904C13.9168 12.9852 14.7408 13.8087 14.7408 14.821V15.2526C14.7408 15.5655 14.4869 15.8194 14.1735 15.8194Z" fill="white"/>
                    <path d="M2.75394 12.715C1.70488 12.715 0.891113 11.5394 0.891113 10.5285C0.891113 9.51896 1.74394 8.66614 2.75394 8.66614C3.7816 8.66614 4.61769 9.50176 4.61769 10.5285C4.61769 11.5608 3.82066 12.715 2.75394 12.715ZM2.75394 9.79983C2.36612 9.79983 2.02573 10.1402 2.02573 10.5285C2.02573 11.0009 2.4275 11.5813 2.75394 11.5813C3.09525 11.5813 3.48307 11.0205 3.48307 10.5285C3.48307 10.1267 3.15663 9.79983 2.75394 9.79983Z" fill="white"/>
                    <path d="M4.94025 15.8194C4.62683 15.8194 4.37294 15.5655 4.37294 15.2526V14.821C4.37294 14.4337 4.05859 14.1189 3.6717 14.1189H1.86282C1.46757 14.1189 1.13462 14.4407 1.13462 14.821V15.2526C1.13462 15.5655 0.880726 15.8194 0.56731 15.8194C0.253894 15.8194 0 15.5655 0 15.2526V14.821C0 13.8087 0.836086 12.9852 1.86282 12.9852H3.6717C4.68356 12.9852 5.50756 13.8087 5.50756 14.821V15.2526C5.50756 15.5655 5.25366 15.8194 4.94025 15.8194Z" fill="white"/>
                    <path d="M21.2461 12.715C20.197 12.715 19.3823 11.5394 19.3823 10.5285C19.3823 9.51896 20.2361 8.66614 21.2461 8.66614C22.2561 8.66614 23.1089 9.51896 23.1089 10.5285C23.1089 11.5394 22.2951 12.715 21.2461 12.715ZM21.2461 9.79983C20.8573 9.79983 20.5169 10.1402 20.5169 10.5285C20.5169 11.0009 20.9187 11.5813 21.2461 11.5813C21.5725 11.5813 21.9743 11.0009 21.9743 10.5285C21.9743 10.1402 21.6339 9.79983 21.2461 9.79983Z" fill="white"/>
                    <path d="M23.4324 15.8194C23.119 15.8194 22.8651 15.5655 22.8651 15.2526V14.821C22.8651 14.4272 22.5452 14.1189 22.1369 14.1189H20.355C19.9597 14.1189 19.6258 14.4407 19.6258 14.821V15.2526C19.6258 15.5655 19.3719 15.8194 19.0585 15.8194C18.7451 15.8194 18.4912 15.5655 18.4912 15.2526V14.821C18.4912 13.8087 19.3273 12.9852 20.355 12.9852H22.1369C23.1636 12.9852 23.9997 13.8087 23.9997 14.821V15.2526C23.9997 15.5655 23.7458 15.8194 23.4324 15.8194Z" fill="white"/>
                    <path d="M7.37052 5.56131C6.33727 5.56131 5.53467 4.40065 5.53467 3.40181C5.53467 2.37461 6.35866 1.53899 7.37052 1.53899C8.39726 1.53899 9.23334 2.37461 9.23334 3.40181C9.23334 4.42111 8.43632 5.56131 7.37052 5.56131ZM7.37052 2.67268C6.99015 2.67268 6.66929 3.00655 6.66929 3.40181C6.66929 3.86217 7.05618 4.42762 7.37052 4.42762C7.7323 4.42762 8.09873 3.83055 8.09873 3.40181C8.09873 2.99958 7.77229 2.67268 7.37052 2.67268Z" fill="white"/>
                    <path d="M16.6294 5.56131C15.5636 5.56131 14.7666 4.42111 14.7666 3.40181C14.7666 2.37461 15.6027 1.53899 16.6294 1.53899C17.6394 1.53899 18.4922 2.39181 18.4922 3.40181C18.4922 4.40065 17.6785 5.56131 16.6294 5.56131ZM16.6294 2.67268C16.2277 2.67268 15.9012 2.99958 15.9012 3.40181C15.9012 3.83055 16.2676 4.42762 16.6294 4.42762C16.9493 4.42762 17.3576 3.8524 17.3576 3.40181C17.3576 3.01353 17.0172 2.67268 16.6294 2.67268Z" fill="white"/>
                    <path d="M5.21086 8.69265C4.89745 8.69265 4.64355 8.43875 4.64355 8.1258V7.69381C4.64355 6.68195 5.46755 5.85842 6.47941 5.85842H8.28829C8.6017 5.85842 8.88257 6.11231 8.88257 6.42527C8.88257 6.73822 8.65565 6.99211 8.34223 6.99211H6.47941C6.09252 6.99211 5.77817 7.30692 5.77817 7.69381V8.1258C5.77817 8.43875 5.52428 8.69265 5.21086 8.69265Z" fill="white"/>
                    <path d="M18.8161 8.69264C18.5027 8.69264 18.2488 8.43875 18.2488 8.1258V7.69381C18.2488 7.31343 17.9158 6.99211 17.5206 6.99211H15.7117C15.3983 6.99211 15.1313 6.73822 15.1313 6.42527C15.1313 6.11231 15.3713 5.85842 15.6847 5.85842H17.5206C18.5473 5.85842 19.3834 6.68195 19.3834 7.69381V8.1258C19.3834 8.43875 19.1295 8.69264 18.8161 8.69264Z" fill="white"/>
                    <path d="M16.1713 18.5192C15.9974 18.5192 15.8244 18.4388 15.7137 18.2867L14.6879 16.8829C14.5029 16.6304 14.5587 16.2756 14.8107 16.091C15.0646 15.9068 15.418 15.9603 15.6031 16.2142L16.6289 17.618C16.814 17.8705 16.7582 18.2254 16.5061 18.41C16.4047 18.4839 16.2876 18.5192 16.1713 18.5192Z" fill="white"/>
                    <path d="M18.2991 22.4611C17.8053 22.4611 17.3161 22.2342 16.9897 21.8059L14.8757 18.9071C14.6925 18.6555 14.7465 18.3035 14.9966 18.118L16.6697 16.8764C16.7897 16.7866 16.9432 16.749 17.091 16.7708C17.2398 16.7932 17.3738 16.8736 17.463 16.995L19.5965 19.8831C20.1127 20.6564 19.9443 21.6488 19.2282 22.1645C18.9455 22.3644 18.6209 22.4611 18.2991 22.4611ZM16.1238 18.6936L17.8983 21.128C18.0555 21.3354 18.3624 21.3902 18.5698 21.2414C18.8218 21.0605 18.8116 20.7476 18.6693 20.5341L16.8892 18.1254L16.1238 18.6936Z" fill="white"/>
                </svg>
            `
        },
        {
            title: 'Payroll Bureau Software',
            alt: 'Payroll Bureau Software',
            img: 'https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2016/img-06.png',
            icon: `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <mask id="mask0_30105_4379" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="22" height="22">
                        <path d="M1.6001 1.6H22.4001V22.4H1.6001V1.6Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_30105_4379)">
                        <path d="M12 18.1343C13.7949 18.1343 15.25 19.5894 15.25 21.3843V21.7906H8.75V21.3843C8.75 19.5894 10.2051 18.1343 12 18.1343Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M10.1719 16.3062C10.1719 15.2965 10.9903 14.4781 12 14.4781C13.0097 14.4781 13.8281 15.2965 13.8281 16.3062C13.8281 17.3158 13.0097 18.1343 12 18.1343C10.9903 18.1343 10.1719 17.3158 10.1719 16.3062Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.5 18.1343C7.29493 18.1343 8.75 19.5894 8.75 21.3843V21.7906H2.25V21.3843C2.25 19.5894 3.70507 18.1343 5.5 18.1343Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M3.67188 16.3062C3.67188 15.2965 4.49035 14.4781 5.5 14.4781C6.50965 14.4781 7.32813 15.2965 7.32813 16.3062C7.32813 17.3158 6.50965 18.1343 5.5 18.1343C4.49035 18.1343 3.67188 17.3158 3.67188 16.3062Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M18.5 18.1343C16.7051 18.1343 15.25 19.5894 15.25 21.3843V21.7906H21.75V21.3843C21.75 19.5894 20.2949 18.1343 18.5 18.1343Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M20.3281 16.3062C20.3281 15.2965 19.5097 14.4781 18.5 14.4781C17.4903 14.4781 16.6719 15.2965 16.6719 16.3062C16.6719 17.3158 17.4903 18.1343 18.5 18.1343C19.5097 18.1343 20.3281 17.3158 20.3281 16.3062Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5.5 14.4781V13.2593C5.5 12.5863 6.04567 12.0406 6.71875 12.0406H17.2812C17.9543 12.0406 18.5 12.5863 18.5 13.2593V14.4781" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 9.52182V14.4781" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.7187 9.52183H4.28125V2.20933H19.7187V9.52183Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.625 5.86559C13.625 6.76303 12.8975 7.49059 12 7.49059C11.1025 7.49059 10.375 6.76303 10.375 5.86559C10.375 4.96814 11.1025 4.24059 12 4.24059C12.8975 4.24059 13.625 4.96814 13.625 5.86559Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.71875 5.86558H7.53125" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M17.2812 5.86558H16.4688" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.7188 7.08434V9.52184H17.2812C17.2812 8.17565 18.3726 7.08434 19.7188 7.08434Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M19.7188 4.64683V2.20933H17.2812C17.2812 3.55552 18.3726 4.64683 19.7188 4.64683Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.28125 7.08434V9.52184H6.71875C6.71875 8.17565 5.62744 7.08434 4.28125 7.08434Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M4.28125 4.64683V2.20933H6.71875C6.71875 3.55552 5.62744 4.64683 4.28125 4.64683Z" stroke="white" stroke-width="0.901333" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            `
        }
    ];

    /* ===== 🟥🟥 Start Main function ===== */
    waitForElm('body').then((elm) => {
        // Code for AQA (comment out after AQA)
        /* var spz_test = getCookieG('spz-qa');
        if (spz_test != 1) {
            console.log(`SPZ-QA cookie not present. Skip AQA test - 2016 variant`);
            return;
        } */

        // Start main test
        initMainTest();

    });


    /* ===== 🟥🟥 Main function ===== */
    function initMainTest() {
        let page_form_id = '';

        // Pick the HubSpot form id for the current page (form copy stays the same, showcase copy is static)
        if (window.location.pathname == '/book-a-demo-bot/') {
            page_form_id = '0134e164-d79d-41c6-bc12-e6b7b9ea8c25';
        } 
        else if (window.location.pathname == '/book-a-demo/') {
            page_form_id = 'aa9ec6f1-6750-4d64-954e-df60ae6a0945';
        } 
        else {
            page_form_id = '747fa0ea-527f-46de-9145-668a22d314b3';
        }

        if (!document.body.classList.contains('spz_2016_v')) {
            document.body.classList.add('spz_2016_v');
        }

        detectOS();

        // Set CRO value (variant hidden field)
        setCroHiddenfield();

        waitForElm('section.contact-form').then((section_elm) => {
            // Left side - replace the control copy panel with the auto-scrolling product showcase
            waitForElm('section.contact-form .content-form__copy').then((content_content_elm) => {
                if (document.querySelectorAll('[data-spz-exp="2016"]').length == 0) {
                    content_content_elm.innerHTML = spzProductShowcase();
                }
            });

            // Right side - add the clickable Moorepay logo above the form (opens moorepay.co.uk in a new tab)
            waitForElm('section.contact-form .contact-form__form').then((form_card_elm) => {
                if (document.querySelectorAll('.spz-brand-logo').length == 0) {
                    form_card_elm.insertAdjacentHTML('afterbegin', `
                        <a class="spz-brand-logo" href="https://moorepay.co.uk" target="_blank" rel="noopener">
                            <img src="https://res.cloudinary.com/spiralyze/image/upload/f_svg/v1786969916/moorepay/2016/logo_moorepay.svg" alt="Moorepay">
                        </a>
                    `);
                }
            });

            // call modify form 
            /* waitForElm(`form[data-form-id="${page_form_id}"]`).then((form_elm) => {
                modifyForm(form_elm);

                // Call the HubSpot schedular
                showHubspotMeetingScheduler( page_form_id );
            }); */

            //return;

            // R&D NOTE: remove the control form and re-initiate to try to intercept it before redirecting to thank you 
            waitForElm(`form[data-form-id="${page_form_id}"]`).then((form_elm) => {
                console.log('[SPZ] Remove the form');
                form_elm.remove();
                console.log('[SPZ] Form Removed');

                console.log('[SPZ] Load the form again programatically');

                // Call the HubSpot schedular using form creation callback
                hbspt.forms.create({
                    region: "eu1",
                    portalId: "25608636",
                    formId: page_form_id,
                    target: 'section.contact-form .contact-form__form .form .hbspt-form',
                    inlineMessage: 'SPZ Thanks for Submission',

                    onFormReady: function ($form, data) {
                        console.log('[SPZ]', $form);
                        console.log('[SPZ] New Form is Ready.');
                        //console.log('[SPZ] New Form is Ready. Move the form');

                        //document.querySelector('section.contact-form .contact-form__form .form .hbspt-form').appendChild(document.querySelector(`form[data-form-id="${page_form_id}"]`));

                        //console.log('[SPZ] New form moving complete');

                        // Wait for the form to laod
                        setTimeout(() => {
                            waitForElm(`form[data-form-id="${page_form_id}"]`).then((new_form_elm) => {
                                console.log('[SPZ] Modify the form');

                                modifyForm(new_form_elm);

                                console.log('[SPZ] Form modifier called.');
                            });
                        }, 500);
                    },

                    onFormSubmitted: function ($form, data) {
                        console.log('[SPZ]', $form);
                        console.log('[SPZ] Show HubSpot Scheduler');
                        showHubspotMeetingScheduler(page_form_id);
                    }
                });

                // Call the HubSpot schedular using form creation callback (to use the custom post message and handle the event to show the scheduler)
                /* hbspt.forms.create({
                    region: "eu1",
                    portalId: "25608636",
                    formId: page_form_id,

                    onFormSubmitted: function ($form, data) {
                        window.postMessage({
                            type: 'moorepayHubspotFormSubmitted',
                            formId: page_form_id
                        }, '*');
                    }
                }); */

                console.log('[SPZ] Load the form again programatically (complete)');

                // Wait for the form to laod
                /* waitForElm(`form[data-form-id="${page_form_id}"]`).then((new_form_elm) => {
                    console.log('[SPZ] New form loaded. Modify the form');

                    modifyForm(form_elm);

                    console.log('[SPZ] Form modifier called.');
                }); */
            });
        });
    }


    /* ===== 🟥🟥 HubSpot Meeting Schedular (API Reference - https://developers.hubspot.com/docs/cms/start-building/features/forms/legacy-forms) ===== */
    function showHubspotMeetingScheduler___FIRST_TRY_WITH_NATIVE_HUBSPOT_FORM(formId) {
        // Variables
        let schedulerUrl = `https://meetings-eu1.hubspot.com/mark-fielding/website-meeting-scheduler-inbound?embed=true`;
        let schedulerHubSpotScript = `https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js`;
        let thankYouUrl = `/thank-you/`;

        window.addEventListener('message', function (event) {

            if (!event.data) return;

            // HubSpot form submission completed
            if (
                event.data.type === 'hsFormCallback' &&
                event.data.eventName === 'onFormSubmitted' &&
                event.data.id === formId
            ) {
                const formContainer = document.querySelector(`form[data-form-id="${formId}"]`)?.closest('.hbspt-form');

                if (!formContainer) return;

                // Add the schedular HTML in DOM
                if ( !document.querySelector('.spz-hubspot-scheduler') ) {
                    const spzHbSptSchdlr = document.createElement('div');
                    spzHbSptSchdlr.classList.add('spz-hubspot-scheduler');
                    spzHbSptSchdlr.innerHTML = `<div class="meetings-iframe-container" data-src="${schedulerUrl}"></div>`;

                    document.body.appendChild(spzHbSptSchdlr);
                }

                // If need to add the schedular in place of the form
                /* formContainer.innerHTML = `
                    <div class="spz-hubspot-scheduler">
                        <div class="meetings-iframe-container" data-src="${schedulerUrl}"></div>
                    </div>
                `; */

                // Load HubSpot Meetings embed script
                if (!document.querySelector(`script[src="${schedulerHubSpotScript}}"]`)) {
                    const script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = schedulerHubSpotScript;

                    document.body.appendChild(script);
                }

                // Detect successful meeting booking
                const bookingHandler = function (bookingEvent) {
                    if (!bookingEvent.data) return;

                    if (bookingEvent.data.meetingBookSucceeded) {
                        window.removeEventListener('message', bookingHandler);

                        if (thankYouUrl) {
                            window.location.href = thankYouUrl;
                        }
                    }
                };

                window.addEventListener('message', bookingHandler);
            }
        });
    }

    function showHubspotMeetingScheduler(formId) {
        // variables
        let schedulerUrl = `https://meetings-eu1.hubspot.com/mark-fielding/website-meeting-scheduler-inbound?embed=true`;
        let schedulerHubSpotScript = `https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js`;
        let thankYouUrl = `/thank-you/`;

        console.log('[SPZ] Initialising HubSpot Scheduler');

        // Find the current HubSpot form wrapper
        //const formContainer = document.querySelector(`form[data-form-id="${formId}"]`)?.closest('.hbspt-form');

        // If need to add the schedular in place of the form
        /* if (!formContainer) {
            console.warn('[SPZ] HubSpot form container not found');
            return;
        } */

        // Add the schedular HTML in DOM
        if ( !document.querySelector('.spz-hubspot-scheduler') ) {
            const spzHbSptSchdlr = document.createElement('div');
            spzHbSptSchdlr.classList.add('spz-hubspot-scheduler');
            spzHbSptSchdlr.innerHTML = `<div class="meetings-iframe-container" data-src="${schedulerUrl}"></div>`;

            document.body.appendChild(spzHbSptSchdlr);
        }

        // If need to add the schedular in place of the form
        /* formContainer.innerHTML = `
            <div class="spz-hubspot-scheduler">
                <div class="meetings-iframe-container" data-src="${schedulerUrl}"></div>
            </div>
        `; */

        console.log('[SPZ] Scheduler container added');

        // Load HubSpot Meetings embed script
        if (!document.querySelector(`script[src="${schedulerHubSpotScript}}"]`)) {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = schedulerHubSpotScript;

            document.body.appendChild(script);
        }

        /*
        * Detect successful meeting booking
        */
        const bookingHandler = function (event) {

            if (!event.data) return;

            if (event.data.meetingBookSucceeded) {

                console.log('[SPZ] Meeting booked');

                window.removeEventListener(
                    'message',
                    bookingHandler
                );

                if (thankYouUrl) {
                    window.location.href = thankYouUrl;
                }
            }
        };

        window.addEventListener(
            'message',
            bookingHandler
        );
    }


    /* ===== 🟥🟥 Product showcase builder ===== */
    // Builds the whole left panel: headline, marquee carousel (tiles duplicated for a seamless CSS loop) and the bullet points.
    function spzProductShowcase() {
        // Duplicate the tiles once so the CSS marquee can loop without a visible jump
        let cards = showcase_tiles.concat(showcase_tiles).map(cardHTML).join('');

        return `
            <div class="spz-tiles-hero" data-spz-exp="2016">
                <h2 class="spz-tiles-title">Streamline routine work. Save 37% time on HR. Cut payroll admin 25%.</h2>
                <div class="spz-tiles-carousel" aria-hidden="true">
                    <div class="spz-tiles-track">${cards}</div>
                </div>
                <ul class="spz-tiles-bullets">
                    <li><strong>HR.</strong> Automate onboarding, time tracking, payroll, benefits enrolment, engagement, and more. Track performance. Boost efficiency.</li>
                    <li><strong>Payroll.</strong> Sync timesheet, benefits, and expense data. Auto-calculate and apply rates for taxes, sick pay, holiday accruals, and more.</li>
                    <li><strong>Compliance.</strong> Ensure continuous compliance with current and new regulations. Automate audits. HMRC compliant as standard.</li>
                </ul>
            </div>
        `;
    }

    // Builds a single tile card - the image carries the required alt tag and is not clickable (draggable off + pointer-events off in CSS)
    function cardHTML(tile) {
        return `
            <div class="spz-tiles-card">
                <div class="spz-tiles-card-head">
                    <span class="spz-tiles-card-icon">${tile.icon}</span>
                    <span class="spz-tiles-card-title">${tile.title}</span>
                </div>
                <img class="spz-tiles-card-img" src="${tile.img}" alt="${tile.alt}" draggable="false" loading="eager" fetchpriority="high">
            </div>
        `;
    }


    /* ===== 🟥🟥 Form modification (kept from TC) ===== */
    function modifyForm(form_elm) {
        // Remove option with value ''
        if (document.querySelectorAll('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="hs_persona"]').length > 0 && document.querySelector('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="hs_persona"] option').value == '') {
            document.querySelector('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="hs_persona"] option').textContent = '';
            document.querySelector('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="hs_persona"] option').classList.add('hidden');
        }
        if (document.querySelectorAll('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="product_interest"]').length > 0 && document.querySelector('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="product_interest"] option').value == '') {
            document.querySelector('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="product_interest"] option').textContent = '';
            document.querySelector('.spz_2016_v section.contact-form .contact-form__form .hbspt-form select[name="product_interest"] option').classList.add('hidden');
        }

        // Update field order
        waitForElm('.hs-dependent-field').then((dependent_elm) => {
            dependent_elm.parentNode.classList.add('spz-hidden');
        });
        waitForElm('.hbspt-form form .hs_phone.hs-phone').then((phone_elm) => {
            waitForElm('.hbspt-form form .hs_company.hs-company').then((company_elm) => {
                phone_elm.insertAdjacentElement('afterend', company_elm);
                if (document.querySelectorAll('.hbspt-form form .hs_numemployees.hs-numemployees').length > 0) {
                    // document.querySelector('.hbspt-form form .hs_numemployees.hs-numemployees').parentNode.classList.add('spz-swap-order');
                    // document.querySelector('.hbspt-form form .hs_numemployees.hs-numemployees').insertAdjacentElement('beforebegin', phone_elm);
                    document.querySelector('.hbspt-form form .hs_numemployees.hs-numemployees').insertAdjacentElement('afterend', phone_elm);
                }
            });
        });
        /* waitForElm('.hs-dependent-field').then((dependent_elm) => {
            waitForElm('.hs_product_interest').then((product_elm) => {
                dependent_elm.insertAdjacentElement('afterend', product_elm);
                dependent_elm.parentNode.classList.add('form-columns-2');
                dependent_elm.parentNode.classList.remove('form-columns-1');
            });
        }); */

        waitForElm('select[name="hs_persona"]').then((persona_elm) => {
            // persona_elm.closest('fieldset').classList.add('spz-order-switch');
            persona_elm.selectedIndex = 1;
            persona_elm.dispatchEvent(new Event('change', { bubbles: true })); // To trigger change event
        });

        waitForElm('.legal-consent-container').then((legal_elm) => {
            waitForElm('.hs_submit.hs-submit').then((submit_elm) => {
                submit_elm.insertAdjacentElement('afterend', legal_elm.parentNode);
            });
        });

        // Adding accreditation logos under form
        let company_logos = `
            <div class="spz-form-logo">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2006/06.webp" alt="Payroll and HR software">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2006/05.webp" alt="Payroll Assurance Scheme">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2006/04.webp" alt="HMRC Recognised">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2006/03.webp" alt="Cyber Essentials">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2006/02.webp" alt="CHAS">
                <img src="https://res.cloudinary.com/spiralyze/image/upload/f_auto/moorepay/2006/01.webp" alt="SGS">
            </div>
        `;
        if (document.querySelectorAll('.spz-form-logo').length == 0) {
            form_elm.insertAdjacentHTML('afterend', company_logos);
        }

        // Blur event for input fields (floating label state)
        form_elm.querySelectorAll('input:not([type="radio"]):not([type="checkbox"]):not([type="hidden"]):not([type="submit"])').forEach(function (input_elm, input_index) {
            if (input_elm.value.trim() != '') {
                input_elm.closest('.hs-form-field').classList.add('filled');
            }

            input_elm.addEventListener('blur', function () {
                let $this = this;
                if ($this.value.trim() != '') {
                    $this.closest('.hs-form-field').classList.add('filled');
                } else {
                    $this.closest('.hs-form-field').classList.remove('filled');
                }
            });

            if (input_elm.getAttribute('name') == 'numemployees') {
                input_elm.addEventListener('keypress', (e) => {
                    if (!/[0-9]/.test(e.key)) {
                        e.preventDefault(); // block everything except digits
                    }
                });
            }
        });

        // Blur event for select fields (floating label state)
        form_elm.querySelectorAll('select').forEach(function (select_elm, select_index) {
            if (select_elm.value.trim() != '') {
                select_elm.closest('.hs-form-field').classList.add('filled');
            }

            select_elm.addEventListener('blur', function () {
                let $this = this;
                if ($this.value.trim() != '') {
                    $this.closest('.hs-form-field').classList.add('filled');
                } else {
                    $this.closest('.hs-form-field').classList.remove('filled');
                }
            });
        });
    }


    /* ===== 🟥🟥 Helper functions ===== */
    function insertAfter(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
    }

    function insertBefore(newNode, existingNode) {
        existingNode.parentNode.insertBefore(newNode, existingNode);
    }

    function waitForElm(selector) {
        let observer_element = (document.querySelector('body') ? document.querySelector('body') : document.querySelector('html'));
        return new Promise(resolve => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            }
            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
            observer.observe(observer_element, {
                childList: true,
                subtree: true
            });
        });
    }

    function detectOS() {
        var userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = null;
        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'MacOS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }
        document.querySelector('body').classList.add(os);
    }

    function getCookieG(name) {
        var nameEQ = name + "="; var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }


    /* ===== 🟥🟥 DO NOT TOUCH - Downfunnel Hidden Value & cookie tracking ===== */
    function setCroHiddenfield() {
        const squeezePage = true; // true / false / 'both'
        expName = '2016'; //experiment name should be 1001, 1002, 1003 etc.
        const variantName = `spz_` + expName + `_variant`; //variantName should be _variant, _true_control etc.
        const clientDomain = window.location.host; //domain should be .spiralyze.com
        //expName = `spz_` + expName;

        /* ===== 🟥🟥 DO NOT TOUCH — cookie bookkeeping below ===== */
        const formHiddenValue = variantName;
        if (squeezePage === true) {
            window.squeezePageValue = formHiddenValue;
        } else if (squeezePage === false) {
            hiddenValue(expName, variantName);
        } else if (squeezePage === 'both') {
            hiddenValue(expName, variantName);
            window.squeezePageValue = formHiddenValue;
        }

        // records this experiment's name/value into the ExperimentName / ExperimentValue cookies (comma-separated lists)
        function hiddenValue(currentExperimentName, currentExperimentValue) {
            function setCookie(name, value, days) {
                var expires = "";
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "") + expires + ";domain=" + clientDomain + ";path=/";
            }

            function getCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }
            var ExistingExperimentName = getCookie('ExperimentName');
            var ExistingExperimentValue = getCookie('ExperimentValue');
            var ExistingExperimentNameList = ExistingExperimentName ? ExistingExperimentName.split(',') : [];

            if (!ExistingExperimentName) {
                // no cookie yet: start a fresh list with just this experiment
                setCookie('ExperimentName', currentExperimentName, 1);
                setCookie('ExperimentValue', currentExperimentValue, 1);
            } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) == -1) {
                // this experiment isn't in the list yet: append it
                setCookie('ExperimentName', ExistingExperimentName + ',' + currentExperimentName, 1);
                setCookie('ExperimentValue', ExistingExperimentValue + ',' + currentExperimentValue, 1);
            } else if (ExistingExperimentNameList.length > 0 && ExistingExperimentNameList.indexOf(currentExperimentName) > -1) {
                // this experiment is already tracked: update its value in place
                var existingNames = ExistingExperimentName.split(',');
                var existingValues = ExistingExperimentValue.split(',');
                var index = existingNames.indexOf(currentExperimentName);
                existingValues[index] = currentExperimentValue;
                setCookie('ExperimentName', existingNames.join(','), 1);
                setCookie('ExperimentValue', existingValues.join(','), 1);
            }
        }
    }

})();