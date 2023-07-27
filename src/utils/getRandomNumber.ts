interface Props {
  max: number;
  min: number;
}

export default function getRandomNumber({ max, min }: Props) {
  return Math.floor(Math.random() * (max - min) + min);
}
