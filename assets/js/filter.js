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
  const category = item.dataset.category || "";
  const match =
    filter === "all" ||
    category.split(/\s+/).includes(filter);

  if (match) {
    // show + animate in
    item.classList.remove("is-tab-hidden");
    item.classList.remove("is-tab-fadein"); // reset animation
    // force reflow so animation restarts
    void item.offsetWidth;
    item.classList.add("is-tab-fadein");
  } else {
    // hide
    item.classList.add("is-tab-hidden");
  }
});

    });
  });
});
