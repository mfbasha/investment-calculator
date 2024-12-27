import { IExpenseModule } from "@app/models/expense/expense.module";

export const dummyExpenses: IExpenseModule[] = [
  {
    id: '1',
    description: 'Groceries',
    amount: 50,
    comment: 'Groceries for the week',
    date: new Date(),
    category: 'Groceries',
  },
  {
    id: '2',
    description: 'Entertainment',
    amount: 100,
    comment: 'Entertainment for the week',
    date: new Date(),
    category: 'Entertainment',
  },
  {
    id: '3',
    description: 'Utilities',
    amount: 150,
    comment: 'Utilities for the week',
    date: new Date(),
    category: 'Utilities',
  },
];
