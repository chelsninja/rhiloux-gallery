import {
  getArtist,
  getArtListByElement,
  getArtSet,
} from '//cdn.shopify.com/s/files/1/0583/7963/2697/t/2/assets/rhiloux-art-sets.js?v=39324720906671648561659133145';

import {
  getFrameSizePrice,
  getFrameBorder,
  getFrameTypePrice,
  getQuotePrice
} from '//cdn.shopify.com/s/files/1/0583/7963/2697/t/2/assets/rhiloux-price-sets.js?v=84560309094975503201658964836';

import {
  getSymbolSet,
  getSymbolUrl
} from '//cdn.shopify.com/s/files/1/0583/7963/2697/t/2/assets/rhiloux-symbol-sets.js?v=171852452592477723991655438074';

$(function() {

  /////////////////////
  //--- VARIABLES ---//
  /////////////////////

  // Init DOM
  $('#preview_form').hide();

  // Init global variables
  let selectedArtSet,
    submissionCount = 0,
    birthCity = undefined,
    birthState = undefined,
    birthCountry = undefined,
    birthLatitude = undefined,
    birthLongitude = undefined,
    birthTimezone = undefined,
    months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December',
    };


  //////////////////
  //--- EVENTS ---//
  //////////////////

  // Birth Data Form on Submit -- START
  $('#rhiloux_form').submit(function(event) {
    event.preventDefault();
    submissionCount++;
    getSelectedLocationData();
    updateRhilouxPricing();
  });
  // Birth Data Form on Submit -- END

  // Autocomplete location input -- START
  $('#birth_location').keyup(function() {
    let search = $(this).val();
    if (search !== '') {
      $.ajax({
        url: 'https://open.mapquestapi.com/geocoding/v1/address?key=4dtz67PB06OMgtZSF3p4HhOFcpzxmwal',
        type: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: {
          'location': search
        },
        success: function(response) {
          let query = [];
          response.results[0].locations.forEach(function(geo) {
            let hood = geo.adminArea6,
              city = geo.adminArea5,
              county = geo.adminArea4,
              state = geo.adminArea3,
              country = geo.adminArea1,
              location = [hood, city, county, state, country].filter(Boolean).join(' / ');
            query.push(location);
          });
          $('#birth_location').autocomplete({
            source: [...new Set(query)],
            autofocus: true
          });
        }
      });
    }
  });
  // Autocomplete location input -- END

  // Birth name input -- START
  $('#birth_name').keyup(function() {
    const nameVal = $(this).val();
    const namePositionInputEl = $('#name_position');
    const namePreviewEl = $('#rhiloux_chart h2');

    if (nameVal !== '' && namePositionInputEl.val() === 'none') {
      namePreviewEl.text(nameVal);
      namePositionInputEl.val('top-center');
      namePositionInputEl.change();
    } else if (nameVal !== '') {
      namePreviewEl.text(nameVal);
    } else {
      namePreviewEl.remove();
      namePositionInputEl.val('none');
      namePositionInputEl.change();
    }
  });
  // Birth name input -- END

  // Select frame border -- START
  $('#frame_type').change(function() {
    const frameEl = $('#rhiloux_chart-frame');
    const frameBorder = getFrameBorder($(this).val());
    const isMobile = $(window).width() < 767;
    const frameWidth = isMobile ? frameBorder.width / 2 : frameBorder.width;

    updateRhilouxPricing();
    frameEl.removeClass('no-frame');

    if (frameBorder) {
      frameEl.css({
        'border-image': 'url("'+frameBorder.source+'") '+frameWidth,
        'border-width': frameWidth+'px'
      });
    } else {
      frameEl.addClass('no-frame');
    }
  });
  // Select frame border -- END

  // Select frame size -- START
  $('#frame_size').change(function() {
    const frameEl = $('#rhiloux_chart-frame');
    const chartEl = $('#rhiloux_chart');

    updateRhilouxPricing();

    switch ($(this).val()) {
      case 'small':
        frameEl.removeClass('large');	
        frameEl.addClass('small');
        chartEl.css({
          'background-image': 'url('+selectedArtSet.background['2x3']+')'
        });
        break;
        
      case 'medium':
        frameEl.removeClass('small');	
        frameEl.removeClass('large');
        chartEl.css({
          'background-image': 'url('+selectedArtSet.background['3x4']+')'
        });
        break;
        
      case 'large':
        frameEl.removeClass('small');	
        frameEl.addClass('large');
        chartEl.css({
          'background-image': 'url('+selectedArtSet.background['2x3']+')'
        });
        break;
    }
  });
  // Select frame size -- END

  // Select font family -- START
  $('#font_family').change(function() {
    const i = $(this).prop('selectedIndex');
    $('#rhiloux_chart').css({
      'font-family': selectedArtSet.font.family[i]
    });
  });
  // Select font family -- END

  // Select art set -- START
  $('#art_set').change(function() {
    let artSetName = $(this).val(),
      artistName = $(this).children().filter(function() { return $(this).val() === artSetName }).data('artist');
    selectedArtSet = getArtSet(artSetName, artistName);

    $('#font_family').empty();
    $.each(selectedArtSet.font.family, function (i, font) {
      $('#font_family').append($('<option>', { 
          value: font,
          text: 'Type '+(i+1)
      }));
    });

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
      'background-image': 'url('+selectedArtSet.background['3x4']+')',
      'font-family': selectedArtSet.font.family[0],
      'color': selectedArtSet.font.color
    });
    $('#frame_type').val(selectedArtSet.frame);
    $('#frame_type').change();
    updateRhilouxPricing();
  });
  // Select art set -- END

  // Select name position -- START
  $('#name_position').change(function() {
    const namePosition = $(this).val(),
      datetimePosition = $('#location-time_position').val(),
      birthName = $('#birth_name').val();

    $('#rhiloux_chart h2').remove();

    switch ($(this).val()) {
      case 'top-center':
        $('#rhiloux_chart').append('<h2 class="p--'+namePosition+'">'+birthName+'</h2>');
        break;
        
      case 'bottom':
        if (datetimePosition !== 'none') {
          $('#rhiloux_chart').append('<h2 class="p--'+datetimePosition+'">'+birthName+'</h2>');
        } else {
          $('#rhiloux_chart').append('<h2 class="p--'+namePosition+'-center">'+birthName+'</h2>');
        }
        break;
    }
  });
  // Select name position -- END

  // Select location & time position -- START
  $('#location-time_position').change(function() {
    const datetimePosition = $(this).val(),
      namePosition = $('#name_position').val(),
      birthName = $('#birth_name').val(),
      birthLocation = getFormattedBirthLocation($('#location_format').val()),
      birthTime = getFormattedBirthTime($('#time_format').val());

    $('#rhiloux_chart h3').remove();

    if (datetimePosition !== 'none') {
      $('#rhiloux_chart').append('<h3 class="p--'+datetimePosition+'">'+birthLocation+'</h3>');
      $('#rhiloux_chart').append('<h3 class="p--'+datetimePosition+'">'+birthTime+'</h3>');

      if (namePosition === 'bottom') {
        $('#rhiloux_chart h2').remove();
        $('#rhiloux_chart h3').first().before('<h2 class="p--'+datetimePosition+'">'+birthName+'</h2>');
      }
    } else if (namePosition === 'bottom') {
      $('#rhiloux_chart h2').remove();
      $('#rhiloux_chart').append('<h2 class="p--'+namePosition+'-center">'+birthName+'</h2>');
    }
  });
  // Select location & time position -- END

  // Select location format -- START
  $('#location_format').change(function() {
    $('#rhiloux_chart h3').first().text(getFormattedBirthLocation($(this).val()));
  });
  // Select location format -- END

  // Select time format -- START
  $('#time_format').change(function() {
    $('#rhiloux_chart h3').last().text(getFormattedBirthTime($(this).val()));
  });
  // Select time format -- END


  /////////////////////
  //--- FUNCTIONS ---//
  /////////////////////

  // Get location data -- START
  function getSelectedLocationData() {
    let location = $('#birth_location').val();
    $.ajax({
      url: 'https://open.mapquestapi.com/geocoding/v1/address?key=4dtz67PB06OMgtZSF3p4HhOFcpzxmwal',
      type: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        'location': location,
        'maxResults': 1
      },
      success: function(response) {
        birthCity = response.results[0].locations[0].adminArea5;
        birthState = response.results[0].locations[0].adminArea3;
        birthCountry = response.results[0].locations[0].adminArea1;
        birthLatitude = response.results[0].locations[0].latLng.lat;
        birthLongitude = response.results[0].locations[0].latLng.lng;
        getTimezoneData();
      }
    });
  } // Get location data -- END

  // Get timezone data -- START
  function getTimezoneData() {
    $.ajax({
      url: 'https://json.astrologyapi.com/v1/timezone_with_dst',
      type: 'POST',
      timeout: 0,
      headers: {
        'Authorization': 'Basic NjE3NDgwOjY2M2ZhZjhiOTI5MzAzYWNhNTAwZWU5MjFkZDk0NmUz',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: {
        'latitude': birthLatitude,
        'longitude': birthLongitude,
        'date': $('#birth_month').val() + '-' + $('#birth_day').val() + '-' + $('#birth_year').val()
      },
      success: function(response) {
        birthTimezone = response.timezone;
        getAstrologyData();
      }
    });
  } // Get timezone data -- END

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
        'Authorization': 'Basic NjE3NDgwOjY2M2ZhZjhiOTI5MzAzYWNhNTAwZWU5MjFkZDk0NmUz',
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
        'day': $('#birth_day').val(),
        'month': $('#birth_month').val(),
        'year': $('#birth_year').val(),
        'hour': $('#birth_ampm').val() === 'PM' ? parseInt($('#birth_hour').val()) + 12 : $('#birth_hour').val(),
        'min': $('#birth_minute').val(),
        'lat': birthLatitude,
        'lon': birthLongitude,
        'tzone': birthTimezone,
      }
    }).done(function(response) {
      // Get Planets
      myData.planets['Lilith'] = [response.lilith.full_degree];
      mySigns.push(response.lilith.sign);
      response.planets.forEach(function(planet) {
        myData.planets[planet.name] = [planet.full_degree];
        mySigns.push(planet.sign);
      });
      // Get Houses
      response.houses.forEach(function(house) {
        myData.cusps.push(house.degree);
        mySigns.push(house.sign);
      });
      // Reset Chart
      if (submissionCount > 1) {
        $('#rhiloux_chart').empty();
        $('#preview_form')[0].reset();
      } else {
        $('#preview_form').show();
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
    }).always(function() {
      // Count Sign Elements
      mySigns.forEach(function(sign) {
        if (sign === 'Taurus' || sign === 'Virgo' || sign === 'Capricorn') {
          myElements.earth++;
        } else if (sign === 'Pisces' || sign === 'Scorpio' || sign === 'Cancer') {
          myElements.water++;
        } else if (sign === 'Leo' || sign === 'Aries' || sign === 'Sagittarius') {
          myElements.fire++;
        } else if (sign === 'Aquarius' || sign === 'Gemini' || sign === 'Libra') {
          myElements.air++;
        }
      });
      // Set Default Design
      const majorChartElement = Object.keys(myElements).reduce(function(a, b) { return myElements[a] > myElements[b] ? a : b });
      const filteredArtSets = getArtListByElement(majorChartElement);
      const randomSetMatch = filteredArtSets[Math.floor(Math.random() * filteredArtSets.length)];
      $('#art_set').val(randomSetMatch.name);
      $('#art_set').change();
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
        'Authorization': 'Basic NjE3NDgwOjY2M2ZhZjhiOTI5MzAzYWNhNTAwZWU5MjFkZDk0NmUz',
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
        'day': $('#birth_day').val(),
        'month': $('#birth_month').val(),
        'year': $('#birth_year').val(),
        'hour': $('#birth_ampm').val() === 'PM' ? parseInt($('#birth_hour').val()) + 12 : $('#birth_hour').val(),
        'min': $('#birth_minute').val(),
        'lat': birthLatitude,
        'lon': birthLongitude,
        'tzone': birthTimezone,
      }
    }).done(function(response) {
      // Get Planets
      myData.planets['Lilith'] = [response.lilith.full_degree];
      response.planets.forEach(function(planet) {
        myData.planets[planet.name] = [planet.full_degree];
      });
      // Get Houses
      response.houses.forEach(function(house) {
        myData.cusps.push(house.degree);
      });
      // Reset Chart
      $('#rhiloux_chart').empty();
      $('#name_position').change();
      $('#location-time_position').change();
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

  // Get formatted birth time -- START
  function getFormattedBirthTime(format) {
    const bMonth = months[parseInt($('#birth_month').val())],
        bDay = $('#birth_day').val(),
        bYear = $('#birth_year').val(),
        bHour = $('#birth_hour').val(),
        bMinute = $('#birth_minute').val(),
        bMeridiem = $('#birth_ampm').val();
    if (format == 'western') {
      return bMonth+' '+bDay+', '+bYear+' '+bHour+':'+bMinute+bMeridiem;
    } else if (format == 'eastern') {
      let eastHour = bMeridiem == 'PM' ? +bHour + 12 : bHour;
      return  bDay+' '+bMonth+' '+bYear+' '+eastHour+':'+bMinute;
    }
  } // Get formatted birth time -- END

  // Get formatted birth location -- START
  function getFormattedBirthLocation(format) {
    let birthLocationFormatted;
    switch (format) {
      case 'city-state':
        birthLocationFormatted = birthCity+', '+birthState;
        break;
        
      case 'city-state-country':
        birthLocationFormatted = birthCity+', '+birthState+', '+birthCountry;
        break;

      case 'lat-long':
        birthLocationFormatted = birthLatitude+', '+birthLongitude;
        break;
    }
    return birthLocationFormatted;
  } // Get formatted birth location -- END

  // Update itemized quote pricing -- START
  function updateRhilouxPricing() {
    const frameSize = $('#frame_size').val(),
          frameType = $('#frame_type').val(),
          frameSizeTxt = $('#frame_size option:selected').text(),
          frameTypeTxt = $('#frame_type option:selected').text(),
          sizeLabelEl = $('#size_label'),
          typeLabelEl = $('#type_label'),
          sizePriceEl = $('#size_price'),
          typePriceEl = $('#type_price'),
          quotePriceEl = $('#quote_price');

    sizeLabelEl.text(frameSizeTxt);
    typeLabelEl.text(frameTypeTxt);
    sizePriceEl.text(getFrameSizePrice(frameSize));
    typePriceEl.text(getFrameTypePrice(frameSize, frameType));
    quotePriceEl.text(getQuotePrice(frameSize, frameType));
  }
  // Update itemized quote pricing -- END

});
