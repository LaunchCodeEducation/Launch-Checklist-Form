window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();     

       let pilotNameInput = document.querySelector("input[name=pilotName]").value;
       let coPilotNameInput = document.querySelector("input[name=copilotName]").value;
       let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
       let cargoMassInput = document.querySelector("input[name=cargoMass]").value;

       let faultyItemList = document.getElementById("faultyItems");
       let fuelStatus = document.getElementById("fuelStatus");
       let launchStatus = document.getElementById("launchStatus");
       let cargoStatus = document.getElementById("cargoStatus");
       let pilotStatus = document.getElementById("pilotStatus");
       let copilotStatus = document.getElementById("copilotStatus");



       if (pilotNameInput.value === "" || coPilotNameInput.value === "" 
       || fuelLevelInput.value === "" || cargoMassInput.value === ""){
       alert("All fields are required");
      event.preventDefault(); 
      }   

      if (!isNaN(pilotNameInput)){
         window.alert("Enter a Valid Name");
         event.preventDefault();
         launchStatus = false;
      }else{
          pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch`;
      }
      if (!isNaN(coPilotNameInput)){
         window.alert("Enter a Valid Name");
         event.preventDefault();
         launchStatus = false;
      }else{
          copilotStatus.innerHTML = `CoPilot ${coPilotNameInput} is ready for launch`;
      }

      if(fuelLevelInput < 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         fuelStatus.innerHTML = "Fuel level too low for launch";
      }

      if(cargoMassInput > 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch";
         cargoStatus.innerHTML = "Cargo mass too high for launch";
      }
      
      if (Number(fuelLevelInput) === true){
          fuelLevelInput;
      }
      if (Number(cargoMassInput) === true){
          cargoMassInput;
   
       } else {
         faultyItemList.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotNameInput} is ready for launch`;
         copilotStatus.innerHTML = `CoPilot ${coPilotNameInput} is ready for launch`;
       }
        
       
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      let missionTargetInfo = document.getElementById("missionTarget");
      let jsonIndex = Math.floor(Math.random()*json.length);
      let planetInfo = json[jsonIndex];
      missionTargetInfo.innerHTML = `
      <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${planetInfo.name}</li>
      <li>Diameter: ${planetInfo.diameter}</li>
      <li>Star: ${planetInfo.star}</li>
      <li>Distance from Earth: ${planetInfo.distance}</li>
      <li>Number of Moons: ${planetInfo.moons}</li>
   </ol>
   <img src="${planetInfo.image}"></img>`
   });

});
});
      

