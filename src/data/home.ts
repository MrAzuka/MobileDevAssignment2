import type { Account, SummaryCardData } from '@/types';

export const NET_WORTH = 298.57;

export const SUMMARY_CARDS: SummaryCardData[] = [
  {
    id: 'spend',
    title: 'Spend & Save',
    amount: 0,
    tone: 'neutral',
  },
  {
    id: 'invest',
    title: 'Invest',
    amount: 298.57,
    tone: 'positive',
  },
];

export const HOME_TICKERS = ['XEQT', 'VDY'];

export const ACCOUNTS: Account[] = [
  { id: 'chequing', name: 'Chequing', type: 'Chequing', balance: 0 },
  { id: 'tfsa', name: 'TFSA', type: 'Managed', balance: 186.34 },
  { id: 'non-registered', name: 'Personal', type: 'Self-directed', balance: 112.23 },
];
