/**
 * The event handler triggered when opening the spreadsheet.
 * @param {Event} e The onOpen event.
 * @see https://developers.google.com/apps-script/guides/triggers#onopene
 */
function onOpen(e) {
    // Add a custom menu to the spreadsheet.
    DocumentApp.getUi() // Or DocumentApp, SlidesApp, or FormApp.
        .createMenu('Custom Menu')
        .addItem('First item', 'menuItem1')
        .addSubMenu('https://docs.google.com/spreadsheets/d/14c2egTb-fDjP5Tf_4flpw0Woj1kcz_pDe5EYIGWo-3U/edit#gid=1581955536', 'ActivityRecords.gs')
        .addToUi();
  }
  
  /**
   * The event handler triggered when installing the add-on.
   * @param {Event} e The onInstall event.
   * @see https://developers.google.com/apps-script/guides/triggers#oninstalle
   */
  function onInstall(e) {
    onOpen(e);
  }
  
  /**
   * The event handler triggered when editing the spreadsheet.
   * @param {Event} e The onEdit event.
   * @see https://developers.google.com/apps-script/guides/triggers#onedite
   */
  function onEdit(e) {
    // Set a comment on the edited cell to indicate when it was changed.
    const range = e.range;
    range.setNote('Last modified: ' + new Date());
  }
  
  /**
   * The event handler triggered when the selection changes in the spreadsheet.
   * @param {Event} e The onSelectionChange event.
   * @see https://developers.google.com/apps-script/guides/triggers#onselectionchangee
   */
  function onSelectionChange(e) {
    // Set background to red if a single empty cell is selected.
    const range = e.range;
    if (range.getNumRows() === 1 &&
      range.getNumColumns() === 1 &&
      range.getCell(1, 1).getValue() === '') {
      range.setBackground('red');
    }
  }