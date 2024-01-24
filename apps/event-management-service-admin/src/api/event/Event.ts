import { Customer } from "../customer/Customer";

export type Event = {
  comments: string | null;
  createdAt: Date;
  customer?: Customer | null;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
