////////////////////////////
//--- EXPORT FUNCTIONS ---//
////////////////////////////

export function getArtist(name) {
  return ARTIST_LIST.find(a => a.artist === name);
}

export function getArtListByElement(element) {
  let artList = [];
  ARTIST_LIST.forEach(a => {
    artList = artList.concat(a.artsets.filter(set => set.theme === element));
  });
  return artList;
}

export function getArtSet(name, artistName) {
  return getArtist(artistName).artsets.find(set => set.name === name);
}

///////////////////////////
//--- LOCAL VARIABLES ---//
///////////////////////////

const defaultAspectGreen = "#27AE60";
const defaultAspectRed = "#FF4500";

const ALEX_BURDEN = {
  "artist": "Alex Burden",
  "artsets": [{
    "name": "Astral Cairns",
    "aspects": {
      "red": "rgb(138, 22, 7)",
      "green": "rgb(38, 59, 36)"
    },
    "axis": "#000000",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Astral-Cairns--2x3.jpg?v=1649034491",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Astral-Cairns--3x4.jpg?v=1649034491"
    },
    "chart": {
      "background": "transparent",
      "color": "#000000"
    },
    "element": {
      "air": "#BBC6CC",
      "earth": "#CCBC8D",
      "fire": "#F5C26F",
      "water": "#ADBDAF"
    },
    "font": {
      "color": "#000000",
      "family": [
        "Cabaletta",
        "Livingstone"
      ]
    },
    "frame": "black",
    "symbols": "earth",
    "theme": "earth"
  }]
};

const COSMIC_COLLAGE = {
  "artist": "Cosmic Collage",
  "artsets": [{
    "name": "Water Portal",
    "aspects": {
      "red": "rgb(134, 10, 127)",
      "green": "rgb(182, 235, 230)"
    },
    "axis": "#FFFFFF",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Collage--2x3.jpg?v=1654882329",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Collage--3x4.jpg?v=1654882329"
    },
    "chart": {
      "background": "transparent",
      "color": "#FFFFFF"
    },
    "element": {
      "air": "#B6EBE6",
      "earth": "#B5BCF2",
      "fire": "#860A7F",
      "water": "#246674"
    },
    "font": {
      "color": "#FFFFFF",
      "family": ["Open Sans Condensed Light"]
    },
    "frame": "white",
    "symbols": "white",
    "theme": "water"
  }]
};

const CREATIVE_POWERR = {
  "artist": "Creative Powerr",
  "artsets": [{
    "name": "Connected With The Cosmos",
    "aspects": {
      "red": "rgb(208, 71, 33)",
      "green": defaultAspectGreen
    },
    "axis": "#FFFFFF",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Creative-Powerr--2x3.jpg?v=1654899769",
      "3x4": ""
    },
    "chart": {
      "background": "transparent",
      "color": "#FFFFFF"
    },
    "element": {
      "air": "#8C9DE3",
      "earth": "#91467F",
      "fire": "#D050AB",
      "water": "#4186BE"
    },
    "font": {
      "color": "#FFFFFF",
      "family": [
        "Edge of the Galaxy",
        "Neonsign"
      ]
    },
    "frame": "black",
    "symbols": "white",
    "theme": "fire"
  }]
};

const ROVING_STARS = {
  "artist": "Roving Stars",
  "artsets": [{
    "name": "Cosmic Duality",
    "aspects": {
      "red": "rgb(180, 109, 106)",
      "green": "rgb(84, 130, 108)"
    },
    "axis": "#FFFFFF",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Duality--2x3.jpg?v=1652818536",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Duality--3x4.jpg?v=1649034460"
    },
    "chart": {
      "background": "transparent",
      "color": "#FFFFFF"
    },
    "element": {
      "air": "#7B5F87",
      "earth": "#91774A",
      "fire": "#EC748E",
      "water": "#49A79E"
    },
    "font": {
      "color": "#FFFFFF",
      "family": ["Aladin"]
    },
    "frame": "black",
    "symbols": "white",
    "theme": "air"
  }]
};

