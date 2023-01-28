function range(start, end, step) {
  let rangeArray = [];

  if (
    start === undefined ||
    end === undefined ||
    step === undefined ||
    start > end ||
    step < 0
  ) {
    return rangeArray;
  } else {
    for (let i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
    return rangeArray;
  }
}
