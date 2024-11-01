import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

interface config {
  contact_measurement: string;
}

const DistanceMeasurement = ({ contact_measurement }: config) => {
  return (
    <div className="w-[100%] px-4">
      <div className="grid grid-cols-7 gap-2 mb-4 justify-center">
        <div className="header">{contact_measurement}</div>
        <div className="label distance-label">SPH.</div>
        <div className="label distance-label">SYL</div>
        <div className="label distance-label">AXIS</div>
        <div className="label distance-label">VA</div>
        <div className="label  distance-label">NEAR ADD</div>
        <div className="label distance-label">VN</div>
        <div className="label">OD (Right)</div>
        <Input
          id="right-sph"
          className="bg-emerald-50 dark:bg-emerald-900 h-7 input-field col-span-1"
        />
        <Input
          id="right-syl"
          className="bg-pink-50 dark:bg-pink-900 h-7 input-field col-span-1"
        />
        <Input
          id="right-axis"
          className="bg-purple-50 dark:bg-purple-900 h-7 input-field col-span-1"
        />
        <Input
          id="right-va"
          className="bg-orange-50 dark:bg-orange-900 h-7 input-field col-span-1"
        />
        <Input
          id="right-nearadd"
          className="bg-cyan-50 dark:bg-cyan-900 h-7 input-field col-span-1"
        />
        <Input
          id="right-vn"
          className="bg-pink-50 dark:bg-pink-900 h-7 input-field col-span-1"
        />
        <div className="label">OS (Left)</div>
        <Input
          id="left-sph"
          className="bg-emerald-50 dark:bg-emerald-900 h-7 input-field col-span-1"
        />
        <Input
          id="left-syl"
          className="bg-pink-50 dark:bg-pink-900 h-7 input-field col-span-1"
        />
        <Input
          id="left-axis"
          className="bg-purple-50 dark:bg-purple-900
 h-7 input-field col-span-1"
        />
        <Input
          id="left-va"
          className="bg-orange-50 dark:bg-orange-900 h-7 input-field col-span-1"
        />
        <Input
          id="left-nearadd"
          className="bg-cyan-50 dark:bg-cyan-900 h-7 input-field col-span-1"
        />
        <Input
          id="left-vn"
          className="bg-pink-50 dark:bg-pink-900  h-7 input-field col-span-1"
        />
      </div>
    </div>
  );
};

export default DistanceMeasurement;
