import { fromUnixTime } from "date-fns";

export const hoursSinceEpochTime = (epochTimestamp: number) => {
  const timestampDate = fromUnixTime(epochTimestamp);
  const now = new Date();

  const differenceInMilliseconds = now.getTime() - timestampDate.getTime();
  const hours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));
  const minutes = Math.floor(
    (differenceInMilliseconds % (1000 * 60 * 60)) / (1000 * 60),
  );
  const seconds = Math.floor((differenceInMilliseconds % (1000 * 60)) / 1000);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};
