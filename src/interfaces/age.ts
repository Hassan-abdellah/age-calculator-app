export interface Age {
  day: string;
  month: string;
  year: string;
}

export interface AgeInvalid {
  day: boolean;
  month: boolean;
  year: boolean;
}

export interface FormItem {
  name?: string;
  value?: string;
  invalid?: boolean;
  error?: string;
}

export const DefaultFormItem: FormItem = {
  value: "",
  invalid: false,
  error: "",
};
