import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId: number) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId: number, row: RowElement) {
  console.log(`Update row ${rowId}`, row);

  return rowId;
}
