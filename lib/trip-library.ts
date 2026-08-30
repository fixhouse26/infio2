export type LibraryCity = {
  name: string;
  nights: number;
  image: string;
  highlights: string[];
  dailyActivityLow: number;
  dailyActivityHigh: number;
};

export type DestinationLibrary = {
  aliases: string[];
  title: string;
  currency: "USD";
  hotelNight: Record<"3star"|"4star"|"5star", [number, number]>;
  flightPerPerson: [number, number];
  localTransportPerDay: [number, number];
  mealsPerPersonDay: [number, number];
  cities: LibraryCity[];
};

const img = (id:string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1400&q=82`;

export const TRIP_LIBRARY: Record<string, DestinationLibrary> = {
  italy: {
    aliases:["italy","rome","florence","venice","amalfi","tuscany"],
    title:"Italian Escape", currency:"USD",
    hotelNight:{ "3star":[150,230], "4star":[230,390], "5star":[430,800] },
    flightPerPerson:[850,1450], localTransportPerDay:[55,95], mealsPerPersonDay:[65,120],
    cities:[
      {name:"Rome",nights:3,image:img("photo-1552832230-c0197dd311b5"),highlights:["Colosseum & Roman Forum","Vatican Museums & St. Peter’s Basilica","Trevi Fountain & Spanish Steps","Piazza Navona evening stroll"],dailyActivityLow:60,dailyActivityHigh:180},
      {name:"Florence",nights:2,image:img("photo-1543429776-2782fc8e1acd"),highlights:["Duomo & historic center","Uffizi or Accademia","Tuscan food experience","Ponte Vecchio at sunset"],dailyActivityLow:55,dailyActivityHigh:160},
      {name:"Venice",nights:2,image:img("photo-1523906834658-6e24ef2386f9"),highlights:["St. Mark’s Square","Grand Canal","Rialto neighborhood","Optional Murano & Burano"],dailyActivityLow:55,dailyActivityHigh:165},
      {name:"Amalfi Coast",nights:2,image:img("photo-1533104816931-20fa691ff6ca"),highlights:["Positano","Amalfi & Ravello","Coastal boat experience","Relaxed seaside free time"],dailyActivityLow:70,dailyActivityHigh:210},
    ]
  },
  japan: {
    aliases:["japan","tokyo","kyoto","osaka"],
    title:"Japan Discovery", currency:"USD",
    hotelNight:{ "3star":[120,210], "4star":[210,360], "5star":[390,720] },
    flightPerPerson:[800,1350], localTransportPerDay:[45,90], mealsPerPersonDay:[55,105],
    cities:[
      {name:"Tokyo",nights:3,image:img("photo-1540959733332-eab4deabeeaf"),highlights:["Shibuya & Harajuku","Asakusa & Senso-ji","Tokyo skyline","Food neighborhood exploration"],dailyActivityLow:45,dailyActivityHigh:150},
      {name:"Hakone / Mt. Fuji",nights:1,image:img("photo-1490806843957-31f4c9a91c65"),highlights:["Mt. Fuji views","Lake Ashi","Onsen experience","Scenic ropeway"],dailyActivityLow:50,dailyActivityHigh:160},
      {name:"Kyoto",nights:3,image:img("photo-1493976040374-85c8e12f0c0e"),highlights:["Fushimi Inari","Arashiyama","Kiyomizu-dera","Traditional tea experience"],dailyActivityLow:45,dailyActivityHigh:145},
      {name:"Osaka",nights:2,image:img("photo-1590559899731-a382839e5549"),highlights:["Dotonbori","Osaka Castle","Street-food evening","Optional Universal Studios Japan"],dailyActivityLow:45,dailyActivityHigh:170},
    ]
  },
  europe: {
    aliases:["europe","paris","london","switzerland","amsterdam"],
    title:"European Highlights", currency:"USD",
    hotelNight:{ "3star":[170,270], "4star":[260,430], "5star":[470,900] },
    flightPerPerson:[800,1350], localTransportPerDay:[60,120], mealsPerPersonDay:[70,130],
    cities:[
      {name:"London",nights:3,image:img("photo-1513635269975-59663e0ac1ad"),highlights:["Westminster & Big Ben","Tower of London","Covent Garden","Optional West End show"],dailyActivityLow:65,dailyActivityHigh:190},
      {name:"Paris",nights:3,image:img("photo-1502602898657-3e91760cbb34"),highlights:["Eiffel Tower","Louvre or Musée d’Orsay","Seine & Latin Quarter","Montmartre"],dailyActivityLow:65,dailyActivityHigh:200},
      {name:"Swiss Alps",nights:3,image:img("photo-1500530855697-b586d89ba3ee"),highlights:["Mountain excursion","Scenic rail","Lake town exploration","Free alpine afternoon"],dailyActivityLow:80,dailyActivityHigh:240},
    ]
  },
  dubai: {
    aliases:["dubai","uae"],
    title:"Dubai Escape", currency:"USD",
    hotelNight:{ "3star":[100,180], "4star":[170,310], "5star":[330,850] },
    flightPerPerson:[850,1400], localTransportPerDay:[50,105], mealsPerPersonDay:[60,125],
    cities:[
      {name:"Dubai",nights:5,image:img("photo-1512453979798-5ea266f8880c"),highlights:["Burj Khalifa & Downtown","Old Dubai & souks","Desert safari","Marina or beach free time"],dailyActivityLow:60,dailyActivityHigh:210},
    ]
  },
  maldives: {
    aliases:["maldives"],
    title:"Maldives Island Escape", currency:"USD",
    hotelNight:{ "3star":[180,320], "4star":[320,600], "5star":[650,1500] },
    flightPerPerson:[950,1650], localTransportPerDay:[35,100], mealsPerPersonDay:[85,180],
    cities:[
      {name:"Maldives Resort",nights:5,image:img("photo-1514282401047-d79a71a590e8"),highlights:["Resort arrival & lagoon time","Snorkeling","Sunset cruise","Spa or water-sports day"],dailyActivityLow:35,dailyActivityHigh:230},
    ]
  },
  india: {
    aliases:["india","delhi","agra","jaipur","golden triangle"],
    title:"India Discovery", currency:"USD",
    hotelNight:{ "3star":[65,120], "4star":[110,210], "5star":[220,500] },
    flightPerPerson:[850,1450], localTransportPerDay:[30,85], mealsPerPersonDay:[35,80],
    cities:[
      {name:"Delhi",nights:2,image:img("photo-1587474260584-136574528ed5"),highlights:["Old Delhi","India Gate & New Delhi","Cultural food experience","Flexible family/free time"],dailyActivityLow:30,dailyActivityHigh:110},
      {name:"Agra",nights:1,image:img("photo-1564507592333-c60657eea523"),highlights:["Taj Mahal","Agra Fort","Local crafts"],dailyActivityLow:30,dailyActivityHigh:105},
      {name:"Jaipur",nights:2,image:img("photo-1477587458883-47145ed94245"),highlights:["Amber Fort","City Palace","Hawa Mahal","Local market & dining"],dailyActivityLow:30,dailyActivityHigh:115},
    ]
  },
  hawaii: {
    aliases:["hawaii","maui","oahu","honolulu"],
    title:"Hawaiian Escape", currency:"USD",
    hotelNight:{ "3star":[210,330], "4star":[320,520], "5star":[550,1050] },
    flightPerPerson:[350,750], localTransportPerDay:[65,130], mealsPerPersonDay:[75,140],
    cities:[
      {name:"Oahu",nights:4,image:img("photo-1507876466758-bc54f384809c"),highlights:["Waikiki","Pearl Harbor","North Shore","Beach & free time"],dailyActivityLow:45,dailyActivityHigh:170},
      {name:"Maui",nights:4,image:img("photo-1542259009477-d625272157b7"),highlights:["Road to Hana","Haleakalā","Snorkeling","Resort free day"],dailyActivityLow:50,dailyActivityHigh:195},
    ]
  },
  mexico: {
    aliases:["mexico","cancun","riviera maya","los cabos","cabo"],
    title:"Mexico Sun Escape", currency:"USD",
    hotelNight:{ "3star":[120,220], "4star":[210,390], "5star":[420,850] },
    flightPerPerson:[300,650], localTransportPerDay:[40,90], mealsPerPersonDay:[50,110],
    cities:[
      {name:"Riviera Maya",nights:5,image:img("photo-1510097467424-192d713fd8b2"),highlights:["Beach/resort time","Cenote or eco-park","Mayan ruins","Flexible all-inclusive day"],dailyActivityLow:45,dailyActivityHigh:185},
    ]
  },
  caribbean: {
    aliases:["caribbean","jamaica","aruba"],
    title:"Caribbean Escape", currency:"USD",
    hotelNight:{ "3star":[150,260], "4star":[250,450], "5star":[480,950] },
    flightPerPerson:[400,800], localTransportPerDay:[45,100], mealsPerPersonDay:[60,125],
    cities:[
      {name:"Caribbean Resort",nights:5,image:img("photo-1540202404-a2f29016b523"),highlights:["Beach arrival day","Island highlights","Water activity","Free resort day"],dailyActivityLow:40,dailyActivityHigh:185},
    ]
  }
};

export function findDestination(destination:string) {
  const raw=(destination || "").trim();
  const q = raw.toLowerCase();
  const key = Object.keys(TRIP_LIBRARY).find(k => k === q || TRIP_LIBRARY[k].aliases.some(a => q.includes(a)));
  if(key) return {key,data:TRIP_LIBRARY[key]};
  const label=raw || "Your Destination";
  const generic:DestinationLibrary={
    aliases:[q], title:`${label} Escape`, currency:"USD",
    hotelNight:{"3star":[140,230],"4star":[230,390],"5star":[420,850]},
    flightPerPerson:[650,1350],localTransportPerDay:[45,100],mealsPerPersonDay:[60,120],
    cities:[{name:label,nights:5,image:img("photo-1488646953014-85cb44e25828"),highlights:["Signature landmarks & local orientation","Culture and food experience","Scenic or nature excursion","Protected free time for personal exploration"],dailyActivityLow:50,dailyActivityHigh:170}]
  };
  return {key:"custom",data:generic};
}

export function cityImage(name:string, fallback:string) {
  const n = name.toLowerCase();
  for (const dest of Object.values(TRIP_LIBRARY)) {
    const city = dest.cities.find(c => n.includes(c.name.toLowerCase()) || c.name.toLowerCase().includes(n));
    if (city) return city.image;
  }
  return fallback;
}
