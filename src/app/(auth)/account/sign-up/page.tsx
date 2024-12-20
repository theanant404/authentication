"use client";
import { InfinityIcon } from "lucide-react"
import { RegisterForm } from "./register-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="flex h-6 w-6 items-center justify-center rounded-md  ">
         <InfinityIcon size={16} />
          </div>
          the अनंत
        </a>
        <RegisterForm />
      </div>
    </div>
  )
}
