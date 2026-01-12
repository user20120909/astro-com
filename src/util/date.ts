export const parseDate = (date: Date, includeYear = true) => {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: includeYear ? 'numeric' : undefined,
  });
};
