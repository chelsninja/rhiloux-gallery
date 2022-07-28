////////////////////////////
//--- EXPORT FUNCTIONS ---//
////////////////////////////

export function getFrameSizePrice(size) {
  return '$'+CHART_PRICING[size].base.toFixed(2);
}

export function getFrameTypePrice(size, type) {
  if (type === 'none') { return '$0.00'; }
  const tier = Object.keys(FRAME_TIERS).find(key => FRAME_TIERS[key].includes(type));
  return '$'+CHART_PRICING[size][tier].toFixed(2);
}

export function getQuotePrice(size, type) {
  if (type === 'none') { return getFrameSizePrice(size); }
  const tier = Object.keys(FRAME_TIERS).find(key => FRAME_TIERS[key].includes(type));
  return '$'+(CHART_PRICING[size].base+CHART_PRICING[size][tier]).toFixed(2);
}

export function getFrameBorder(key) {
  return key in FRAME_BORDERS ? FRAME_BORDERS[key] : undefined;
}

///////////////////////////
//--- LOCAL VARIABLES ---//
///////////////////////////

const CHART_PRICING = {
  "small": {
    "base": 55.00,
    "tier1": 100.00,
    "tier2": 110.00
  },
  "medium": {
    "base": 100.00,
    "tier1": 188.00,
    "tier2": 200.00
  },
  "large": {
    "base": 120.00,
    "tier1": 200.00,
    "tier2": 230.00
  }
};

const FRAME_TIERS = {
  "tier1": [
    "black_flat",
    "bronze_ornate",
    "gold_flat",
    "gold_accent",
    "silver_flat",
    "silver_cured"
  ],
  "tier2": [
    "espresso_rustic",
    "espresso_walnut",
    "white_flat",
    "white_rustic"
  ]
};

const FRAME_BORDERS = {
  "black_flat": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/blackflat.png?v=1658867487",
    "width": 30
  },
  "bronze_ornate": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/bronzeornate.png?v=1658869398",
    "width": 30
  },
  "espresso_rustic": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/espressorustic.png?v=1658869433",
    "width": 60
  },
  "espresso_walnut": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/espressowalnut.png?v=1658869552",
    "width": 50
  },
  "gold_flat": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/goldflatmetal.png?v=1658869605",
    "width": 20
  },
  "gold_accent": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/goldaccent.png?v=1658869750",
    "width": 30
  },
  "silver_flat": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/silverflatmetal.png?v=1658869789",
    "width": 20
  },
  "silver_cured": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/silvercurved.png?v=1658869856",
    "width": 40
  },
  "white_flat": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/whiteflat.png?v=1658869978",
    "width": 50
  },
  "white_rustic": {
    "source": "https://cdn.shopify.com/s/files/1/0583/7963/2697/files/whiterustic.png?v=1658870013",
    "width": 60
  }
};
