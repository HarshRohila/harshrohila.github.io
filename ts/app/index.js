(() => {
  // <stdin>
  function setScrolledPx(ev = {}) {
    console.log(ev);
    const scrolledPx = window.scrollY;
    requestAnimationFrame(() => {
      document.documentElement.style.setProperty("--scrolled-px", scrolledPx.toString());
    });
  }
  function setHeaderHeight() {
    const headerHeight = document.querySelector("header").clientHeight;
    document.documentElement.style.setProperty("--header-height", headerHeight.toString());
  }
  window.addEventListener("scroll", setScrolledPx);
  window.addEventListener("resize", setScrolledPx);
  setScrolledPx();
  window.addEventListener("resize", setHeaderHeight);
  setHeaderHeight();
})();
