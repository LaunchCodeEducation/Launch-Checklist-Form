// Write your JavaScript code here!
window.onload = () =>{
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotName = document.querySelector("input[name= pilotName]").value;
      let copilotName = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name= fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");

      if (pilotName === "" || copilotName === "" || fuelLevel ==="" || cargoMass === "")
      {
         alert("All fields required!");
      }
      if ((Number(pilotName)) || (Number(copilotName)) )
      {
         alert("Pilot Name and Co-Pilot Name cannot contain numbers!");
      }
      if (isNaN(fuelLevel) || (isNaN(cargoMass)))
      {
         alert("Fuel Level and Cargo Mass must contain a numerical value!");
         
      }
      else
      {
       document.getElementById("faultyItems").style.visibility= "visible";
       pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;
       copilotStatus.innerHTML = `Co-Pilot ${copilotName} Ready`;
       if (fuelLevel < 10000){
          launchStatus.innerHTML= "SHUTTLE NOT READY FOR LAUNCH!";
          launchStatus.style.color = "red";
          fuelStatus.innerHTML = "Not enough fuel to complete journey.";
       }
       if (cargoMass > 10000) {
         launchStatus.innerHTML= "SHUTTLE NOT READY FOR LAUNCH!";
         launchStatus.style.color = "red";
         cargoStatus.innerHTML = "Shuttle too heavy for liftoff."
         
       }
       else 
       {
         launchStatus.innerHTML= "SHUTTLE READY FOR LAUNCH!";
         launchStatus.style.color = "green"; 
       }
       let URL = "https://handlers.education.launchcode.org/static/planets.json";
       fetch(URL).then( function(response) {
         response.json().then( function(json) {
            const div = document.getElementById("missionTarget");
            // Add HTML that includes the JSON data
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[3].name}</li>
               <li>Diameter: ${json[3].diameter}</li>
               <li>Star: ${json[3].star}</li>
               <li>Distance from Earth: ${json[3].distance}</li>
               <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}">
            `;
         });
      });

      }

   });
}
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
