document.addEventListener("DOMContentLoaded", () => {
    const projetosContainer = document.getElementById("container-projetos");

    // Retorna a imagem baseada no nome do projeto
    function getProjectImage(name) {
        if (name.toLowerCase().includes("blog")) return "assets/projetos/Blog.png";
        if (name.toLowerCase().includes("calculator")) return "assets/projetos/Calculator.png";
        if (name.toLowerCase().includes("delphi")) return "assets/projetos/DelphiIde.png";
        if (name.toLowerCase().includes("node")) return "assets/projetos/NodeCourse.jpeg";
        if (name.toLowerCase().includes("employee")) return "assets/projetos/Employee.png";
        if (name.toLowerCase().includes("exercise-apex")) return "assets/projetos/Exercises.jpg";
        if (name.toLowerCase().includes("orders")) return "assets/projetos/Order.png";
        if (name.toLowerCase().includes("react-exercises")) return "assets/projetos/ReactExercises.jpg";
        if (name.toLowerCase().includes("todo-list")) return "assets/projetos/Todo.png";
        if (name.toLowerCase().includes("spring")) return "assets/projetos/Spring.png";
        if (name.toLowerCase().includes("imersao")) return "assets/projetos/Imersao.png";
        return "assets/projetos/default.jpg";
    }

    // Lista de projetos para exibir
    const projetos = [
        { name: "blog-project", title: "Blog Pessoal", html_url: "https://github.com/GustavoHKopp/blog-project", description: "Projeto pessoal de blog com uma estrutura básica de postagens." },
        { name: "Calculator-in-ReactJS", title: "Calculadora React", html_url: "https://github.com/GustavoHKopp/Calculator-in-ReactJS", description: "Calculadora simples desenvolvida com ReactJS." },
        { name: "Delphi", title: "Experimentos em Delphi", html_url: "https://github.com/GustavoHKopp/Delphi", description: "Repositório com códigos e experimentos em Delphi." },
        { name: "Exercise-Apex", title: "Exercícios Apex", html_url: "https://github.com/GustavoHKopp/Exercise-Apex", description: "Exercícios práticos realizados durante o curso Apex." },
        { name: "Imersao-back-end", title: "Imersão Back-end", html_url: "https://github.com/GustavoHKopp/Imersao-back-end", description: "Repositório criado no curso Alura Imersão Dev Back-end." },
        { name: "Java-Employee-System", title: "Sistema de Funcionários Java", html_url: "https://github.com/GustavoHKopp/Java-Employee-System", description: "Projeto simples de console que usei para aprender sobre Java e POO." },
        { name: "Java-Funcionario-Spring-Boot", title: "Gestão de Funcionários com Spring Boot", html_url: "https://github.com/GustavoHKopp/Java-Funcionario-Spring-Boot", description: "Sistema de gerenciamento de funcionários usando Spring Boot." },
        { name: "nodeCurse", title: "Curso Node.js", html_url: "https://github.com/GustavoHKopp/nodeCurse", description: "Exercícios e testes feitos durante um curso de Node.js." },
        { name: "Orders", title: "Gerenciador de Pedidos", html_url: "https://github.com/GustavoHKopp/Orders", description: "Projeto para gerenciar pedidos de clientes." },
        { name: "react-exercises", title: "Exercícios React", html_url: "https://github.com/GustavoHKopp/react-exercises", description: "Diversos exercícios para praticar desenvolvimento em ReactJS." },
        { name: "todo-list", title: "Lista de Tarefas", html_url: "https://github.com/GustavoHKopp/todo-list", description: "Aplicação simples de lista de tarefas construída com JavaScript ou React." }
    ];


    projetosContainer.innerHTML = "";

    // Cria e adiciona os cards dos projetos com animação sequencial
    projetos.forEach((repo, index) => {
        const item = document.createElement("div");
        item.classList.add("repo");

        item.innerHTML = `
            <img src="${getProjectImage(repo.name)}" alt="Imagem do projeto ${repo.name}" class="project-image" />
            <h3>${repo.title}</h3>
            <p>${repo.description || "Sem descrição."}</p>
            <a href="${repo.html_url}" target="_blank">Ver no GitHub</a>
        `;

        // Adiciona o card com atraso para efeito visual
        setTimeout(() => {
            projetosContainer.appendChild(item);
            item.classList.add("visible");
        }, index * 70);
    });
});