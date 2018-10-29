// function clickLike() {
//   // Add current profile to likes array
//   likes.push(currentPerson);
//   console.log(likes);
//   // Remove current profile
//   profiles.shift();
//   console.log(profiles[0]);
//   // Add like to local storage under likes value
//   localStorage.setItem("likes", JSON.stringify(likes[0]));

//   let listInfo = document.createElement('li');
//   listInfo.innerHTML = JSON.stringify((likes[0].name).replace(/"([^"]+(?="))"/g, '$1') + ' ' + (likes[0].age)).replace(/"([^"]+(?="))"/g, '$1');
//   // console.log(JSON.stringify(listInfo));
//   likeSelection.appendChild(listInfo);
//   console.log(likeSelection);
//   // Get 10 more profiles if profiles array is less than or equal to 1
//   if (profiles <= 1) {
//     getTinderProfiles();
//   }
//   printPerson()
  
// }


// function clickSkip() {
//   // Add current profile to likes array
//   skips.push(profiles[0]);
//   // Remove current profile
//   profiles.shift();
//   // console.log(profiles);
//   // Add skip to local storage
//   localStorage.setItem("skips", JSON.stringify(likes));
//   console.log(JSON.stringify(skips));

//   let listInfo = document.createElement('li');
//   listInfo.innerHTML = Person.name + ' ' + Person.age;
//   // console.log(JSON.stringify(listInfo));
//   skipSelection.appendChild(listInfo);
//   console.log(skipSelection);
//   // Get 10 more profiles if profiles array is less than or equal to 1
//   if (profiles <= 1) {
//     getTinderProfiles();
//   }
// }

// likeButton.addEventListener('click', clickLike);
// skipButton.addEventListener('click', clickSkip);
