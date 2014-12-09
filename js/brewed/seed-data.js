var BREWED = (function(module) {

  module.seedData = {
    styles: [
      {
        name:"American Amber Ale",
        og:1.053,
        ibu:33,
        color:14
      },
      {
        name:"American Barleywine",
        og:1.1,
        ibu:85,
        color:15
      },
      {
        name:"American Brown Ale",
        og:1.053,
        ibu:30,
        color:27
      },
      {
        name:"American IPA",
        og:1.066,
        ibu:55,
        color:11
      },
      {
        name:"American Pale Ale",
        og:1.053,
        ibu:38,
        color:10
      },
      {
        name:"American Stout",
        og:1.063,
        ibu:55,
        color:35
      },
      {
        name:"American Wheat or Rye Beer",
        og:1.047,
        ibu:23,
        color:5
      },
      {
        name:"Baltic Porter",
        og:1.075,
        ibu:30,
        color:24
      },
      {
        name:"Belgian Blond Ale",
        og:1.069,
        ibu:23,
        color:6
      },
      {
        name:"Belgian Dark Strong Ale",
        og:1.093,
        ibu:28,
        color:17
      },
      {
        name:"Belgian Dubbel",
        og:1.069,
        ibu:20,
        color:14
      },
      {
        name:"Belgian Golden Strong Ale",
        og:1.083,
        ibu:29,
        color:5
      },
      {
        name:"Belgian Pale Ale",
        og:1.051,
        ibu:25,
        color:11
      },
      {
        name:"Belgian Specialty Ale",
        og:1.075,
        ibu:60,
        color:20
      },
      {
        name:"Belgian Tripel",
        og:1.08,
        ibu:30,
        color:6
      },
      {
        name:"Berliner Weisse",
        og:1.03,
        ibu:6,
        color:3
      },
      {
        name:"Bière de Garde",
        og:1.07,
        ibu:23,
        color:13
      },
      {
        name:"Blonde Ale",
        og:1.046,
        ibu:22,
        color:5
      },
      {
        name:"Bohemian Pilsener",
        og:1.05,
        ibu:40,
        color:5
      },
      {
        name:"Brown Porter",
        og:1.046,
        ibu:27,
        color:25
      },
      {
        name:"California Common Beer",
        og:1.051,
        ibu:38,
        color:12
      },
      {
        name:"Christmas/Winter Specialty Spiced Beer",
        og:1.075,
        ibu:60,
        color:20
      },
      {
        name:"Classic American Pilsner",
        og:1.052,
        ibu:33,
        color:5
      },
      {
        name:"Classic Rauchbier",
        og:1.054,
        ibu:25,
        color:17
      },
      {
        name:"Cream Ale",
        og:1.049,
        ibu:18,
        color:4
      },
      {
        name:"Dark American Lager",
        og:1.05,
        ibu:14,
        color:18
      },
      {
        name:"Doppelbock",
        og:1.092,
        ibu:21,
        color:16
      },
      {
        name:"Dortmunder Export",
        og:1.052,
        ibu:27,
        color:5
      },
      {
        name:"Dry Stout",
        og:1.043,
        ibu:38,
        color:33
      },
      {
        name:"Dunkelweizen",
        og:1.05,
        ibu:14,
        color:19
      },
      {
        name:"Düsseldorf Altbier",
        og:1.05,
        ibu:43,
        color:14
      },
      {
        name:"Eisbock",
        og:1.099,
        ibu:30,
        color:24
      },
      {
        name:"English Barleywine",
        og:1.1,
        ibu:53,
        color:15
      },
      {
        name:"English IPA",
        og:1.063,
        ibu:50,
        color:11
      },
      {
        name:"Extra Special/Strong Bitter (English Pale Ale)",
        og:1.054,
        ibu:40,
        color:12
      },
      {
        name:"Flanders Brown Ale/Oud Bruin",
        og:1.057,
        ibu:23,
        color:19
      },
      {
        name:"Flanders Red Ale",
        og:1.053,
        ibu:18,
        color:13
      },
      {
        name:"Foreign Extra Stout",
        og:1.066,
        ibu:50,
        color:35
      },
      {
        name:"Fruit Beer",
        og:1.075,
        ibu:60,
        color:20
      },
      {
        name:"Fruit Lambic",
        og:1.05,
        ibu:5,
        color:5
      },
      {
        name:"German Pilsner (Pils)",
        og:1.047,
        ibu:35,
        color:4
      },
      {
        name:"Gueuze",
        og:1.05,
        ibu:5,
        color:5
      },
      {
        name:"Imperial IPA",
        og:1.08,
        ibu:90,
        color:12
      },
      {
        name:"Irish Red Ale",
        og:1.052,
        ibu:23,
        color:14
      },
      {
        name:"Kölsch",
        og:1.047,
        ibu:25,
        color:4
      },
      {
        name:"Lite American Lager",
        og:1.042,
        ibu:10,
        color:3
      },
      {
        name:"Maibock/Helles Bock",
        og:1.068,
        ibu:29,
        color:9
      },
      {
        name:"Mild",
        og:1.034,
        ibu:18,
        color:19
      },
      {
        name:"Munich Dunkel",
        og:1.052,
        ibu:23,
        color:21
      },
      {
        name:"Munich Helles",
        og:1.048,
        ibu:19,
        color:4
      },
      {
        name:"Northern English Brown Ale",
        og:1.046,
        ibu:25,
        color:17
      },
      {
        name:"Northern German Altbier",
        og:1.05,
        ibu:33,
        color:16
      },
      {
        name:"Oatmeal Stout",
        og:1.057,
        ibu:33,
        color:31
      },
      {
        name:"Oktoberfest/Märzen",
        og:1.054,
        ibu:24,
        color:11
      },
      {
        name:"Old Ale",
        og:1.075,
        ibu:45,
        color:16
      },
      {
        name:"Other Smoked Beer",
        og:1.075,
        ibu:60,
        color:20
      },
      {
        name:"Premium American Lager",
        og:1.051,
        ibu:20,
        color:4
      },
      {
        name:"Robust Porter",
        og:1.057,
        ibu:38,
        color:29
      },
      {
        name:"Roggenbier (German Rye Beer)",
        og:1.051,
        ibu:15,
        color:17
      },
      {
        name:"Russian Imperial Stout",
        og:1.095,
        ibu:70,
        color:35
      },
      {
        name:"Saison",
        og:1.057,
        ibu:28,
        color:10
      },
      {
        name:"Schwarzbier (Black Beer)",
        og:1.049,
        ibu:27,
        color:24
      },
      {
        name:"Scottish Export 80/-",
        og:1.047,
        ibu:23,
        color:13
      },
      {
        name:"Scottish Heavy 70/-",
        og:1.038,
        ibu:18,
        color:13
      },
      {
        name:"Scottish Light 60/-",
        og:1.033,
        ibu:15,
        color:13
      },
      {
        name:"Southern English Brown",
        og:1.038,
        ibu:16,
        color:27
      },
      {
        name:"Special/Best/Premium Bitter",
        og:1.044,
        ibu:33,
        color:11
      },
      {
        name:"Specialty Beer",
        og:1.075,
        ibu:60,
        color:20
      },
      {
        name:"Spice, Herb, or Vegetable Beer",
        og:1.075,
        ibu:60,
        color:20
      },
      {
        name:"Standard American Lager",
        og:1.045,
        ibu:12,
        color:3
      },
      {
        name:"Standard/Ordinary Bitter",
        og:1.036,
        ibu:30,
        color:9
      },
      {
        name:"Straight (Unblended) Lambic",
        og:1.047,
        ibu:5,
        color:5
      },
      {
        name:"Strong Scotch Ale",
        og:1.1,
        ibu:26,
        color:20
      },
      {
        name:"Sweet Stout",
        og:1.052,
        ibu:30,
        color:35
      },
      {
        name:"Traditional Bock",
        og:1.068,
        ibu:24,
        color:18
      },
      {
        name:"Vienna Lager",
        og:1.049,
        ibu:24,
        color:13
      },
      {
        name:"Weizenbock",
        og:1.077,
        ibu:23,
        color:19
      },
      {
        name:"Weizen/Weissbier",
        og:1.048,
        ibu:12,
        color:5
      },
      {
        name:"Witbier",
        og:1.048,
        ibu:15,
        color:3
      },
      {
        name:"Wood-Aged Beer",
        og:1.075,
        ibu:60,
        color:20
      }
    ],
    fermentables: [
      {
        "color":3,
        "name":"Acidulated Malt (DE)",
        "ppg":27,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"CaraFoam (DE)",
        "ppg":37,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Caramel Pils (BE)",
        "ppg":35,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Carapils (DE)",
        "ppg":35,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Carapils (Dextrine Malt) (US)",
        "ppg":33,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Dextrine Malt (UK)",
        "ppg":33,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Flaked Barley",
        "ppg":32,
        "type":"Adjunct"
      },
      {
        "color":0,
        "name":"Flaked Corn",
        "ppg":40,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Flaked Oats",
        "ppg":33,
        "type":"Adjunct"
      },
      {
        "color":0,
        "name":"Flaked Rice",
        "ppg":40,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Flaked Rye",
        "ppg":36,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Flaked Wheat",
        "ppg":34,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Floor-Malted Bohemian Wheat (DE)",
        "ppg":38,
        "type":"Adjunct"
      },
      {
        "color":10,
        "name":"Golden Naked Oats (UK)",
        "ppg":33,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Grits",
        "ppg":37,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Malted Naked Oats (UK)",
        "ppg":33,
        "type":"Adjunct"
      },
      {
        "color":550,
        "name":"Midnight Wheat Malt (US)",
        "ppg":33,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Oat Malt (UK)",
        "ppg":28,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Pale Wheat (DE)",
        "ppg":36,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Peated Malt (UK)",
        "ppg":38,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Red Wheat (US)",
        "ppg":38,
        "type":"Adjunct"
      },
      {
        "color":0,
        "name":"Rice Hulls",
        "ppg":0,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Rolled Oats",
        "ppg":33,
        "type":"Adjunct"
      },
      {
        "color":3,
        "name":"Rye (DE)",
        "ppg":38,
        "type":"Adjunct"
      },
      {
        "color":3,
        "name":"Rye (US)",
        "ppg":38,
        "type":"Adjunct"
      },
      {
        "color":3,
        "name":"Smoked Malt (DE)",
        "ppg":37,
        "type":"Adjunct"
      },
      {
        "color":5,
        "name":"Smoked Malt (US)",
        "ppg":37,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Spelt Malt (DE)",
        "ppg":37,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Torrified Barley",
        "ppg":36,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Torrified Wheat",
        "ppg":36,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Unmalted Wheat (BE)",
        "ppg":36,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Wheat (BE)",
        "ppg":38,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Wheat (UK)",
        "ppg":37,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"Wheat (US)",
        "ppg":38,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"Wheat Malt (DE)",
        "ppg":37,
        "type":"Adjunct"
      },
      {
        "color":2,
        "name":"White Wheat  (US)",
        "ppg":40,
        "type":"Adjunct"
      },
      {
        "color":1,
        "name":"2-Row (US)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"6-Row (US)",
        "ppg":35,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Bohemian Pilsner (DE)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":6,
        "name":"Floor-Malted Bohemian Dark Pilsner (DE)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Floor-Malted Bohemian Pilsner (DE)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":3,
        "name":"Golden Promise (UK)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":2,
        "name":"Halcyon (UK)",
        "ppg":36,
        "type":"Base Malt"
      },
      {
        "color":2,
        "name":"K\\u00f6lsch (DE)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Lager (UK)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":3,
        "name":"Maris Otter Pale (UK)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":3,
        "name":"Mild (UK)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":2,
        "name":"Optic (UK)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":30,
        "name":"Pale 2-Row - Toasted (US)",
        "ppg":33,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Pale 2-Row (CA)",
        "ppg":36,
        "type":"Base Malt"
      },
      {
        "color":2,
        "name":"Pale 2-Row (UK)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Pale 2-Row (US)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Pale 6-Row (US)",
        "ppg":35,
        "type":"Base Malt"
      },
      {
        "color":3,
        "name":"Pale Ale (BE)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":2,
        "name":"Pale Ale (DE)",
        "ppg":39,
        "type":"Base Malt"
      },
      {
        "color":3,
        "name":"Pale Ale (US)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":3,
        "name":"Pale Ale (CA)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":2,
        "name":"Pale Wheat (CA)",
        "ppg":36,
        "type":"Base Malt"
      },
      {
        "color":2,
        "name":"Pearl (UK)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Pilsen (UK)",
        "ppg":36,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Pilsner (BE)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Pilsner (DE)",
        "ppg":38,
        "type":"Base Malt"
      },
      {
        "color":1,
        "name":"Pilsner (US)",
        "ppg":37,
        "type":"Base Malt"
      },
      {
        "color":22,
        "name":"Cara 20L (BE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":42,
        "name":"Cara 45L (BE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":17,
        "name":"Cara Malt (UK)",
        "ppg":35,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":23,
        "name":"CaraAmber (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":130,
        "name":"CaraAroma (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":13,
        "name":"CaraBelge (DE)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":75,
        "name":"CaraBohemian (DE)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":340,
        "name":"Carafa I (DE)",
        "ppg":32,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":425,
        "name":"Carafa II (DE)",
        "ppg":32,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":535,
        "name":"Carafa III (DE)",
        "ppg":32,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":11,
        "name":"CaraHell (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":10,
        "name":"Caramel/Crystal 10L (US)",
        "ppg":35,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":120,
        "name":"Caramel/Crystal 120L (US)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":150,
        "name":"Caramel/Crystal 150L (US)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":15,
        "name":"Caramel/Crystal 15L (US)",
        "ppg":35,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":20,
        "name":"Caramel/Crystal 20L (US)",
        "ppg":35,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":30,
        "name":"Caramel/Crystal 30L (US)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":40,
        "name":"Caramel/Crystal 40L (US)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":60,
        "name":"Caramel/Crystal 60L (US)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":75,
        "name":"Caramel/Crystal 75L (US)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":80,
        "name":"Caramel/Crystal 80L (US)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":90,
        "name":"Caramel/Crystal 90L (US)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":8,
        "name":"Caramel Pils (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":46,
        "name":"Caramel Wheat (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":39,
        "name":"CaraMunich I (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":46,
        "name":"CaraMunich II (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":57,
        "name":"CaraMunich III (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":20,
        "name":"CaraRed (DE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":140,
        "name":"Crystal 140L (UK)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":15,
        "name":"Crystal 15L (UK)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":30,
        "name":"Crystal 30L (UK)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":45,
        "name":"Crystal 45L (UK)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":50,
        "name":"Crystal 50L (UK)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":60,
        "name":"Crystal 60L (UK)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":70,
        "name":"Crystal 70L (UK)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":90,
        "name":"Crystal 90L (UK)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":40,
        "name":"Crystal 40L (CA)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":15,
        "name":"Crystal 15L (CA)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":60,
        "name":"Crystal 60L (CA)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":120,
        "name":"Crystal 120L (CA)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":90,
        "name":"Crystal Rye (UK)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":80,
        "name":"Dark Crystal 80L (UK)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":340,
        "name":"De-Husked Caraf I (DE)",
        "ppg":32,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":418,
        "name":"De-Husked Caraf II (DE)",
        "ppg":32,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":470,
        "name":"De-Husked Caraf III (DE)",
        "ppg":32,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":120,
        "name":"Extra Dark Crystal 120L (UK)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":160,
        "name":"Extra Dark Crystal 160L (UK)",
        "ppg":33,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":25,
        "name":"Honey Malt (CA)",
        "ppg":37,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":115,
        "name":"Special B (BE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":20,
        "name":"Caramel Vienne 20L",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      },
      {
        "color":10,
        "name":"Dry Malt Extract - Amber",
        "ppg":42,
        "type":"Dry Extract"
      },
      {
        "color":30,
        "name":"Dry Malt Extract - Dark",
        "ppg":44,
        "type":"Dry Extract"
      },
      {
        "color":2,
        "name":"Dry Malt Extract - Extra Light",
        "ppg":42,
        "type":"Dry Extract"
      },
      {
        "color":4,
        "name":"Dry Malt Extract - Light",
        "ppg":42,
        "type":"Dry Extract"
      },
      {
        "color":8,
        "name":"Dry Malt Extract - Munich",
        "ppg":42,
        "type":"Dry Extract"
      },
      {
        "color":2,
        "name":"Dry Malt Extract - Pilsen",
        "ppg":42,
        "type":"Dry Extract"
      },
      {
        "color":3,
        "name":"Dry Malt Extract - Wheat",
        "ppg":42,
        "type":"Dry Extract"
      },
      {
        "color":1,
        "name":"Rice Syrup Solids",
        "ppg":37,
        "type":"Dry Extract"
      },
      {
        "color":17,
        "name":"Abbey Malt  (DE)",
        "ppg":33,
        "type":"Grain"
      },
      {
        "color":27,
        "name":"Amber (UK)",
        "ppg":32,
        "type":"Grain"
      },
      {
        "color":5,
        "name":"Ashbourne Mild (US)",
        "ppg":30,
        "type":"Grain"
      },
      {
        "color":65,
        "name":"Brown Malt (UK)",
        "ppg":32,
        "type":"Grain"
      },
      {
        "color":55,
        "name":"CaraBrown (US)",
        "ppg":34,
        "type":"Grain"
      },
      {
        "color":55,
        "name":"CaraCrystal Wheat Malt (US)",
        "ppg":34,
        "type":"Grain"
      },
      {
        "color":34,
        "name":"Carastan 30L (UK)",
        "ppg":35,
        "type":"Grain"
      },
      {
        "color":15,
        "name":"Carastan Light 15L (UK)",
        "ppg":35,
        "type":"Grain"
      },
      {
        "color":3,
        "name":"ESB Malt (CA)",
        "ppg":36,
        "type":"Grain"
      },
      {
        "color":33,
        "name":"Aromatic (BE)",
        "ppg":38,
        "type":"Kilned Malt"
      },
      {
        "color":20,
        "name":"Aromatic Malt (US)",
        "ppg":35,
        "type":"Kilned Malt"
      },
      {
        "color":20,
        "name":"Aromatic Malt (UK)",
        "ppg":35,
        "type":"Kilned Malt"
      },
      {
        "color":23,
        "name":"Biscuit (BE)",
        "ppg":35,
        "type":"Kilned Malt"
      },
      {
        "color":10,
        "name":"Bonlander Munich (US)",
        "ppg":36,
        "type":"Kilned Malt"
      },
      {
        "color":50,
        "name":"CaraMunich (BE)",
        "ppg":33,
        "type":"Kilned Malt"
      },
      {
        "color":20,
        "name":"CaraVienne (BE)",
        "ppg":34,
        "type":"Kilned Malt"
      },
      {
        "color":10,
        "name":"Dark Munich (DE)",
        "ppg":36,
        "type":"Kilned Malt"
      },
      {
        "color":6,
        "name":"Dark Wheat (DE)",
        "ppg":39,
        "type":"Kilned Malt"
      },
      {
        "color":25,
        "name":"Melanoidin (DE)",
        "ppg":37,
        "type":"Kilned Malt"
      },
      {
        "color":60,
        "name":"Munich - 60L (US)",
        "ppg":33,
        "type":"Kilned Malt"
      },
      {
        "color":20,
        "name":"Munich - Dark 20L (US)",
        "ppg":33,
        "type":"Kilned Malt"
      },
      {
        "color":10,
        "name":"Munich - Light 10L (US)",
        "ppg":33,
        "type":"Kilned Malt"
      },
      {
        "color":6,
        "name":"Munich (BE)",
        "ppg":38,
        "type":"Kilned Malt"
      },
      {
        "color":6,
        "name":"Munich (UK)",
        "ppg":37,
        "type":"Kilned Malt"
      },
      {
        "color":32,
        "name":"Munich Dark (CA)",
        "ppg":34,
        "type":"Kilned Malt"
      },
      {
        "color":15,
        "name":"Munich Dark (DE)",
        "ppg":37,
        "type":"Kilned Malt"
      },
      {
        "color":10,
        "name":"Munich Light (CA)",
        "ppg":34,
        "type":"Kilned Malt"
      },
      {
        "color":6,
        "name":"Munich Light (DE)",
        "ppg":37,
        "type":"Kilned Malt"
      },
      {
        "color":28,
        "name":"Victory (US)",
        "ppg":34,
        "type":"Kilned Malt"
      },
      {
        "color":4,
        "name":"Vienna (DE)",
        "ppg":37,
        "type":"Kilned Malt"
      },
      {
        "color":4,
        "name":"Vienna (US)",
        "ppg":35,
        "type":"Kilned Malt"
      },
      {
        "color":4,
        "name":"Vienna (UK)",
        "ppg":35,
        "type":"Kilned Malt"
      },
      {
        "color":40,
        "name":"Belgian Candi Syrup - Amber",
        "ppg":32,
        "type":"Liquid Extract"
      },
      {
        "color":0,
        "name":"Belgian Candi Syrup - Clear",
        "ppg":32,
        "type":"Liquid Extract"
      },
      {
        "color":160,
        "name":"Belgian Candi Syrup - D2",
        "ppg":32,
        "type":"Liquid Extract"
      },
      {
        "color":80,
        "name":"Belgian Candi Syrup - Dark",
        "ppg":32,
        "type":"Liquid Extract"
      },
      {
        "color":2,
        "name":"Brown Rice Syrup",
        "ppg":44,
        "type":"Liquid Extract"
      },
      {
        "color":10,
        "name":"Liquid Malt Extract - Amber",
        "ppg":35,
        "type":"Liquid Extract"
      },
      {
        "color":30,
        "name":"Liquid Malt Extract - Dark",
        "ppg":35,
        "type":"Liquid Extract"
      },
      {
        "color":2,
        "name":"Liquid Malt Extract - Extra Light",
        "ppg":37,
        "type":"Liquid Extract"
      },
      {
        "color":4,
        "name":"Liquid Malt Extract - Light",
        "ppg":35,
        "type":"Liquid Extract"
      },
      {
        "color":8,
        "name":"Liquid Malt Extract - Munich",
        "ppg":35,
        "type":"Liquid Extract"
      },
      {
        "color":2,
        "name":"Liquid Malt Extract - Pilsen",
        "ppg":35,
        "type":"Liquid Extract"
      },
      {
        "color":3,
        "name":"Liquid Malt Extract - Wheat",
        "ppg":35,
        "type":"Liquid Extract"
      },
      {
        "color":530,
        "name":"Black Barley (US)",
        "ppg":27,
        "type":"Roasted Malt"
      },
      {
        "color":500,
        "name":"Black Malt (US)",
        "ppg":28,
        "type":"Roasted Malt"
      },
      {
        "color":500,
        "name":"Black Malt (UK)",
        "ppg":28,
        "type":"Roasted Malt"
      },
      {
        "color":525,
        "name":"Black Patent (UK)",
        "ppg":27,
        "type":"Roasted Malt"
      },
      {
        "color":500,
        "name":"Blackprinz (US)",
        "ppg":36,
        "type":"Roasted Malt"
      },
      {
        "color":340,
        "name":"Chocolate (BE)",
        "ppg":30,
        "type":"Roasted Malt"
      },
      {
        "color":425,
        "name":"Chocolate (UK)",
        "ppg":34,
        "type":"Roasted Malt"
      },
      {
        "color":350,
        "name":"Chocolate (US)",
        "ppg":29,
        "type":"Roasted Malt"
      },
      {
        "color":240,
        "name":"Chocolate Rye (DE)",
        "ppg":32,
        "type":"Roasted Malt"
      },
      {
        "color":413,
        "name":"Chocolate Wheat (DE)",
        "ppg":31,
        "type":"Roasted Malt"
      },
      {
        "color":150,
        "name":"Coffee Malt (UK)",
        "ppg":36,
        "type":"Roasted Malt"
      },
      {
        "color":420,
        "name":"Dark Chocolate (US)",
        "ppg":29,
        "type":"Roasted Malt"
      },
      {
        "color":566,
        "name":"De-Bittered Black (BE)",
        "ppg":34,
        "type":"Roasted Malt"
      },
      {
        "color":207,
        "name":"Pale Chocolate (UK)",
        "ppg":33,
        "type":"Roasted Malt"
      },
      {
        "color":575,
        "name":"Roasted Barley (BE)",
        "ppg":30,
        "type":"Roasted Malt"
      },
      {
        "color":550,
        "name":"Roasted Barley (UK)",
        "ppg":29,
        "type":"Roasted Malt"
      },
      {
        "color":300,
        "name":"Roasted Barley (US)",
        "ppg":33,
        "type":"Roasted Malt"
      },
      {
        "color":50,
        "name":"Special Roast (US)",
        "ppg":33,
        "type":"Roasted Malt"
      },
      {
        "color":60,
        "name":"Belgian Candi Sugar - Amber/Brown",
        "ppg":38,
        "type":"Sugar"
      },
      {
        "color":0,
        "name":"Belgian Candi Sugar - Clear/Blond",
        "ppg":38,
        "type":"Sugar"
      },
      {
        "color":275,
        "name":"Belgian Candi Sugar - Dark",
        "ppg":38,
        "type":"Sugar"
      },
      {
        "color":15,
        "name":"Brown Sugar",
        "ppg":45,
        "type":"Sugar"
      },
      {
        "color":0,
        "name":"Cane Sugar",
        "ppg":46,
        "type":"Sugar"
      },
      {
        "color":0,
        "name":"Corn Syrup",
        "ppg":37,
        "type":"Sugar"
      },
      {
        "color":0,
        "name":"Dextrose (Corn Sugar)",
        "ppg":46,
        "type":"Sugar"
      },
      {
        "color":2,
        "name":"Honey ",
        "ppg":42,
        "type":"Sugar"
      },
      {
        "color":2,
        "name":"Honey (Buckwheat)",
        "ppg":42,
        "type":"Sugar"
      },
      {
        "color":1,
        "name":"Invert Sugar",
        "ppg":46,
        "type":"Sugar"
      },
      {
        "color":1,
        "name":"Lactose (Milk Sugar)",
        "ppg":41,
        "type":"Sugar"
      },
      {
        "color":0,
        "name":"Maltodextrin ",
        "ppg":39,
        "type":"Sugar"
      },
      {
        "color":35,
        "name":"Maple Syrup",
        "ppg":30,
        "type":"Sugar"
      },
      {
        "color":80,
        "name":"Molasses ",
        "ppg":36,
        "type":"Sugar"
      },
      {
        "color":5,
        "name":"Soft Candi Sugar - Blond",
        "ppg":38,
        "type":"Sugar"
      },
      {
        "color":60,
        "name":"Soft Candi Sugar - Brown",
        "ppg":38,
        "type":"Sugar"
      },
      {
        "color":10,
        "name":"Turbinado",
        "ppg":44,
        "type":"Sugar"
      },
      {
        "color":1,
        "name":"White Sorghum Syrup",
        "ppg":44,
        "type":"Sugar"
      },
      {
        "color":0,
        "name":"Sucrose (Table Sugar)",
        "ppg":46,
        "type":"Sugar"
      },
      {
        "color":46,
        "name":"Cara Gold (BE)",
        "ppg":34,
        "type":"Caramel/Crystal Malt"
      }
    ],
    hops: [
      {
        name: "Cascade",
        alpha: 6
      },
      {
        name: "Amarillo",
        alpha: 10
      },
      {
        name: "Citra",
        alpha: 12
      },
      {
        name: "Chinook",
        alpha: 12
      },
      {
        name: "Simcoe",
        alpha: 13
      },
      {
        name: "Magnum",
        alpha: 12
      },
      {
        name: "Warrior",
        alpha: 16
      },
      {
        name: "Nugget",
        alpha: 12.5
      },
    ],
    yeasts: [
      {
        name: "California Ale (WLP001)",
        attenuation: 75
      },
      {
        name: "British Ale (WLP002)",
        attenuation: 68
      },
      {
        name: "Irish Ale (WLP004)",
        attenuation: 72
      },
      {
        name: "British Ale (WLP005)",
        attenuation: 70
      },
    ],
    extras: []
  };

  return module;

}(BREWED || {}));
