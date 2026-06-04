// Static menu data for 5PM — shared across Food and Drinks routes.

export type FoodCategory =
  | "Breakfast"
  | "Grills"
  | "Snacks and Kiddies"
  | "Side Dishes";

export type DrinkCategory =
  | "Beverages"
  | "Beers"
  | "Whiskey, Cognac & Brandy"
  | "Wines & Creams"
  | "Tequila, Gin & Vodka"
  | "Shots";

export type FoodItem = {
  id: number;
  name: string;
  category: FoodCategory;
  price: string;
  description: string;
  image: string;
};

export type DrinkItem = {
  id: number;
  name: string;
  category: DrinkCategory;
  price: string;
  description: string;
  image?: string;
};

const U = (id: string, q = 80) =>
  `https://images.unsplash.com/${id}?w=900&auto=format&fit=crop&q=${q}`;

// Editorial Unsplash photography + local /public images.
export const IMG = {
  // Breakfast
  fullBreakfast: "/fullb.jpg",
  lightBreakfast: "/light breakfast.jpg",
  pancakes: U("photo-1528207776546-365bb710ee93"),
  friedEggs: "/fried eggs.jpg",
  boiledEggs: "/Boild Egg.jpg",
  omelette: "/spo.jpg",
  sausage: "/sausage.jpg",
  samosa: "/samosa.jpg",
  arrowRoots: "/arrow.jpg",
  sweetPotato: "/Slow Cooker Sweet Potatoes.jpg",
  fruitSalad: "/fruit salad.jpg",

  // Grills
  goat: "/goat.jpg",
  pork: "/pork.jpg",
  beef: "beef.jpg",
  broiler: U("photo-1610057099443-fde8c4d50f91"),
  kienyeji: "/chicken.jpg",
  tilapia: "/Tilapia fish.jpg",
  brisket: U("photo-1558030006-450675393462"),
  ribs: "/ribs.jpg",
  chickenLegs: U("photo-1610057099443-fde8c4d50f91"),

  // Snacks and Kiddies
  wings: "/wings.jpg",
  sliders: "/Pork Sliders.jpg",
  pigsBlanket: "/pib.jpg",
  meatballs: U("photo-1529042410759-befb1204b468"),
  burger: U("photo-1568901346375-23c9450c58cd"),
  chomaSausage: "/Choma Sausage.jpg",
  wingsFries: U("photo-1567620832903-9fc6debc209f"),
  baconFries: "/Fries and Bacon.jpg",
  fishFingers: "/Fish Fingers.jpg",
  saladSweetPotato: U("photo-1546069901-ba9599a7e63c"),
  salad5pm: U("photo-1540420773420-3366772f4999"),
  caesar: U("photo-1550304943-4f24f54ddde9"),

  // Side dishes
  fries: "/fries.jpg",
  wedges: "/wedges.jpg",
  roastPotatoes: "/roast.jpg",
  sauteed: "satp.jpg",
  mashed: "/mash.jpg",
  whiteugali: "/wugali.jpg",
  brownugali: "/bugali.jpg",
  pumpkinugali: "/pum.jpg",
  veg: U("photo-1540420773420-3366772f4999"),
  cabbage: "/cabbage.jpg",
  whiterice: "/rice.jpg",
  vegetablerice: "/veger.jpg",
  chapati: "/chapatis.jpg",

  // Beverages
  teaWhite: U("photo-1576092768241-dec231879fc3"),
  teaBlack: U("photo-1597481499750-3e6b22637e12"),
  masala: U("photo-1571934811356-5cc061b6821f"),
  dawa: U("photo-1556679343-c7306c1976bc"),
  hotChoc: U("photo-1542990253-0b8be0e7c0fb"),
  coffeeWhite: U("photo-1509042239860-f550ce710b93"),
  coffeeBlack: U("photo-1495474472287-4d71bcdd2085"),
  juice: U("photo-1622597467836-f3285f2131b8"),
  water: U("photo-1548839140-29a749e1cf4d"),
  soda: U("photo-1581636625402-29b2a704ef13"),
};

