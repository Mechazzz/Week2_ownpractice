let rootElement = document.querySelector('#root');

let htmlContent = "<h2> The text </h2>"

rootElement.insertAdjacentHTML('beforebegin', htmlContent)

/* let counter= 0;
while (counter < 10 ) {
  rootElement.insertAdjacentHTML('beforebegin', htmlContent)
  counter++ ;
} */

let extraContent = "<h3> The other text </h3>"

rootElement.insertAdjacentHTML('beforeend', extraContent)

/* for (let counter = 0; counter <= 5 ; counter++) {
  console.log(counter);
} */

/* for (let counter = 0; counter <= 10; counter++) {
  rootElement.insertAdjacentHTML('beforebegin', htmlContent)
} */

/* let array = ["alma", "körte", "szilva", "eper", "birs", "vegyes"]
for (let counter= 0; counter <= 10; counter++) {
  rootElement.insertAdjacentHTML('beforebegin', `<h2> ${array[3]} </h2>`)
} */

let array = ["alma", "körte", "szilva", "eper", "birs", "vegyes"]
for (let index= 0; index < array.length; index++) {
  rootElement.insertAdjacentHTML('beforebegin', `<h2> ${array[0]} </h2>`)
}

