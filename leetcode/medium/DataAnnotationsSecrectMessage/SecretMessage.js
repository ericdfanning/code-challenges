const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const getSecretMessage = async (url) => {
  
  const response = await fetch(url)
  const text = await response.text();
  const body = text.split('<!DOCTYPE html>');
  const dom = new JSDOM(`<!DOCTYPE html>${body[1]}`);
  const tableContents = dom.window.document.querySelectorAll("td");

  const matrix = []

  for (let i = 3; i < tableContents.length; i+= 3) {
    const x = tableContents[i].textContent;
    const y = tableContents[i + 2].textContent;
    const val = tableContents[i + 1].textContent;

    if (!matrix[y]) {
      matrix[y] = []
    }
    matrix[y][x] = val
  }

  let message = ''
  matrix.reverse().forEach(arr => {
    let sub = ''
    for (let i = 0; i < arr.length; i++) {
      sub += arr[i] ?? " "
    }
    message += sub + '\n'
  })

  console.log(message)
}

getSecretMessage("https://docs.google.com/document/d/e/2PACX-1vQGUck9HIFCyezsrBSnmENk5ieJuYwpt7YHYEzeNJkIb9OSDdx-ov2nRNReKQyey-cwJOoEKUhLmN9z/pub")