const botao = document.querySelector(".leiamais");
const botaox = document.querySelector(".leiamaisx");
const botaoz = document.querySelector(".leiamaisz");

const mais = document.querySelector(".informacao .noticias .noticiasum .mais")
const maisx= document.querySelector(".informacao .noticias .noticiasdois .maisx")
const maisz= document.querySelector(".informacao .noticias .noticiastres .maisz")

botao.addEventListener("click", () => {
    mais.classList.toggle("ativo");
    maisx.classList.remove("ativo");
    maisz.classList.remove("ativo");
})

botaox.addEventListener("click", () => {
    maisx.classList.toggle("ativo");
    mais.classList.remove("ativo");
    maisz.classList.remove("ativo");
})

botaoz.addEventListener("click", () => {
    maisz.classList.toggle("ativo");
    mais.classList.remove("ativo");
    maisx.classList.remove("ativo");
})