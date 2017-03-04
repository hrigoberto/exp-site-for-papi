
function scrollToTarget(initiator, target) {
  document.getElementById(initiator).onclick = function() {
    scroll();
  };

  function scroll () {
    return Velocity(document.getElementById(target), "scroll", { duration: 1000, easing: 'ease'})
  };
};

scrollToTarget('btn1', 'buttonParallax');
scrollToTarget('btn2', 'boatparallax');
