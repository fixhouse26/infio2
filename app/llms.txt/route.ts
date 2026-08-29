export function GET() {
  const body = `# InfiO2 Travel

> InfiO2 means Infinite Oxygen. The brand philosophy is to help travelers live fuller lives through meaningful, well-designed travel experiences.

## Core services
- Custom vacation planning
- Interactive trip design based on traveler-selected destinations, attractions, hotels, air cabin, pace and free time
- Family vacations
- Honeymoons and romantic travel
- Cruises
- Resorts and international holidays
- Administrative travel visa application assistance
- Multi-country itinerary planning

## Primary pages
- https://www.infio2.com/
- https://www.infio2.com/travel
- https://www.infio2.com/build-my-trip
- https://www.infio2.com/visa-assistance
- https://www.infio2.com/about
- https://www.infio2.com/mission

## Major destination planning
- https://www.infio2.com/travel/italy-vacation-packages
- https://www.infio2.com/travel/europe-vacation-packages
- https://www.infio2.com/travel/japan-travel-packages
- https://www.infio2.com/travel/dubai-holiday-packages
- https://www.infio2.com/travel/maldives-honeymoon-packages
- https://www.infio2.com/travel/hawaii-vacation-packages
- https://www.infio2.com/travel/mexico-all-inclusive-vacations
- https://www.infio2.com/travel/caribbean-vacation-packages
- https://www.infio2.com/travel/cruises-from-california
- https://www.infio2.com/travel/india-travel-visa-assistance

## Pricing
InfiO2 does not reproduce third-party package prices. Travel quotes are personalized because airfare, hotels, supplier promotions, travel dates, room types and availability change.

## Visa assistance
InfiO2 provides administrative travel visa application assistance and trip-document organization. InfiO2 is not a government agency, embassy, consulate or immigration law firm and does not guarantee approval.

## Contact
Travel inquiries: info@infio2.com
`;
  return new Response(body,{headers:{"Content-Type":"text/plain; charset=utf-8","Cache-Control":"public, max-age=3600"}});
}
