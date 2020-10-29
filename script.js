// Write your JavaScript code here!

// {/* /* This block of code shows how to format the HTML once you fetch some planetary JSON!
function randomizer(max){
    return Math.floor(Math.random() * Math.floor(max));
}

window.addEventListener("load",function() {
   let form = document.getElementById("launchForm")
    form.addEventListener("submit",function(event){
        fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then( function(json) {
                let i = randomizer(6);
                const div = document.getElementById("missionTarget");
                div.innerHTML= `
                <h2>Mission Destination</h2>
    <ol>
       <li>Name: ${json[i].name}</li>
       <li>Diameter: ${json[i].diameter}</li>
       <li>Star: ${json[i].star}</li>
       <li>Distance from Earth: ${json[i].distance}</li>
       <li>Number of Moons: ${json[i].moons}</li>
    </ol>
    <img src="${json[i].image}">`
            });
        });
let pilot = document.querySelector("input[name=pilotName]");
let copilot = document.querySelector("input[name=copilotName]");
let fuel = document.querySelector("input[name=fuelLevel]");
let cargo =document.querySelector("input[name=cargoMass]"); 

    if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === ""){
        window.alert("All Fields are Required!");
         event.preventDefault();
     }else if(isNaN(fuel.value)||isNaN(cargo.value)){
            window.alert("Please Enter a Number for Cargo and Fuel Levels!");
            event.preventDefault();
    }else if(isNaN(pilot.value) === false ||isNaN(copilot.value) === false){
       window.alert("Please Enter a Valid Name for the Pilot and Copilot");
       event.preventDefault();
    }
    });
 form.addEventListener("submit",function(event){
    let pilot = document.querySelector("input[name=pilotName]");
    let copilot = document.querySelector("input[name=copilotName]");
    let fuel = document.querySelector("input[name=fuelLevel]");
    let cargo =document.querySelector("input[name=cargoMass]"); 
 
      if (fuel.value < 10000 && fuel.value > 0){
   launchStatus.innerHTML = "Shuttle not ready for launch"
   faultyItems.style.visibility = 'visible';
   launchStatus.style.color = 'red';
   faultyItems.innerHTML= `
   <ol>
       <li>Pilot: ${pilot.value} Ready</li>
       <li>Co-pilot: ${copilot.value} Ready</li>
       <li>Fuel is too low for launch</li>
       <li>Cargo mass low enough for launch</li>
   </ol>

`;
event.preventDefault();
}  else if (cargo.value > 10000){ 
   launchStatus.innerHTML = "Shuttle not ready for launch"
   faultyItems.style.visibility = 'visible';
   launchStatus.style.color = 'red';
   faultyItems.innerHTML= `
   <ol>
       <li>Pilot: ${pilot.value} Ready</li>
       <li>Co-pilot: ${copilot.value} Ready</li>
       <li>Fuel high enough for launch</li>
       <li>Cargo mass too high for launch</li>
   </ol>

`;
event.preventDefault();
      }
 if( fuel.value > 10000 && cargo.value < 10000 ) {
          launchStatus.innerHTML = "Shuttle is ready for launch";
          launchStatus.style.color = "green";
          faultyItems.style.visibility ='hidden';
          event.preventDefault();
      }
    });
   });


