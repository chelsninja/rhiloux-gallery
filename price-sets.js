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
    "black",
    "wood",
    "white"
  ],
  "tier2": [
    "gold",
    "silver"
  ]
};
