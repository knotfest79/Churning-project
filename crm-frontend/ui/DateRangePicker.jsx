import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--color-grey-700);
  line-height: 19px;
  letter-spacing: -0.28px;
  margin-bottom: 4px;
  display: block;
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--color-grey-300);
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid white;
  background: var(--White, #fff);
  text-align: center;
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 0.9rem;
  }
`;
const DateRangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 1rem;
  margin: 10px;
`;
const DateInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

function DateRangePicker({ startDate, endDate, onDateChange }) {
  return (
    <DateRangeContainer>
      <DateInputContainer>
        <DateLabel>Start Date</DateLabel>
        <StyledDatePicker
          selected={startDate}
          onChange={(date) => onDateChange(date, "start")}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/dd/yyyy"
          placeholderText="MM/DD/YY"
        />
      </DateInputContainer>

      <DateInputContainer>
        <DateLabel>End Date</DateLabel>
        <StyledDatePicker
          selected={endDate}
          onChange={(date) => onDateChange(date, "end")}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="MM/dd/yyyy"
          placeholderText="MM/DD/YY"
        />
      </DateInputContainer>
    </DateRangeContainer>
  );
}

export default DateRangePicker;
