 // Initialize Firebase
    $(document).ready(function (){

  var config = {
    apiKey: "AIzaSyDVhUyjgKdj6PLwREnz78I9_NTblpeOTnY",
    authDomain: "train-schedule-ddceb.firebaseapp.com",
    databaseURL: "https://train-schedule-ddceb.firebaseio.com",
    projectId: "train-schedule-ddceb",
    storageBucket: "",
    messagingSenderId: "347982919805"
  };
  firebase.initializeApp(config);

var train="";
var destination="";
var time="";
var frequency="";
var database=firebase.database();

$(document).on("click", "#add-train-btn", function(event){
	event.preventDefault();
	console.log("i clicked");

	train= $("#train-name-input").val();
	destination= $("#destination-input").val();
	time= $("#time-input").val().trim();
	frequency= $("#frequency-input").val();

	console.log(train, destination, time, frequency)

	database.ref().push({
		train: train,
		destination:destination,
		time:time,
		frequency:frequency,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
});//document.on"click" end

database.ref().on("child_added", function(childSnapshot){

	var table=$("tbody");

	table.append(`<tr>
					<td>${train}</td>)
					<td>${destination}</td>
					<td>${time}</td>
					<td>${frequency}</td>
				</tr>`);

});//database.ref() end

database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot){

});

});//document.ready end
























