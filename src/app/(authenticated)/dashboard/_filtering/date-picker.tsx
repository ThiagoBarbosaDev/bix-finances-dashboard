import "react-day-picker/style.css";
import { Calendar } from "lucide-react";
import { useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import Button from "@/components/ui/Button";

export function DatePicker({
  selected,
  onSelect,
}: {
  selected?: DateRange;
  onSelect: (range: DateRange | undefined) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Button
        onClick={toggleOpen}
        leftIcon={<Calendar size={18} />}
        variant="outline"
        justifyContent="space-between"
        width="full"
        textAlign="left"
        fontSize="sm"
        colorScheme={isOpen ? "blue" : "gray"}
        marginBottom="8px"
      >
        {selected
          ? `${selected.from?.toLocaleDateString()} - ${selected.to?.toLocaleDateString()}`
          : "Select date range"}
      </Button>
      {isOpen && (
        <DayPicker
          mode="range"
          selected={selected}
          onSelect={onSelect}
          captionLayout="dropdown"
          defaultMonth={new Date()}
          startMonth={new Date(2021, 0)}
          endMonth={new Date()}
        />
      )}
    </>
  );
}