export const FOOD_MENU: FoodItem[] = [
  // ── Breakfast ────────────────────────────────────────────────
  { id: 1, name: "Full Breakfast", category: "Breakfast", price: "KES 1,000", description: "Eggs, sausages, bacon, sautéed potatoes, fresh fruit and a hot beverage.", image: IMG.fullBreakfast },
  { id: 2, name: "Light Breakfast", category: "Breakfast", price: "KES 900", description: "Eggs, toast, fresh fruit and your choice of tea or coffee.", image: IMG.lightBreakfast },
  { id: 3, name: "Pancakes", category: "Breakfast", price: "KES 300", description: "Warm, fluffy pancakes drizzled with honey and dusted with icing sugar.", image: IMG.pancakes },
  { id: 4, name: "Fried Eggs", category: "Breakfast", price: "KES 150", description: "Two farm-fresh eggs fried to your liking.", image: IMG.friedEggs },
  { id: 5, name: "Boiled Eggs", category: "Breakfast", price: "KES 150", description: "Soft or hard boiled farm eggs.", image: IMG.boiledEggs },
  { id: 6, name: "Spanish Omelette", category: "Breakfast", price: "KES 200", description: "Hearty omelette with potatoes, onions and capsicum.", image: IMG.omelette },
  { id: 7, name: "Sausage", category: "Breakfast", price: "KES 200", description: "Lightly grilled pork sausage served warm.", image: IMG.sausage },
  { id: 8, name: "Samosa", category: "Breakfast", price: "KES 200", description: "Crispy golden samosas filled with spiced beef and herbs.", image: IMG.samosa },
  { id: 9, name: "Arrow Roots", category: "Breakfast", price: "KES 200", description: "Steamed arrow roots — a wholesome traditional side.", image: IMG.arrowRoots },
  { id: 10, name: "Sweet Potatoes", category: "Breakfast", price: "KES 200", description: "Slow-steamed sweet potatoes with naturally sweet flesh.", image: IMG.sweetPotato },
  { id: 11, name: "Fruit Salad", category: "Breakfast", price: "KES 200", description: "A bright, chilled mix of seasonal tropical fruits.", image: IMG.fruitSalad },

  // ── Main Dishes ──────────────────────────────────────────────
  { id: 20, name: "Goat ½ kg", category: "Grills", price: "KES 800", description: "Tender slow-cooked goat in our signature spice blend.", image: IMG.goat },
  { id: 21, name: "Goat 1 kg", category: "Grills", price: "KES 1,500", description: "A full kilo of slow-cooked goat — best shared with ugali and kachumbari.", image: IMG.goat },
  { id: 22, name: "Pork ½ kg", category: "Grills", price: "KES 800", description: "Half a kilo of expertly grilled pork with a crisp, smoky char.", image: IMG.pork },
  { id: 23, name: "Pork 1 kg", category: "Grills", price: "KES 1,500", description: "A generous kilo of flame-grilled pork from open coals.", image: IMG.pork },
  { id: 24, name: "Beef ½ kg", category: "Grills", price: "KES 700", description: "Half a kilo of tender beef, marinated and grilled to order.", image: IMG.beef },
  { id: 25, name: "Beef 1 kg", category: "Grills", price: "KES 1,400", description: "A full kilo of premium grilled beef — built for sharing.", image: IMG.beef },
  { id: 26, name: "Broiler Chicken ½ kg", category: "Grills", price: "KES 1,100", description: "Marinated broiler chicken, char-grilled to juicy perfection.", image: IMG.broiler },
  { id: 27, name: "Broiler Chicken Full", category: "Grills", price: "KES 1,800", description: "Whole broiler chicken, slow-roasted with herbs to a golden finish.", image: IMG.broiler },
  { id: 28, name: "Kienyeji Chicken ½ kg", category: "Grills", price: "KES 1,100", description: "Half a free-range kienyeji chicken, slow-cooked for deep flavor.", image: IMG.kienyeji },
  { id: 29, name: "Kienyeji Chicken Full", category: "Grills", price: "KES 2,800", description: "A whole free-range kienyeji chicken prepared the traditional way.", image: IMG.kienyeji },
  { id: 30, name: "Whole Tilapia", category: "Grills", price: "KES 1,250", description: "Whole tilapia, deep-fried crispy and served with ugali and greens.", image: IMG.tilapia },
  { id: 31, name: "Beef Brisket", category: "Grills", price: "KES 2,800", description: "Slow-cooked, melt-in-your-mouth brisket in a rich house gravy.", image: IMG.brisket },
  { id: 32, name: "Pork Ribs", category: "Grills", price: "KES 1,500", description: "Fall-off-the-bone pork ribs glazed in smoky-sweet BBQ.", image: IMG.ribs },
  { id: 33, name: "Chicken Legs", category: "Grills", price: "KES 800", description: "Plump chicken legs in bold spices, open-flame grilled.", image: IMG.chickenLegs },

  // ── Snacks and Kiddies ───────────────────────────────────────────────────
  { id: 50, name: "Chicken Wings", category: "Snacks and Kiddies", price: "KES 800", description: "Crispy fried wings tossed in our house BBQ sauce.", image: IMG.wings },
  { id: 51, name: "Pork Sliders", category: "Snacks and Kiddies", price: "KES 500", description: "Soft mini buns with tender pulled pork and house sauce.", image: IMG.sliders },
  { id: 52, name: "Pigs in a Blanket", category: "Snacks and Kiddies", price: "KES 450", description: "Sausages wrapped in smoked bacon and flame-grilled.", image: IMG.pigsBlanket },
  { id: 53, name: "Meat Balls", category: "Snacks and Kiddies", price: "KES 500", description: "Perfectly seasoned meatballs in a rich tomato glaze.", image: IMG.meatballs },
  { id: 54, name: "Beef Burger", category: "Snacks and Kiddies", price: "KES 700", description: "Juicy beef patty, melted cheese, toasted bun, house sauce.", image: IMG.burger },
  { id: 55, name: "Choma Sausage", category: "Snacks and Kiddies", price: "KES 450", description: "Flame-grilled local choma sausage, sliced and warm.", image: IMG.chomaSausage },
  { id: 56, name: "Chicken Wings & Fries", category: "Snacks and Kiddies", price: "KES 800", description: "Crispy wings with golden hand-cut fries.", image: IMG.wingsFries },
  { id: 57, name: "Bacon & Fries", category: "Snacks and Kiddies", price: "KES 700", description: "Smoked bacon piled over hot, golden fries.", image: IMG.baconFries },
  { id: 58, name: "Fish Fingers", category: "Snacks and Kiddies", price: "KES 800", description: "Breaded fish fingers, crisp and golden, with tartar sauce.", image: IMG.fishFingers },
  { id: 59, name: "Sweet Potato Salad", category: "Snacks and Kiddies", price: "KES 350", description: "Roasted sweet potato, sweet corn, capsicum and pineapple.", image: IMG.saladSweetPotato },
  { id: 60, name: "5PM Salad", category: "Snacks and Kiddies", price: "KES 300", description: "Carrots, cucumber, mango, sultanas and capsicum — our signature.", image: IMG.salad5pm },
  { id: 61, name: "Chicken Caesar Salad", category: "Snacks and Kiddies", price: "KES 650", description: "Chargrilled chicken on romaine with parmesan and croutons.", image: IMG.caesar },

  // ── Side Dishes ──────────────────────────────────────────────
  { id: 70, name: "French Fries", category: "Side Dishes", price: "KES 250", description: "Hand-cut fries, double-fried until perfectly crisp.", image: IMG.fries },
  { id: 71, name: "Potato Wedges", category: "Side Dishes", price: "KES 250", description: "Thick-cut seasoned wedges, oven-roasted golden.", image: IMG.wedges },
  { id: 72, name: "Roast Potatoes", category: "Side Dishes", price: "KES 250", description: "Crisp outside, fluffy inside, finished with rosemary.", image: IMG.roastPotatoes },
  { id: 73, name: "Sautéed Potatoes", category: "Side Dishes", price: "KES 300", description: "Pan-tossed potatoes with herbs and garlic butter.", image: IMG.sauteed },
  { id: 74, name: "Mashed Potatoes", category: "Side Dishes", price: "KES 250", description: "Silky, buttery mash with a hint of cream.", image: IMG.mashed },
  { id: 75, name: "White Ugali", category: "Side Dishes", price: "KES 100", description: "Classic, freshly prepared white ugali.", image: IMG.whiteugali },
  { id: 76, name: "Brown Ugali", category: "Side Dishes", price: "KES 200", description: "Wholesome brown ugali — rustic and nutty.", image: IMG.brownugali },
  { id: 77, name: "Pumpkin Ugali", category: "Side Dishes", price: "KES 200", description: "Smooth ugali enriched with sweet pumpkin.", image: IMG.pumpkinugali },
  { id: 78, name: "Seasoned Vegetables", category: "Side Dishes", price: "KES 100", description: "Lightly sautéed seasonal greens with garlic and herbs.", image: IMG.veg },
  { id: 79, name: "Cabbage", category: "Side Dishes", price: "KES 100", description: "Tender braised cabbage with carrots and onion.", image: IMG.cabbage },
  { id: 80, name: "Plain Rice", category: "Side Dishes", price: "KES 200", description: "Fluffy steamed long-grain rice.", image: IMG.whiterice },
  { id: 81, name: "Vegetable Rice", category: "Side Dishes", price: "KES 300", description: "Fragrant rice tossed with peas, carrots and capsicum.", image: IMG.vegetablerice },
  { id: 82, name: "Chapati", category: "Side Dishes", price: "KES 100", description: "Soft, flaky hand-rolled chapati.", image: IMG.chapati },
];

