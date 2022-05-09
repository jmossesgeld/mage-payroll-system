export function uniqueID() {
  const random = Math.random();
  const fullResult = random.toString(36) + "00000000000000000";
  const result = fullResult.slice(2, 9);
  console.log(random, fullResult, result);
  return result;
}

export const getDaysInBetween = (startDate: string, endDate: string) => {
  const msPerDay = 1000 * 60 * 60 * 24;
  const startDateInMs = new Date(startDate).getTime();
  const endDateInMs = new Date(endDate).getTime();
  const timeDifference = endDateInMs - startDateInMs;
  const daysDifference = Math.ceil(timeDifference / msPerDay);
  const dates = [];

  for (let index = 0; index < daysDifference + 1 && index < 31; index++) {
    dates.push(new Date(startDateInMs + msPerDay * index).toISOString().split("T")[0]);
  }

  return dates;
};
