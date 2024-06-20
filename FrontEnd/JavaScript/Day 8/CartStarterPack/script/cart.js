const products = [
  {
    name: "HTML Course",
    image: "html-icon-logo.png",
    price: 500.99,
    qtty: 1,
  },
  {
    name: "CSS Course",
    image: "css-icon-logo.png",
    price: 800.5,
    qtty: 1,
  },
  {
    name: "JS Course",
    image: "js-icon-logo.png",
    price: 2100.0,
    qtty: 1,
  },
];
//current object formatter
const currencyFormater = new Intl.NumberFormat("de-AT", {
  style: "currency",
  currency: "EUR",
});
