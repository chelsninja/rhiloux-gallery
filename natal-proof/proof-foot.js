var astroToken = btoa("617480:663faf8b929303aca500ee921dd946e3");

import {
  getArtist,
  getArtListByElement,
  getArtSet,
} from '//cdn.shopify.com/s/files/1/0583/7963/2697/t/2/assets/rhiloux-art-sets.js?v=39324720906671648561660600975';

import {
  getSymbolSet,
  getSymbolUrl
} from '//cdn.shopify.com/s/files/1/0583/7963/2697/t/2/assets/rhiloux-symbol-sets.js?v=171852452592477723991655438074';

$(function () {

  /////////////////////
  //--- VARIABLES ---//
  /////////////////////

  // Init global variables
  let submissionCount = 0,
    selectedArtSet,
    birthDay = undefined,
    birthMonth = undefined,
    birthYear = undefined,
    birthHour = undefined,
    birthMinute = undefined,
    birthLatitude = undefined,
    birthLongitude = undefined,
    birthTimezone = undefined;


  //////////////////
  //--- EVENTS ---//
  //////////////////

  // Birth Data Form on Submit -- START
  $('#rhiloux_form').submit(function (event) {
    event.preventDefault();
    submissionCount++;
    birthDay = $('#birth_day').val();
    birthMonth = $('#birth_month').val();
    birthYear = $('#birth_year').val();
    birthHour = $('#birth_ampm').val() === 'PM' ? parseInt($('#birth_hour').val()) + 12 : $('#birth_hour').val();
    birthMinute = $('#birth_minute').val();
    birthLatitude = $('#birth_lat').val();
    birthLongitude = $('#birth_long').val();
    birthTimezone = $('#birth_tzone').val();
    getAstrologyData();
  });
  // Birth Data Form on Submit -- END

  // Select art set -- START
  $('#art_set').change(function () {
    let artSetName = $(this).val(),
      artistName = $(this).children().filter(function () { return $(this).val() === artSetName }).data('artist');
    selectedArtSet = getArtSet(artSetName, artistName);

    updateAstrologyData({
      POINTS_COLOR: selectedArtSet.chart.color,
      CIRCLE_COLOR: selectedArtSet.chart.color,
      LINE_COLOR: selectedArtSet.chart.color,
      SYMBOL_AXIS_FONT_COLOR: selectedArtSet.axis,
      CUSPS_FONT_COLOR: selectedArtSet.chart.color,
      COLOR_BACKGROUND: selectedArtSet.chart.background,
      COLOR_ARIES: selectedArtSet.element.fire,
      COLOR_LEO: selectedArtSet.element.fire,
      COLOR_SAGITTARIUS: selectedArtSet.element.fire,
      COLOR_TAURUS: selectedArtSet.element.earth,
      COLOR_VIRGO: selectedArtSet.element.earth,
      COLOR_CAPRICORN: selectedArtSet.element.earth,
      COLOR_GEMINI: selectedArtSet.element.air,
      COLOR_LIBRA: selectedArtSet.element.air,
      COLOR_AQUARIUS: selectedArtSet.element.air,
      COLOR_CANCER: selectedArtSet.element.water,
      COLOR_SCORPIO: selectedArtSet.element.water,
      COLOR_PISCES: selectedArtSet.element.water,
      CUSTOM_SYMBOL_FN: getCustomSymbols,
      ASPECTS: {
        'conjunction': { 'degree': 0, 'orbit': 10, 'color': 'transparent' },
        'square': { 'degree': 90, 'orbit': 8, 'color': selectedArtSet.aspects.red || '#FF4500' },
        'trine': { 'degree': 120, 'orbit': 8, 'color': selectedArtSet.aspects.green || '#27AE60' },
        'opposition': { 'degree': 180, 'orbit': 10, 'color': selectedArtSet.aspects.green || '#27AE60' }
      }
    });

    $('#rhiloux_chart').css({
      //'background-image': 'url('+selectedArtSet.background['3x4']+')',
      'font-family': selectedArtSet.font.family[0],
      'color': selectedArtSet.font.color
    });
  });
  // Select art set -- END


  /////////////////////
  //--- FUNCTIONS ---//
  /////////////////////

  // Get custom symbols -- START
  function getCustomSymbols(name, x, y, context) {
    if (!getSymbolUrl(name, 'white')) return null; // null or undefined will fallback to the defaul implemetation
    const symbol = document.createElementNS(context.root.namespaceURI, 'image');
    symbol.setAttribute('href', getSymbolUrl(name, selectedArtSet.symbols));
    symbol.setAttribute('x', x - 10);
    symbol.setAttribute('y', y - 10);
    symbol.setAttribute('width', '20px');
    symbol.setAttribute('height', '20px');
    return symbol;
  } // Get custom symbols -- END

  // Get astrology data -- START
  function getAstrologyData() {
    let myData = { 'planets': {}, 'cusps': [] },
      mySigns = [],
      myElements = { 'earth': 0, 'water': 0, 'air': 0, 'fire': 0 };

    $.ajax({
      url: 'https://json.astrologyapi.com/v1/western_horoscope',
      type: 'POST',
      timeout: 0,
      headers: {
        'Authorization': `Basic ${astroToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        // 'day': "4",
        // 'month': "9",
        // 'year': "1981",
        // 'hour': "10",
        // 'min': "00",
        // 'lat': "29.7604",
        // 'lon': "-95.3698",
        // 'tzone': "-5"
        'day': birthDay,
        'month': birthMonth,
        'year': birthYear,
        'hour': birthHour,
        'min': birthMinute,
        'lat': birthLatitude,
        'lon': birthLongitude,
        'tzone': birthTimezone,
      }
    }).done(function (response) {
      // Get Planets
      myData.planets['Lilith'] = [response.lilith.full_degree];
      mySigns.push(response.lilith.sign);
      response.planets.forEach(function (planet) {
        myData.planets[planet.name] = [planet.full_degree];
        mySigns.push(planet.sign);
      });
      // Get Houses
      response.houses.forEach(function (house) {
        myData.cusps.push(house.degree);
        mySigns.push(house.sign);
      });
      // Reset Chart
      if (submissionCount > 1) {
        $('#rhiloux_chart').empty();
      }
      // Draw Chart
      let radix = new astrology.Chart('rhiloux_chart', 440, 440, {}).radix(myData);
      radix.addPointsOfInterest({
        'As': [myData.cusps[0]],
        'Ic': [myData.cusps[3]],
        'Ds': [myData.cusps[6]],
        'Mc': [myData.cusps[9]]
      });
      radix.aspects();
    }).always(function () {
      // something
    });
  } // Get astrology data -- END

  // Update astrology data -- START
  function updateAstrologyData(settings) {
    let myData = { 'planets': {}, 'cusps': [] };

    $.ajax({
      url: 'https://json.astrologyapi.com/v1/western_horoscope',
      type: 'POST',
      timeout: 0,
      headers: {
        'Authorization': `Basic ${astroToken}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        // 'day': "4",
        // 'month': "9",
        // 'year': "1981",
        // 'hour': "10",
        // 'min': "00",
        // 'lat': "29.7604",
        // 'lon': "-95.3698",
        // 'tzone': "-5"
        'day': birthDay,
        'month': birthMonth,
        'year': birthYear,
        'hour': birthHour,
        'min': birthMinute,
        'lat': birthLatitude,
        'lon': birthLongitude,
        'tzone': birthTimezone,
      }
    }).done(function (response) {
      // Get Planets
      myData.planets['Lilith'] = [response.lilith.full_degree];
      response.planets.forEach(function (planet) {
        myData.planets[planet.name] = [planet.full_degree];
      });
      // Get Houses
      response.houses.forEach(function (house) {
        myData.cusps.push(house.degree);
      });
      // Reset Chart
      $('#rhiloux_chart').empty();
      // Draw Chart
      let radix = new astrology.Chart('rhiloux_chart', 440, 440, settings).radix(myData);
      radix.addPointsOfInterest({
        'As': [myData.cusps[0]],
        'Ic': [myData.cusps[3]],
        'Ds': [myData.cusps[6]],
        'Mc': [myData.cusps[9]]
      });
      radix.aspects();
    });
  } // Update astrology data -- END

});
