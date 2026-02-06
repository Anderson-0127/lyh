// 简单脚本：根据当前地址高亮导航（用于直接打开子页面时）
(function () {
  var links = document.querySelectorAll(".nav-link");
  var path = location.pathname.split("/").pop() || "index.html";

  links.forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path && !link.classList.contains("active")) {
      link.classList.add("active");
    }
  });
})();

