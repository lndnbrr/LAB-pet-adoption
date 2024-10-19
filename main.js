const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
      id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i0.wp.com/onlydinosaurs.com/wp-content/uploads/2021/02/Pets-that-look-like-dinosaurs-Top-14-Interesting-Pets-That-Look-Like-Dinosaurs-1024x624.png",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://s.yimg.com/ny/api/res/1.2/sMt1ypF49S6Z38Hw1hIjFQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://o.aolcdn.com/hss/storage/midas/8e4cf47ce82b31994335808ddd8530b7/206630449/P1012406.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://m.media-amazon.com/images/I/816lbABBBnL.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://abracadabranyc.com/cdn/shop/products/ScreenShot2022-09-16at6.13.27PM_3403ef42-fff7-4e04-b95b-e32324c5f39c_1200x.png?v=1671332919"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6lZTNGlpLR3l8wibJIaJplgx5J9M5_q1K3w&s"
    },
    {
      id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaUMvI-opEOBD_SDsPL99fh1M4Fd4xN7WDw&s"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://www.rover.com/blog/wp-content/uploads/2020/08/41Q6cQEOLL.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://target.scene7.com/is/image/Target/GUEST_46f11349-f542-4f42-9e80-d8229decf579"
    },
    {
      id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s"
    },
    {
      id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UOW09a8y-Ue_FtTFn01C4U4-dZmIax-P_g&s"
    },
    {
      id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://www.permia.com/cdn/shop/products/baryonyx-handmade-dinosaur-figurine-permia-pet-front_1000x.jpg?v=1553881182"
    }
  ];



  console.log("This works!");
  


  















// NEW NOTES: the following lines of code are a utility function encompassing a variable that is representing a '.querySelector' method. This .querySelector method is going into the document (HTML) and selecting an element/class/id to latch onto. 'inner.HTML' is used on the varibale after it's declared so then we can manipulate(create/modify/delete) the data on said thing we .querySelect


const renderToDom = (divIdInIndexHtml, htmlToRenderFromMainJS) => {
  const selectedDiv = document.querySelector(divIdInIndexHtml);
  selectedDiv.innerHTML = htmlToRenderFromMainJS;
};

// OLD NOTES: this is a function, but it's the newer method of a function. on line (the line starting with const renderToDom), here's how it's represented with two parameters:

// const functionName = (para1, para2) => {
//   code to be executed
// }

// The 'code to be executed' in this case has two parts. 
//    The first line(starting with const selectedDiv) is creating a new variable to then equal the document.querySelector(para1), where para1 will replaced by whatever is placed into it later on to then be invoked (or called). In this case, para1 will eventually be the id in our html that will link JS and HTML, AKA, targeting the DOM. 
//    The  second line(linne starting with selectedDiv.innerHTML) is using the new variable we created on the first line(270) and attaching .innerHTML to it. The attachment .innerHTML is used as a sort of gateway into html from calling a function on js. So since selectedDiv = document.querySelector(divIdInIndexHtml), it's the exact same as saying document.querySelector(divId).innerHTML. With that, we start on the js side, where we ask to see divId on the html side, then when we find divId on the html side, we use .innerHTML to enter the html file through divId to start editing. The edits are through the what's on the right hand side of the equals sign on (line selectedDiv.innerHTML), htmlToRender. htmlToRender is also para2, so whatever is placed into the invoking function as para2 will be what is representing the html changes from the js side. Ultimately, we are making a function so that when call this function with the parameters representing the id of we are selecting on HTML from JS(para1) and what's representing the changes that are waiting to be made in HTML (para2), it will do so.

