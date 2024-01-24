import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
