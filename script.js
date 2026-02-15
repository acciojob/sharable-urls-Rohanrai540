// your code here
const nameInput = document.getElementById("name");
const yearInput = document.getElementById("year");
const button = document.getElementById("button");
const urlText = document.getElementById("url");

button.addEventListener("click", function() {

  let baseURL = "https://localhost:8080/";
  let params = [];

  if(nameInput.value !== "") {
    params.push(`name=${nameInput.value}`);
  }

  if(yearInput.value !== "") {
    params.push(`year=${yearInput.value}`);
  }

  if(params.length > 0) {
    baseURL += "?" + params.join("&");
  }

  urlText.innerText = baseURL;
});