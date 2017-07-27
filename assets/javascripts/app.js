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

  var scroll = new SmoothScroll('a[href*="#"]');
}

window.addEventListener('load', timetableDropdown);
