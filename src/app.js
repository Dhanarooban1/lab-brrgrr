// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger


//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients  = {
    Patty: 80,
    Cheese: 10,
    Tomatoes: 20,
    Onions: 20,
    Lettuce: 20
  };
  
  //Current state of the ingredients in the burger
  var state = {
    Patty: true,
    Cheese: true,
    Tomatoes: true,
    Onions: true,
    Lettuce: true
  };
  
  // This function renders the entire screen everytime the state changes accordingly
  function renderAll() {
    renderPatty();
    renderCheese();
    renderTomatoes();
    renderOnions();
    renderLettuce();
    renderButtons();
    // renderIngredientsBoard();
    renderPrice();
  }
  
  function renderPatty() {
    let patty = document.querySelector("#patty");
   let itempatty = document.querySelector(".itempatty");
    if (state.Patty) {
      itempatty.style.display = "inherit";
      patty.style.display = "inherit";
    } else {
      itempatty.style.display = "none";
      patty.style.display = "none";
    }
  }
  
  function renderCheese() {
    let Cheese = document.querySelector("#cheese");
    let itemcheese = document.querySelector(".itemcheese");
    if (state.Cheese) {
      itemcheese .style.display = "inherit";
      Cheese.style.display = "inherit";
    } else {
      itemcheese.style.display = "none";
      Cheese.style.display = "none";
    }
  }
  
  function renderTomatoes() {
    let Tomatoes = document.querySelector("#tomato");
    let itemtomato = document.querySelector(".itemtomato");
    if (state.Tomatoes) {
      itemtomato.style.display = "inherit";
      Tomatoes.style.display = "inherit";
    } else {
      itemtomato.style.display = "none";
      Tomatoes.style.display = "none";
    }
  }
  
  function renderOnions() {
    
    
    let Onions = document.querySelector("#onion");
    let itemonions = document.querySelector(".itemonions");
    if (state.Onions) {
      itemonions.style.display = "inherit";
      Onions.style.display = "inherit";
    } else {
      itemonions.style.display ="none";
      Onions.style.display = "none";
    }
  }
  
  function renderLettuce() {
    
    let Lettuce = document.querySelector("#lettuce");
    let itemlettuce = document.querySelector(".itemlettuce");
    if (state.Lettuce) {
      itemlettuce.style.display = "inherit";
      Lettuce.style.display = "inherit";
    } else {
      itemlettuce.style.display = "none";
      Lettuce.style.display = "none";
    }
  }
  
  
  document.querySelector(".btn-patty").onclick = function () {
    state.Patty = !state.Patty;
  
    renderAll();
  };
  
  document.querySelector(".btn-cheese").onclick = function () {
    state.Cheese = !state.Cheese;
    renderAll();
  };
  
  
  document.querySelector(".btn-tomatoes").onclick = function () {
    state.Tomatoes = !state.Tomatoes;
    renderAll();
  };
  
  
  
  document.querySelector(".btn-onions").onclick = function () {
    state.Onions = !state.Onions;
    renderAll();
  };
  
  document.querySelector(".btn-lettuce").onclick = function () {
    state.Lettuce = !state.Lettuce;
    renderAll();
  };
  
  document.querySelector(".btn-lettuce").onclick = function () {
    state.Lettuce = !state.Lettuce;
    renderAll();
  };
  
  
  
  function renderPrice(){
    wholeWheatBun=170
    for(let i in state){
      if(state[i]==false){
        wholeWheatBun=wholeWheatBun-ingredients[i]
      }
      
    }
    document.querySelector(".price-details").innerHTML="INR "+wholeWheatBun;
  }
  
  
  function renderButtons(){
    for(let ingredient in state){
      let button = document.querySelector(".btn-" + ingredient.toLowerCase());
      if(state[ingredient]){
        button.classList.add("active");
      }else{
        button.classList.remove("active");
      }
    }
  }