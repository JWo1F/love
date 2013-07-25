var size = view.size.height/1.5;

var heart = new Path.Circle(view.center, size/2);
heart.segments[1].point.y += size/3.5;
heart.segments[1].handleIn.y -= size/3.5;
heart.segments[1].handleOut.y -= size/3.5;
heart.segments[3].point.y += size/7;
heart.segments[3].handleIn.y -= size/7;
heart.segments[3].handleOut.y -= size/7;
heart.segments[0].point.x -= size/15;
heart.segments[2].point.x += size/15;

//heart.fullySelected = true;
heart.fillColor = {
  gradient: {
    stops: [['#ff3600', 0], ['#a31b01', 1]],
    radial: true
  },
  origin: view.center,
  destination: heart.segments[2].point
};
heart.strokeColor = 'black';

heart.translate(new Point(0, -size/7));

var stage = 0;
var flag = false;

function onFrame () {
  if (stage < 10) {
    heart.scale(0.97);
    stage++;
  } else if ((stage < 50 && flag) || (stage < 20 && !flag)) {
    stage++;
  } else if ((stage < 60 && flag) || (stage < 30 && !flag)) {
    heart.scale(1.0309);
    stage++;
  } else {
    stage = 0;
    flag = (flag) ? false : true;
  }
}

var textItem = new PointText(new Point(20, window.innerHeight - 20));
textItem.fillColor = '#ccc';
textItem.content = 'Design by JWo1F';