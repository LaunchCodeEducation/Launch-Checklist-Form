// Write your JavaScript code here!
window.addEventListener("load", function() {
   let form = document.querySelector("form");
   let reqs = document.getElementById("faultyItems");
   let pilotReady = document.getElementById("pilotStatus");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let massInput = document.querySelector("input[name=cargoMass]");
      let pilotValue = pilotInput.value;
      if (pilotInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || massInput.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      } else if (!isNaN(pilotInput.value) || !isNaN(copilotInput.value)){
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();   
      } else if (isNaN(fuelInput.value) || isNaN(massInput.value)) {
         alert("Make sure to enter valid information for each field!");
         event.preventDefault();
      } else {
         if (fds ) {

         } else {
         pilotReady.innerHTML = `${pilotValue} is ready for launch!`;
         }
      }
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
