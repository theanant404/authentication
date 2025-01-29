import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

interface ProfileCardProps {
  imageUrl: string
  name: string
  username: string
  fullName: string
    email: string
}

export default function ProfileCard({ imageUrl, name, username, fullName,email }: ProfileCardProps) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardContent className="flex flex-col items-center p-6">
        <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
          <Image
            src={imageUrl}
            alt={`${name}'s profile picture`}
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold mb-1">{name}</h2>
        <p className="text-sm text-muted-foreground mb-2">@{username}</p>
        <p className="text-sm text-muted-foreground mb-2">{email}</p>
        <p className="text-base">{fullName}</p>
      </CardContent>
    </Card>
  )
}

