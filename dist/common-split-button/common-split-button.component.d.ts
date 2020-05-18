interface SplitButtonInterface {
  label: string;
  command?: () => void;
  disabled?: boolean;
  routerLink: string[];
}
export declare class CommonSplitButtonComponent {
  buttonText: string;
  showIcon: boolean;
  icon: string;
  buttonType: string;
  backgroundColor: string;
  listItems: SplitButtonInterface[];
  isListDisplayed: boolean;
  toggleList(): void;
}
export {};
