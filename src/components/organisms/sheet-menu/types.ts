export interface ISheetMenuProps extends Partial<HTMLElement> {
  onAddRow?: () => void;
  onDeleteRow?: () => void;
  onAddColumn?: () => void;
  onDecreaseColumns?: () => void;
  onDownload?: () => void;
}
