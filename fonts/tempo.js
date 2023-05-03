var cities = "https://api.ipma.pt/open-data/distrits-islands.json";
var weather = "http://api.ipma.pt/open-data/forecast/meteorology/cities/daily/" //+ var 

function getId(cidade) {

   console.log(cidade);
  
   var array;

   fetch(cities)
      .then((response) => response.json())
      .then((data) => {

         data.data.forEach(element => {
            if (element.local.toLowerCase() == cidade.toLowerCase()) {
               getTempo(element.globalIdLocal);
               return;
            } else {
               document.getElementById("my-element").style.display = "block";
            }
         })

      });

}

 
function getTempo(id) {
   var weather2 = weather + id + ".json"
   var api = "https://api.ipma.pt/open-data/weather-type-classe.json"
   let map = new Map();
   let currentDate = new Date();
   console.log(currentDate);
   let day = currentDate.getDate();
   let month = currentDate.getMonth();
   let year = currentDate.getFullYear();

   fetch(weather2)
      .then(response => {
         return response.json();
      })
      .then((data) => {
         console.log("ola");
         data.data.forEach(element => {
            map.set(day + "/" + (month + 1) + "/" + year, element.idWeatherType);
            day++;
         })
      });


   fetch(api)
      .then((response) => response.json())
      .then((data) => {
         for (let [key, value] of map) {
            data.data.forEach(element => {
               if (element.idWeatherType == value) {
                  map.set(key, element.descWeatherTypePT);
                  
               }
            });

         }
         preencherTabela(map)
      });



}


function preencherTabela(map) {
   document.getElementById("my-element").style.display = "none";
   const tableBody = document.querySelector('#myTable tbody');
   // Iterate over each entry in the map
   for (let [key, value] of map) {
      // Create a new row
      const newRow = tableBody.insertRow();

      // Insert the key cell
      const keyCell = newRow.insertCell();
      keyCell.textContent = key;

      // Insert the value cell
      const valueCell = newRow.insertCell();
      valueCell.textContent = value;


   }
}


function deleteTable(table) {

   const rowCount = table.rows.length;
   for (let i = rowCount - 1; i > 0; i--) {
      table.deleteRow(i);
   }

}
