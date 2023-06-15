fetch("priceVegetable.json")
  .then(response => response.json())
  .then(value => {

    const vegetables = ["bahçe biber", "çarliston biber", "dolma biber", "kapya biber", "sivri biber", "cherry domates", "domates", "organik domates", "havuç", "kabak", "kirmizi lahana", "limon", "mantar", "marul", "nane",
      "patlican", "patates", "roka", "salatalik", "silor salatalik", "soğan", "dereotu", "maydanoz", "yeşil soğan", "salkim domates", "fasulye", "pancar"].sort()
    let newVegetables = {}

   
   

    for (let i = 0; i < vegetables.length; i++) {
      newVegetables[vegetables[i]] = {
        erenler: [],
        niktas: [],
        migros: [],
        sok: [],
        a101: [],
        carreforsa: []

      }

    

      for (const erenlerSebze of value.erenler) {
        if (erenlerSebze.Name.includes(vegetables[i])) {
          newVegetables[vegetables[i]].erenler.push({
            Name: erenlerSebze.Name,
            Price: erenlerSebze.Price
          })
        }
      }

      for (const niktasSebze of value.niktas) {
        if (niktasSebze.Name.includes(vegetables[i])) {
          newVegetables[vegetables[i]].niktas.push({
            Name: niktasSebze.Name,
            Price: niktasSebze.Price
          })
        }
      }

      for (const migrosSebze of value.migros) {
        if (migrosSebze.Name.includes(vegetables[i])) {
          newVegetables[vegetables[i]].migros.push({
            Name: migrosSebze.Name,
            Price: migrosSebze.Price
          })
        }
      }

      for (const sokSebze of value.sok) {
        if (sokSebze.Name.includes(vegetables[i])) {
          newVegetables[vegetables[i]].sok.push({
            Name: sokSebze.Name,
            Price: sokSebze.Price
          })
        }
      }

      for (const a101Sebze of value.a101) {
        if (a101Sebze.Name.includes(vegetables[i])) {
          newVegetables[vegetables[i]].a101.push({
            Name: a101Sebze.Name,
            Price: a101Sebze.Price
          })
        }
      }

      for (const carreforsaSebze of value.carreforsa) {
        if (carreforsaSebze.Name.includes(vegetables[i])) {
          newVegetables[vegetables[i]].carreforsa.push({
            Name: carreforsaSebze.Name,
            Price: carreforsaSebze.Price
          })
        }
      }
    }

    const vegetablesum = ["bahçe biber", "çarliston biber", "dolma biber", "kapya biber", "sivri biber", "cherry domates", "domates", "organik domates", "havuç", "kabak", "kirmizi lahana", "limon", "mantar", "marul", "nane",
      "patlican", "patates", "roka", "salatalik", "silor salatalik", "soğan", "dereotu", "maydanoz", "yeşil soğan", "salkim domates", "fasulye", "pancar"]
    localStorage.setItem("prices",JSON.stringify(newVegetables))
    localStorage.setItem("fruits",JSON.stringify(vegetablesum))

    let meyveYazdir = Object.keys(newVegetables).map(element => {

      let meyveHTML = `
        <div class="group col-12">
          
          <div class="meyve-container">
          <h2>${element.toUpperCase()}</h2>
          <img src="images/fruits.png" class="imgFruit">
      `;

      let erenlerHTML = newVegetables[element].erenler.map(sebze=> {
        return `
          <div class="col-lg-4 col-6">
            <img src="images/e.png" style="width: 30%;">
            <p class="name">${sebze.Name}</p>
            <p class="price">${sebze.Price}</p>
          </div>
        `;
      }).join('');

      let niktasHTML = newVegetables[element].niktas.map(sebze => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/n.png" style="width: 30%;">
            <p class="name">${sebze.Name}</p>
            <p class="price">${sebze.Price}</p>
          </div>
        `;
      }).join('');

      let migrosHTML = newVegetables[element].migros.map(sebze => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/m.png" style="width: 30%;">
            <p class="name">${sebze.Name}</p>
            <p class="price">${sebze.Price}</p>
          </div>
        `;
      }).join('');

      let sokHTML = newVegetables[element].sok.map(sebze => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/s.png" style="width: 30%;">
            <p class="name">${sebze.Name}</p>
            <p class="price">${sebze.Price}</p>
          </div>
        `;
      }).join('');

      let a101HTML = newVegetables[element].a101.map(sebze => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/a.png" style="width: 30%;">
            <p class="name">${sebze.Name}</p>
            <p class="price">${sebze.Price}</p>
          </div>
        `;
      }).join('');



      let carreforsaHTML = newVegetables[element].carreforsa.map(sebze => {
        return `
          <div class="col-lg-4 col-6">
          <img src="images/c.png" style="width: 30%;">
            <p class="name">${sebze.Name}</p>
            <p class="price">${sebze.Price}</p>
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
document.querySelector(".contentimS").appendChild(rowContent)










