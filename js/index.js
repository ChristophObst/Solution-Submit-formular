console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data.firstName);
  console.log(
    `The age-badness-sum of ${data.firstName} is ${
      parseInt(data.age, 10) + parseInt(data.badness, 10)
    }`
  );
});
