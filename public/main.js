(() => {
  "use strict";
  var t, e, o, a, c, i, n;!function () {
    var t = document.querySelector(".ceta");function e(t) {
      t.preventDefault();var e = t.currentTarget.getAttribute("href");document.querySelector(e).scrollIntoView({ block: "start", behavior: "smooth" });
    }document.querySelectorAll('[data-menu="suave"] a[href^="#"]').forEach(function (t) {
      t.addEventListener("click", e);
    }), t.addEventListener("click", e);
  }(), t = document.querySelector(".ceta"), e = document.querySelector(".ativeCeta"), o = document.querySelectorAll('[data-scrollAnima="right"]'), a = document.querySelectorAll('[data-scrollAnima="left"]'), c = document.querySelectorAll('[data-scrollAnima="up"]'), i = document.querySelectorAll('[data-scrollAnima="down"]'), n = .8 * window.innerHeight, window.addEventListener("scroll", function () {
    e.classList.contains("ativo") ? t.classList.add("ativo") : t.classList.remove("ativo"), o.forEach(function (t) {
      t.getBoundingClientRect().top - n < 0 ? t.classList.add("ativo") : t.classList.remove("ativo");
    }), a.forEach(function (t) {
      t.getBoundingClientRect().top - n < 0 ? t.classList.add("ativo") : t.classList.remove("ativo");
    }), c.forEach(function (e) {
      e.getBoundingClientRect().top - n < 0 ? (e.classList.add("ativo"), t.classList.add("ativo")) : e.classList.remove("ativo");
    }), i.forEach(function (t) {
      t.getBoundingClientRect().top - n < 0 ? t.classList.add("ativo") : t.classList.remove("ativo");
    });
  });
})();