const LUNARLILT = {
  "artist": "LUNARLILT",
  "artsets": [{
    "name": "Cosmic Serpent",
    "aspects": {
      "red": "rgb(189, 157, 132)",
      "green": "rgb(183, 172, 126)"
    },
    "axis": "#FFFFFF",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Serpent--2x3.jpg?v=1649033542",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Serpent--3x4.jpg?v=1649033542"
    },
    "chart": {
      "background": "transparent",
      "color": "#FFFFFF"
    },
    "element": {
      "air": "#D9B231",
      "earth": "#7E8A70",
      "fire": "#A66C67",
      "water": "#9A8374"
    },
    "font": {
      "color": "#FFFFFF",
      "family": [
        "Josefin Sans",
        "Amatic SC"
      ]
    },
    "frame": "white",
    "symbols": "white",
    "theme": "earth"
  }]
};

const SUN_KEEP = {
  "artist": "Sun Keep",
  "artsets": [{
    "name": "Flow",
    "aspects": {
      "red": "rgb(0, 62, 82)",
      "green": "rgb(159, 207, 202)"
    },
    "axis": "#FFFFFF",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Flow--2x3.jpg?v=1654882482",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Flow--3x4.jpg?v=1654882482"
    },
    "chart": {
      "background": "rgba(255, 254, 252, 0.15)",
      "color": "#FFFFFF"
    },
    "element": {
      "air": "#9FCFCA",
      "earth": "#99BCAB",
      "fire": "#003E52",
      "water": "#91B6BB"
    },
    "font": {
      "color": "#FFFFFF",
      "family": [
        "Allora",
        "Avant Garde Demi"
      ]
    },
    "frame": "white",
    "symbols": "white",
    "theme": "water"
  }]
};

const CIAO_ZEN = {
  "artist": "Ciao Zen",
  "artsets": [{
    "name": "Magic Within You",
    "aspects": {
      "red": "rgb(107, 45, 9)",
      "green": "rgb(128, 118, 77)"
    },
    "axis": "#84591D",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Magic-Within-You--2x3.jpg?v=1649033042",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Magic-Within-You--3x4.jpg?v=1649033042"
    },
    "chart": {
      "background": "rgb(132, 89, 29, 0.6)",
      "color": "#000000"
    },
    "element": {
      "air": "#765123",
      "earth": "#8B5420",
      "fire": "#682D09",
      "water": "#713E16"
    },
    "font": {
      "color": "#000000",
      "family": [
        "Roxie Rossa",
        "Decohead"
      ]
    },
    "frame": "black",
    "symbols": "black",
    "theme": "fire"
  }]
};

const SIERRA_ROSE_CREATIVE = {
  "artist": "Sierra Rose Creative",
  "artsets": [{
    "name": "Vision Rising",
    "aspects": {
      "red": "rgb(113, 69, 81)",
      "green": "rgb(102, 119, 110)"
    },
    "axis": "#FFFFFF",
    "background": {
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Vision-Rising--2x3.jpg?v=1652818347",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Vision-Rising--3x4.jpg?v=1652818346"
    },
    "chart": {
      "background": "transparent",
      "color": "#FFFFFF"
    },
    "element": {
      "air": "#9B8B9A",
      "earth": "#716160",
      "fire": "#C6969C",
      "water": "#767B88"
    },
    "font": {
      "color": "#FFFFFF",
      "family": [
        "Florentia Light",
        "Girlboss Script"
      ]
    },
    "frame": "wood",
    "symbols": "white",
    "theme": "air"
  }]
};  

const ARTSET_EXAMPLE = {
  "artist": "",
  "artsets": [{
    "name": "",
    "aspects": {
      "red": "",
      "green": ""
    },
    "axis": "",
    "background": {
      "2x3": "",
      "3x4": ""
    },
    "chart": {
      "background": "",
      "color": ""
    },
    "element": {
      "air": "",
      "earth": "",
      "fire": "",
      "water": ""
    },
    "font": {
      "color": "",
      "family": ""
    },
    "frame": "",
    "symbols": "",
    "theme": ""
  }]
};

const ARTIST_LIST = [
  ALEX_BURDEN,
  COSMIC_COLLAGE,
  CREATIVE_POWERR,
  ROVING_STARS,
  LUNARLILT,
  SUN_KEEP,
  CIAO_ZEN,
  SIERRA_ROSE_CREATIVE
];
