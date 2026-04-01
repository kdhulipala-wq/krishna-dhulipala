export type SortMode = 'title' | 'date';

export function sortByMode<T extends { title: string; createdAt: string }>(
  items: T[],
  mode: SortMode
): T[] {
  if (mode === 'title') {
    return [...items].sort((a, b) => a.title.localeCompare(b.title));
  }
  return [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}
