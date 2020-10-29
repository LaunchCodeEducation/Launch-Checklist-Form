// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
function getPlanetaryInfo() {
   let url = "https://handlers.education.launchcode.org/static/planets.json";
   let missionTargetDiv = document.getElementById("missionTarget");
   fetch(url).then(function (response) {
      response.json().then(function (json) {
         let planetInfo = json[Math.floor(Math.random() * json.length)];
         missionTargetDiv.innerHTML = `<h2>Mission Destination</h2>
            <ol>
               <li>Name: ${planetInfo.name}</li>
               <li>Diameter: ${planetInfo.diameter}</li>
               <li>Star: ${planetInfo.star}</li>
               <li>Distance from Earth: ${planetInfo.distance}</li>
               <li>Number of Moons: ${planetInfo.moons}</li>
            </ol>
            <img src="${planetInfo.image}">`

      });
   });
}

window.addEventListener("load", function () {
   getPlanetaryInfo();

   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");


      if (pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required");
         event.preventDefault();
         return;
      }
      if (!(isNaN(pilotNameInput.value) && isNaN(copilotNameInput.value))) {
         alert("Pilot & co-pilot names should not be number");
         event.preventDefault();
         return;
      }

      if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert("FuelLevel & CargoMass should not be text");
         event.preventDefault();
         return;
      }

      let faultyItemsDiv = document.getElementById("faultyItems");
      let launchStatusDiv = document.getElementById("launchStatus");

      if (fuelLevelInput.value < 10000) {
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
      }
      else{
         document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
      }

      if (cargoMassInput.value > 10000) {
         document.getElementById("cargoStatus").innerHTML = `Cargo mass high for launch`;
      }
      else{
         document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
      }

      if (fuelLevelInput.value < 10000 || cargoMassInput.value > 10000) {
         launchStatusDiv.innerHTML = "Shuttle not ready for launch";
         launchStatusDiv.style.color = "red";

      }
      else {
         launchStatusDiv.innerHTML = "Shuttle is ready for launch";
         launchStatusDiv.style.color = "green";
      }

      faultyItemsDiv.style.visibility = 'visible';
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotNameInput.value} is ready for launch`;
      document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilotNameInput.value} is ready for launch`;
      event.preventDefault();
   });
});