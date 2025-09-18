// Store valid results
let results = [];

// Start main results table
document.write("<table border='1'>");
document.write("<tr><th>X</th><th>Operator</th><th>Y</th><th>Result</th></tr>");

while (true) {
    // Prompt inputs
    let x = prompt("Enter the first number:");
    if (x === null) break;

    let y = prompt("Enter the second number:");
    if (y === null) break;

    let operator = prompt("Enter an operator (+, -, *, /, %):");
    if (operator === null) break;

    let num1 = parseFloat(x);
    let num2 = parseFloat(y);
    let result;

    // Validate inputs
    if (isNaN(num1) || isNaN(num2)) {
        result = "Error: Invalid number(s)";
    } else {
        switch (operator) {
            case "+":
                result = num1 + num2;
                results.push(result);
                break;
            case "-":
                result = num1 - num2;
                results.push(result);
                break;
            case "*":
                result = num1 * num2;
                results.push(result);
                break;
            case "/":
                if (num2 === 0) {
                    result = "Error: Division by zero";
                } else {
                    result = num1 / num2;
                    results.push(result);
                }
                break;
            case "%":
                if (num2 === 0) {
                    result = "Error: Modulus by zero";
                } else {
                    result = num1 % num2;
                    results.push(result);
                }
                break;
            default:
                result = "Error: Invalid operator";
        }
    }

    // Add row to results table
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + operator + "</td>");
    document.write("<td>" + y + "</td>");
    document.write("<td>" + result + "</td>");
    document.write("</tr>");
}

// Close main results table
document.write("</table>");

// Build summary table if there are valid results
if (results.length > 0) {
    let min = Math.min(...results);
    let max = Math.max(...results);
    let total = results.reduce((a, b) => a + b, 0);
    let avg = total / results.length;

    document.write("<br>");
    document.write("<table border='1'>");
    document.write("<tr><th>Min</th><th>Max</th><th>Avg</th><th>Total</th></tr>");
    document.write("<tr>");
    document.write("<td>" + min + "</td>");
    document.write("<td>" + max + "</td>");
    document.write("<td>" + avg.toFixed(2) + "</td>");
    document.write("<td>" + total + "</td>");
    document.write("</tr>");
    document.write("</table>");
} else {
    document.write("<p>No valid results to summarize.</p>");
}