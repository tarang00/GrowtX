
import React, { useState } from 'react';
import { format } from 'date-fns';
import { CalendarIcon, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Label } from '@/components/ui/label';

interface DateTimePickerProps {
  value?: { date: Date | undefined; time: string };
  onChange: (value: { date: Date | undefined; time: string }) => void;
  placeholder?: string;
  disabled?: boolean;
}

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
];

export function DateTimePicker({ value, onChange, placeholder = "Select date and time", disabled }: DateTimePickerProps) {
  const [open, setOpen] = useState(false);

  const handleDateSelect = (date: Date | undefined) => {
    onChange({ date, time: value?.time || '' });
  };

  const handleTimeSelect = (time: string) => {
    onChange({ date: value?.date, time });
    setOpen(false);
  };

  const displayText = value?.date && value?.time 
    ? `${format(value.date, "PPP")} at ${value.time}`
    : placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            (!value?.date || !value?.time) && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {displayText}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 ios-card" align="start">
        <div className="p-4">
          <Label className="text-sm font-medium text-white mb-3 block">Select Date</Label>
          <Calendar
            mode="single"
            selected={value?.date}
            onSelect={handleDateSelect}
            disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
            initialFocus
            className="pointer-events-auto"
          />
          
          {value?.date && (
            <div className="mt-4">
              <Label className="text-sm font-medium text-white mb-3 block">
                <Clock className="inline mr-2 h-4 w-4" />
                Select Time
              </Label>
              <div className="grid grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                {timeSlots.map((time) => (
                  <Button
                    key={time}
                    variant={value?.time === time ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleTimeSelect(time)}
                    className="text-xs"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
