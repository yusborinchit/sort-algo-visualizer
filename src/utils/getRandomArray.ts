import getRandomNumber from "./getRandomNumber";

interface Props {
  length: number;
}

export default function getRandomArray({ length }: Props) {
  return Array.from({ length }).map(() =>
    getRandomNumber({ min: 0, max: 100 })
  );
}
