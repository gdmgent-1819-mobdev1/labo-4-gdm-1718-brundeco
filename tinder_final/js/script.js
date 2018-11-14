      // : : : : : : : : : : declare variables : : : : : : : : : 
let url = 'https://randomuser.me/api/?results=11';
let profiles = [];
let Person = new Object();
let skips = [];
let likes = [];
let a = [];
let b = [];
let likeSelection = document.getElementById('likeSelection');
let skipSelection = document.getElementById('skipSelection');

let likeButton = document.getElementById('clickLike');
let skipButton = document.getElementById('clickSkip');
let screen = document.getElementById('screen');

let currentPerson;
let personImg = document.getElementById('personImg');
let personName = document.getElementById('personName');
let personAge = document.getElementById('personAge');
let personLocation = document.getElementById('personLocation');

console.log(localStorage.getItem('likes'));

      // : : : : : : : : : : start fetch, get random user data : : : : : : : : : 
function getTinderProfiles(callback) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (tinderUsers) {

      // Get 10 users and put data in object
      let randomUser = tinderUsers.results;
      for (let i = 0; i < randomUser.length; i++) {
        Person = {
          picture: randomUser[i].picture.large,
          name: randomUser[i].name.first + ' ' + randomUser[i].name.last,
          age: 'Age: ' + randomUser[i].dob.age,
          location: randomUser[i].location.city + ' ' + randomUser[i].location.postcode + '<br>' + randomUser[i].location.street,
          lat: randomUser[i].location.coordinates.latitude,
          lon: randomUser[i].location.coordinates.longitude
        }

        // Add fetched persons to profiles array
          profiles.push(Person);
          // console.log(profiles);

        // Add fetched persons to local storage
          localStorage.setItem('person', JSON.stringify(profiles));
      }

      // : : : : : : : : : : printPerson function() : : : : : : : : : 
      function printPerson() {
        currentPerson = profiles[0];
        personImg.src = currentPerson.picture;
        personName.innerHTML = currentPerson.name;
        personAge.innerHTML = currentPerson.age;
        personLocation.innerHTML = currentPerson.location;
      }
      printPerson();

      // : : : : : : : : : : click like function() : : : : : : : : : 
      function clickLike() {
        navigate();
        // Add current profile to likes array
        likes.push(currentPerson);
        // Remove current profile
        profiles.shift();
        // create list item, add data and print data in selection menu
        let listInfo = document.createElement('li');
        listInfo.setAttribute('class', 'li-style-liked');
        for(let i = 0; i < likes.length; i++) {
          listInfo.innerHTML = "";
          listInfo.innerHTML += likes[i].name + ' / ' + likes[i].age;
          localStorage.setItem("likes", JSON.stringify(likes[i]));
        }
        likeSelection.appendChild(listInfo);

        a.push(JSON.parse(localStorage.getItem('likes')));
        localStorage.setItem('likes', JSON.stringify(a));
        // Get 10 more profiles if profiles array is less than or equal to 1
        if (profiles <= 1) {
          getTinderProfiles();
        }
        printPerson();
      }

      // : : : : : : : : : : click skip function() : : : : : : : : : 
      function clickSkip() {
        navigate();
        // Add current profile to skips array
        skips.push(currentPerson);
        // Remove current profile
        profiles.shift();

        // Add skip to local storage under skip value
        localStorage.setItem("skips", JSON.stringify(likes[0]));
        let listInfo = document.createElement('li');
        listInfo.setAttribute('class', 'li-style-skipped');

        for(let i = 0; i < skips.length; i++) {
          listInfo.innerHTML = "";
          listInfo.innerHTML += skips[i].name + ' / ' + skips[i].age;
          localStorage.setItem("skips", JSON.stringify(skips[i]));
        }
        skipSelection.appendChild(listInfo);

        b.push(JSON.parse(localStorage.getItem('skips')));
        localStorage.setItem('skips', JSON.stringify(b));

        // Get 10 more profiles if profiles array is less than or equal to 1
        if (profiles <= 1) {
          getTinderProfiles();
        }
        printPerson();
      }

      // : : : : : : : : : : Hammer swipe implementation : : : : : : : : : 
      let mc = new Hammer(screen);
      mc.on("swiperight", clickLike);
      mc.on("swipeleft", clickSkip);

      // : : : : : : : : : : Event listeners to execute click and skip functions : : : : : : : : : 
      likeButton.addEventListener('click', clickLike);
      skipButton.addEventListener('click', clickSkip);
    });
}

getTinderProfiles();