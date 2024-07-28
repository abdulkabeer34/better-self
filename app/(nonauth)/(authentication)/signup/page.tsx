"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/Icons";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { CreateAccount } from "@/app/actions/auth";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface FormValuesProps {
  email?: FormDataEntryValue;
  password?: FormDataEntryValue;
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { toast } = useToast();

  const FormSchema = z.object({
    email: z
      .string({ required_error: "Please provide an email." })
      .email({ message: "Please provide a valid email." }),
    password: z
      .string({ required_error: "Please provide a password." })
      .min(8, { message: "Password must be at least 8 characters." }),
    firstName: z
      .string({ required_error: "Please provide a password." })
      .min(2, { message: "Name must be at least 2 characters." }),
    lastName: z
      .string({ required_error: "Please provide a password." })
      .min(2, { message: "Name must be at least 2 characters." }),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    console.log(values);
    const response = await CreateAccount(values);

    if (response.error) {
      toast({
        title: "Error",
        description: response.message,
      });
    } else {
      toast({
        title: "Success",
        description: response.message,
      });
    }
    setIsLoading(false);
  }

  return (
    <div className={cn("grid gap-6  mt-[35px] w-[90%]", className)} {...props}>
      <Toaster />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} >
          <div className="grid gap-2">
            <div className="flex items-center justify-between max-[430px]:[display:initial]">
              <FormField
                control={form.control}
                name="firstName"
                defaultValue=""
                render={({ field }) => (
                  <FormItem className="pb-4 space-y-0.5 w-[44%] max-[430px]:w-[100%]">
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input {...field} className="w-full"/>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                defaultValue=""
                render={({ field }) => (
                  <FormItem className="pb-4 space-y-0.5 w-[44%] max-[430px]:w-[100%]">
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input {...field}  className="w-full"/>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                defaultValue=""
                render={({ field }) => (
                  <FormItem className="pb-4 space-y-0.5">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field}  className="w-full"/>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid gap-1 mt-[8px]">
              <FormField
                control={form.control}
                name="password"
                defaultValue=""
                render={({ field }) => (
                  <FormItem className="pb-4 space-y-0.5 ">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" className="w-full"/>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button disabled={isLoading} className="mt-[33px]">
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Sign In
            </Button>

            <p className="px-8 text-center text-sm text-muted-foreground mt-[23px]">
              Already have an account
              <Link
                href="/login"
                className="underline underline-offset-4 hover:text-primary ml-4"
              >
                Login
              </Link>
              .
            </p>
          </div>
        </form>
      </Form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.gitHub className="mr-2 h-4 w-4" />
        )}{" "}
        GitHub
      </Button> */}
    </div>
  );
}


export default UserAuthForm
