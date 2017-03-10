
$(document).ready(function() {
  // var config = require('../config.json');

  function scrollToTarget(initiator, target) {
    $(`#${initiator}`).click(scroll)

    function scroll () {
      $(`#${target}`).velocity("scroll", { duration: 1000, easing: 'ease'})
    };
  };

  scrollToTarget('btn1', 'buttonParallax');
  scrollToTarget('btn2', 'boatparallax');

$.getJSON('../config.json', function(json) {
      initializeCalendar(json);
  })

  function initializeCalendar(config) {
    $('#calendar').fullCalendar({
      height: 600,
      googleCalendarApiKey: config.key,
      events: {
        googleCalendarId: config.calendarId
      }
    });

  }


})
