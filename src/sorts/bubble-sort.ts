import swap from "../utils/swap";

interface Props {
  originalArray: number[];
}

export default function bubbleSort({ originalArray }: Props) {
  const array = [...originalArray];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap({ array, a: j, b: j + 1 });
      }
    }
  }

  return array;
}
