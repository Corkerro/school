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
        xPercent: -18
    });
    window["FLS"] = true;
    isWebp();
})();