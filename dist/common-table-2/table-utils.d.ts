export declare const ASC = 'ASC';
export declare const DESC = 'DESC';
export interface IHeaders {
  id: number;
  name: string;
  prop: string;
}
export declare const handleAscSort: (tableData: any[], selectedHeader: string) => any[];
export declare const handleDescSort: (tableData: any[], selectedHeader: string) => any[];
