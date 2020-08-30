import DayPickerInput from "react-day-picker/DayPickerInput";
import dateFnsFormat from "date-fns/format";
import { format, parseDate, formatDate } from "../../utils/dates";

export default function Datepicker({ value, onChange, disabled }) {
  return (
    <div>
      <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
        format={format}
        placeholder={`${dateFnsFormat(new Date(), format)} `}
        dayPickerProps={{
          modifiers: {
            disabled,
          },
        }}
        value={value}
        onDayChange={(day) => {
          onChange(day);
        }}
      />
    </div>
  );
}

Datepicker.defaultProps = {
  disabled: [
    {
      before: new Date(),
    },
  ],
};
