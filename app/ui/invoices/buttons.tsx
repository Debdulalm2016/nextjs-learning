// buttons.tsx
import { PencilIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/ui-general.module.css';

import { deleteInvoice } from '@/app/lib/actions';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className={styles.create_invoice_link}
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <PlusIcon className={styles.icon_small} />
    </Link>
  );
}

export function UpdateInvoice({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/invoices/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      
     <PencilIcon className={styles.icon_small} /> 
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {

  const deleteInvoiceWithId = deleteInvoice.bind(null, id);

  return (
    <>
      <form action={deleteInvoiceWithId}>
      <button type="submit" className={styles.delete_button}>
        <span className="sr-only">Delete</span>
        <TrashIcon className={styles.icon_small} /> 
      </button>
      </form>
    </>
  );
}