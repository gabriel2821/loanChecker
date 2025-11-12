

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectLocation() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a location" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Location</SelectLabel>
          <SelectItem value="kk">Kota Kinabalu</SelectItem>
          <SelectItem value="tuaran">Tuaran</SelectItem>
          <SelectItem value="papar">Papar</SelectItem>
          <SelectItem value="kudat">Kudat</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default SelectLocation
