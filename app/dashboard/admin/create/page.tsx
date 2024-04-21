import Form from '@/app/ui/admin/create-user';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Create User',
}


export default async function Page() {
    return (
        <main>
            <div className='flex flex-col items-center justify-center border-2 border-blue-950'>
                <h1>HIII</h1>
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
            </div>

        </main>
    );
}