export const ASC = 'ASC';
export const DESC = 'DESC';
export interface IHeaders {
  id: number;
  name: string;
  prop: string;
}

export const handleAscSort = (tableData: any[], selectedHeader: string) =>
  tableData.sort((a, b) => {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return a[selectedHeader] - b[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return a[selectedHeader].localeCompare(b[selectedHeader]);
    }
    return null;
  });

export const handleDescSort = (tableData: any[], selectedHeader: string) =>
  tableData.sort((a, b) => {
    if (typeof a[selectedHeader] === 'number' || typeof b[selectedHeader] === 'number') {
      return b[selectedHeader] - a[selectedHeader];
    } else if (typeof a[selectedHeader] === 'string' || typeof b[selectedHeader] === 'string') {
      return b[selectedHeader].localeCompare(a[selectedHeader]);
    }
    return null;
  });
