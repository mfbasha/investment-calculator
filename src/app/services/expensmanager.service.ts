import { Injectable } from '@angular/core';
import {  IExpenseModule } from '../models/expense/expense.module';
import { dummyExpenses } from '@app/data/dummy-expenses';
import { dummyCategories } from '@app/data/dummy-categories';

@Injectable({
  providedIn: 'root'
})
export class ExpensmanagerService {
  private  expenses = dummyExpenses;

  getExpenses() {
    const expense = localStorage.getItem('expenses');
    if (expense) {
      this.expenses = JSON.parse(expense);
    }

    return this.expenses ;
  }
  addExpense(expense: IExpenseModule) {
    this.expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }
  deleteExpense(expense: IExpenseModule) {
  //  this.expenses = this.expenses.filter((e) => e.id !== expense.id);
   console.log(this.expenses);
  //  localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }
  updateExpense(expense: IExpenseModule) {
    this.expenses = this.expenses.map((e) => {
      if (e.id === expense.id) {
        return expense;
      }
      return e;
    });
    localStorage.setItem('expenses', JSON.stringify(this.expenses));
  }
  loadCategories() {
    const categories = localStorage.getItem('categories');
    if (categories) {
      return JSON.parse(categories);
    }
    return dummyCategories;
  }

  constructor() { }

}
