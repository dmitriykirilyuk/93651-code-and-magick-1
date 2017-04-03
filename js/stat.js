'use strict';
window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура, вы победили!', 120, 30);
  ctx.fillText('Список результатов:', 120, 55);

  var max = -1;
  var maxIndex = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 120;
  var step = histogramHeight / (max - 0);

  ctx.fillText('Худшее время: ' + max.toFixed(2) + 'мс у игрока ' + names[maxIndex], 120, 80);

  var barWidth = 40;
  var indent = 50;
  var initialX = 120;
  var initialY = 100;

  ctx.textBaseline = 'top';
  for (i = 0; i < times.length; i++) {
    var positionX = initialX + i * (barWidth + indent);
    var positionY = initialY + histogramHeight + 30;
    var timeTracker = times[i].toFixed(0);
    var name = names[i];
    ctx.fillStyle = '#000';
    ctx.fillText(timeTracker, positionX, 100);
    ctx.fillText(name, positionX, positionY);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(21, 96, 189, ', (Math.random()).toFixed(1), ')'].join('');
    }
    ctx.fillRect(positionX, positionY, barWidth, times[i] * -step);
  }
};

var canvas = document.querySelector('canvas');
window.renderStatistics(canvas.getContext('2d'), ['Ира', 'Саша', 'Макс', 'Оля', 'Вы'], [5.20, 12.59, 23.66, 7.12, 15.34]);
