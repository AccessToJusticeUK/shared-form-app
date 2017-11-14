export const formatDirectoryTab = (text: string): string => (
  text.toUpperCase()
);

export const concatClassNames = (defaultClass: string, additionalClasses?: string): string => {
  if (additionalClasses) return `${defaultClass} ${additionalClasses}`;
  return defaultClass;
};