/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import './GridPicker.css';
import { pickerCatalogs } from '../../blocks/picker/catalogs';

export class GridPickerField extends Blockly.FieldDropdown {
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
      return new GridPickerField(
        options.catalog ?? 'items',
        options.value,
      );
    }

    static fromJson(options) {
    return new GridPickerField(
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
    menu.className = 'grid-picker';

    const search = document.createElement('input');
    search.className = 'grid-picker__search';
    search.type = 'search';
    search.placeholder = 'Search items…';
    search.setAttribute('aria-label', 'Search items');

    const grid = document.createElement('div');
    grid.className = 'grid-picker__grid';

    const renderItems = () => {
      const query = search.value.trim().toLowerCase();

      const filtered = this.items_.filter((item) =>
        `${item.name} ${item.value}`.toLowerCase().includes(query)
      );

      grid.replaceChildren();

      for (const item of filtered) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'grid-picker__item';
        button.title = item.name;
        button.setAttribute('aria-label', item.name);

        const image = document.createElement('img');
        image.src = item.image;
        image.alt = '';
        image.draggable = false;

        /*const label = document.createElement('span'); // names under icons
        label.textContent = item.name;*/

        button.append(image/*, label*/);

        button.addEventListener('click', () => {
          this.setValue(item.value);
          dropdown.hideIfOwner(this);
        });

        grid.appendChild(button);
      }

      if (filtered.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'grid-picker__empty';
        empty.textContent = 'No items found';
        grid.appendChild(empty);
      }
    };

    search.addEventListener('input', renderItems);

    menu.append(search, grid);
    content.appendChild(menu);

    renderItems();

    dropdown.setColour('#ffffff', '#cccccc');
    dropdown.showPositionedByField(this, () => {});

    search.focus();
  }
}

Blockly.fieldRegistry.register(
  'field_gridpicker',
  GridPickerField
);