import type { Category, EarningsEvent, Stock } from '@/types';

export const STOCKS: Stock[] = [
  { symbol: 'XEQT', name: 'iShares Core Equity ETF', price: 38.42, changePercent: 1.08, logo: { mark: 'i', background: '#FFFFFF', color: '#000000' } },
  { symbol: 'VDY', name: 'Vanguard FTSE Canadian High Dividend', price: 52.17, changePercent: 0.64, logo: { mark: 'V', background: '#C8102E', color: '#FFFFFF' } },
  { symbol: 'STZ', name: 'Constellation Brands', price: 142.6, changePercent: -0.24, logo: { mark: 'C', background: '#1F4FA8', color: '#FFFFFF' } },
  { symbol: 'RPM', name: 'RPM International, Inc.', price: 118.35, changePercent: 1.68, logo: { mark: 'RPM', background: '#FFFFFF', color: '#1C3F94' } },
  { symbol: 'PEP', name: 'Pepsico Inc.', price: 151.9, changePercent: 0.06, logo: { mark: 'P', background: '#FFFFFF', color: '#004B93' } },
  { symbol: 'ATZ', name: 'Aritzia Inc.', price: 71.25, changePercent: 2.11, logo: { mark: 'A', background: '#FFFFFF', color: '#000000' } },
  { symbol: 'DAL', name: 'Delta Air Lines', price: 56.8, changePercent: -0.92, logo: { mark: 'D', background: '#11224D', color: '#FFFFFF' } },
  { symbol: 'LEVI', name: 'Levi Strauss & Co.', price: 21.4, changePercent: 0.37, logo: { mark: 'L', background: '#C41230', color: '#FFFFFF' } },
  { symbol: 'SPY', name: 'SPDR S&P 500 ETF', price: 671.3, changePercent: 0.41, logo: { mark: 'S', background: '#2B2B2B', color: '#FFFFFF' } },
  { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 187.2, changePercent: 1.95, logo: { mark: 'N', background: '#76B900', color: '#000000' } },
  { symbol: 'TSLA', name: 'Tesla, Inc.', price: 436.1, changePercent: -1.2, logo: { mark: 'T', background: '#E31937', color: '#FFFFFF' } },
  { symbol: 'SHOP', name: 'Shopify Inc.', price: 162.75, changePercent: 0.88, logo: { mark: 'S', background: '#5E8E3E', color: '#FFFFFF' } },
];

export function findStock(symbol: string) {
  return STOCKS.find((stock) => stock.symbol === symbol);
}

export const CATEGORIES: Category[] = [
  { id: 'stocks', label: 'Stocks', icon: 'stocks' },
  { id: 'options', label: 'Options', icon: 'options' },
  { id: 'futures', label: 'Futures', icon: 'futures' },
  { id: 'crypto', label: 'Crypto', icon: 'crypto' },
];

export const EARNINGS: EarningsEvent[] = [
  { symbol: 'STZ', epsEstimate: 3.55, date: 'Oct 6', session: 'post-market' },
  { symbol: 'RPM', epsEstimate: 1.95, date: 'Oct 6', session: 'pre-market' },
  { symbol: 'PEP', epsEstimate: 2.3, date: 'Oct 8', session: 'pre-market' },
  { symbol: 'ATZ', epsEstimate: 0.42, date: 'Oct 9', session: 'post-market' },
  { symbol: 'DAL', epsEstimate: 1.52, date: 'Oct 9', session: 'pre-market' },
  { symbol: 'LEVI', epsEstimate: 0.31, date: 'Oct 9', session: 'post-market' },
];

