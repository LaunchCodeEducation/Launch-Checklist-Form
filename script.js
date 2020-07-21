// Write your JavaScript code here!
window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
        const missionTarget = document.getElementById("missionTarget");
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[0].name}</li>
            <li>Diameter: ${json[0].diameter}</li>
            <li>Star: ${json[0].star}</li>
            <li>Distance from Earth: ${json[0].distance}</li>
            <li>Number of Moons: ${json[0].moons}</li>
         </ol>
         <img src="${json[0].image}"></img>
         `
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
         
         if (fuelLevel.value < 10000) {
            // document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = `Not enough Fuel for Journey (must be 10k liters or more)`;
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
            event.preventDefault();
         }else{
            document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
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
         
         if (typeof pilotName.value !== "string" || typeof copilotName.value !== "string" ) {
            alert("Pilot names must be letters only")
            event.preventDefault();
         }
         
         
         document.getElementById("pilotStatus").innerHTML = `${pilotName.value} Ready`;
         document.getElementById("copilotStatus").innerHTML = `${copilotName.value} Ready`;
         
      });
      // document.getElementById("launchStatus").style.color ="green";
      // document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
      
   });
      });
   



// event.preventDefault();
});
