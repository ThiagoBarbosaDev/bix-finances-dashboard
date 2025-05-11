import { Tag, TagCloseButton, TagLabel } from "@chakra-ui/react";
import { TFilterState } from "@/app/(authenticated)/dashboard/_filtering/filter";

type RemoveFilterTagProps = {
  valueKey: keyof TFilterState;
  value: string;
  onRemoveFilter: (key: keyof TFilterState) => void;
};

export const RemoveFilterTag = ({
  valueKey,
  value,
  onRemoveFilter,
}: RemoveFilterTagProps) => {
  return (
    <Tag size="md" variant="subtle" colorScheme="blue">
      <TagLabel>
        {valueKey}: {value}
      </TagLabel>
      <TagCloseButton onClick={() => onRemoveFilter(valueKey)} />
    </Tag>
  );
};
