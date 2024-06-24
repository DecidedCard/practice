function solution(a, b, g, s, w, t) {
  // 현재 자원(금 + 은) * 시간
  let [start, end] = [0, 10e9 * 2 * 10e5 * 2];
  let mid = Math.floor((start + end) / 2);
  const totalVillage = g.length;

  while (start <= end) {
    let [gold, silver, resource] = [0, 0, 0];

    for (let i = 0; i < totalVillage; i++) {
      const remainResource = Math.round(mid / (2 * t[i]));
      const maxCarryingResource = remainResource * w[i];
      gold += Math.min(g[i], maxCarryingResource);
      silver += Math.min(s[i], maxCarryingResource);
      resource += Math.min(g[i] + s[i], maxCarryingResource);
    }

    if (gold >= a && silver >= b && resource >= a + b) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  }

  return start;
}