export type SelectOptionType = {
  value: string;
  label: string;
};

export type SelectOptionColorType = SelectOptionType & {
  color: string;
};

export type SelectOptionBodyType = {
  id: string;
  name: string;
};

export type OptionType = SelectOptionType | SelectOptionBodyType;