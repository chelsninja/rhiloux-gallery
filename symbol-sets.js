////////////////////////////
//--- EXPORT FUNCTIONS ---//
////////////////////////////

export function getSymbolSet(color) {
  return color ? SYMBOL_LIST[color] : SYMBOL_LIST;
}

export function getSymbolUrl(name, color) {
  let symbolSet = getSymbolSet(color),
    symbolUrl;
  if (name in symbolSet.planet) {
    symbolUrl = symbolSet.planet[name];
  } else if (name in symbolSet.sign) {
    symbolUrl = symbolSet.sign[name];
  }
  return symbolUrl;
}

///////////////////////////
//--- LOCAL VARIABLES ---//
///////////////////////////

const BLACK_SYMBOLS = {
  "planet": {
    "Chiron": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Chiron-Black.svg?v=1648854138",
    "Jupiter": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Jupiter-Black.svg?v=1648854138",
    "Lilith": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Lilith-Black.svg?v=1648854138",
    "Mars": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mars-Black.svg?v=1648854138",
    "Mercury": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mercury-Black.svg?v=1648854138",
    "Moon": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Moon-Black.svg?v=1648854138",
    "Neptune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Neptune-Black.svg?v=1648854138",
    "Node": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/NNode-Black.svg?v=1648854138",
    "Part of Fortune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/PoFortune-Black.svg?v=1655410022",
    "Pluto": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pluto-Black.svg?v=1648854138",
    "Saturn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Saturn-Black.svg?v=1648854138",
    "Sun": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sun-Black.svg?v=1648854138",
    "Uranus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Uranus-Black.svg?v=1648854138",
    "Venus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Venus-Black.svg?v=1648854138"
  },
  "sign": {
    "Aries": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aries-Black.svg?v=1648854138",
    "Aquarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aquarius-Black.svg?v=1648854138",
    "Cancer": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cancer-Black.svg?v=1648854138",
    "Capricorn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Capricorn-Black.svg?v=1648854138",
    "Gemini": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Gemini-Black.svg?v=1648854138",
    "Leo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Leo-Black.svg?v=1648854138",
    "Libra": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Libra-Black.svg?v=1648854138",
    "Pisces": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pisces-Black.svg?v=1648854138",
    "Sagittarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sagittarius-Black.svg?v=1648854138",
    "Scorpio": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Scorpio-Black.svg?v=1648854138",
    "Taurus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Taurus-Black.svg?v=1648854138",
    "Virgo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Virgo-Black.svg?v=1648854138"
  }
};

const EARTH_SYMBOLS = {
  "planet": {
    "Chiron": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Chiron-Earth.svg?v=1648853963",
    "Jupiter": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Jupiter-Earth.svg?v=1648853963",
    "Lilith": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Lilith-Earth.svg?v=1648853963",
    "Mars": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mars-Earth.svg?v=1648853964",
    "Mercury": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mercury-Earth.svg?v=1648853963",
    "Moon": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Moon-Earth.svg?v=1648853963",
    "Neptune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Neptune-Earth.svg?v=1648853963",
    "Node": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/NNode-Earth.svg?v=1648853963",
    "Part of Fortune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/PoFortune-Earth.svg?v=1655410052",
    "Pluto": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pluto-Earth.svg?v=1648853963",
    "Saturn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Saturn-Earth.svg?v=1648853963",
    "Sun": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sun-Earth.svg?v=1648853963",
    "Uranus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Uranus-Earth.svg?v=1648853963",
    "Venus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Venus-Earth.svg?v=1648853963"
  },
  "sign": {
    "Aries": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aries-Earth.svg?v=1648853963",
    "Aquarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aquarius-Earth.svg?v=1648853963",
    "Cancer": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cancer-Earth.svg?v=1648853963",
    "Capricorn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Capricorn-Earth.svg?v=1648853963",
    "Gemini": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Gemini-Earth.svg?v=1648853963",
    "Leo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Leo-Earth.svg?v=1648853963",
    "Libra": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Libra-Earth.svg?v=1648853963",
    "Pisces": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pisces-Earth.svg?v=1648853963",
    "Sagittarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sagittarius-Earth.svg?v=1648853963",
    "Scorpio": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Scorpio-Earth.svg?v=1648853963",
    "Taurus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Taurus-Earth.svg?v=1648853963",
    "Virgo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Virgo-Earth.svg?v=1648853963"
  }
};

