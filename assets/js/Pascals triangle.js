function generateTriangle() {
    var numRowsInput = document.getElementById("numRows");
    var numRows = parseInt(numRowsInput.value);

    if (isNaN(numRows) || numRows < 1 || numRows > 30) {
        alert("Please enter a valid number of rows (1-30).");
        return;
    }

    var triangle = generatePascalsTriangle(numRows);
    displayTriangle(triangle);
}

function generatePascalsTriangle(numRows) {
    var triangle = [];

    for (var i = 0; i < numRows; i++) {
        var row = [];
        for (var j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1);
            } else {
                row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
            }
        }
        triangle.push(row);
    }

    return triangle;
}

function displayTriangle(triangle) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    for (var i = 0; i < triangle.length; i++) {
        var rowDiv = document.createElement("div");
        rowDiv.classList.add("row");
        rowDiv.textContent = triangle[i].join(' ');
        outputDiv.appendChild(rowDiv);
    }
}