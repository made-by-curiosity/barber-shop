const e={mobileMenuOpenBtn:document.querySelector(".js-open-menu"),mobileMenuCloseBtn:document.querySelector(".js-close-menu"),mobileMenuCloseAnchor:document.querySelector(".js-anchor-close-menu"),backdrop:document.querySelector(".js-backdrop"),mobileMenuContainer:document.querySelector(".js-mobile-menu")};function n(){e.backdrop.classList.toggle("is-hidden"),e.mobileMenuContainer.classList.toggle("is-closed"),e.backdrop.classList.contains("is-hidden")||e.mobileMenuContainer.classList.contains("is-closed")?(e.backdrop.removeEventListener("click",o),e.mobileMenuContainer.removeEventListener("click",t),document.body.style.overflow="auto"):(e.backdrop.addEventListener("click",o),e.mobileMenuContainer.addEventListener("click",t),document.body.style.overflow="hidden")}function o(e){e.target.classList.contains("backdrop")&&n()}function t(e){e.target.classList.contains("js-anchor")&&n()}e.mobileMenuOpenBtn.addEventListener("click",n),e.mobileMenuCloseBtn.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){if(!n.matches)return;e.backdrop.classList.add("is-hidden"),e.mobileMenuContainer.classList.add("is-closed"),document.body.style.overflow="auto"}));
//# sourceMappingURL=index.664b324d.js.map
