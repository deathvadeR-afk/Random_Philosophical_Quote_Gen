// Array of different philosophical sayings
const sayings = [
    "The only true wisdom is in knowing you know nothing.",
    "The unexamined life is not worth living.",
    "To know yourself is the beginning of all wisdom.",
    "The journey of a thousand miles begins with one step.",
    "He who knows, does not speak. He who speaks, does not know.",
    "Life is really simple, but we insist on making it complicated.",
    "In the midst of chaos, there is also opportunity.",
    "What we think, we become.",
    "Knowing others is intelligence; knowing yourself is true wisdom.",
    "The mind is everything. What you think you become."
  ];
  
  // Array of different endings
  const endings = [
    "Ponder on this.",
    "Reflect deeply.",
    "Take it to heart.",
    "Think about it.",
    "Contemplate on this."
  ];
  
  // Function to generate a random number based on array length
  const getRandomIndex = (array) => Math.floor(Math.random() * array.length);
  
  // Function to generate a random quote
  const generateQuote = () => {
    const saying = sayings[getRandomIndex(sayings)];
    const ending = endings[getRandomIndex(endings)];
    
    return `"${saying}" ${ending}`;
  };
  
  // Generate and print a random quote
  console.log(generateQuote());
  