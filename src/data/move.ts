import type { MoveAction } from '@/types';

export const MOVE_MONEY_ACTIONS: MoveAction[] = [
  { id: 'add', label: 'Add money', icon: 'plus' },
  { id: 'transfer', label: 'Transfer money', icon: 'transfer' },
  { id: 'convert', label: 'Convert money', icon: 'convert' },
  { id: 'visa', label: 'VISA Debit', icon: 'card', iconText: 'VISA' },
];

export const SEND_AND_PAY_ACTIONS: MoveAction[] = [
  { id: 'e-transfer', label: 'e-Transfer', icon: 'send', iconText: 'Interac' },
  { id: 'bill', label: 'Pay bill', icon: 'bill' },
  { id: 'friends', label: 'Pay friends', icon: 'friends' },
  { id: 'international', label: 'International transfer', icon: 'globe' },
  { id: 'send', label: 'Send money', icon: 'send' },
  { id: 'request', label: 'Request money', icon: 'request' },
];
