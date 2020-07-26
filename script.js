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
         document.getElementById("faultyItems").style.visibility = "hidden";
         alert("All fields are required!");
         submit.preventDefault();
      }else{
         document.getElementById("faultyItems").style.visibility ="visible"
      }

     
      /*PILOT NAME PLACEMENT */
      function allLetter(inputtxt) {
         const letters = /^[A-Za-z]+$/;
         if(inputtxt.value.match(letters)) {
            return true;
         }else{       
            return false;
         }
      };

      if ((allLetter(pilotName))=== false) {
         pilotStatus.innerHTML ="[YET TO BE DEFINED]";
      }else{
         pilotStatus.innerHTML = `${pilotName.value} is ready for Launch`;
      }

      if((allLetter(copilotName))=== false) {
         copilotStatus.innerHTML ="[YET TO BE DEFINED]";
      }else{
         copilotStatus.innerHTML = `${copilotName.value} is ready for Launch`;         
      }
      

      /* NUMBER ON LEVELS CHECK */
      if ((isNaN(fuelLevel.value)) === true || (isNaN(cargoMass.value)) === true) {
         document.getElementById("faultyItems").style.visibility = "hidden";
         alert("Enter Valid Information for each field, please.")
         submit.preventDefault();
      }else{
         if(fuelLevel.value < 10000 || cargoMass.value > 10000){
            launchStatus.innerHTML = `Shuttle not ready for launch`;
            launchStatus.style.color = "red";
            document.getElementById("launchForm").style.backgroundColor = "red"
         }else{
            launchStatus.innerHTML = `Shuttle ready for launch`;
            launchStatus.style.color = "green";
            document.getElementById("launchForm").style.backgroundColor = "green"
         }
      }
 
      
      if(Number(fuelLevel.value) < 10000){
         fuelStatus.innerHTML = `Fuel level too low for launch`;
         submit.preventDefault();
      }else{
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
      }
      
      if(Number(cargoMass.value) > 10000){
         cargoStatus.innerHTML = `Cargo mass too high for launch`;
         submit.preventDefault();
      }else{
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
      }


            
   });
   /* FETCH PLANETARY JSON */
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      response.json().then(function(json) {
         const missionTarget = document.getElementById("missionTarget");
         const targetRandomizer = Math.floor(Math.random() * json.length);
         missionTarget.innerHTML = `
         <h2>MISSION DESTINATION</h2>
         <ol id = "missionList">
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
