$(document).ready(function() {

  function scrollToTarget(initiator, target) {
    $(`#${initiator}`).click(scroll)

    function scroll () {
      $(`#${target}`).velocity("scroll", { duration: 1000, easing: 'ease'})
    };
  };

  scrollToTarget('btn1', 'buttonParallax');
  scrollToTarget('btn2', 'boatparallax');

  function initializeCalendar() {
    $('#calendar').fullCalendar({
      height: 600
    });

  }

  initializeCalendar();
})
