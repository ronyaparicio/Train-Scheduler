$("document").ready(function() {


  var config = {
    apiKey: "AIzaSyDpHPkm9wL-ytYHQFXgmrQX1MlMYP6tVOM",
    authDomain: "train-d97c8.firebaseapp.com",
    databaseURL: "https://train-d97c8.firebaseio.com",
    projectId: "train-d97c8",
    storageBucket: "",
    messagingSenderId: "467455934899"
  };
  firebase.initializeApp(config);
  var database = firebase.database();

  $("#addNewTrain").on("click", function() {
    var name = $("#trainName").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = $("#trainTime").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push({
      name: name,
      destination: destination,
      trainTime: trainTime,
      frequency: frequency
    });

  });


  database.ref().on("value", function(snapshot){
    var theChild = snapshot.val();
    console.log(theChild.name);
    console.log(theChild.destination);
    console.log(theChild.trainTime);
    console.log(theChild.frequency);
  });


});
