// Write your JavaScript code here!
const originalFaulty = document.getElementById("faultyItems");

window.addEventListener("load", function() {
   const form = document.querySelector("form");
   const submit = document.getElementById("formSubmit");
   
   /* SUBMIT BUTTON LISTENER */
   form.addEventListener("submit", function(submit) {
      const pilotName = document.querySelector("input[name=pilotName]");
      const copilotName = document.querySelector("input[name=copilotName]");
      const fuelLevel = document.querySelector("input[name=fuelLevel]");
      const cargoMass = document.querySelector("input[name=cargoMass]");
      
      /* BLANK FIELDS CHECK */
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         submit.preventDefault();
      }
     
      /* NUMBER ON LEVELS CHECK */
     if ((isNaN(fuelLevel.value)) === true || (isNaN(cargoMass.value)) === true) {
         alert("Enter Valid Information for each field, please.")
         submit.preventDefault();
      }
      
      // if (cargoMass.value > 10000 && !(isNaN(cargoMass.value)) === false) {
      //    document.getElementById("cargoStatus").innerHTML = 'Too much mass for shuttle to take off (must be less than 10k kg)';
      //    document.getElementById("launchStatus").style.color = "red";
      //    document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
      //    submit.preventDefault();
      // }else{
      //    document.getElementById("cargoStatus").innerHTML = 'Cargo mass low enough for launch';
      // }
      
      // if (fuelLevel.value < 10000 && !(isNaN(fuelLevel.value)) === false) {
      //    document.getElementById("faultyItems").style.visibility = "visible";
      //    document.getElementById("fuelStatus").innerHTML = `Not enough Fuel for Journey (must be 10k liters or more)`;
      //    document.getElementById("launchStatus").style.color = "red";
      //    document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
      // }else{
      //    document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
      //    document.getElementById("launchStatus").style.color ="green";
      //    document.getElementById("launchStatus").innerHTML = `Shuttle is ready for launch`;
      // }
      // submit.preventDefault();

   });
   /* FETCH PLANETARY JSON */
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         const targetRandomizer = Math.floor(Math.random() * json.length);
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[targetRandomizer].name}</li>
            <li>Diameter: ${json[targetRandomizer].diameter}</li>
            <li>Star: ${json[targetRandomizer].star}</li>
            <li>Distance from Earth: ${json[targetRandomizer].distance}</li>
            <li>Number of Moons: ${json[targetRandomizer].moons}</li>
         </ol>
         <img src="${json[targetRandomizer].image}">
         `

      });
   });
});
/*NOTES AT THE BOTTOM */