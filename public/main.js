const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Polygons with different positions and colors
let polygons = [
    {
        points: [
            [100, 50],
            [150, 150],
            [50, 150],
        ],
        color: "purple",
    },
    {
        points: [
            [100, 10],
            [150, 190],
            [50, 190],
            [10, 100]
        ],
        color: "yellow",
    },
    {
        points: [
            [350, 50],
            [450, 150],
            [300, 250],
        ],
        color: "blue",
    },
    {
        points: [
            [150, 300],
            [250, 350],
            [200, 450],
        ],
        gradient: true,
    },
];

// Function to draw a polygon on canvas
function drawPolygon(polygon) {
    ctx.beginPath();
    ctx.moveTo(polygon.points[0][0], polygon.points[0][1]);
    for (let i = 1; i < polygon.points.length; i++) {
        ctx.lineTo(polygon.points[i][0], polygon.points[i][1]);
    }
    ctx.closePath();

    if (polygon.gradient) {
        const gradient = ctx.createLinearGradient(150, 300, 250, 450);
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(1, "red");
        ctx.fillStyle = gradient;
    } else {
        ctx.fillStyle = polygon.color;
    }

    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Draw all polygons initially
function drawAllPolygons() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    polygons.forEach(drawPolygon);
}

// Call to draw everything on page load
drawAllPolygons();

// Move the yellow polygon (second polygon)
function movePolygon() {
    polygons[1].points = polygons[1].points.map(([x, y]) => [x + 20, y + 20]);
    drawAllPolygons();
}
