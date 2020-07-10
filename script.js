(() => {
  const btnToggle = document.querySelector(".btn-toggle"),
    title = document.querySelector(".title"),
    btn = document.querySelector(".btn"),
    container = document.querySelector(".comment-container");

  const onToggleBtn = () => {
    let btnHtml = btn.innerHTML.toLocaleLowerCase();

    container.classList.toggle("active");
    title.toggleAttribute("hidden");
    btn.toggleAttribute("hidden");

    btnHtml === "expand"
      ? (btnToggle.innerHTML = "shrink")
      : (btnToggle.innerHTML = "expand");
  };

  btnToggle.addEventListener("click", onToggleBtn);
})();
