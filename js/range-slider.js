const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [1000, 10000],
    connect: true,
    step: 1,
    range: {
      'min': [1000],
      'max': [10000]
    }
  });
}