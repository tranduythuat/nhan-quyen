(function () {
    "use strict";

    var SUPPORTED_LANGS = ["vi", "en"];
    var DEFAULT_LANG = "vi";

    /* =========================================================
     * Translation dictionary
     * Keys map to data-i18n / data-i18n-placeholder attributes.
     * Values can contain simple HTML (span/br/strong) since some
     * source strings already include inline markup.
     * ========================================================= */
    var translations = {
        vi: {
            "invitation.groom_parents": "Nhà Trai: Ông Nguyễn Tuyển và Bà Nguyễn Thị Thơm",
            "invitation.bride_parents": "Nhà Gái: Nguyễn Trúc Phương và Bà Lê Thị Đông Xuân",
            "invitation.message":
                'TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH<br />ĐẾN DỰ BỮA CƠM THÂN MẬT MỪNG <strong>LỄ CƯỚI</strong>',
            "invitation.groom_name": 'Đình Phúc',
            "invitation.bride_name": 'Bích Ngọc',
            "invitation.couple_name": 'Hoàn Nhân & Phương Quyên',
            "invitation.timeLabel": 'VÀO NGÀY 12.12.2026',
            "invitation.weekday": 'THỨ BẢY',
            "invitation.lunar_date": "(Nhằm ngày 25 tháng 11 năm Bính Ngọ)",
            "invitation.venueName": "Đà Lạt Cadasa Resort",
            "invitation.venueAddress":
                'Số 16 Trần Hưng Đạo, Phường 10 (Xuân Hương - Đà Lạt), Tp. Đà Lạt, Tỉnh Lâm Đồng',
            "invitation.mapButton": 'CLICK ĐỂ XEM BẢN ĐỒ',

            "timeline.timelineDescription": 'THEO DÕI LỊCH TRÌNH TỔ CHỨC LỄ CƯỚI ĐỂ THUẬN TIỆN HƠN NHÉ!',
            "timeline.item1": '<strong>15:30 |</strong> ĐÓN KHÁCH LỄ VOW',
            "timeline.item2": '<strong>16:00 |</strong> BẮT ĐẦU LỄ VOW',
            "timeline.item3": '<strong>17:00 |</strong> ĐÓN KHÁCH TIỆC TỐI',
            "timeline.item4": '<strong>18:00 |</strong> NHẬP TIỆC',
            "timeline.item5": '<strong>19:00 |</strong> TRÒ CHƠI',
            "timeline.subtext":
                'Rất mong Quý Khách đến đúng giờ để cùng chúng tôi lưu giữ những khoảnh khắc đáng nhớ trong ngày trọng đại.',
            "timeline.dresscodeSubtext":
                'BUỔI TIỆC SẼ TUYỆT VỜI HƠN KHI KHÁCH MỜI <br>CÓ THỂ MANG TRANG PHỤC VỚI NHỮNG TONE MÀU DƯỚI ĐÂY:',
            "dresscode.description": 'KHUYẾN KHÍCH KHÁCH MỜI MANG TRANG PHỤC THEO DRESSCODE',
            "album.subtext": 'CÙNG XEM BST CỦA CHÚNG MÌNH NHÉ!',

            "rsvp.title": "Xác nhận tham dự",
            "rsvp.subtitle":
                'Khách mời vui lòng xác nhận tham dự <strong>trước ngày 15/11/2026</strong> để chúng tôi có thể chuẩn bị chu đáo nhất.',
            "rsvp.namePlaceholder": 'Tên khách mời',
            "rsvp.phonePlaceholder": "SĐT",
            "rsvp.guests_number": 'Số người đi kèm',
            "rsvp.confirmRelatedSubtitle": 'Quý Khách là người thân, bạn bè, đồng nghiệp của gia đình ... ?',
            "rsvp.confirmSubtitle":
                'Quý Khách có thể đến chung vui cùng chúng tôi không?',
            "rsvp.yes": 'Sẽ tham dự',
            "rsvp.no": 'Không tham dự',
            "rsvp.guestsSubtitle": 'BẠN CÓ “TỆP ĐÍNH KÈM” CÙNG TỚI TIỆC CƯỚI KHÔNG? <br />',
            "rsvp.alone": 'Chỉ có tôi và sự cô đơn',
            "rsvp.child": 'Tôi đi cùng trẻ nhỏ',
            "rsvp.related_subtitle": "Quý khách có yêu cầu đặc biệt về thức ăn không?",
            "rsvp.regular_menu": "Số lượng khách dùng tiệc mặn",
            "rsvp.vegetarian_menu": "Số lượng khách dùng tiệc chay",
            "rsvp.normal": "Không",
            "rsvp.vegetarian": "Tôi ăn chay",
            "rsvp.messageSubtitle": 'GỬI MỘT VÀI LỜI IU THƯƠNG DÀNH CHO CHÚNG MÌNH NHA ^^',
            "rsvp.messagePlaceholder": 'QUÝ KHÁCH CÓ LỜI CHÚC HAY NHẮN GỬI ĐẾN CÔ DÂU VÀ CHÚ RỂ KHÔNG?',
            "rsvp.submit": 'Xác nhận',
            "yenstudio.textMain": 'QUÉT MÃ QR CODE DƯỚI ĐÂY <br> NẾU BẠN MUỐN GỬI QUÀ MỪNG CƯỚI CHO<br><strong> NHÂN</strong> VÀ <strong> QUYÊN</strong> NHÉ!',
            "yenstudio.textEnd": 'HẸN GẶP LẠI BẠN TẠI LỄ CƯỚI CỦA CHÚNG MÌNH NHA!'
        },
        en: {
            "invitation.groom_parents": "Groom's Family: Mr. Nguyen Tuyen and Mrs. Nguyen Thi Thom",
            "invitation.bride_parents": "Bride's Family: Mr. Nguyen Truc Phuong and Mrs. Le Thi Dong Xuan",
            "invitation.message":
                'We cordially invite you to spend your precious time <br> with us at our wedding ceremony',
            "invitation.groom_name": 'Elias Tran',
            "invitation.bride_name": 'Jade Nguyen',
            "invitation.couple_name": 'Hoan Nhan & Phuong Quyen',
            "invitation.timeLabel": 'AT <strong>12.12.2026</strong>',
            "invitation.weekday": 'SATURDAY',
            "invitation.lunar_date": "(On the 25th day of the 11th lunar month, Year of the Bính Ngọ)",
            "invitation.venueName": "Da Lat Cadasa Resort",
            "invitation.venueAddress":
                '16 Tran Hung Dao Street, Ward 10 (Xuan Huong – Da Lat), Da Lat City, Lam Dong Province, Vietnam',
            "invitation.mapButton": 'CLICK TO VIEW MAP',
            "timeline.timelineDescription": 'FOLLOW THE WEDDING SCHEDULE FOR MORE CONVENIENCE!',
            "timeline.item1": '<strong>15:30 |</strong> Welcome Vows',
            "timeline.item2": '<strong>16:00 |</strong> Wedding Ceremony',
            "timeline.item3": '<strong>17:00 |</strong> Welcome Guests for Dinner Reception',
            "timeline.item4": '<strong>18:00 |</strong> Dinner Reception',
            "timeline.item5": '<strong>19:00 |</strong> Games',
            "timeline.subtext":
                'We kindly ask that you arrive on time so you can share in every special moment of our big day.',
            "timeline.dresscodeSubtext":
                'BUỔI TIỆC SẼ TUYỆT VỜI HƠN KHI KHÁCH MỜI <br>CÓ THỂ MANG TRANG PHỤC VỚI NHỮNG TONE MÀU DƯỚI ĐÂY:',
            "dresscode.description": 'PLEASE DRESS IN OUR SUGGESTED COLORS TO MAKE THE PHOTOS EVEN MORE BEAUTIFUL',
            "album.subtext": 'TAKE A LOOK AT OUR WEDDING ALBUM!',

            "rsvp.title": "Confirm Attendance",
            "rsvp.subtitle": "Guests are kindly requested to RSVP <strong> by November 15, 2026 </strong> so that we can prepare thoughtfully",
            "rsvp.namePlaceholder": "Full Name",
            "rsvp.phonePlaceholder": "Phone Number",
            "rsvp.guests_number": "Total Number of Attendees",
            "rsvp.confirmRelatedSubtitle": "Which side are you invited by?",
            "rsvp.phucConfirmRelated": "Elias",
            "rsvp.ngocConfirmRelated": "Jade",
            "rsvp.confirmSubtitle": "Will you be joining us?",
            "rsvp.yes": "Joyfully accepts",
            "rsvp.no": "Regretfully declines",
            "rsvp.guestsSubtitle": "WILL YOU BE BRINGING A PLUS-ONE? <br />",
            "rsvp.alone": "Just Me, Myself & I",
            "rsvp.child": "I'll Bring My Little One",
            "rsvp.related_subtitle": "Do you have any special dietary requirements?",
            "rsvp.regular_menu": "Number of Guests for the Regular Menu",
            "rsvp.vegetarian_menu": "Number of Guests for the Vegetarian Menu",
            "rsvp.normal": "Regular Meal",
            "rsvp.vegetarian": "Vegetarian Meal",
            "rsvp.messageSubtitle": "SEND US SOME LOVE ^^",
            "rsvp.messagePlaceholder": "ANY WISHES OR MESSAGES FOR THE HAPPY COUPLE?",
            "rsvp.submit": "Confirm",
            "yenstudio.textMain": "SCAN THE QR CODE BELOW <br> IF YOU'D LIKE TO SEND A WEDDING <br><strong>NHAN</strong> & <strong>QUYEN</strong>!",
            "yenstudio.textEnd": "Your presence is our greatest joy. We look forward to celebrating with you on our wedding day."
        }
    };

    var switcherLabels = { vi: "English", en: "Tiếng Việt" };

    function isSupported(lang) {
        return SUPPORTED_LANGS.indexOf(lang) !== -1;
    }

    function getLangFromURL() {
        var params = new URLSearchParams(window.location.search);
        var lang = params.get("lang");
        return isSupported(lang) ? lang : null;
    }

    function updateURL(lang) {
        try {
            var url = new URL(window.location.href);
            url.searchParams.set("lang", lang);
            window.history.replaceState({}, "", url.toString());
        } catch (e) {
            /* ignore for very old browsers */
        }
    }

    function applyTranslations(lang) {
        var dict = translations[lang] || translations[DEFAULT_LANG];

        document.documentElement.setAttribute("lang", lang);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-placeholder");
            if (dict[key] !== undefined) {
                el.setAttribute("placeholder", dict[key]);
            }
        });

        var switcher = document.getElementById("langSwitcher");
        if (switcher) {
            switcher.textContent = switcherLabels[lang] || switcherLabels[DEFAULT_LANG];
            switcher.setAttribute("data-current-lang", lang);
        }
    }

    function hidePopup() {
        var overlay = document.getElementById("langOverlay");
        if (overlay) {
            overlay.classList.remove("is-visible");
        }
    }

    function showPopup() {
        var overlay = document.getElementById("langOverlay");
        if (overlay) {
            overlay.classList.add("is-visible");
        }
    }

    function selectLang(lang, options) {
        if (!isSupported(lang)) return;
        var opts = options || {};

        applyTranslations(lang);
        updateURL(lang);
        hidePopup();

        if (!opts.silent) {
            document.dispatchEvent(
                new CustomEvent("langchange", { detail: { lang: lang } })
            );
        }
    }

    function initPopupButtons() {
        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                selectLang(btn.getAttribute("data-lang"));
            });
        });
    }

    function initSwitcher() {
        var switcher = document.getElementById("langSwitcher");
        if (!switcher) return;
        switcher.addEventListener("click", function () {
            var current = switcher.getAttribute("data-current-lang") || DEFAULT_LANG;
            var next = current === "vi" ? "en" : "vi";
            selectLang(next);
        });
    }

    function init() {
        initPopupButtons();
        initSwitcher();

        var urlLang = getLangFromURL();

        if (urlLang) {
            // Language is chosen via URL param; no popup needed.
            applyTranslations(urlLang);
        } else {
            // No lang param: show the language picker so the visitor can choose.
            applyTranslations(DEFAULT_LANG);
            showPopup();
        }
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
