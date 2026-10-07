import type { Transaction, TransactionKind } from '@/types';

export const ACTIVITY_FILTERS: { id: 'all' | TransactionKind; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'trade', label: 'Trades' },
  { id: 'transfer', label: 'Transfers' },
  { id: 'dividend', label: 'Dividends' },
];

/** Newest first; consecutive items with the same `dateLabel` form one section. */
export const TRANSACTIONS: Transaction[] = [
  { id: 't1', kind: 'trade', title: 'Bought XEQT', account: 'TFSA', amount: -50, dateLabel: 'Today', icon: 'buy', pending: true },
  { id: 't2', kind: 'transfer', title: 'Deposit from Chequing', account: 'TFSA', amount: 50, dateLabel: 'Today', icon: 'deposit' },
  { id: 't3', kind: 'dividend', title: 'VDY dividend', account: 'Personal', amount: 0.42, dateLabel: 'Yesterday', icon: 'dividend' },
  { id: 't4', kind: 'trade', title: 'Bought VDY', account: 'Personal', amount: -104.34, dateLabel: 'Oct 2', icon: 'buy' },
  { id: 't5', kind: 'transfer', title: 'e-Transfer received', account: 'Chequing', amount: 120, dateLabel: 'Oct 2', icon: 'deposit' },
  { id: 't6', kind: 'trade', title: 'Sold SHOP', account: 'Personal', amount: 162.75, dateLabel: 'Sep 29', icon: 'sell' },
  { id: 't7', kind: 'transfer', title: 'Withdrawal to bank', account: 'Chequing', amount: -75, dateLabel: 'Sep 29', icon: 'withdraw' },
  { id: 't8', kind: 'dividend', title: 'XEQT dividend', account: 'TFSA', amount: 0.87, dateLabel: 'Sep 26', icon: 'dividend' },
  { id: 't9', kind: 'trade', title: 'Bought XEQT', account: 'TFSA', amount: -136.34, dateLabel: 'Sep 22', icon: 'buy' },
];
