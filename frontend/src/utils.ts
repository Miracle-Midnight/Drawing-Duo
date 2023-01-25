/* 
stroke의 데이터를 <svg><path d={pair}>으로 전달 할 값으로 전환
자세한 내용은 svg, path 태그 참조
 */
export function getSvgPathFromStroke(stroke: number[][]) {
  if (!stroke.length) return "";
  const round = Math.round;

  const d = stroke.reduce(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(
        round(x0),
        round(y0),
        round((x0 + x1) / 2),
        round((y0 + y1) / 2)
      );
      return acc;
    },
    ["M", ...stroke[0], "Q"]
  );

  d.push("Z");
  return d.join(" ");
}

/* 인자로 주어진 배열을 loop을 돌리면서, element 2개씩 묶어서 pairs에 저장 후 반환 */
export function toPairs<T>(arr: T[]): T[][] {
  const pairs: T[][] = [];

  for (let i = 0; i < arr.length - 1; i += 2) {
    pairs.push([arr[i], arr[i + 1]]);
  }
  return pairs;
}
