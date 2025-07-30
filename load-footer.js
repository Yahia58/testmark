document.addEventListener("DOMContentLoaded", function () {
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    fetch("footer.html")
      .then(response => response.text())
      .then(html => {
        footerContainer.innerHTML = html;

        // بعد تحميل الفوتر، فعّل الترجمة
        const currentLang = localStorage.getItem('lang') || 'en';
        if (typeof applyTranslation === "function") {
          applyTranslation(currentLang);
        }
      })
      .catch(error => {
        console.error("فشل تحميل الفوتر:", error);
      });
  }
});
