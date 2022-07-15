import { useField, useFormikContext } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePickerField = ({ name, ...props }: {name: string}) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField({name, ...props});
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={(val) => {
        setFieldValue(field.name, val);
      }}
      dateFormat="dd/MM/yyyy"
    />
  );
};