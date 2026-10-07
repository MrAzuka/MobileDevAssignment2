import type { IconName } from '@/components/icon';

/** Stand-in for a company logo: a coloured tile with a short mark on it. */
export type Logo = {
  mark: string;
  background: string;
  color: string;
};

export type Stock = {
  symbol: string;
  name: string;
  price: number;
  changePercent: number;
  logo: Logo;
};

export type EarningsEvent = {
  symbol: string;
  epsEstimate: number;
  date: string;
  session: 'pre-market' | 'post-market';
};

export type Account = {
  id: string;
  name: string;
  type: string;
  balance: number;
};

export type SummaryCardData = {
  id: string;
  title: string;
  amount: number;
  tone: 'neutral' | 'positive';
};

export type MoveAction = {
  id: string;
  label: string;
  icon: IconName;
  iconText?: string;
};

export type MarketCollection = {
  id: string;
  title: string;
  symbols: string[];
};

export type TransactionKind = 'trade' | 'transfer' | 'dividend';

export type Transaction = {
  id: string;
  kind: TransactionKind;
  title: string;
  account: string;
  /** Positive for money in, negative for money out. */
  amount: number;
  /** Group heading the transaction is listed under, e.g. "Today" or "Oct 2". */
  dateLabel: string;
  icon: IconName;
  pending?: boolean;
};

export type Category = {
  id: string;
  label: string;
  icon: IconName;
};
