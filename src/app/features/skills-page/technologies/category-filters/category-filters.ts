import { Component, input, output, signal } from '@angular/core';
import { Category } from '../../skills-page.model';

@Component({
  selector: 'skills-category-filters',
  imports: [],
  templateUrl: './category-filters.html',
  host: {
    class: 'flex flex-wrap gap-2 items-center'
  }
})
export class CategoryFilters {
  readonly filters = input.required<string[]>();
  readonly onSelectFilter = output<string>();

  protected readonly selectedFilter = signal<string>(Category.All);

  onClickFilter(selectedFilter: string): void {
    this.selectedFilter.set(selectedFilter);
    this.onSelectFilter.emit(selectedFilter);
  }
}
