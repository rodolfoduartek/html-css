function toggleSection(id) {
    const el = document.getElementById(id);
    el.style.display = el.style.display === "none" ? "block" : "none";
}

function copyCode(id) {
    const code = document.getElementById(id).innerText;
    navigator.clipboard.writeText(code);
    alert("Código copiado!");
}