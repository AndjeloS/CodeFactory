let multTable: string[] = [
  "1x1",
  "1x2",
  "1x3",
  "1x4",
  "1x5",
  "1x6",
  "1x7",
  "1x8",
  "1x9",
  "1x10",
];

for (let i = 0; i < multTable.length; i++) {
  const numbers = multTable[i];
}

let result = document.getElementById("result") as HTMLElement;
multTable.forEach((element) => {
  result.innerHTML = `
      ${multTable}`;
});
