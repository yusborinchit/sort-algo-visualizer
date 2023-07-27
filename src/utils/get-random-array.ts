import getRandomNumber from "./get-random-number";

interface Props {
  length: number;
}

export default function getRandomArray({ length }: Props) {
  return Array.from({ length }).map(() =>
    getRandomNumber({ min: 5, max: 100 })
  );
}
