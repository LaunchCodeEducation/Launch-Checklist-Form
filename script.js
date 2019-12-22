// This block of code shows how to format the HTML once you fetch some planetary JSON!
const planterayData = fetch("https://handlers.education.launchcode.org/static/planets.json");
  window.addEventListener("load", function(){
    planterayData.then (function(response){
      response.json().then (function(json){
        let div = document.getElementById("missionTarget");
        let anyPlanet = randomJson();
        div.innerHTML = `
        <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[anyPlanet].name}</li>
               <li>Diameter: ${json[anyPlanet].diameter}</li>
               <li>Star: ${json[anyPlanet].star}</li>
               <li>Distance from Earth: ${json[anyPlanet].distance}</li>
               <li>Number of Moons: ${json[anyPlanet].moons}</li>
            </ol>
            <img src="${json[anyPlanet].image}">`

          function randomJson (){
              let index = Math.floor(Math.random()*json.length);
              return index;
              }
      });
    });
  });
// Write your JavaScript code here!
window.addEventListener("load", function(){
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    
    if(pilotNameInput.value === '' || copilotNameInput.value === '' ||
      fuelLevelInput.value === '' || cargoMassInput.value === ''){
        alert("All fields are required!");
        event.preventDefault();
        faultyItems.style.visibility = "hidden"
      }

    if(!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value) || 
      isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
        alert("Please enter the propriate answer");
        event.preventDefault()
        faultyItems.style.visibility = "hidden"
      }

      let formSubmit = document.getElementById("formSubmit");
      let faultyItems = document.getElementById("faultyItems");
      let launchStatus = document.getElementById("launchStatus")
      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let checkReady = true

      if(fuelLevelInput.value < 10000 && cargoMassInput.value < 10000 && checkReady){
                        
            launchStatus.innerHTML = "Shuttle not ready for launch"
            pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`
            copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready`
            launchStatus.style.color = "red";
            faultyItems.style.visibility = "visible"
            fuelStatus.innerHTML = `Fuel level too low for launch`
            cargoStatus.innerHTML = `Cargo mass level low enough for launch`
            checkReady = false
      }

      if(fuelLevelInput.value > 10000 && cargoMassInput.value > 10000 && checkReady){
                        
          launchStatus.innerHTML = "Shuttle not ready for launch"
          pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`
          copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready`
          launchStatus.style.color = "red";
          faultyItems.style.visibility = "visible"
          fuelStatus.innerHTML = `Fuel level high enough for launch`
          cargoStatus.innerHTML = `Cargo mass level high for launch`
          checkReady = false
      }

      if(fuelLevelInput.value < 10000 && cargoMassInput.value > 10000 && checkReady){
                        
          launchStatus.innerHTML = "Shuttle not ready for launch"
          pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`
          copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready`
          launchStatus.style.color = "red";
          faultyItems.style.visibility = "visible"
          fuelStatus.innerHTML = `Fuel level too low for launch`
          cargoStatus.innerHTML = `Cargo mass level high for launch`
          checkReady = false
      }

      if (checkReady){
         
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = 'Shuttle ready for launch';
         pilotStatus.innerHTML = `Pilot ${pilotNameInput.value} is ready`
         copilotStatus.innerHTML = `Co-pilot ${copilotNameInput.value} is ready`
         launchStatus.style.color = "green";
         fuelStatus.innerHTML = `Fuel level high enough for launch`
         cargoStatus.innerHTML = `Cargo mass level low enough for launch`
         event.preventDefault();
      } else {
         checkReady = true;
         event.preventDefault();
      }
      
  });
});

