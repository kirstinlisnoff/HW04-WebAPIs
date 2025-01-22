// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.getElementById("toggle");
const body = document.body;

function toggleMode() {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  const mode = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", mode);
  toggle.textContent = mode === "dark" ? '🌙' : '☀️';
}

window.onload = function() {
  const theme = localStorage.getItem("theme");
  if (theme) {
    body.classList.add(theme);
    toggle.textContent = theme === "dark" ? '🌙' : '☀️';
  } else {
    body.classList.add("light");
    toggle.textContent="☀️";
  }

  toggle.addEventListener("click", toggleMode);
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}



// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage(key, newData) {
  const existingData = readLocalStorage(key);
  existingData.push(newData);
  localStorage.setItem(key, JSON.stringify(existingData));
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

console.log(localStorage);