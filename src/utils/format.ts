const MINUS = '−';
const NBSP = ' ';


export function formatCurrency(value: number) {
  const sign = value < 0 ? '-' : '';
  const [whole, cents] = Math.abs(value).toFixed(2).split('.');
  return `${sign}$${whole}.${cents}`;
}

export function formatPercent(value: number) {
  const sign = value < 0 ? MINUS : '+';
  return `${sign}${NBSP}${Math.abs(value).toFixed(2)}%`;
}
