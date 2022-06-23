document.addEventListener('DOMContentLoaded', () => {
  //console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form')
  form.addEventListener('submit', handleFormSubmit)

  const button = document.querySelector('#button'); // get the 
  button.addEventListener('click', handleButtonClick);
})



const handleFormSubmit = function (event) {
  event.preventDefault();

  const list = document.querySelector("#reading-list");

  const titleToPrint = document.createElement('li');

  titleToPrint.textContent = `${event.target.title.value} \n ${event.target.author.value} \n ${event.target.category.value}`;

  console.log(titleToPrint);

  list.appendChild(titleToPrint);

  document.getElementById('new-item-form').reset();

}

const handleButtonClick = function (event) {
  const items = document.querySelectorAll('li');
  for (var item of items) {
    item.remove();
  }
}