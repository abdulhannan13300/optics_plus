import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface config {
  contact_measurement: string;
}

export default function DistanceMeasurement({ contact_measurement }: config) {
  return (
    <div className="w-[100%] px-4">
      <div className="grid grid-cols-7 gap-2 mb-4 justify-center">
        <div className="header">{contact_measurement}</div>
        <div className="label">SPH.</div>
        <div className="label">SYL</div>
        <div className="label">AXIS</div>
        <div className="label">VA</div>
        <div className="label ">NEAR ADD</div>
        <div className="label">VN</div>
        <div className="label">OD (Right)</div>
        <Input id="right-sph" className="input-field col-span-1" />
        <Input id="right-syl" className="input-field col-span-1" />
        <Input id="right-axis" className="input-field col-span-1" />
        <Input id="right-va" className="input-field col-span-1" />
        <Input id="right-nearadd" className="input-field col-span-1" />
        <Input id="right-vn" className="input-field col-span-1" />
        <div className="label">OS (Left)</div>
        <Input id="left-sph" className="input-field col-span-1" />
        <Input id="left-syl" className="input-field col-span-1" />
        <Input id="left-axis" className="input-field col-span-1" />
        <Input id="left-va" className="input-field col-span-1" />
        <Input id="left-nearadd" className="input-field col-span-1" />
        <Input id="left-vn" className="input-field col-span-1" />
      </div>
    </div>
  );
}
