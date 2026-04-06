export interface CommandOutput {
  html: string;
  cls?: string;
  delay?: number;
}

export type CommandHandler = () => CommandOutput[];

export interface OutputLine {
  id: string;
  html: string;
  className: string;
}
