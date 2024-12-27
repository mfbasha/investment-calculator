import { Component, inject, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpensmanagerService } from '@app/services/expensmanager.service';
@Component({
  selector: 'app-categories',
  imports: [FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent {
  expensesManager = inject(ExpensmanagerService);
  selectedCategory=output<string>();
  get categories() {
    return this.expensesManager.loadCategories();
  }
}
