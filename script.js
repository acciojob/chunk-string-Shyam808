function stringChop(str, size) {
  // Handle null input
  if (str === null) return [];

  const result = [];
  const chunkSize = Number(size); // Ensure size is a number

  for (let i = 0; i < str.length; i += chunkSize) {
    result.push(str.slice(i, i + chunkSize));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

