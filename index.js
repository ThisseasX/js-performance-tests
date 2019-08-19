const perf = fun => {
  const [aSeconds, aNanos] = process.hrtime();
  for (let i = 0; i < 1e4; i++) {
    fun();
  }
  const [bSeconds, bNanos] = process.hrtime();
  return ((bNanos - aNanos) / 1e6).toFixed(0) + (bSeconds - aSeconds) * 1000;
};

const makeRange = () => {
  return Array(1e2)
    .fill()
    .map((_, i) => i);
};

const makeRange2 = () => {
  const ret = [];

  for (let i = 0; i < 1e2; i++) {
    ret.push(i);
  }

  return ret;
};

const makeRange3 = () => {
  let ret = [];

  for (let i = 0; i < 1e2; i++) {
    ret = [...ret, i];
  }

  return ret;
};

console.log('First: %o', perf(makeRange));
console.log('Second: %o', perf(makeRange2));
console.log('Third: %o', perf(makeRange3));

console.log(makeRange());
console.log(makeRange2());
console.log(makeRange3());
