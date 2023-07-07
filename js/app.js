(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    VANTA.GLOBE({
        el: "#main__background",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1,
        scaleMobile: 1,
        color: 4194269,
        color2: 10526880,
        size: 1.4,
        backgroundColor: 4737096
    });
    let isTouch = false;
    if ("ontouchstart" in window || navigator.maxTouchPoints) {
        document.querySelectorAll("[data-mobile]").forEach((element => {
            element.classList.add("mobile");
        }));
        isTouch = true;
    }
    gsap.to(".main__perehod_img-1", {
        scrollTrigger: {
            trigger: ".main",
            start: "top top",
            scrub: 1
        },
        xPercent: 18
    });
    gsap.to(".main__perehod_img-2", {
        scrollTrigger: {
            trigger: ".main",
            start: "top top",
            scrub: 1
        },
        xPercent: -18,
        y: 50,
        opacity: .9
    });
    const coursesCard = document.querySelectorAll(".courses__card");
    coursesCard.forEach((course => {
        let timeoutId;
        const text = course.querySelector(".courses__card_text");
        const span = text.querySelector("span");
        course.addEventListener("mouseover", (() => {
            text.style.height = "100%";
            text.style.left = "17%";
            timeoutId = setTimeout((() => {
                text.style.width = "140%";
                text.style.left = "-20%";
                span.style.scale = "1.6";
            }), 300);
        }));
        course.addEventListener("mouseout", (() => {
            clearTimeout(timeoutId);
            text.style.height = "74px";
            text.style.width = "calc(100% - 120px)";
            text.style.left = "-15px";
            span.style.scale = "1";
        }));
    }));
    const delayedLinks = document.querySelectorAll("[data-delayed]");
    delayedLinks.forEach((link => {
        link.addEventListener("click", (event => {
            event.preventDefault();
            const delayTime = isTouch ? 300 : 900;
            link.classList.add("click");
            setTimeout((() => {
                window.location.href = link.getAttribute("href");
                setTimeout((() => {
                    link.classList.remove("click");
                }), 200);
            }), delayTime);
        }));
    }));
    window["FLS"] = true;
    isWebp();
})();