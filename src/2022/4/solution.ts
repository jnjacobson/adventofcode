import { readFileSync } from 'fs';

const input = readFileSync('src/2022/4/input.txt', 'utf-8');

const lines = input
  .split('\n')
  .filter((line: string) => line.length > 0);

const getStartAndEnd = (section: string): [number, number] => {
  const [start, end] = section.split('-').map((str) => +str);

  return [start, end];
}

const doContain = (sections1: string, sections2: string): boolean => {
  const [start1, end1] = getStartAndEnd(sections1);
  const [start2, end2] = getStartAndEnd(sections2);

  return (start1 <= start2 && end1 >= end2)
    || (start2 <= start1 && end2 >= end1);
}

const solutionPart1 = lines
  .map((line: string): boolean => {
    const [ sections1, sections2 ] = line.split(',');

    return doContain(sections1, sections2);
  })
  .reduce((acc, val) => acc + +val, 0);

const doOverlap = (sections1: string, sections2: string): boolean => {
  if (doContain(sections1, sections2)) {
    return true;
  }

  const [start1, end1] = getStartAndEnd(sections1);
  const [start2, end2] = getStartAndEnd(sections2);

  return (start2 >= start1 && start2 <= end1)
    || (start1 >= start2 && start1 <= end2);
}

const solutionPart2 = lines
  .map((line: string): boolean => {
    const [ sections1, sections2 ] = line.split(',');

    return doOverlap(sections1, sections2);
  })
  .reduce((acc, val) => acc + +val, 0);

console.log({
  solutionPart1,
  solutionPart2,
});
