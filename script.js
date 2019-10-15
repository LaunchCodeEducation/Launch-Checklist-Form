// Write your JavaScript code here!

window.addEventListener('load', function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let faultyItems = document.getElementById("faultyItems");
      let pilotName = document.getElementById("pilotName");
      let copilotName = document.getElementById("copilotName");
      let fuelLevel = document.getElementById("fuelLevel");
      let cargoMass = document.getElementById("cargoMass");

      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         return;
      } else if (!isNaN(pilotName.value)) {
         alert('Please enter a valid name for Pilot.');
         return;
      } else if (!isNaN(copilotName.value)) {
         alert('Please enter a valid name for Copilot.');
         return;
      }

      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;

      if (fuelLevel.value < 10000) {
         fuelStatus.innerHTML = "Not enough fuel for the journey.";
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
      } else {
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle is ready to launch"
         fuelStatus.innerHTML = "Fuel level high enough for launch";
      }
      if (cargoMass.value > 10000) {
         cargoStatus.innerHTML = "Too much mass for the shuttle to take off.";
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red";
         faultyItems.style.visibility = "visible";
      } else {
         cargoStatus.innerHTML = "Cargo mass low enough for launch";
      }
      faultyItems.style.visibility = "visible";

   })

   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById('missionTarget');
         let index = Math.floor(Math.random()*json.length);

         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[index].name}</li>
            <li>Diameter: ${json[index].diameter}</li>
            <li>Star: ${json[index].star}</li>
            <li>Distance from Earth: ${json[index].distance}</li>
            <li>Number of Moons: ${json[index].moons}</li>
         </ol>
         <img src="${json[index].image}">
`
      })
   })


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

})