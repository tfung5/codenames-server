/**
 * Credit for this function goes to: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

generateWordsObject = wordBank => {
  let words = {};

  for (let i = 0; i < wordBank.length; ++i) {
    words[i] = wordBank[i];
  }

  return words;
};

generateWordList = () => {
  const MAX_WORD_LENGTH = 10;
  let words = [];
  let usedIndices = {};

  // Select 25 random array indices
  while (words.length < 25) {
    let index = getRandomInt(0, wordBank.length - 1);
    let word = wordBank[index];

    /**
     * While this index has been used before
     * or while this word is longer than desired,
     * try again
     */
    while (usedIndices[index] || word.length > MAX_WORD_LENGTH) {
      index = getRandomInt(0, wordBank.length - 1);
      word = wordBank[index];
    }

    usedIndices[index] = true; // Mark index as used

    words.push(word);
  }

  return words;
};

const wordBank = [
  "Hollywood",
  "Well",
  "Foot",
  "New York",
  "Spring",
  "Court",
  "Tube",
  "Point",
  "Tablet",
  "Slip",
  "Date",
  "Drill",
  "Lemon",
  "Bell",
  "Screen",
  "Fair",
  "Torch",
  "State",
  "Match",
  "Iron",
  "Block",
  "France",
  "Australia",
  "Limousine",
  "Stream",
  "Glove",
  "Nurse",
  "Leprechaun",
  "Play",
  "Tooth",
  "Arm",
  "Bermuda",
  "Diamond",
  "Whale",
  "Comic",
  "Mammoth",
  "Green",
  "Pass",
  "Missile",
  "Paste",
  "Drop",
  "Pheonix",
  "Marble",
  "Staff",
  "Figure",
  "Park",
  "Centaur",
  "Shadow",
  "Fish",
  "Cotton",
  "Egypt",
  "Theater",
  "Scale",
  "Fall",
  "Track",
  "Force",
  "Dinosaur",
  "Bill",
  "Mine",
  "Turkey",
  "March",
  "Contract",
  "Bridge",
  "Robin",
  "Line",
  "Plate",
  "Band",
  "Fire",
  "Bank",
  "Boom",
  "Cat",
  "Shot",
  "Suit",
  "Chocolate",
  "Roulette",
  "Mercury",
  "Moon",
  "Net",
  "Lawyer",
  "Satellite",
  "Angel",
  "Spider",
  "Germany",
  "Fork",
  "Pitch",
  "King",
  "Crane",
  "Trip",
  "Dog",
  "Conductor",
  "Part",
  "Bugle",
  "Witch",
  "Ketchup",
  "Press",
  "Spine",
  "Worm",
  "Alps",
  "Bond",
  "Pan",
  "Beijing",
  "Racket",
  "Cross",
  "Seal",
  "Aztec",
  "Maple",
  "Parachute",
  "Hotel",
  "Berry",
  "Soldier",
  "Ray",
  "Post",
  "Greece",
  "Square",
  "Mass",
  "Bat",
  "Wave",
  "Car",
  "Smuggler",
  "England",
  "Crash",
  "Tail",
  "Card",
  "Horn",
  "Capital",
  "Fence",
  "Deck",
  "Buffalo",
  "Microscope",
  "Jet",
  "Duck",
  "Ring",
  "Train",
  "Field",
  "Gold",
  "Tick",
  "Check",
  "Queen",
  "Strike",
  "Kangaroo",
  "Spike",
  "Scientist",
  "Engine",
  "Shakespeare",
  "Wind",
  "Kid",
  "Embassy",
  "Robot",
  "Note",
  "Ground",
  "Draft",
  "Ham",
  "War",
  "Mouse",
  "Center",
  "Chick",
  "China",
  "Bolt",
  "Spot",
  "Piano",
  "Pupil",
  "Plot",
  "Lion",
  "Police",
  "Head",
  "Litter",
  "Concert",
  "Mug",
  "Vacuum",
  "Atlantis",
  "Straw",
  "Switch",
  "Skyscraper",
  "Laser",
  "Scuba Diver",
  "Africa",
  "Plastic",
  "Dwarf",
  "Lap",
  "Life",
  "Honey",
  "Horseshoe",
  "Unicorn",
  "Spy",
  "Pants",
  "Wall",
  "Paper",
  "Sound",
  "Ice",
  "Tag",
  "Web",
  "Fan",
  "Orange",
  "Temple",
  "Canada",
  "Scorpion",
  "Undertaker",
  "Mail",
  "Europe",
  "Soul",
  "Apple",
  "Pole",
  "Tap",
  "Mouth",
  "Ambulance",
  "Dress",
  "Ice Cream",
  "Rabbit",
  "Buck",
  "Agent",
  "Sock",
  "Nut",
  "Boot",
  "Ghost",
  "Oil",
  "Superhero",
  "Code",
  "Kiwi",
  "Hospital",
  "Saturn",
  "Film",
  "Button",
  "Snowman",
  "Helicopter",
  "Loch Ness",
  "Log",
  "Princess",
  "Time",
  "Cook",
  "Revolution",
  "Shoe",
  "Mole",
  "Spell",
  "Grass",
  "Washer",
  "Game",
  "Beat",
  "Hole",
  "Horse",
  "Pirate",
  "Link",
  "Dance",
  "Fly",
  "Pit",
  "Server",
  "School",
  "Lock",
  "Brush",
  "Pool",
  "Star",
  "Jam",
  "Organ",
  "Berlin",
  "Face",
  "Luck",
  "Amazon",
  "Cast",
  "Gas",
  "Club",
  "Sink",
  "Water",
  "Chair",
  "Shark",
  "Jupiter",
  "Copper",
  "Jack",
  "Platypus",
  "Stick",
  "Olive",
  "Grace",
  "Bear",
  "Glass",
  "Row",
  "Pistol",
  "London",
  "Rock",
  "Van",
  "Vet",
  "Beach",
  "Charge",
  "Port",
  "Disease",
  "Palm",
  "Moscow",
  "Pin",
  "Washington",
  "Pyramid",
  "Opera",
  "Casino",
  "Pilot",
  "String",
  "Night",
  "Chest",
  "Yard",
  "Teacher",
  "Pumpkin",
  "Thief",
  "Bark",
  "Bug",
  "Mint",
  "Cycle",
  "Telescope",
  "Calf",
  "Air",
  "Box",
  "Mount",
  "Thumb",
  "Antarctica",
  "Trunk",
  "Snow",
  "Penguin",
  "Root",
  "Bar",
  "File",
  "Hawk",
  "Battery",
  "Compound",
  "Slug",
  "Octopus",
  "Whip",
  "America",
  "Ivory",
  "Pound",
  "Sub",
  "Cliff",
  "Lab",
  "Eagle",
  "Genius",
  "Ship",
  "Dice",
  "Hood",
  "Heart",
  "Novel",
  "Pipe",
  "Himalayas",
  "Crown",
  "Round",
  "India",
  "Needle",
  "Shop",
  "Watch",
  "Lead",
  "Tie",
  "Table",
  "Cell",
  "Cover",
  "Czech",
  "Back",
  "Bomb",
  "Ruler",
  "Forest",
  "Bottle",
  "Space",
  "Hook",
  "Doctor",
  "Ball",
  "Bow",
  "Degree",
  "Rome",
  "Plane",
  "Giant",
  "Nail",
  "Dragon",
  "Stadium",
  "Flute",
  "Carrot",
  "Wake",
  "Fighter",
  "Model",
  "Tokyo",
  "Eye",
  "Mexico",
  "Hand",
  "Swing",
  "Key",
  "Alien",
  "Tower",
  "Poison",
  "Cricket",
  "Cold",
  "Knife",
  "Church",
  "Board",
  "Cloak",
  "Ninja",
  "Olympus",
  "Belt",
  "Light",
  "Death",
  "Stock",
  "Millionaire",
  "Day",
  "Knight",
  "Pie",
  "Bed",
  "Circle",
  "Rose",
  "Change",
  "Cap",
  "Triangle"
];

module.exports = generateWordList;
