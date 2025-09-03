import { WidgetItem } from '@/components';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import Image from 'next/image';

export default async function DashboardPage() {

  const session = await getServerSession(authOptions);

  if(!session) {
    redirect('/api/auth/signin');
  }

  const {name, email, image} = session.user ?? {};
  

  return (
    <div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          session.user && (
            <WidgetItem title="Usuario conectado S-Side">
              <h1 className='font-bold'>{name}</h1>
              <Image width={100} height={100} src={image ?? ''} alt={name ?? ''} />
              <p>{email}</p>
            </WidgetItem>
          )
        }
        
        {/* <WidgetItem />
        <WidgetItem />
        <WidgetItem /> */}
      </div>
    </div>
  );
}
