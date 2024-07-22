const butnEl = document.getElementById("butn"); //create a variable and add EL for element from the index.html by ID//
const getjokeEl = document.getElementById("getjoke"); // we targeting the space where quotes go in//

const apiKey = "e89HAXHxui14k1Vj717vOU2OgMAqsr9qugfs0kce";
// you creat a variable to store the api key//

// this method is given in the api app//
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

// we have to use async function because we using await.

async function getjoke() {
  //the class of quotation should print loading as it waits for respons//
  // getmotivEl.innerText = "updating...";
  // butnEl.disabled = true;
  // butnEl.innerText = "please wait ...";//

  const respons = await fetch(apiURL, options);
  const data = await respons.json();

  //butnEl.disabled = false;
  //butnEl.innerText = "Get motivation";

  jokeEl.innerText = data[0].joke;
}

butnEl.addEventListener("click", getjoke);
