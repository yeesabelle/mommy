function timetableDropdown () {
  var schedulesButtons = document.getElementsByClassName('schedule-button');
  var scheduleButtonsIndex = schedulesButtons.length;

  while (scheduleButtonsIndex--) {
    schedulesButtons[scheduleButtonsIndex].addEventListener('click', function() {
      var target = this.dataset.target;
      var targetArrow = this.querySelector('i.fa-chevron-up')

      document.getElementById(target).classList.toggle('timetable-reveal')
      targetArrow.classList.toggle('arrow-down')
    })
  }

  new SmoothScroll('a[href*="#"]');
  
  $("a[data-scroll]").on('click', function() {
    $('button.navbar-toggle').click();
  });
}

window.addEventListener('load', timetableDropdown);
