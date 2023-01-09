(() => {
  // <stdin>
  (() => {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelector(".theme-toggle").addEventListener("click", () => {
        if (document.documentElement.hasAttribute("data-theme")) {
          document.documentElement.removeAttribute("data-theme");
          localStorage.removeItem("theme");
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
        }
      });
    });
  })();
})();