export const DRINKS_MENU: DrinkItem[] = [
  // ── Beverages (hot + soft) ───────────────────────────────────
  { id: 90, name: "White Tea", category: "Beverages", price: "KES 200", description: "Brewed black tea finished with warm milk.", image: IMG.teaWhite },
  { id: 91, name: "Black Tea", category: "Beverages", price: "KES 150", description: "Freshly brewed black tea — clear and aromatic.", image: IMG.teaBlack },
  { id: 92, name: "Masala Tea", category: "Beverages", price: "KES 200", description: "Spiced milk tea with cardamom, ginger and cinnamon.", image: IMG.masala },
  { id: 93, name: "Dawa", category: "Beverages", price: "KES 200", description: "Warm honey, ginger and lemon — comfort in a cup.", image: IMG.dawa },
  { id: 94, name: "Hot Chocolate", category: "Beverages", price: "KES 200", description: "Rich, velvety hot chocolate topped with frothed milk.", image: IMG.hotChoc },
  { id: 95, name: "White Coffee", category: "Beverages", price: "KES 200", description: "Freshly brewed coffee finished with steamed milk.", image: IMG.coffeeWhite },
  { id: 96, name: "Black Coffee", category: "Beverages", price: "KES 150", description: "Bold, freshly brewed black coffee.", image: IMG.coffeeBlack },
  { id: 97, name: "Fresh Juice", category: "Beverages", price: "KES 250", description: "Freshly pressed seasonal fruit juice, chilled.", image: IMG.juice },
  { id: 98, name: "Still Water", category: "Beverages", price: "KES 200", description: "Chilled bottled still mineral water.", image: IMG.water },
  { id: 99, name: "Delmonte", category: "Beverages", price: "KES 400", description: "Chilled Delmonte premium fruit juice.", image: IMG.juice },
  { id: 100, name: "Soda", category: "Beverages", price: "KES 150", description: "Your favorite chilled soft drink — Coke, Fanta or Sprite.", image: IMG.soda },

  // ── Beers ────────────────────────────────────────────────────
  { id: 200, name: "Balozi", category: "Beers", price: "KES 350", description: "Smooth, crisp Balozi lager — served ice cold." },
  { id: 201, name: "Black Ice", category: "Beers", price: "KES 350", description: "Sharp, fruity and ice-cold." },
  { id: 202, name: "Gordon's Pink / Dry", category: "Beers", price: "KES 350", description: "Refreshing gin-based ready-to-drink — pink or dry." },
  { id: 203, name: "Guarana", category: "Beers", price: "KES 350", description: "Energizing Guarana — bright and crisp." },
  { id: 204, name: "Guinness", category: "Beers", price: "KES 350", description: "The iconic dark Irish stout, smooth and creamy." },
  { id: 205, name: "Heineken", category: "Beers", price: "KES 400", description: "Premium Heineken lager — pale, crisp, balanced." },
  { id: 206, name: "Heineken Can", category: "Beers", price: "KES 420", description: "Premium Heineken in a chilled can." },
  { id: 207, name: "Pineapple Punch", category: "Beers", price: "KES 350", description: "Tropical pineapple punch — refreshing and fruity." },
  { id: 208, name: "Snapp", category: "Beers", price: "KES 350", description: "Light, crisp apple-flavored alcoholic drink." },
  { id: 209, name: "Tusker Cider", category: "Beers", price: "KES 350", description: "Crisp apple notes, perfectly chilled." },
  { id: 210, name: "Tusker Lager", category: "Beers", price: "KES 350", description: "Iconic Kenyan Tusker Lager — bold and refreshing." },
  { id: 211, name: "Tusker Malt", category: "Beers", price: "KES 350", description: "Smooth Tusker Malt with a rich, fuller body." },
  { id: 212, name: "White Cap", category: "Beers", price: "KES 350", description: "Classic White Cap — easy-drinking and balanced." },
  { id: 213, name: "Hunters Dry", category: "Beers", price: "KES 370", description: "Crisp, fresh apple character." },
  { id: 214, name: "Desperado", category: "Beers", price: "KES 370", description: "Tequila-flavored beer — bold and citrusy." },
  { id: 215, name: "K.O", category: "Beers", price: "KES 370", description: "A smooth, easy-drinking favorite." },
  { id: 216, name: "Kingfisher", category: "Beers", price: "KES 370", description: "Premium lager — clean and crisp." },
  { id: 217, name: "Manyatta", category: "Beers", price: "KES 370", description: "Distinctly local, smooth and refreshing." },
  { id: 218, name: "Savanna", category: "Beers", price: "KES 370", description: "Crisp South African apple cider." },

  // ── Whiskey, Cognac & Brandy ─────────────────────────────────
  { id: 300, name: "Jack Daniels 750ml", category: "Whiskey, Cognac & Brandy", price: "KES 5,000", description: "Iconic Tennessee whiskey — smooth, oaky, unmistakable." },
  { id: 301, name: "Jack Daniels 1L", category: "Whiskey, Cognac & Brandy", price: "KES 6,500", description: "One full liter of the world's favorite Tennessee whiskey." },
  { id: 302, name: "JW Black Label 1L", category: "Whiskey, Cognac & Brandy", price: "KES 7,200", description: "12-year blended Scotch — deep and complex." },
  { id: 303, name: "JW Black Label 750ml", category: "Whiskey, Cognac & Brandy", price: "KES 6,500", description: "Smooth and richly layered." },
  { id: 304, name: "JW Double Black", category: "Whiskey, Cognac & Brandy", price: "KES 8,500", description: "Intensely smoky and full-bodied." },
  { id: 305, name: "JW Red Label", category: "Whiskey, Cognac & Brandy", price: "KES 3,000", description: "Bold, vibrant blended Scotch." },
  { id: 306, name: "Singleton 12", category: "Whiskey, Cognac & Brandy", price: "KES 7,500", description: "Smooth single malt with a sweet finish." },
  { id: 307, name: "Chivas Regal 12", category: "Whiskey, Cognac & Brandy", price: "KES 7,000", description: "Luxurious, balanced blended Scotch." },
  { id: 308, name: "Martell VSOP", category: "Whiskey, Cognac & Brandy", price: "KES 8,000", description: "Refined cognac — fruity with toasted oak." },
  { id: 309, name: "Remy Martin VSOP", category: "Whiskey, Cognac & Brandy", price: "KES 12,000", description: "Fine Champagne cognac — elegant and rich." },
  { id: 310, name: "Hennessy", category: "Whiskey, Cognac & Brandy", price: "KES 10,000", description: "Hennessy VS — bold, vibrant and balanced." },
  { id: 311, name: "Ballantine 750ml", category: "Whiskey, Cognac & Brandy", price: "KES 3,500", description: "Smooth, classic blended Scotch." },
  { id: 312, name: "Jameson Black Barrel", category: "Whiskey, Cognac & Brandy", price: "KES 7,500", description: "Rich, intense Irish whiskey, double-charred." },
  { id: 313, name: "Jameson 750ml", category: "Whiskey, Cognac & Brandy", price: "KES 3,600", description: "Triple-distilled, smooth and balanced." },
  { id: 314, name: "Grants 750ml", category: "Whiskey, Cognac & Brandy", price: "KES 3,000", description: "Versatile, easy-drinking blended Scotch." },
  { id: 315, name: "Famous Grouse", category: "Whiskey, Cognac & Brandy", price: "KES 3,500", description: "Scotland's favorite blended whisky." },
  { id: 316, name: "Vat 69 750ml", category: "Whiskey, Cognac & Brandy", price: "KES 2,600", description: "Smooth, lightly smoky blended Scotch." },
  { id: 317, name: "Jagermeister", category: "Whiskey, Cognac & Brandy", price: "KES 5,500", description: "German herbal liqueur, best served ice cold." },
  { id: 318, name: "Viceroy 750ml", category: "Whiskey, Cognac & Brandy", price: "KES 2,700", description: "Smooth, full-flavored South African brandy." },

  // ── Wines & Creams ───────────────────────────────────────────
  { id: 400, name: "Fragolino Red & White", category: "Wines & Creams", price: "KES 3,200", description: "Italian Fragolino — sweet, lightly sparkling, strawberry notes." },
  { id: 401, name: "Freschello Red & White", category: "Wines & Creams", price: "KES 2,500", description: "Soft, easy-drinking Italian wine." },
  { id: 402, name: "4th Street White & Red", category: "Wines & Creams", price: "KES 2,200", description: "South Africa's favorite — fruity and easy to love." },
  { id: 403, name: "Amarula 1L", category: "Wines & Creams", price: "KES 3,500", description: "Smooth marula fruit on cream, 1 liter." },
  { id: 404, name: "Amarula 350ml", category: "Wines & Creams", price: "KES 2,000", description: "Silky and indulgent, 350ml." },
  { id: 405, name: "Asconi Red", category: "Wines & Creams", price: "KES 3,000", description: "Moldovan red — rich and well-rounded." },
  { id: 406, name: "Baileys 375ml", category: "Wines & Creams", price: "KES 3,500", description: "Original Irish Cream — luxuriously smooth." },
  { id: 407, name: "Black Bird Red", category: "Wines & Creams", price: "KES 2,600", description: "Bold, fruity and approachable." },
  { id: 408, name: "Four Cousins", category: "Wines & Creams", price: "KES 2,200", description: "Sweet South African wine — fruit-forward." },
  { id: 409, name: "Cellar Cask Red & White", category: "Wines & Creams", price: "KES 2,200", description: "Smooth, everyday South African wine." },
  { id: 410, name: "Drostdy Hof Red & White", category: "Wines & Creams", price: "KES 2,600", description: "Elegant South African red or white." },
  { id: 411, name: "Nederburg", category: "Wines & Creams", price: "KES 3,000", description: "Refined, balanced South African winery." },
  { id: 412, name: "Robertson White & Red", category: "Wines & Creams", price: "KES 2,600", description: "Fruity, easy-drinking South African wine." },
  { id: 413, name: "Rosso Nobile", category: "Wines & Creams", price: "KES 3,800", description: "Italian red with chocolate and cherry notes." },
  { id: 414, name: "Wine by the Glass", category: "Wines & Creams", price: "KES 400", description: "A generous pour of our house red or white." },

  // ── Tequila, Gin & Vodka ─────────────────────────────────────
  { id: 500, name: "Tanqueray 1L", category: "Tequila, Gin & Vodka", price: "KES 7,000", description: "London Dry Gin — crisp, juniper-forward." },
  { id: 501, name: "Gordons 750ml", category: "Tequila, Gin & Vodka", price: "KES 3,000", description: "London Dry Gin — distinctively crisp." },
  { id: 502, name: "Beefeater", category: "Tequila, Gin & Vodka", price: "KES 3,500", description: "Bold juniper and citrus character." },
  { id: 503, name: "Gilbey 750ml", category: "Tequila, Gin & Vodka", price: "KES 2,700", description: "Smooth, balanced, easy-mixing gin." },
  { id: 504, name: "Ciroc", category: "Tequila, Gin & Vodka", price: "KES 7,000", description: "Ultra-Premium vodka — distilled five times from French grapes." },
  { id: 505, name: "Absolut Vodka 1L", category: "Tequila, Gin & Vodka", price: "KES 3,500", description: "Clean, smooth Swedish vodka, 1L." },
  { id: 506, name: "Smirnoff Vodka 750ml", category: "Tequila, Gin & Vodka", price: "KES 2,700", description: "Triple-distilled and exceptionally smooth." },
  { id: 507, name: "Jose Cuervo 1L", category: "Tequila, Gin & Vodka", price: "KES 4,500", description: "World's most-loved tequila, 1L." },
  { id: 508, name: "Jose Cuervo 750ml", category: "Tequila, Gin & Vodka", price: "KES 4,000", description: "Smooth, golden Mexican tequila." },
  { id: 509, name: "Camino 750ml", category: "Tequila, Gin & Vodka", price: "KES 3,800", description: "Bright, citrusy and agave-forward tequila." },
  { id: 510, name: "Malibu", category: "Tequila, Gin & Vodka", price: "KES 3,000", description: "Caribbean rum with coconut — sweet and tropical." },
  { id: 511, name: "Martini Rosso", category: "Tequila, Gin & Vodka", price: "KES 3,500", description: "Sweet, herbal and richly aromatic vermouth." },

  // ── Shots ────────────────────────────────────────────────────
  { id: 600, name: "Jose Cuervo — Double", category: "Shots", price: "KES 600", description: "Double tequila shot, salt and lime on the side." },
  { id: 601, name: "Jose Cuervo — Single", category: "Shots", price: "KES 300", description: "Single shot of golden Jose Cuervo tequila." },
  { id: 602, name: "Tanqueray — Double", category: "Shots", price: "KES 700", description: "Double shot of crisp London Dry Gin." },
  { id: 603, name: "Tanqueray — Single", category: "Shots", price: "KES 350", description: "Single shot of Tanqueray gin." },
  { id: 604, name: "J. Walker — Double", category: "Shots", price: "KES 600", description: "Double shot of smooth, full-bodied Johnnie Walker." },
  { id: 605, name: "J. Walker — Single", category: "Shots", price: "KES 300", description: "Single shot of Johnnie Walker Scotch." },
  { id: 606, name: "Jagermeister — Double", category: "Shots", price: "KES 600", description: "Double shot of ice-cold Jägermeister." },
  { id: 607, name: "Jagermeister — Single", category: "Shots", price: "KES 300", description: "Single shot of ice-cold Jägermeister." },
];

export const FOOD_CATEGORIES: FoodCategory[] = [
  "Breakfast",
  "Grills",
  "Snacks and Kiddies",
  "Side Dishes",
];

export const DRINK_CATEGORIES: DrinkCategory[] = [
  "Beverages",
  "Beers",
  "Whiskey, Cognac & Brandy",
  "Wines & Creams",
  "Tequila, Gin & Vodka",
  "Shots",
];

export const HERO_IMAGE =
  "/b.jpg";

export const DRINKS_HERO_IMAGE =
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1800&auto=format&fit=crop&q=85";