function euclidean(n, m) {
  let circle = [];
  for (let a = 0; a < n; a++) {
    circle.push(a);
  }

  let eateanChocolates = [];

  for (let chocolate = 0; chocolate < n; chocolate = (chocolate + m) % n) {
    if (eateanChocolates.length === 0) {
      eateanChocolates.push(circle[chocolate]);
      circle[chocolate] = "W";
    } else {
      if (circle[chocolate] == "W") {
        return eateanChocolates;
      } else {
        eateanChocolates.push(circle[chocolate]);
        circle[chocolate] = "W";
      }
    }
  }
}

finalArray = euclidean(20, 3);
console.log(finalArray);
