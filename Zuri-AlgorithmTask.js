//Question 1 Solution

const convertFahrToCelsius = (C) => {
  if (Number.isNaN(parseInt(C)) && typeof C !== "object") {
    return `${C} is not a valid number but a/an ${typeof C}`;
  } else if (Array.isArray(C)) {
    return `[${C}] is not a valid number but a/an ${Object.prototype.toString
      .call(C)
      .slice(8, 13)
      .toLowerCase()}`;
  } else if (!Array.isArray(C) && typeof C === "object") {
    return `{${Object.keys(C)}: ${Object.values(
      C
    )}} is not a valid number but a/an ${typeof C}`;
  } else {
    let result = (C - 32) / 1.8;
    return result.toFixed(4);
  }
};

//Question Two Solution

let arr = [];

const checkYuGiOh = (n) => {
  if (Number.isNaN(parseInt(n)) && typeof n !== "object") {
    return `Invalid parameter: ${n}`;
  } else if (Array.isArray(n)) {
    return `Invalid parameter: [${n}]`;
  } else if (!Array.isArray(n) && typeof n === "object") {
    return `Invalid parameter: {${Object.keys(n)}: ${Object.values(n)}}`;
  }

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  const track = arr.map((item) => {
    if (item % 2 === 0 && item % 3 === 0 && item % 5 === 0) {
      return (item = "yu-gi-oh");
    } else if (item % 2 === 0 && item % 3 === 0) {
      return (item = "yu-gi");
    } else if (item % 2 === 0 && item % 5 === 0) {
      return (item = "yu-oh");
    } else if (item % 3 === 0 && item % 5 === 0) {
      return (item = "gi-oh");
    } else if (item % 2 === 0) {
      return (item = "yu");
    } else if (item % 3 === 0) {
      return (item = "gi");
    } else if (item % 5 === 0) {
      return (item = "oh");
    } else {
      return item;
    }
  });

  return track;
};
