// Write your JavaScript code here!
window.addEventListener("load", function() {
   const form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      const pilotName = document.querySelector("input[name=pilotName]");
      const copilotName = document.querySelector("input[name=copilotName]");
      const fuelLevel = document.querySelector("input[name=fuelLevel]");
      const cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
      }
      if ((isNaN(fuelLevel.value)) === true || (isNaN(cargoMass.value)) === true) {
         alert("Fuel Level and Cargo Mass must be numbers")
         event.preventDefault();
      }
      
      if (cargoMass.value > 10000) {
         // document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = 'Too much mass for shuttle to take off (must be less than 10k kg)';
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
         event.preventDefault();
      }else{
         document.getElementById("cargoStatus").innerHTML = 'Cargo mass low enough for launch';
      }
      
      if (fuelLevel.value < 10000) {
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = `Not enough Fuel for Journey (must be 10k liters or more)`;
         document.getElementById("launchStatus").style.color = "red";
         document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
         event.preventDefault();
      }else{
         document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
         document.getElementById("launchStatus").style.color ="green";
         document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
      }
     
     
      if (typeof pilotName.value !== "string" || typeof copilotName.value !== "string" ) {
         alert("Pilot names must be letters only")
         document.getElementById("pilotStatus").innerHTML = `NOT Ready`;
         document.getElementById("copilotStatus").innerHTML = `NOT Ready`;
         event.preventDefault();
      }else{
         document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready`;
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready`;

         // document.getElementById("faultyItems").style.visibility = "visible";
      }

   });
   //add FETCH HERE******* 
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