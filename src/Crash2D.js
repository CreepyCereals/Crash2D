/*
@creepycereals
v1.0.1
*/
var Crash2D = {};


Crash2D.Rect = function (x, y, width, height){
	/*
	### Crash2D.Rect ###

	-> Properties ----

	x -> (Number) Rectangle's upper-left corner horizontal position
	y -> (Number) Rectangle's upper-left corner vertical position
	widht -> (Number) Rectangle's width
	height -> (Number) Rectangle's height

	-> Methods ----

	collide (polygonB) -> (bool) Return true if this object is colliding with polygonB 

	*/
	var rect = {
		x: x,
		y: y,
		width: width,
		height: height,
		collides: function(polygon){
			if (polygon.width){ // Checks if the 2nd polygon is a rectangle:
				// # Collision Rectangle + Rectangle
				if (this.x < polygon.x + polygon.width && this.x + this.width > polygon.x && this.y < polygon.y + polygon.height && this.height + this.y > polygon.y) {
					return true;
				}
				return false;

			}else{
				// ### Collision between Rectangle + Circle  ###
				var rectangleCenter = [this.x + this.width/2, this.y + this.height/2];
				var dimensions = [this.width / 2, this.height / 2];

				var dx = Math.abs(polygon.x - rectangleCenter[0]);
				var dy = Math.abs(polygon.y - rectangleCenter[1]);

				if (dx > (polygon.radius + dimensions[0]) || dy > (polygon.radius + dimensions[1])){
					return false;
				}

				var circleDistance = [Math.abs(polygon.x - this.x - dimensions[0]), Math.abs(polygon.y - this.y - dimensions[1])];

				if (circleDistance[0] <= dimensions[0] || circleDistance[1] <= dimensions[1]){
					return true;
				}

				var cornerDistance = Math.pow(circleDistance[0] - dimensions[0], 2) + Math.pow(circleDistance[1] - dimensions[1], 2);

				return (cornerDistance <= (Math.pow(polygon.radius, 2)));

			}
		}
	};
	return rect;
};

Crash2D.Circle = function (x, y, radius){
	/*

	### Crash2D.Circle ###

	-> Properties ----

	x -> (Number) Circle's center horizontal position
	y -> (Number) Circle's center vertical position
	radius -> (Number) Circle's radius

	-> Methods ----

	collide (polygonB) -> (bool) Return true if this object is colliding with polygonB

	*/
	var circle = {
		x: x,
		y: y,
		radius: radius,
		collides: function(polygon){
			if (polygon.width){ // Check if the 2nd polygon is a rectangle
				// # Collision Circle + Rectangle
				var rectangleCenter = [polygon.x + polygon.width/2, polygon.y + polygon.height/2];
				var dimensions = [polygon.width / 2, polygon.height / 2];

				var dx = Math.abs(this.x - rectangleCenter[0]);
				var dy = Math.abs(this.y - rectangleCenter[1]);

				if (dx > (this.radius + dimensions[0]) || dy > (this.radius + dimensions[1])){
					return false;
				}

				var circleDistance = [Math.abs(this.x - polygon.x - dimensions[0]), Math.abs(this.y - polygon.y - dimensions[1])];

				if (circleDistance[0] <= dimensions[0] || circleDistance[1] <= dimensions[1]){
					return true;
				}

				var cornerDistance = Math.pow(circleDistance[0] - dimensions[0], 2) + Math.pow(circleDistance[1] - dimensions[1], 2);

				return (cornerDistance <= (Math.pow(this.radius, 2)));

			}else{
				// # Collision Circle + Circle
				var distance = Math.sqrt(Math.pow((polygon.x - this.x), 2) + Math.pow((polygon.y - this.y), 2), 2);
				if (distance < polygon.radius + this.radius){
					return true;
				}else{
					return false;
				}

			}
		}
	}
	return circle;
}
