import {Component, input, output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'header.component.html',
})
export class HeaderComponent {

  cartItemsCount = input(0);
  isMenuOpen = input(false);

  toggleMenu = output();
  toggleCart = output();
  searchChanged = output<string>();

  searchValue: string = '';

  onSearch(term: string): void {
    this.searchChanged.emit(term);
  }
}
