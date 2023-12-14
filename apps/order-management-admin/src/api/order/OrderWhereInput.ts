import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
};
