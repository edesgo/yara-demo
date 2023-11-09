import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface DateProps{
  getVal: any;
}
export default function ControlledComponent(props: DateProps) {
  const {getVal} = props
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker  value="" onChange= {(newValue)=>getVal(dayjs(newValue).format("YYYY-MM-DD hh:mm"))} format = "DD-MM-YYYY"/>
      </DemoContainer>
    </LocalizationProvider>
  );
}
