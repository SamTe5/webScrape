const puppeteer = require('puppeteer');
const fs = require('fs');


(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();


  //Erenler Meyve




  await page.goto("https://www.erenlercep.com/manav/meyve-sebze/meyve");
  await page.waitForTimeout(2000);

  const data = await page.evaluate(() => {
    const events = document.querySelectorAll('.product-layout');
    const prices = [];
    const fruits = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma misket", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"]

    for (let x = 0; x < fruits.length; x++) {

      for (let i = 0; i < events.length; i++) {
        let urunE = events[i].querySelector(".name").innerText.toLowerCase().includes(fruits[x])

        if (urunE == true) {
          prices.push({
            Name: events[i].querySelector(".name").innerText.toLowerCase(),
            Price: events[i].querySelector(".price-normal").innerText.toLowerCase()

          });
        }


      }
    }


    return prices;
  });




  //carreforsa
  let dataC = []
  for (let c = 1; c < 3; c++) {
    await page.goto(`https://www.carrefoursa.com/meyve/c/1015?q=%3Arelevance%3AinStockFlag%3Atrue&page=${c}`)
    await page.waitForTimeout(2000);


    const pricesC = await page.evaluate(() => {
      const eventsC = document.querySelectorAll(".hover-box");
      const fruits = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma misket", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"]
      const pricesC = [];


      for (let x = 0; x < fruits.length; x++) {
        for (let i = 0; i < eventsC.length; i++) {
          let urunC = eventsC[i].querySelector(".item-name").innerText.toLowerCase().includes(fruits[x]);

          if (urunC == true) {
            pricesC.push({
              Name: eventsC[i].querySelector(".item-name").innerText.toLowerCase(),
              Price: eventsC[i].querySelector(".item-price").innerText.toLowerCase()
            });
          }
        }
      }


      return pricesC;
    });

    dataC.push(pricesC);



  }

  console.log(dataC)

  //Niktaş Meyve

  await page.goto("https://niktasonline.com/meyve")


  const dataN = await page.evaluate(() => {
    const eventsN = document.querySelectorAll(".details")
    const pricesE = []
    const fruits = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma misket", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"]


    for (let x = 0; x < fruits.length; x++) {
      for (let i = 0; i < eventsN.length; i++) {
        let urunN = eventsN[i].querySelector(".product-title").innerText.toLowerCase().includes(fruits[x])

        if (urunN == true) {
          pricesE.push({
            Name: eventsN[i].querySelector(".product-title").innerText.toLowerCase(),
            Price: eventsN[i].querySelector(".actual-price").innerText.toLowerCase()
          })
        }


      }
    }



    return pricesE
  })

  //Sok

  await page.goto("https://www.sokmarket.com.tr/mevsim-meyveleri-c-1401")


  const dataS = await page.evaluate(() => {
    const eventsS = document.querySelectorAll(".link-to-pages-productDetail")
    const pricesS = []
    const fruits = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma misket", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"]


    for (let x = 0; x < fruits.length; x++) {
      for (let i = 0; i < eventsS.length; i++) {
        let urunS = eventsS[i].querySelector(".content-title").innerText.toLowerCase().includes(fruits[x])

        if (urunS == true) {
          pricesS.push({
            Name: eventsS[i].querySelector(".content-title").innerText.toLowerCase(),
            Price: eventsS[i].querySelector(".pricetag").innerText.toLowerCase()
          })
        }


      }
    }



    return pricesS
  })

  //A101

  await page.goto("https://www.a101.com.tr/market/meyve-sebze/")


  const dataA = await page.evaluate(() => {
    const eventsA = document.querySelectorAll(".product-card")
    const pricesA = []
    const fruits = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma misket", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"]


    for (let x = 0; x < fruits.length; x++) {
      for (let i = 0; i < eventsA.length; i++) {
        let urunA = eventsA[i].querySelector(".name").innerText.toLowerCase().includes(fruits[x])

        if (urunA == true) {
          pricesA.push({
            Name: eventsA[i].querySelector(".name").innerText.toLowerCase(),
            Price: eventsA[i].querySelector(".current").innerText.toLowerCase()
          })
        }


      }
    }



    return pricesA
  })


  //Migros

  let dataM = [];
  for (let m = 1; m < 4; m++) {
    await page.goto(`https://www.migros.com.tr/meyve-c-65?sayfa=${m}&sirala=cok-satanlar`)

    await page.waitForTimeout(2000);



    const pricesM = await page.evaluate(() => {
      const eventsM = document.querySelectorAll(".mdc-card");
      const fruits = ["avokado", "karpuz", "muz", "kivi", "armut santa", "armut deveci", "ananas", "elma golden", "elma gran", "elma misket", "elma stark", "portakal", "şeftali", "kavun", "yeni d", "lek", "erik"]
      const pricesM = [];

      for (let x = 0; x < fruits.length; x++) {
        for (let i = 0; i < eventsM.length; i++) {
          let urunM = eventsM[i].querySelector(".product-name").innerText.toLowerCase().includes(fruits[x]);

          if (urunM == true) {
            pricesM.push({
              Name: eventsM[i].querySelector(".product-name").innerText.toLowerCase(),
              Price: eventsM[i].querySelector(".amount").innerText.toLowerCase()
            });
          }
        }
      }

      return pricesM;
    });

    dataM.push(pricesM);

  }


  let newDataC = dataC.flat()
  let newDataM = dataM.flat()



  let birleşikVeriMeyve = {
    erenler: data,
    niktas: dataN,
    migros: newDataM,
    carreforsa: newDataC,
    sok: dataS,
    a101: dataA
  }



  const jsonData = JSON.stringify(birleşikVeriMeyve, null, 2);
  fs.writeFileSync('priceE.json', jsonData);
  console.log('Veriler priceE.json dosyasına yazıldı.');



  //SEBZE



  //Erenler

  await page.goto("https://www.erenlercep.com/manav/meyve-sebze/sebze")

  const dataEV = await page.evaluate(() => {
    const eventsErenlerV = document.querySelectorAll(".product-layout")
    const priceEv = []
    const vegetables = ["bahçe b.", "çarliston b.", "dolma b.", "kapya b.", "sivri b.", "cherry d.", "domates", "organik d.", "havuç", "kabak", "kirmizi lahana", "limon", "mantar", "marul", "nane",
      "patlican", "patates", "roka", "salatalik", "silor s.", "soğan", "dereotu", "maydanoz", "yeşil s.", "salkim d.", "fasulye", "pancar"]

    for (let x = 0; x < vegetables.length; x++) {
      for (let i = 0; i < eventsErenlerV.length; i++) {
        let urunEV = eventsErenlerV[i].querySelector(".name").innerText.toLowerCase().includes(vegetables[x]);

        if (urunEV == true) {
          priceEv.push({
            Name: eventsErenlerV[i].querySelector(".name").innerText.toLowerCase(),
            Price: eventsErenlerV[i].querySelector(".price-normal").innerText.toLowerCase()
          });
        }
      }
    }




    return priceEv
  })

  //NİKTAŞ

  let dataNVS = []

  for (let n = 1; n < 3; n++) {
    await page.goto(`https://niktasonline.com/sebze#/pageSize=24&viewMode=grid&orderBy=0&pageNumber=${n}`)
    await page.waitForTimeout(2000);
    const dataNV = await page.evaluate(() => {
      const eventsNiktasV = document.querySelectorAll(".details")
      const priceNv = []
      const vegetables = ["bahçe b.", "çarliston b.", "dolma b.", "kapya b.", "sivri b.", "cherry d.", "domates", "organik d.", "havuç", "kabak", "kirmizi lahana", "limon", "mantar", "marul", "nane",
        "patlican", "patates", "roka", "salatalik", "silor s.", "soğan", "dereotu", "maydanoz", "yeşil s.", "salkim d.", "fasulye", "pancar"]

        for (let x = 0; x < vegetables.length; x++) {
          for (let i = 0; i < eventsNiktasV.length; i++) {
            let urunNV = eventsNiktasV[i].querySelector(".product-title").innerText.toLowerCase().includes(vegetables[x]);
    
            if (urunNV == true) {
              priceNv.push({
                Name: eventsNiktasV[i].querySelector(".product-title").innerText.toLowerCase(),
                Price: eventsNiktasV[i].querySelector(".actual-price").innerText.toLowerCase()
              });
            }
          }
        }

      return priceNv
    })

    dataNVS.push(dataNV)

  }

  let newDataN = dataNVS.flat()


  let birleşikVeriSebze={
    erenler:dataEV,
    niktas:newDataN
  }


  const jsonDataV = JSON.stringify(birleşikVeriSebze, null, 2);
  fs.writeFileSync('priceVegetable.json', jsonDataV);
  console.log('Veriler priceVegetable.json dosyasına yazıldı.');




  await browser.close();

})();








