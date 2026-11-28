/* تصفية الأعمال: كل قسم له مجموعة، والفلتر يُظهر المجموعة المختارة فقط */
function initWorkFilter() {
  var bar = document.getElementById("filterBar");
  var wrap = document.getElementById("workGrid");
  var groups = wrap.querySelectorAll(".work-group");
  bar.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    var f = btn.getAttribute("data-filter");
    groups.forEach(function (g) {
      var show = f === "all" || g.getAttribute("data-cat") === f;
      g.classList.toggle("hidden", !show);
      var grid = g.querySelector(".work-grid");
      grid.classList.remove("refilter");
      void grid.offsetWidth;
      if (show) grid.classList.add("refilter");
    });
  });
}