const GOLD_SYMBOLS = {
  "planet": {
    "Chiron": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Chiron-Gold.svg?v=1648853624",
    "Jupiter": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Jupiter-Gold.svg?v=1648853624",
    "Lilith": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Lilith-Gold.svg?v=1648853624",
    "Mars": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mars-Gold.svg?v=1648853624",
    "Mercury": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mercury-Gold.svg?v=1648853624",
    "Moon": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Moon-Gold.svg?v=1648853624",
    "Neptune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Neptune-Gold.svg?v=1648853624",
    "Node": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/NNode-Gold.svg?v=1648853624",
    "Part of Fortune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/PoFortune-Gold.svg?v=1655410075",
    "Pluto": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pluto-Gold.svg?v=1648853624",
    "Saturn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Saturn-Gold.svg?v=1648853624",
    "Sun": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sun-Gold.svg?v=1648853624",
    "Uranus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Uranus-Gold.svg?v=1648853624",
    "Venus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Venus-Gold.svg?v=1648853624"
  },
  "sign": {
    "Aries": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aries-Gold.svg?v=1648853624",
    "Aquarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aquarius-Gold.svg?v=1648853624",
    "Cancer": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cancer-Gold.svg?v=1648853624",
    "Capricorn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Capricorn-Gold.svg?v=1648853624",
    "Gemini": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Gemini-Gold.svg?v=1648853624",
    "Leo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Leo-Gold.svg?v=1648853624",
    "Libra": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Libra-Gold.svg?v=1648853624",
    "Pisces": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pisces-Gold.svg?v=1648853624",
    "Sagittarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sagittarius-Gold.svg?v=1648853624",
    "Scorpio": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Scorpio-Gold.svg?v=1648853624",
    "Taurus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Taurus-Gold.svg?v=1648853624",
    "Virgo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Virgo-Gold.svg?v=1648853624"
  }
};

const WHITE_SYMBOLS = {
  "planet": {
    "Chiron": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Chiron-White.svg?v=1648853324",
    "Jupiter": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Jupiter-White.svg?v=1648853324",
    "Lilith": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Lilith-White.svg?v=1648853324",
    "Mars": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mars-White.svg?v=1648853324",
    "Mercury": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Mercury-White.svg?v=1648853324",
    "Moon": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Moon-White.svg?v=1648853324",
    "Neptune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Neptune-White.svg?v=1648853324",
    "Node": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/NNode-White.svg?v=1648853325",
    "Part of Fortune": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/PoFortune-White.svg?v=1655410100",
    "Pluto": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pluto-White.svg?v=1648853324",
    "Saturn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Saturn-White.svg?v=1648853325",
    "Sun": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sun-White.svg?v=1648853326",
    "Uranus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Uranus-White.svg?v=1648853325",
    "Venus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Venus-White.svg?v=1648853325"
  },
  "sign": {
    "Aries": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aries-White.svg?v=1648853310",
    "Aquarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Aquarius-White.svg?v=1648784268",
    "Cancer": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cancer-White.svg?v=1648853324",
    "Capricorn": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Capricorn-White.svg?v=1648853324",
    "Gemini": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Gemini-White.svg?v=1648853324",
    "Leo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Leo-White.svg?v=1648853324",
    "Libra": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Libra-White.svg?v=1648853324",
    "Pisces": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Pisces-White.svg?v=1648853325",
    "Sagittarius": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Sagittarius-White.svg?v=1648853324",
    "Scorpio": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Scorpio-White.svg?v=1648853325",
    "Taurus": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Taurus-White.svg?v=1648853325",
    "Virgo": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Virgo-White.svg?v=1648853325"
  }
};

const SYMBOL_LIST = {
  "black": BLACK_SYMBOLS,
  "earth": EARTH_SYMBOLS,
  "gold": GOLD_SYMBOLS,
  "white": WHITE_SYMBOLS
};
