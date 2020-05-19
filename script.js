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
            const randomPlanet = json[Math.floor(Math.random()*json.length)];
            // Add HTML that includes the JSON data
            div.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${randomPlanet.name}</li>
               <li>Diameter: ${randomPlanet.diameter}</li>
               <li>Star: ${randomPlanet.star}</li>
               <li>Distance from Earth: ${randomPlanet.distance}</li>
               <li>Number of Moons: ${randomPlanet}.moons}</li>
            </ol>
            <img src="${randomPlanet.image}">
            `;
         });
      });

      }

   });
   form.reset();
}