

"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function VerificationForm() {
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();
  

  useEffect(() => {
    const userEmail =() => {
      const storedEmail = sessionStorage.getItem('userEmail');
      setEmail(storedEmail);
      
    }
    userEmail();
  }, []);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const response = await axios.post("/api/verify-code", {
        email: email,
        verifyCode: data.pin,
      });
      // console.log("responce", response.data.success);
      if (response.data.success === false) {
        return toast({
          title: "Failed to verify user",
          description: response.data.message,
          variant: "destructive",
        });
      }
      if (response.data.success === true) {
        toast({
          title: "User verified successfully",
          description: response.data.message,
          variant: "success",
        });
        sessionStorage.removeItem('userEmail');
        router.push("/account/sign-in");
      }
      
    } catch (error) {
      console.error("Error verifying user:", error);
      return toast({
        title: "Failed to verify user",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
      
    }
  }

  return (
    <Card className="">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Verify Your Account</CardTitle>
        <CardDescription>
          Enter the one-time password sent to your email to verify your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {email ?(
                  <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6  items-center"
          >
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem className=" mx-auto justify-items-center ">
                  <FormLabel>One-Time Password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormDescription>
                    Please enter the one-time password sent to your email.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
        ): 
        <div>
          <p className="text-center">Email not found Something went wrong</p>

        </div>
        }

      </CardContent>
    </Card>
  );
}
