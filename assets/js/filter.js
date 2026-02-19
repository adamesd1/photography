document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab[data-filter]");
  const items = document.querySelectorAll("#main article.thumb");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      const filter = this.dataset.filter;

      tabs.forEach((t) => t.classList.remove("is-active"));
      this.classList.add("is-active");

      items.forEach((item) => {
        const category = item.dataset.category;
        const match = filter === "all" || category === filter;
        item.style.display = match ? "" : "none";
      });
    });
  });
});