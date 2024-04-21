import Form from '@/app/ui/admin/create-user';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create User',
}


export default async function Page() {
    return (
        <main className='flex flex-col pl-10 pr-10 pt-10 box-border'>

            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Admin', href: '/dashboard/admin' },
                    {
                        label: 'Create User',
                        href: '/dashboard/admin/create',
                        active: true,
                    },
                ]}
            />
            <Form />

        </main>
    );
}