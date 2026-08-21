document.addEventListener("DOMContentLoaded", () =>
// Seleciona o botão de curtida e o ícone de coração
const likeBtn = document.querySelector(".left-actions.action-btn:first-child");
if (!likeBtn) return;

const likeSvg = likeBtn.querySelector("svg");

// contador
let textNode = Array.from(likeBtn.childNodes).find(
(node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !==
);

// Zerando o contador inicial.
let count = 0;

// Atualiza
if (textNode) {
  textNode.textContent = `0` ;



}