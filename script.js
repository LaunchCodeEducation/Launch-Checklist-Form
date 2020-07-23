// Write your JavaScript code here!

window.addEventListener("load", function() {
   const form = document.querySelector("form");
   const submit = document.getElementById("formSubmit");
   
   /* SUBMIT BUTTON LISTENER */
   form.addEventListener("submit", function(submit) {
      const pilotName = document.querySelector("input[name=pilotName]");
      const copilotName = document.querySelector("input[name=copilotName]");
      const fuelLevel = document.querySelector("input[name=fuelLevel]");
      const cargoMass = document.querySelector("input[name=cargoMass]");
      const pilotStatus = document.getElementById("pilotStatus");
      const copilotStatus = document.getElementById("copilotStatus");
      const cargoStatus = document.getElementById("cargoStatus");
      const fuelStatus = document.getElementById("fuelStatus");
      const launchStatus = document.getElementById("launchStatus");
      
      /* BLANK FIELDS CHECK */
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!");
         submit.preventDefault();
      }
     
      /*PILOT NAME PLACEMENT */
      if (pilotName.value === ""){
         pilotStatus.innerHTML ="PILOT NOT SELECTED";
         submit.preventDefault();
      }else{
         pilotStatus.innerHTML = `${pilotName.value} is ready for Launch`;
      }
      if(copilotName.value ===""){
         copilotStatus.innerHTML ="COPILOT NOT SELECTED";
         submit.preventDefault();
      }else{
         copilotStatus.innerHTML = `${copilotName.value} is ready for Launch`;         
      }

      /* NUMBER ON LEVELS CHECK */
      if ((isNaN(fuelLevel.value)) === true || (isNaN(cargoMass.value)) === true) {
         alert("Enter Valid Information for each field, please.")
         submit.preventDefault();
       }
      if(fuelLevel.value < 10000 || cargoMass.value > 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = "red";
         submit.preventDefault();
      }else{
         launchStatus.innerHTML = `Shuttle ready for launch`;
         launchStatus.style.color = "green";
      }
      
      if(fuelLevel.value < 10000){
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         submit.preventDefault();
      }else{
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
 
      }

      if(cargoMass.value > 10000){
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
         submit.preventDefault();
      }else{
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;

      }
      // if (cargoMass.value > 10000) {
      //    document.getElementById("cargoStatus").innerHTML = 'Too much mass for shuttle to take off (must be less than 10k kg)';
      //    document.getElementById("launchStatus").style.color = "red";
      //    document.getElementById("launchStatus").innerHTML = `Shuttle not ready for launch`
      //    submit.preventDefault();
      // }else{
      //    document.getElementById("cargoStatus").innerHTML = 'Cargo mass low enough for launch';
      // }
      
      // if (fuelLevel.value < 10000) {
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