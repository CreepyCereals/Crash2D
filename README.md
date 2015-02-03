# Crash2D #
Lightweight js library for detecting collisions between circles and rectangles (2d)

## Usage ##
```
// Creates a new Rectangle at (0, 0) with (100x100) dimensions.
var myRect = new Crash2D.Rect(0, 0, 100, 100);
// Creates a new Circle at (50, 50) with a radius of 30
var myCircle = new Crash2D.Circle(50, 50, 30);

// The collides() can be used from any Crash2D polygon and accepts any other Crash2D polygon as an argument
if (myRect.collides(myCricle)){
  // Collision code
}
```

## Docs ##

### Crash2D.Rect Class###

#### Constructor ####

**Crash2D.Rect** *(x, y, width, height)*

#### Properties ####

- x: **(Number)** *X coord*
- y: **(Number)** *Y coord*
- width: **(Number)** *Rectangle's width*
- height: **(Number)** *Rectangle's height*

#### Methods ####

  - ***collides (polygon) boolean*** Checks if the object is colliding with *polygon* (can be any Crash2D polygon).

### Crash2D.Circle Class###

#### Constructor ####

**Crash2D.Circle** *(x, y, radius)*

#### Properties ####

- x: **(Number)** *X coord of the center*
- y: **(Number)** *Y coord of the center*
- radius: **(Number)** *Circle's radius*

#### Methods ####

  - ***collides (polygon) boolean*** Checks if the object is colliding with *polygon* (can be any Crash2D polygon).
