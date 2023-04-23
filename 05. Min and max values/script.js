function findMinMax() {
    const inputArray = document.getElementById("inputArray").value.split(",").map(Number);
    const min = Math.min(...inputArray);
    const max = Math.max(...inputArray);
  
    document.getElementById("result").innerHTML = `Minimum value: ${min}, Maximum value: ${max}`;
  }
  