export function calculateReadingTime(text) {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/);
  const wordCount = words.length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);

  return readingTime;
}