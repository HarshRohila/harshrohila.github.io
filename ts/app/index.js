(() => {
  // ns-hugo:/home/runner/work/rohilaharsh/rohilaharsh/apps/web-dev-blog/assets/ts/app/utils/setScrolledPx.ts
  var ticking = false;
  function setScrolledPx() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolledPx = window.scrollY;
        document.documentElement.style.setProperty("--scrolled-px", scrolledPx.toString());
        ticking = false;
      });
      ticking = true;
    }
  }

  // <stdin>
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
