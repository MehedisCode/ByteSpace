export type ClassValue = string | false | null | undefined;

/** Small dependency-free class name joiner. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
