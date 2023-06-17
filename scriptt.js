fetch("priceE.json")
  .then(response => response.json())
  .then(value => {

    const fruits = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"].sort()
    let newFruits = {}

   
   

    for (let i = 0; i < fruits.length; i++) {
      newFruits[fruits[i]] = {
        erenler: [],
        niktas: [],
        migros: [],
        sok: [],
        a101: [],
        carreforsa: []

      }
/*
      const markets = {
        erenler: value.erenler,
        niktas: value.niktas,
        migros: value.migros,
        sok: value.sok,
        a101: value.a101,
        carreforsa: value.carreforsa
      };


      for (const marketName in markets) {
        const marketFruits = markets[marketName];
        
        for (const marketFruit of marketFruits) {
          if (marketFruit.Name.includes(fruits)) {
            newFruits[fruits][marketName].push({
              Name: marketFruit.Name,
              Price: marketFruit.Price
            });
          }
        }
      }
         

    */
  
    

      for (const erenlerMeyve of value.erenler) {
        if (erenlerMeyve.Name.includes(fruits[i])) {
          newFruits[fruits[i]].erenler.push({
            Name: erenlerMeyve.Name,
            Price: erenlerMeyve.Price
          })
        }
      }

      for (const niktasMeyve of value.niktas) {
        if (niktasMeyve.Name.includes(fruits[i])) {
          newFruits[fruits[i]].niktas.push({
            Name: niktasMeyve.Name,
            Price: niktasMeyve.Price
          })
        }
      }

      for (const migrosMeyve of value.migros) {
        if (migrosMeyve.Name.includes(fruits[i])) {
          newFruits[fruits[i]].migros.push({
            Name: migrosMeyve.Name,
            Price: migrosMeyve.Price
          })
        }
      }

      for (const sokMeyve of value.sok) {
        if (sokMeyve.Name.includes(fruits[i])) {
          newFruits[fruits[i]].sok.push({
            Name: sokMeyve.Name,
            Price: sokMeyve.Price
          })
        }
      }

      for (const a101Meyve of value.a101) {
        if (a101Meyve.Name.includes(fruits[i])) {
          newFruits[fruits[i]].a101.push({
            Name: a101Meyve.Name,
            Price: a101Meyve.Price
          })
        }
      }

      for (const carreforsaMeyve of value.carreforsa) {
        if (carreforsaMeyve.Name.includes(fruits[i])) {
          newFruits[fruits[i]].carreforsa.push({
            Name: carreforsaMeyve.Name,
            Price: carreforsaMeyve.Price
          })
        }
      }

      
    }

    console.log(newFruits)

 

    const fruitsum = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"]
    localStorage.setItem("prices",JSON.stringify(newFruits))
    localStorage.setItem("fruits",JSON.stringify(fruitsum))

    let meyveYazdir = Object.keys(newFruits).map(element => {

      let meyveHTML = `
        <div class="group col-12">
          
          <div class="meyve-container">
          <h2>${element.toUpperCase()}</h2>
          <img src="images/fruits.png" class="imgFruit">
      `;

      let erenlerHTML = newFruits[element].erenler.map(meyve => {
        return `
          <div class="col-lg-4 col-6">
            <img src="images/e.png" style="width: 30%;">
            <p class="name">${meyve.Name}</p>
            <p class="price">${meyve.Price}</p>
          </div>
        `;
      }).join('');

      let niktasHTML = newFruits[element].niktas.map(meyve => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/n.png" style="width: 30%;">
            <p class="name">${meyve.Name}</p>
            <p class="price">${meyve.Price}</p>
          </div>
        `;
      }).join('');

      let migrosHTML = newFruits[element].migros.map(meyve => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/m.png" style="width: 30%;">
            <p class="name">${meyve.Name}</p>
            <p class="price">${meyve.Price}</p>
          </div>
        `;
      }).join('');

      let sokHTML = newFruits[element].sok.map(meyve => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/s.png" style="width: 30%;">
            <p class="name">${meyve.Name}</p>
            <p class="price">${meyve.Price}</p>
          </div>
        `;
      }).join('');

      let a101HTML = newFruits[element].a101.map(meyve => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/a.png" style="width: 30%;">
            <p class="name">${meyve.Name}</p>
            <p class="price">${meyve.Price}</p>
          </div>
        `;
      }).join('');



      let carreforsaHTML = newFruits[element].carreforsa.map(meyve => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/c.png" style="width: 30%;">
            <p class="name">${meyve.Name}</p>
            <p class="price">${meyve.Price}</p>
          </div>
        `;
      }).join('');

      meyveHTML = `
      <div class="col-sm-8 col-lg-4 border mt-5 mx-5 mb-5">

      <h2 style="color:green;">${element.toUpperCase()}</h2>
      <img src="images/fruits.png" class="imgFruit borderBottom">
          <div class="row vh-75 justify-content-center pt-3">
          ${erenlerHTML}
          
          ${niktasHTML}
          
          ${migrosHTML}

          ${carreforsaHTML}

          ${sokHTML}

          ${a101HTML}
          </div>
        
      </div>
      `;

      return meyveHTML;


    });



    document.querySelector(".meyve").innerHTML = meyveYazdir.join("")


  })


let logo = document.createElement("img")
logo.classList.add("logoStyle")
logo.setAttribute("src", "images/smt.png")
document.querySelector(".navbar-brand").appendChild(logo)


let rowContent = document.createElement("div")
rowContent.className = "row justify-content-center meyve text-center px-2 w-100 m-auto"
document.querySelector(".contentim").appendChild(rowContent)










