export function uniqueID() {
  const random = Math.random();
  const fullResult = random.toString(36) + "00000000000000000";
  const result = fullResult.slice(2, 7);
  console.log(random, fullResult, result);
  return result;
}
