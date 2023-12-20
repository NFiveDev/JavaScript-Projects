export type colorKey = 'emerald' | 'slate'
export type btnSize = 'sm' | 'md' | 'lg';

const tailwindBorderMap = new Map<string, string>([
  ['emerald', 'border-emerald-600'],
])

export const GetBorder = (key: colorKey) => tailwindBorderMap.get(key);

const tailwindBackgroundMap = new Map<string, string>([
  ['emerald', 'bg-emerald-600']
])

export const GetBackground = (key: colorKey) => tailwindBackgroundMap.get(key) || 'bg-emerald-600';

export const GetTextStyles = (size: btnSize) => {
  if(size === 'sm') return 'font-semibold text-sm';
  if(size === 'lg') return 'font-semibold text-xl';
  return 'font-semibold text-lg'; // else it must be medium
}

export const GetSizeStyles = (size: btnSize) => {

}

export const ConstructTailwindClassString = (clsList: string[]) => {
  let result = '';

  clsList.forEach((cls) => {
    result += ` ${cls}`;
  }); 

  return result;
}