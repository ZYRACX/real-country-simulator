import * as Tooltip from '@radix-ui/react-tooltip';
import { Button } from '@/components/ui/button';

type ActivityItemProps = {
  icon: React.ReactNode;
  tooltip: React.ReactElement | string;
  label: string;
  disabled?: boolean;
};

export default function ActivityItem({ icon, tooltip, label, disabled = false }: ActivityItemProps) {
  return (
    <p className="p-4 border rounded-xl flex items-center gap-4">
      <Tooltip.Provider delayDuration={100}>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <span className="cursor-pointer text-lg">{icon}</span>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              side="right" // Tooltip appears to the right of icon
              align="center"
              sideOffset={8}
              className="bg-gray-800 text-white text-sm p-2 rounded shadow z-50"
            >
              {tooltip}
              <Tooltip.Arrow className="fill-gray-800" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      </Tooltip.Provider>

      <Button disabled={disabled}>{label}</Button>
    </p>
  );
}
