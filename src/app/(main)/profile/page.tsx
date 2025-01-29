"use client";
import { useSession } from 'next-auth/react';
import ProfileCard from './profile-card'
import { useRouter } from 'next/navigation';

export default function Home() {
const session=useSession();
const router=useRouter()
if(session.data==null && session.status==='unauthenticated'){
  router.push('/account/sign-in')
}
console.log(session)
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <ProfileCard
        imageUrl={session.data?.user.image}
        name={session.data?.user.name}
        username={session.data?.user.username}
        fullName={session.data?.user.name}
        email={session.data?.user.email}
      />
    </main>
  )
}

