import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface config {
  contact_measurement: string;
}

const DistanceMeasurement = ({ contact_measurement }: config) => {
  return (
    <div className="w-[100%] px-4">
      <div className="grid grid-cols-7 gap-2 mb-2 justify-center">
        <div className="header">{contact_measurement}</div>
        <div className="app-prescription-label">SPH</div>
        <div className="app-prescription-label">SYL</div>
        <div className="app-prescription-label">AXIS</div>
        <div className="app-prescription-label">VA</div>
        <div className="app-prescription-label ">Near Add</div>
        <div className="app-prescription-label">VN</div>
        <div className="app-prescription-label justify-start">OD (Right)</div>
        <Input
          id="right-sph"
          className="bg-emerald-100 dark:bg-emerald-900 h-6 input-field col-span-1"
        />
        <Input
          id="right-syl"
          className="bg-blue-100 dark:bg-blue-900 h-6 input-field col-span-1"
        />
        <Input
          id="right-axis"
          className="bg-purple-100 dark:bg-purple-900 h-6 input-field col-span-1"
        />
        <Input
          id="right-va"
          className="bg-orange-100 dark:bg-orange-900 h-6 input-field col-span-1"
        />
        <Input
          id="right-nearadd"
          className="bg-cyan-100 dark:bg-cyan-900 h-6 input-field col-span-1"
        />
        <Input
          id="right-vn"
          className="bg-pink-100 dark:bg-pink-900 h-6 input-field col-span-1"
        />
        <div className="app-prescription-label justify-start">OS (Left)</div>
        <Input
          id="left-sph"
          className="bg-emerald-100 dark:bg-emerald-900 h-6 input-field col-span-1"
        />
        <Input
          id="left-syl"
          className="bg-blue-100 dark:bg-blue-900 h-6 input-field col-span-1"
        />
        <Input
          id="left-axis"
          className="bg-purple-100 dark:bg-purple-900 h-6 input-field col-span-1"
        />
        <Input
          id="left-va"
          className="bg-orange-100 dark:bg-orange-900 h-6 input-field col-span-1"
        />
        <Input
          id="left-nearadd"
          className="bg-cyan-100 dark:bg-cyan-900 h-6 input-field col-span-1"
        />
        <Input
          id="left-vn"
          className="bg-pink-100 dark:bg-pink-900  h-6 input-field col-span-1"
        />
      </div>
    </div>
  );
};

export default DistanceMeasurement;
