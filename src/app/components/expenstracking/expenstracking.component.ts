import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { dummyExpenses } from '@app/data/dummy-expenses';
import { ExpensmanagerService } from '@app/services/expensmanager.service';
import { IExpenseModule } from '@app/models/expense/expense.module';


@Component({
  selector: 'app-expenstracking',
  standalone: true,
  imports: [FormsModule, CurrencyPipe, DatePipe],
  templateUrl: './expenstracking.component.html',
  styleUrl: './expenstracking.component.css',
})
export class ExpenstrackingComponent {
  expenseManagerService = inject(ExpensmanagerService);
  categories = ['Groceries', 'Entertainment', 'Utilities'];
  selectedCategory: string = '';

  get expenses() {
    return this.expenseManagerService.getExpenses();
  }
  get totalExpenses() {
    return this.expenseManagerService
      .getExpenses()
      .reduce((acc: any, expense: any) => acc + expense.amount, 0);
  }
  addExpense() {
    throw new Error('Method not implemented.');
  }
  // expenseManagerService = inject(ExpenseManagerService);
  deleteExpense(expense: IExpenseModule) {
    console.log(expense);
    this.expenseManagerService.deleteExpense(expense);
  }
  editExpense(_t26: any) {
    throw new Error('Method not implemented.');
  }
  filterExpenses() {
    throw new Error('Method not implemented.');
  }
}
