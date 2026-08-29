export type TripBuilderConfig = {
  places: string[];
  attractions: string[];
};

const defaults: TripBuilderConfig = {
  places: ["City center", "Historic district", "Beach / resort area", "Countryside / nature", "Nearby day trips"],
  attractions: ["Top landmarks", "Local food experience", "Culture & museums", "Nature / scenic experience", "Shopping / local markets", "Guided city tour"],
};

export const tripBuilderConfigs: Record<string, TripBuilderConfig> = {
  "italy-vacation-packages": {
    places:["Rome","Florence","Venice","Tuscany","Amalfi Coast","Capri","Lake Como","Milan","Naples"],
    attractions:["Colosseum & Ancient Rome","Vatican Museums","Florence Duomo & Renaissance art","Venice canals & islands","Tuscany winery / countryside","Amalfi Coast villages","Capri day trip","Lake Como cruise","Italian cooking / food experience"]
  },
  "europe-vacation-packages": {
    places:["London","Paris","Amsterdam","Swiss Alps","Rome","Florence","Venice","Barcelona","Madrid","Lisbon","Athens"],
    attractions:["Iconic city landmarks","Scenic rail journey","Museum / art day","Food & market experience","Mountain / countryside excursion","River or lake cruise","Historic walking tour","Shopping / free exploration"]
  },
  "japan-travel-packages": {
    places:["Tokyo","Kyoto","Osaka","Hakone / Mount Fuji","Hiroshima","Miyajima","Kanazawa","Takayama"],
    attractions:["Tokyo neighborhoods","Mount Fuji views","Kyoto temples & shrines","Tea ceremony / culture","Osaka food experience","Hiroshima Peace Memorial","Miyajima","Japanese garden","Day trip / scenic rail"]
  },
  "dubai-holiday-packages": {
    places:["Downtown Dubai","Dubai Marina","Palm Jumeirah","Jumeirah Beach","Desert","Abu Dhabi"],
    attractions:["Burj Khalifa","Desert safari","Dubai Mall","Old Dubai / souks","Marina cruise","Beach / resort day","Theme park / family attraction","Abu Dhabi Grand Mosque"]
  },
  "maldives-honeymoon-packages": {
    places:["North Malé Atoll","South Malé Atoll","Ari Atoll","Baa Atoll","Private island resort"],
    attractions:["Overwater villa","Beach villa","Snorkeling / house reef","Spa day","Private dinner","Sunset cruise","Diving","Sandbank picnic","Unscheduled resort time"]
  },
  "family-vacation-packages": {
    places:["Beach resort","Theme-park destination","European cities","National parks / nature","Cruise","All-inclusive resort"],
    attractions:["Kid-friendly highlights","Pool / beach time","Interactive museum","Wildlife / nature","Theme park","Food experience","Easy guided tour","Free family time"]
  },
  "hawaii-vacation-packages": {
    places:["Oahu","Maui","Kauai","Hawaii Island"],
    attractions:["Waikiki / Honolulu","Pearl Harbor","Road to Hana","Volcanoes National Park","Na Pali Coast","Luau","Snorkeling","Beach day","Scenic drive"]
  },
  "mexico-all-inclusive-vacations": {
    places:["Cancun","Riviera Maya","Playa del Carmen","Los Cabos","Puerto Vallarta","Riviera Nayarit"],
    attractions:["All-inclusive resort time","Cenote / nature excursion","Mayan ruins","Snorkeling / boat day","Spa","Local food","Kids club / family activities","Adults-only relaxation"]
  },
  "caribbean-vacation-packages": {
    places:["Jamaica","Punta Cana","Aruba","Bahamas","Turks & Caicos","St. Lucia"],
    attractions:["Beach / resort days","Snorkeling","Sailing / catamaran","Local food","Waterfalls / nature","Spa","Island tour","Free time"]
  },
  "cruises-from-california": {
    places:["Los Angeles / San Pedro","Long Beach","San Diego","Baja Mexico","Mexican Riviera","Hawaii"],
    attractions:["Oceanview cabin","Balcony cabin","Suite","Specialty dining","Shore excursions","Kids / teen programs","Spa","Pre-cruise hotel","Post-cruise extension"]
  },
  "india-travel-visa-assistance": {
    places:["Delhi","Agra","Jaipur","Udaipur","Varanasi","Mumbai","Goa","Kerala","Family-visit city"],
    attractions:["Taj Mahal","Old & New Delhi","Jaipur forts","Udaipur lakes","Varanasi ghats","Food experience","Temples / heritage","Wildlife / nature","Family / free days"]
  },
  "schengen-visa-assistance": defaults,
  "uk-visitor-visa-assistance": {
    places:["London","Bath","Cotswolds","York","Edinburgh","Scottish Highlands"],
    attractions:["London landmarks","West End / theatre","Historic castles","Countryside day trip","Museum day","Rail journey","Food experience","Free exploration"]
  }
};

export function getTripBuilderConfig(slug?: string): TripBuilderConfig {
  return (slug && tripBuilderConfigs[slug]) || defaults;
}
