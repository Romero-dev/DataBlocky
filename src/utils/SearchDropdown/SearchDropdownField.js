
import * as Blockly from 'blockly/core';
import './SearchDropdown.css';
import { pickerCatalogs } from '../../blocks/picker/catalogs';

export class SearchDropdownField extends Blockly.FieldDropdown {
  constructor(catalogName = 'items', value) {
    const items = pickerCatalogs[catalogName];

    if (!items || items.length === 0) {
      throw new Error(
        `Unknown or empty picker catalog: ${catalogName}`
      );
    }

    super(items.map((item) => [item.name, item.value]));

    this.catalogName_ = catalogName;
    this.items_ = items;

    if (value !== undefined) {
      this.setValue(value);
    }
  }

  static fromJson(options) {
    return new SearchDropdownField(
      options.catalog ?? 'items',
      options.value ?? ' ',
    );
  }

  getText_() {
    const item = this.items_.find(
      (entry) => entry.value === this.getValue()
    );

    return item ? item.name : this.getValue();
  }

  showEditor_() {
    const dropdown = Blockly.DropDownDiv;
    const content = dropdown.getContentDiv();

    content.replaceChildren();

    const menu = document.createElement('div');
    menu.className = 'search-dropdown';

    const search = document.createElement('input');
    search.className = 'search-dropdown__search';
    search.type = 'search';
    search.placeholder = 'Search...';
    search.setAttribute('aria-label', 'Search options');

    const list = document.createElement('div');
    list.className = 'search-dropdown__list';

    const renderItems = () => {
      const query = search.value.trim().toLowerCase();

      const filtered = this.items_.filter((item) =>
        `${item.name} ${item.category ?? ''}`
          .toLowerCase()
          .includes(query)
      );

      list.replaceChildren();

      for (const item of filtered) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'search-dropdown__option';
        button.textContent = item.name;
        button.title = item.name;

        button.setAttribute(
          'aria-selected',
          String(item.value === this.getValue())
        );

        button.addEventListener('click', () => {
          this.setValue(item.value);
          dropdown.hideIfOwner(this);
        });

        list.appendChild(button);
      }

      if (filtered.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'search-dropdown__empty';
        empty.textContent = 'No options found';
        list.appendChild(empty);
      }
    };

    search.addEventListener('input', renderItems);

    menu.append(search, list);
    content.appendChild(menu);

    renderItems();

    dropdown.setColour('#ffffff', '#cccccc');
    dropdown.showPositionedByField(this, () => {});

    search.focus();
  }
}

Blockly.fieldRegistry.register(
  'field_search_dropdown',
  SearchDropdownField
);
