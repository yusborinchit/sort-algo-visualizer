interface Props {
  array: number[];
  a: number;
  b: number;
}

export default function swap({ array, a, b }: Props) {
  const aux = array[a];
  array[a] = array[b];
  array[b] = aux;
}
