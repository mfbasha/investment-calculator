import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoriesComponent } from "../categories/categories.component";
import { ExpensmanagerService } from '@app/services/expensmanager.service';
import { IExpenseModule } from '@app/models/expense/expense.module';

@Component({
  selector: 'app-addnew-expense',
  imports: [FormsModule, CategoriesComponent],
  templateUrl: './addnew-expense.component.html',
  styleUrl: './addnew-expense.component.css',
})
export class AddnewExpenseComponent {
setCategory($event: string) {
 this.newExpense.category = $event;
}
  expensesManager = inject(ExpensmanagerService);
  newExpense: IExpenseModule = {
    id: Math.floor(Math.random() * 1000).toString(),
    description: '',
    amount: 0,
    comment: '',
    date: new Date(),
    category: '',
  };


  addExpense() {
    this.expensesManager.addExpense(this.newExpense);
  }
}
