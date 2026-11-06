/**
 * DataBlocky
 * Copyright 2026 Romero-dev
 * SPDX-License-Identifier: Apache-2.0
 */

Blockly.Extensions.register(
  'teleport_defaults',
  function() {
    const workspace = this.workspace;

    const target = workspace.newBlock('target_selector');
    target.initSvg();
    target.render();

    this.getInput('TARGET').connection.connect(
      target.outputConnection
    );

    const coords = workspace.newBlock('tilde_three_coords');
    coords.initSvg();
    coords.render();

    this.getInput('DESTINATION').connection.connect(
      coords.outputConnection
    );
  }
);