// NEW NOTES: This next portion of code is a function. This passed in a parameter that will eventually be filled by what is the array of pets above. We create a variable where it is an empty string (domString). This allows the html in the for loop below that to render into that empty string. We use the variable name += since we are adding onto what is already existing. The format of the html follows the exact format of the cards above, except its allowing the user to input the data through the form on the webpage. Lastly, within the cardsOnDom function, all the way at the end, we use(call) renderToDom to select the id 'app' on html (with the help of the querySelector) and implement the content of domString to manipulate (add) the html code to 'app'. NOTE: this function (cardsOnDom)has not been called yet so it doesn't show any of the pets yet.
const cardsOnDom = (potentialArray) => {
  let domString = "";
  for (const pet of potentialArray) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
    <div class="card-body">
      <p class="card-text">${pet.name}</p>
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
    </div>
  </div>`;
  }

  renderToDom("#app", domString);
};

// OLD NOTES: line (starting with const cardsOnDom) starts another function where this time it is passing in one parameter instead of two like on line( starting with const renderToDom ). 
// The 'code to be executed' starts at line(starting with let domString) and ends at line(ending };). 
// Line (line starting with let domString) begins with an new variable that equals an empty string. That empty string is where the content from line(starting with domString +=)- line(starting with  </div>`;)  (a card with a pet's info in it) is placed into that empty string.
// Line (starting with for (const pet of array) ) is a for loop and that looks like this:
//    for (const randomRepresenter of parameter){
//      code to be executed;
//    }
// So line (starting with for (const pet of array) ) basically gets all the content from (starting with domString +=) to (ending } after </div>`;) and fills in a card per pet, sends that up to domString, and then repeats.
// line (starting with domString +=) reintroduces our variable of the emptry string, domString, but this time it is equaling all the card content while simultaneously being added to the domString empty string. As I was saying about this content being a card, this is pretty much the same format a bootstrap card but with some adjustments
// Lastly, line (renderToDom("#app", domString);) is calling our renderToDom function from line (starting with const renderToDom) WITHIN the function. Now that domString was created, it can be used as the representation for para2 of renderToDom, htmlToRender.



// function to filter teammates with specific favorite color
// NEW NOTES: filter is another function. There are two parameters passed through filter, with para1 being what will eventually be the array we have at the beginning called 'pets' and para2 being the animal type we attached to every single pet in that pets array. We created a variable that holds a new empty array that will house the pet cards that are placed in it. Next is a for of loop, that also has an if statement in it. The if statement basically tells us that what is being plugged into member will go to that and then go into th type of that member. If that type of the member (which pretty much is the indivdual pet) is equal to the para2 that we implement, then what's inside the if statement will occur. What's inside the if statement is pushing this member (individual pet) into the animalFiltered empty array. Once it goes through the whole array, we return animalFiltered showing just specific pets representing a pet type. NOTE: This function needs to be called in some way for it to occur.
const filter = (array, correctType) => {
  const animalFiltered = [];


  for (const member of array) {
    if (member.type === correctType) {
      animalFiltered.push(member);
    }
  }

  return animalFiltered;
};

// OLD NOTES: This portion of code from line 315 to line 326 is a function that is going to push all the pets that are one type of animal.
// line 315 starts the function by making a new variable, being equal to two parameters and using the fat arrow to start the function. The array parameter is eventually going to represent the pets variable that holds all of our pets in an array. The correctType parameter is eventutally going to represent the type of pet (either dog,cat, or dino).
// line 316 makes another new variable, but instead of it being an empty string like on line 286, it is an empty array. The differece between an empty string and an empty array is that the empty string was waiting for new code to go into it, meanwhile the empty array is waiting for new values to go into it. In this case, the new values are being determined based on what type of animal they are, so all the info will be shown on the preview if that pet fits the credentials to be that animal type.
// The credentials to be that animal type is determined by lines 319 to 326. This is a for of loop. But inside of the for of loop is an if statement. The if statement uses the representing term 'member' (which could be any term like 'taco' or 'plastic') followed by .type. The .type is pulling the type key from each pet array. And the parameter, correctType, is representing what will be plugged in as either dog,cat or dino. So if the member.type does === dog, then it will pop the card of a dog type. However, if a member.type === dog but it is supposed to === cat for example, it will not show up on preview. Lastly, The code to be executed in the if statement is simply pushing the correct member (pet) into animalFiltered.


// NEW NOTES: We are now targeting the id's on the buttons, but we are not using 'inner.html' to manipulate these portions of html. 
// 1. Target both of the buttons on the DOM
const showAllButton = document.querySelector("#allPetsButton");
const doggyDog = document.querySelector("#justDogsButton");
const kittyKat = document.querySelector("#justCatsButton");
const bigDino = document.querySelector("#justDinosButton");

// OLD NOTES: Lines 334-337 are all the same format. They start off being a new variable, where that variable is equal to a document.querySelector that is looking for an id. The ids in this case are going to be inside of the buttons we have on HTML.these querySelectors are tageting the DOM, but not actually changing the HTML itself. It would need a .innerHTML to alter the HTML.


// NEW NOTES: We are now creating the functionality of a button to either show all of the pets or filter to just a specific pet. This button right below shows all pets. para1 of this eventlistener is telling the doc to listen to when a user clicks showAllButton. para2 is telling the doc to display all of the pets through calling cardsOnDom.
// 2. Add click event to show all the instuctors on button click using the function we created above
showAllButton.addEventListener("click", () => {
  cardsOnDom(pets);
});

// OLD NOTES: Lines 342-344 represent what is called an event listerner. This event listener is waiting for  - in this case - a click on the button it is connected to. Since it is connected to showAllButton, it will work for the button that has the id of allPetsButton. So the format goes as followed: variable representing the button we want, folowwed by .addEventListener attached to it, then parenthesis for what the addEventListener is going to do. within the parenthesis, we start off with the "click", then we place another function in with an empty parameter since we're only calling a previous function, cardsOnDom


// NEW NOTES: We are now creating the functionality of several buttons filter to just a specific pet. The buttons below are all the same, just plugging in different values. para1 of this eventlistener is the same as showAllButton. para2 is telling the doc to display just the pets represented in the variable influenced by the filter invoke functiion.
// 3. Add click event to filter all the instructors whose favorite color is blue on button click
doggyDog.addEventListener("click", () => {
  const allTheDogs = filter(pets, "dog");
  cardsOnDom(allTheDogs);
});


kittyKat.addEventListener("click", () => {
  const allTheCats = filter(pets, "cat");
  cardsOnDom(allTheCats);
});


bigDino.addEventListener("click", () => {
  const allTheDinos = filter(pets, "dino");
  cardsOnDom(allTheDinos);
});
