
// create a simple instance
// by default, it only adds horizontal recognizers
let mc = new Hammer(screen);

// listen to events...
mc.on("panright", function(ev) {
    // screen.textContent = ev.type +" gesture detected.";
    navigate();
        // Add current profile to likes array
        likes.push(currentPerson);
        // Remove current profile
        profiles.shift();

        // Add like to local storage under likes value
        let listInfo = document.createElement('li');
        listInfo.setAttribute('class', 'li-style-liked');
        // listInfo.innerHTML += JSON.stringify((likes[0].name).replace(/"([^"]+(?="))"/g, '$1') + ' ' + (likes[0].age)).replace(/"([^"]+(?="))"/g, '$1');
        for(let i = 0; i < likes.length; i++) {
          listInfo.innerHTML = "";
          listInfo.innerHTML += likes[i].name + ' / ' + likes[i].age + '<br>';
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
});
