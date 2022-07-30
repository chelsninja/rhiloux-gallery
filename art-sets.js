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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Astral-Cairns--wm2x3.jpg?v=1659128380",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Astral-Cairns--wm3x4.jpg?v=1659128380"
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
    "frame": "espresso_walnut",
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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Collage--wm2x3.jpg?v=1659128931",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Collage--wm3x4.jpg?v=1659128931"
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
    "frame": "black_flat",
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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Creative-Powerr--wm2x3.jpg?v=1659130083",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Creative-Powerr--wm3x4.png?v=1659130083"
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
    "frame": "black_flat",
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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Duality--wm2x3.jpg?v=1659129415",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Duality--wm3x4.jpg?v=1659129415"
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
    "frame": "gold_accent",
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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Serpent--wm2x3.jpg?v=1659129569",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Cosmic-Serpent--wm3x4.jpg?v=1659129569"
    },
    "chart": {
      "background": "transparent",
      "color": "#000000"
    },
    "element": {
      "air": "#ECD4AA",
      "earth": "#B2B185",
      "fire": "#D3AE81",
      "water": "#B89C82"
    },
    "font": {
      "color": "#FFFFFF",
      "family": [
        "Josefin Sans",
        "Amatic SC"
      ]
    },
    "frame": "bronze_ornate",
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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Flow--wm2x3.jpg?v=1659130289",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Flow--wm3x4.jpg?v=1659130289"
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
    "frame": "white_rustic",
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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Magic-Within-You--wm2x3.jpg?v=1659131588",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Magic-Within-You--wm3x4.jpg?v=1659131588"
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
    "frame": "gold_accent",
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
      "2x3": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Vision-Rising--wm2x3.jpg?v=1659132865",
      "3x4": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/Vision-Rising--wm3x4.jpg?v=1659132864"
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
    "frame": "gold_flat",
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
