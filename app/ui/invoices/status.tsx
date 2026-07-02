import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
//import styles from '@/app/ui/ui-general.module.css';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
        className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <span style ={{ color: 'orange' }}>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </span>
      ) : null}
      {status === 'paid' ? (
        <span style ={{ color: 'green' }}>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </span>
      ) : null}
    </span>
  );
}