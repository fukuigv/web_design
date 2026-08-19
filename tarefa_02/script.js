let contador = 0;

const botao = document.getElementById("Botao");

botao.onclick = () => {
    contador++;

    let toast = document.getElementById("toast");

    if (!toast) {
        toast = document.createElement("div");

        toast.id = "toast";
        toast.className = "toast";

        document.body.appendChild(toast);
    }

    toast.textContent = `Você clicou ${contador} vez${contador > 1 ? "es" : ""}!`;

    toast.classList.add("show");

    clearTimeout(toast.timeout);

    toast.timeout = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
};
