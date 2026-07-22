import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
})
export class Card {
  readonly hasHoverStyles = input<boolean>();
  readonly additionalClasses = input<string>();

  protected readonly classes = computed(() =>
    [
      this.hasHoverStyles()
        ? 'transition-all duration-200 hover:border-amber-300 hover:shadow-md'
        : '',
      this.additionalClasses(),
    ]
      .filter(Boolean)
      .join(' '),
  );
}
