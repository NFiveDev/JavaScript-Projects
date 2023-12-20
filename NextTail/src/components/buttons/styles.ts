type colorKey = 'emerald' | 'slate'


const tailwindBorderMap = new Map<string, string>([
  ['emerald', 'border-emerald-600'],
])

export const GetBorder = (key: colorKey) => tailwindBorderMap.get(key);

const tailwindBackgroundMap = new Map<string, string>([
  ['emerald', 'bg-emerald-600']
])

export const GetBackground = (key: colorKey) => tailwindBackgroundMap.get(key);

export const ConstructTailwindClassString = (clsList: string[]) => {
  let result = '';

  clsList.forEach((cls) => {
    result += ` ${cls}`;
  }); 

  return result;
}