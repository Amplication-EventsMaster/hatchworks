import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type EventUpdateInput = {
  comments?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
};
