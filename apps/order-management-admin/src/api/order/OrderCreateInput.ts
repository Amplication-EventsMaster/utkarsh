import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  date?: Date | null;
  description?: string | null;
};
