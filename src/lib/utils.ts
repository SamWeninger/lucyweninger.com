import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href')?.substring(1);
  const targetElement = document.getElementById(targetId || '');
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
    // Use replaceState to avoid adding a new history entry
    setTimeout(() => {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }, 0);
  }
};
