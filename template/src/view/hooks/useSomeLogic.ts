/**
 * @file example
 */

interface UseSomeLogicProps {
  foo: number;
}

interface UseSomeLogicReturn {
  bar: string;
}

export function useSomeLogic({ foo }: UseSomeLogicProps): UseSomeLogicReturn {
  return { bar: `${foo}` };
}
