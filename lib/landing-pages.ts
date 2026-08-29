export type LandingPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  intro: string;
  highlights: string[];
  tripIdeas: { title: string; days: string; route: string; summary: string }[];
  faqs: { q: string; a: string }[];
  visa?: boolean;
};

export const landingPages: LandingPage[] = [
  {
    slug: "italy-vacation-packages",
    title: "Italy Vacation Packages",
    eyebrow: "Italy vacations, your way",
    description: "Plan a custom Italy vacation with Rome, Florence, Venice, Tuscany, Lake Como, Amalfi Coast and more. Request a personalized InfiO2 travel plan.",
    heroImage: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1800&q=85",
    intro: "Build an Italy journey around the places and pace that fit you. InfiO2 can coordinate hotels, guided experiences, transfers, rail planning and international travel details into one clear itinerary.",
    highlights: ["Rome, Florence & Venice classics", "Tuscany food and countryside stays", "Amalfi Coast & Capri escapes", "Lake Como and northern Italy", "Private, family and small-group planning", "Visa-assistance coordination when applicable"],
    tripIdeas: [
      {title:"Classic Italy", days:"9–12 days", route:"Rome • Florence • Venice", summary:"A first-visit framework combining iconic history, art, food and easy city-to-city connections."},
      {title:"Italy in Depth", days:"12–15 days", route:"Rome • Tuscany • Florence • Venice • Lake Como", summary:"More time for regional experiences, countryside stays and a less rushed pace."},
      {title:"Southern Italy Escape", days:"8–12 days", route:"Rome • Naples • Amalfi Coast • Capri", summary:"Pair major sights with coastal scenery, food experiences and relaxation."}
    ],
    faqs: [
      {q:"Can InfiO2 customize an Italy package instead of selling a fixed tour?", a:"Yes. We can build a trip around your dates, interests, preferred hotel level, pace and budget rather than requiring one fixed itinerary."},
      {q:"Can you help compare an escorted tour with an independent Italy vacation?", a:"Yes. We can discuss the tradeoffs between guided touring, independent travel and a hybrid itinerary, then help you request the option that best fits your group."},
      {q:"Do you publish package prices?", a:"Because airfare, hotels, supplier promotions, dates and availability change frequently, InfiO2 uses request-a-quote pricing rather than displaying another travel company's price."}
    ]
  },
  {
    slug:"europe-vacation-packages",
    title:"Europe Vacation Packages",
    eyebrow:"One continent. Countless ways to explore.",
    description:"Custom Europe vacation planning for Italy, France, Switzerland, Spain, Portugal, Greece, the UK and multi-country trips.",
    heroImage:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1800&q=85",
    intro:"Whether you want one country in depth or several countries in one journey, InfiO2 helps turn a complicated Europe trip into a coordinated plan with the right balance of sightseeing, downtime and transportation.",
    highlights:["Multi-country Europe itineraries","Italy, France & Switzerland","Spain & Portugal","Greece and Mediterranean escapes","UK & Ireland","Rail, transfers and guided-tour options"],
    tripIdeas:[
      {title:"European Highlights",days:"9–13 days",route:"London • Paris • Switzerland • Italy",summary:"A high-energy first-Europe framework that connects major icons across several countries."},
      {title:"Slow Europe",days:"10–14 days",route:"Paris • Swiss Alps • Northern Italy",summary:"Fewer hotel changes, longer stays and more room for local experiences."},
      {title:"Mediterranean Europe",days:"10–15 days",route:"Spain • Portugal or Greece • Italy",summary:"Build around food, coastlines, historic cities and warm-weather experiences."}
    ],
    faqs:[
      {q:"How many European countries should I visit in two weeks?",a:"For many travelers, two to four countries provides a better balance than changing cities every day. The right number depends on your priorities and travel pace."},
      {q:"Can you arrange a combination of guided touring and free days?",a:"Yes. A hybrid itinerary can combine organized sightseeing or escorted segments with independent days and private experiences."},
      {q:"Can you assist with Schengen travel requirements?",a:"We can provide administrative visa-application assistance and document organization when applicable, but visa decisions are made solely by the relevant government authorities."}
    ]
  },
  {
    slug:"japan-travel-packages",
    title:"Japan Travel Packages",
    eyebrow:"Tradition, technology and unforgettable contrast",
    description:"Plan a Japan vacation covering Tokyo, Kyoto, Osaka, Hiroshima, Mount Fuji and more with customized hotels, rail and experiences.",
    heroImage:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1800&q=85",
    intro:"Japan rewards thoughtful planning. InfiO2 can help coordinate city sequencing, hotels, transportation and experiences so your trip moves smoothly from modern Tokyo to historic Kyoto and beyond.",
    highlights:["Tokyo city experiences","Kyoto temples and culture","Osaka food and nightlife","Hiroshima and Miyajima","Mount Fuji / Hakone options","Rail and transfer planning"],
    tripIdeas:[
      {title:"Japan Essentials",days:"8–10 days",route:"Tokyo • Kyoto • Osaka",summary:"A focused introduction to Japan's most popular city experiences."},
      {title:"Classic Japan",days:"10–13 days",route:"Tokyo • Hakone • Kyoto • Hiroshima • Osaka",summary:"Add scenery and history while keeping the trip manageable."},
      {title:"Japan in Depth",days:"13–16 days",route:"Tokyo • Alps or Kanazawa • Kyoto • Hiroshima • Osaka",summary:"A broader journey for travelers who want more regional variety."}
    ],
    faqs:[
      {q:"Is Japan suitable for a first international trip?",a:"Japan can be very traveler-friendly, but transportation and city choices benefit from advance planning. We can organize the itinerary around your comfort level."},
      {q:"Can InfiO2 help with Japan rail planning?",a:"Yes. We can help structure the route and identify where rail, flights or private transfers may make sense for the itinerary."},
      {q:"Do you help with Japan visa requirements?",a:"When a traveler requires a visa, InfiO2 can provide administrative application assistance. Eligibility and approval remain with Japanese government authorities."}
    ]
  },
  {
    slug:"dubai-holiday-packages",
    title:"Dubai Holiday Packages",
    eyebrow:"City energy meets desert escape",
    description:"Plan a Dubai holiday with luxury hotels, desert experiences, family attractions, Abu Dhabi add-ons and stopover itineraries.",
    heroImage:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1800&q=85",
    intro:"Dubai works as a standalone vacation or a stopover on a longer international journey. InfiO2 can combine hotels, city experiences, desert adventures, family attractions and optional Abu Dhabi time.",
    highlights:["Luxury and family hotels","Desert safari experiences","Downtown Dubai & Burj Khalifa area","Beach and resort stays","Abu Dhabi day trips","Stopover and multi-country planning"],
    tripIdeas:[
      {title:"Dubai Stopover",days:"3–4 days",route:"Downtown • Desert • Marina",summary:"A compact introduction that works well between long-haul flights."},
      {title:"Dubai Family Holiday",days:"5–7 days",route:"City • Theme attractions • Beach",summary:"Balance sightseeing with resort time and family-friendly activities."},
      {title:"Dubai + Abu Dhabi",days:"6–8 days",route:"Dubai • Abu Dhabi",summary:"Combine two UAE experiences with time for culture, architecture and relaxation."}
    ],
    faqs:[
      {q:"How many days are enough for Dubai?",a:"Four to seven days works well for many travelers, depending on whether you want primarily sightseeing, resort time, family attractions or an Abu Dhabi extension."},
      {q:"Can Dubai be added as a stopover?",a:"Yes. It can work especially well as a multi-night stopover on longer international itineraries."},
      {q:"Can you help with UAE visa documentation?",a:"We can assist with administrative travel-document preparation where applicable, subject to nationality, itinerary and current government rules."}
    ]
  },
  {
    slug:"maldives-honeymoon-packages",
    title:"Maldives Honeymoon Packages",
    eyebrow:"Private islands. Overwater moments.",
    description:"Plan a Maldives honeymoon or romantic escape with resort matching, overwater villas, transfers and multi-destination combinations.",
    heroImage:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1800&q=85",
    intro:"The right Maldives trip is mostly about choosing the right island and resort. InfiO2 helps match your priorities—privacy, reef access, dining, villa type, seaplane experience and budget—to a romantic stay.",
    highlights:["Overwater and beach villas","Honeymoon and anniversary travel","All-inclusive resort options","Seaplane / speedboat transfer planning","Private dining and experiences","Dubai, India or Sri Lanka combinations"],
    tripIdeas:[
      {title:"Classic Honeymoon",days:"5–7 nights",route:"One private-island resort",summary:"Keep the trip simple and romantic with one carefully selected resort."},
      {title:"Two-Island Maldives",days:"7–10 nights",route:"Two contrasting resorts",summary:"Pair different villa styles or island experiences for a longer stay."},
      {title:"City + Island",days:"9–13 days",route:"Dubai or Singapore • Maldives",summary:"Combine an energetic city stop with a restorative island finish."}
    ],
    faqs:[
      {q:"Is an overwater villa worth it for a honeymoon?",a:"For many couples it is a signature Maldives experience, but beach villas can offer more space and direct sand access. We can help compare both."},
      {q:"Should I choose all-inclusive in the Maldives?",a:"It depends on the resort, your dining habits and included activities. Because island dining choices are limited to the resort, meal-plan comparison is especially important."},
      {q:"Can you coordinate resort transfers?",a:"Yes. Maldives resorts commonly require speedboat, domestic-flight or seaplane transfers, which should be coordinated with international arrival and departure times."}
    ]
  },
  {
    slug:"family-vacation-packages",
    title:"Family Vacation Packages",
    eyebrow:"Less logistics. More family time.",
    description:"Custom family vacation packages for Europe, Hawaii, Mexico, the Caribbean, cruises, theme parks and international adventures.",
    heroImage:"https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1800&q=85",
    intro:"Family travel works best when the itinerary respects everyone's energy, interests and practical needs. InfiO2 designs trips around room configuration, transportation, age-appropriate experiences and downtime.",
    highlights:["Multi-generational vacations","Family-friendly resorts","Europe with children","Hawaii, Mexico & Caribbean","Cruises and theme-park trips","International family itineraries"],
    tripIdeas:[
      {title:"Beach Week",days:"5–8 days",route:"Hawaii • Mexico • Caribbean",summary:"Resort-centered travel with easy activities and flexible family time."},
      {title:"Family Europe",days:"9–14 days",route:"2–3 European regions",summary:"Iconic sights with fewer hotel changes and age-appropriate pacing."},
      {title:"Family Cruise",days:"4–10 days",route:"Caribbean • Alaska • Mexico and more",summary:"A convenient format for mixed ages, dining preferences and activity levels."}
    ],
    faqs:[
      {q:"Can you plan for grandparents, parents and children together?",a:"Yes. Multi-generational planning can account for mobility, room arrangements, activity levels and different interests."},
      {q:"Can you help choose between an all-inclusive resort and a cruise?",a:"Yes. We can compare the experience, logistics and flexibility based on your family rather than assuming one format fits everyone."},
      {q:"Do you plan international trips with children?",a:"Yes. We can build the itinerary around practical travel time, age-appropriate experiences and documentation considerations."}
    ]
  },
  {
    slug:"hawaii-vacation-packages",
    title:"Hawaii Vacation Packages",
    eyebrow:"Island time, designed around you",
    description:"Plan Hawaii vacations to Oahu, Maui, Kauai and Hawaii Island with resort, island-hopping and family or honeymoon options.",
    heroImage:"https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1800&q=85",
    intro:"Choose the island experience that fits your trip instead of trying to see everything at once. InfiO2 can match beaches, resorts, outdoor experiences and island-hopping to your available time.",
    highlights:["Oahu & Waikiki","Maui resort escapes","Kauai scenery and adventure","Hawaii Island experiences","Honeymoon and family planning","Two-island itineraries"],
    tripIdeas:[
      {title:"One-Island Escape",days:"5–7 nights",route:"Maui, Oahu, Kauai or Hawaii Island",summary:"Best for travelers who want less transit and more time enjoying one island."},
      {title:"Two-Island Hawaii",days:"8–12 nights",route:"Oahu + neighbor island",summary:"Combine city/history with a more resort- or nature-focused island."},
      {title:"Hawaii Family Week",days:"6–9 nights",route:"Family-friendly island resort",summary:"Build around beach time, easy excursions and practical room choices."}
    ],
    faqs:[
      {q:"Which Hawaiian island is best for a first visit?",a:"It depends on whether you prioritize Waikiki and history, resort relaxation, dramatic scenery or outdoor adventure. We can match the island to your travel style."},
      {q:"Is island hopping worth it?",a:"For trips of roughly eight nights or longer, two islands can work well. Shorter trips often feel better when focused on one island."},
      {q:"Can you help compare Hawaii resorts?",a:"Yes. Resort location, beach, parking, fees, room configuration and included benefits can materially change the experience."}
    ]
  },
  {
    slug:"mexico-all-inclusive-vacations",
    title:"Mexico All-Inclusive Vacations",
    eyebrow:"Easy sunshine. The right resort matters.",
    description:"Plan Mexico all-inclusive vacations to Cancun, Riviera Maya, Los Cabos, Puerto Vallarta and more for couples and families.",
    heroImage:"https://images.unsplash.com/photo-1510097467424-192d713fd8b2?auto=format&fit=crop&w=1800&q=85",
    intro:"All-inclusive resorts vary widely in beach quality, dining, room types, family amenities and atmosphere. InfiO2 helps narrow the choices around the experience you actually want.",
    highlights:["Cancun & Riviera Maya","Los Cabos","Puerto Vallarta / Riviera Nayarit","Adults-only escapes","Family all-inclusive resorts","Airport transfer coordination"],
    tripIdeas:[
      {title:"Couples Escape",days:"4–7 nights",route:"Adults-only all-inclusive",summary:"Prioritize dining, beach, pools and a quieter resort atmosphere."},
      {title:"Family All-Inclusive",days:"5–8 nights",route:"Cancun • Riviera Maya • Puerto Vallarta",summary:"Focus on family rooms, kids programming, easy dining and activities."},
      {title:"Los Cabos Luxury",days:"4–7 nights",route:"Cabo San Lucas / San José del Cabo",summary:"A polished resort stay with desert-meets-ocean scenery."}
    ],
    faqs:[
      {q:"What should I compare in a Mexico all-inclusive resort?",a:"Look beyond the headline rate: beach conditions, restaurant rules, room occupancy, airport distance, resort size, kids amenities and included activities all matter."},
      {q:"Cancun or Los Cabos?",a:"Cancun and Riviera Maya often appeal for Caribbean water and excursions; Los Cabos offers dramatic Pacific scenery and a different luxury-resort feel."},
      {q:"Can InfiO2 arrange airport transfers?",a:"Transfer planning can be incorporated into the trip request so the vacation is coordinated from arrival through departure."}
    ]
  },
  {
    slug:"caribbean-vacation-packages",
    title:"Caribbean Vacation Packages",
    eyebrow:"Find your island",
    description:"Custom Caribbean vacation planning for Jamaica, Dominican Republic, Aruba, Turks and Caicos, Bahamas and other island escapes.",
    heroImage:"https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1800&q=85",
    intro:"The Caribbean is not one experience. InfiO2 helps choose the island and resort style based on beaches, flight convenience, activities, family needs, romance and desired pace.",
    highlights:["Jamaica","Dominican Republic","Aruba","Bahamas","Turks & Caicos","All-inclusive and independent resorts"],
    tripIdeas:[
      {title:"All-Inclusive Caribbean",days:"5–8 nights",route:"Jamaica • Punta Cana • other resort islands",summary:"A low-friction vacation centered on resort amenities and beach time."},
      {title:"Independent Island Stay",days:"5–9 nights",route:"Aruba • Bahamas • Turks & Caicos",summary:"Mix resort relaxation with local dining and island exploration."},
      {title:"Caribbean Cruise",days:"5–10 nights",route:"Eastern • Western • Southern Caribbean",summary:"Sample several destinations while unpacking once."}
    ],
    faqs:[
      {q:"Which Caribbean island is best for families?",a:"The best fit depends on flight time, beach conditions, resort inventory, activities and children's ages. We can narrow options from those priorities."},
      {q:"Do I need an all-inclusive resort?",a:"No. Some islands work very well with independent resorts and local dining. Others have especially strong all-inclusive choices."},
      {q:"Can you plan a honeymoon in the Caribbean?",a:"Yes. We can focus on adults-only resorts, privacy, dining, spa options and romantic experiences."}
    ]
  },
  {
    slug:"cruises-from-california",
    title:"Cruises from California",
    eyebrow:"Sail closer to home",
    description:"Explore cruises departing California for Mexico, Alaska, Hawaii and coastal itineraries with pre- and post-cruise planning.",
    heroImage:"https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1800&q=85",
    intro:"A California departure can simplify the start of a cruise. InfiO2 can help compare itinerary style, cabin type and pre/post-cruise logistics for travelers who want an easier embarkation experience.",
    highlights:["Mexico cruises","California coast itineraries","Hawaii sailings","Alaska options with West Coast positioning","Cabin-category guidance","Pre/post-cruise hotels and transfers"],
    tripIdeas:[
      {title:"Quick Mexico Cruise",days:"3–5 nights",route:"Southern California • Baja",summary:"A convenient short escape for couples, families or first-time cruisers."},
      {title:"Mexican Riviera",days:"6–8 nights",route:"Los Angeles area • Pacific Mexico",summary:"More sea time and multiple ports without an international flight."},
      {title:"Longer West Coast Voyage",days:"9+ nights",route:"Hawaii or repositioning itineraries",summary:"For travelers who enjoy sea days and want a more substantial voyage."}
    ],
    faqs:[
      {q:"Which California ports have cruises?",a:"Schedules vary, but Southern California cruise departures commonly use Los Angeles/San Pedro, Long Beach and San Diego. Availability depends on cruise line and season."},
      {q:"Can you help choose a cruise cabin?",a:"Yes. Cabin location and category can matter for budget, space, motion sensitivity and family configuration."},
      {q:"Can you add a hotel before the cruise?",a:"Yes. A pre-cruise hotel and transfer can reduce embarkation-day stress, especially when travelers are flying to the port."}
    ]
  },
  {
    slug:"india-travel-visa-assistance",
    title:"India Travel & Visa Assistance",
    eyebrow:"One coordinated path from documents to departure",
    description:"Plan an India vacation and request administrative India visa application assistance, document organization and itinerary coordination.",
    heroImage:"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1800&q=85",
    intro:"India travel can involve both detailed itinerary planning and entry-document preparation. InfiO2 brings the travel side and administrative visa-assistance side into one organized request.",
    highlights:["India vacation planning","Family-visit travel coordination","Delhi, Agra, Jaipur and beyond","Hotels, transfers and domestic routing","Administrative visa document assistance","Trip + visa timeline coordination"],
    tripIdeas:[
      {title:"Golden Triangle",days:"6–9 days",route:"Delhi • Agra • Jaipur",summary:"A classic introduction to north India that can be extended with family visits or other regions."},
      {title:"India Family Visit + Vacation",days:"10–21 days",route:"Family destination + leisure extension",summary:"Coordinate personal visits with hotels, sightseeing and domestic travel."},
      {title:"North + South India",days:"12–18 days",route:"Delhi / Rajasthan + southern region",summary:"A broader itinerary for travelers who want contrasting cultures and landscapes."}
    ],
    faqs:[
      {q:"Can InfiO2 apply for my India visa for me?",a:"InfiO2 can provide administrative application assistance, checklists and document organization. Government authorities determine eligibility, processing and approval, and the traveler remains responsible for the accuracy of submitted information."},
      {q:"Can visa assistance be combined with an India vacation?",a:"Yes. That is the purpose of this service: coordinate the travel-planning timeline with the administrative document process."},
      {q:"Do you guarantee visa approval?",a:"No. No travel agency can guarantee a government visa decision."}
    ],
    visa:true
  },
  {
    slug:"schengen-visa-assistance",
    title:"Schengen Visa Assistance",
    eyebrow:"Organize the application around the actual Europe trip",
    description:"Administrative Schengen visa application assistance paired with Europe itinerary planning, document checklists and appointment preparation.",
    heroImage:"https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1800&q=85",
    intro:"A multi-country Europe itinerary can affect where and how a Schengen visa application is prepared. InfiO2 helps organize the travel plan, supporting travel documentation and application workflow without making legal or approval guarantees.",
    highlights:["Itinerary organization","Travel-document checklist","Appointment preparation","Hotel and transportation planning","Multi-country trip sequencing","Administrative application support"],
    tripIdeas:[
      {title:"Single-Country Europe",days:"7–12 days",route:"One Schengen country",summary:"A straightforward travel plan with clear lodging and transportation structure."},
      {title:"Multi-Country Schengen",days:"10–16 days",route:"2–4 Schengen countries",summary:"Coordinate the itinerary carefully so travel documentation reflects the actual journey."},
      {title:"Europe + Non-Schengen",days:"10–18 days",route:"Schengen area + UK or other destination",summary:"Build a coherent trip while accounting for separate entry requirements."}
    ],
    faqs:[
      {q:"Does InfiO2 decide which Schengen country I should apply through?",a:"We can help organize your actual itinerary and point you to current official requirements, but the applicable consulate and rules depend on your trip and government guidance."},
      {q:"Do you guarantee an appointment or approval?",a:"No. Appointment inventory, processing and visa decisions are controlled by government authorities and their authorized service providers."},
      {q:"Is this legal advice?",a:"No. InfiO2 provides travel-planning and administrative application assistance, not immigration legal advice."}
    ],
    visa:true
  },
  {
    slug:"uk-visitor-visa-assistance",
    title:"UK Visitor Visa Assistance",
    eyebrow:"Travel planning and administrative application support",
    description:"Request UK visitor visa administrative assistance, document organization and a coordinated London, England, Scotland or UK itinerary.",
    heroImage:"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1800&q=85",
    intro:"For travelers who require a UK visitor visa, InfiO2 can coordinate the travel plan with administrative application preparation so the itinerary, lodging and trip purpose are organized clearly.",
    highlights:["UK itinerary planning","London and regional travel","Administrative document checklist","Application workflow support","Appointment preparation","Europe + UK combinations"],
    tripIdeas:[
      {title:"London First Visit",days:"5–7 days",route:"London + nearby day trips",summary:"A focused itinerary with time for major sights and flexible exploration."},
      {title:"England & Scotland",days:"8–12 days",route:"London • York • Edinburgh",summary:"Connect major cities with a manageable rail-oriented route."},
      {title:"UK + Europe",days:"10–16 days",route:"London + continental Europe",summary:"Coordinate separate entry requirements with one overall travel plan."}
    ],
    faqs:[
      {q:"Can InfiO2 complete the UK visitor visa decision process?",a:"No. We can provide administrative assistance and travel-document organization; UK authorities control requirements and decisions."},
      {q:"Can you coordinate my London hotel and itinerary too?",a:"Yes. Travel planning can be handled alongside the visa-assistance request."},
      {q:"Can you guarantee processing time?",a:"No. Government processing times can change and are outside InfiO2's control."}
    ],
    visa:true
  }
];

export const landingPageMap = Object.fromEntries(landingPages.map((p) => [p.slug, p]));
