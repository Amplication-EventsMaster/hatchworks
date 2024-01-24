import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventCreateInput = {
  comments?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
