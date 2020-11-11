export interface IActionButtonProps
  extends Partial<React.HTMLProps<HTMLButtonElement>> {
  variant?: "add" | "sub" | "download";
  text?: string;
}
