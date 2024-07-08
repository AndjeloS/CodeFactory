//function so it toggles sorting form lowest to highest and highest to lowest

const sorter = (btn) => {
  const cards = [...document.querySelectorAll(".card")];
  const container = document.querySelector(".taskList");
  let deck = [];
  let btnDisabled = document.querySelector(".disabled");
  const filter = (id) => id.dataset.filter;
  const type = (id) => id.dataset.type;

  cards.forEach((el) => {
    const from = (id) => el.querySelector(id).innerText;
    let card = { val: from(".value"), card: el };
    deck.push(card);
    el.remove();
  });

  if (btnDisabled) {
    btnDisabled.classList.toggle("disabled");
    if (btn == btnDisabled)
      btnDisabled.dataset.type = type(btnDisabled) == "down" ? "up" : "down";
    btnDisabled.innerText = `Sort by ${filter(btnDisabled)}-${type(
      btnDisabled
    )}!`;
  }
  btn.innerHTML = `Sort by priority: <img src="images/arrows.png">`;
  btn.classList.toggle("disabled");
  deck.sort((a, b) => {
    if (filter(btn) == "name")
      return type(btn) == "up"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    if (filter(btn) == "value")
      return type(btn) == "up" ? a.val - b.val : b.val - a.val;
  });
  deck.forEach((el) => container.append(el.card));
};

document
  .querySelectorAll(".button")
  .forEach((btn) =>
    btn.addEventListener("click", (e) => sorter(e.currentTarget))
  );
