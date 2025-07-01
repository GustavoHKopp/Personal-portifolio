// Aguarda o carregamento completo do DOM para animação suave subindo o conteudo
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.2
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Controle do menu hamburguer para navegação mobile
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.querySelector('.nav-menu');
  menu.classList.toggle('active');
});

// Fecha o menu caso o clique aconteça fora dele ou no botão toggle
document.addEventListener('click', function (event) {
  const menu = document.querySelector('.nav-menu');
  const toggle = document.getElementById('menu-toggle');

  if (!menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});

// Fecha o menu ao clicar em alguma aba (mobile)
document.querySelectorAll('.nav-menu li a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.remove('active');
  });
});

// Script para botão voltar ao topo ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
  const btnTop = document.getElementById("btn-top");
  const header = document.querySelector("header");
  
  window.addEventListener("scroll", () => {
    const headerBottom = header.getBoundingClientRect().bottom;
    if (headerBottom <= 0) {
      btnTop.classList.add("show");
    } else {
      btnTop.classList.remove("show");
    }
  });

  btnTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
