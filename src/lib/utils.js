/**
 * Combines multiple class names into a single string, ignoring falsy values.
 * Useful for conditionally applying class names in a component.
 *
 * @param {...string} classes - The class names to combine.
 * @returns {string} - The combined class name string.
 */
export function cn(...classes) {
    return classes.filter(Boolean).join(' ');
  }