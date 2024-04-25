export function truncateString(input: string, charactersToTrim: number): string {
  if (input.length <= charactersToTrim) {
    return input;
  }

  let lastSpaceIndex = input.lastIndexOf(' ', charactersToTrim);

  if (lastSpaceIndex === -1) {
    lastSpaceIndex = charactersToTrim;
  }

  return input.substring(0, lastSpaceIndex) + '...';
}
