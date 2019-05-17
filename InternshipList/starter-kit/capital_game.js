// This allows the Javascript code inside this block to only run when the page
// has finished loading in the browser.

$( document ).ready(function() {
  var country_capital_pairs = pairs
  startFirebase();
  loadFromFirebase();
});


function startFirebase(){
  var config = {
      apiKey: "AIzaSyCrCdrqKZjuDxT0r0-8takpFE-pWJGWtg4",
      authDomain: "cs374-45daf.firebaseapp.com",
      databaseURL: "https://cs374-45daf.firebaseio.com",
      projectId: "cs374-45daf",
      storageBucket: "cs374-45daf.appspot.com",
      messagingSenderId: "613508202923"
    };
    firebase.initializeApp(config);
}


function loadFromFirebase(){
  return firebase.database().ref("/database/").once('value').then(function(snapshot){
      if(snapshot.val() === null) return;
      var keys = Object.keys(snapshot.val());
      for(var i = 0; i < keys.length; i++){
          var key = keys[i];
          var object = snapshot.val()[key];

          window.pairs.push({company,location,link})
      }
      console.log(window.pairs)
  })
}

function writeToFirebase(country, capital){
  firebase.database().ref("/database/").push({
      company, location, link
  })
}
