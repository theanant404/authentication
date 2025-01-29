

"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React, { use, useState } from "react";
import Image from "next/image";
import { ThemeSwitcher } from "./theme-switcher";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contactus",
    label: "Contact",
  },
];
export function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const session = useSession();
  return (
    <header className="sticky overflow-hidden border-b-[1px] top-0 z-40 w-full bg-transparent backdrop-blur-md dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-10 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex gap-1">
            <Link
              href="/"
              className="cursor-pointer flex items-center space-x-2 rtl:space-x-reverse"
            >
              <i className="fa-solid fa-feather-pointed dark:text-white text-lg"></i>
            </Link>
          </NavigationMenuItem>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <Link
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-2 items-center">
            <ThemeSwitcher />
            {/* mobile */}
            <div className="flex md:hidden gap-2">
              {/* <MobileNav /> */}
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild className="">
                  <Button
                    variant="ghost"
                    className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                  >
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-2 w-52 ">
                  <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 items-center">
                    <div className="flex flex-col space-y-3">
                      {routeList.map((route: RouteProps, i) => (
                        <Link
                          href={route.href}
                          key={i}
                          className={cn(
                            "hover:text-foreground/80 hover:underline transition-all",
                            pathname === route.href
                              ? "text-foreground underline font-bold"
                              : "text-foreground/60"
                          )}
                          onClick={() => setOpen(false)}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-5 flex justify-center items-center">
                      {session.status == "unauthenticated" ? (
                        <div className="flex flex-col gap-2 w-full">
                          <Link
                            href="/account/sign-in"
                            className={`border ${buttonVariants({
                              variant: "secondary",
                            })}`}
                          >
                            Login
                          </Link>
                          <Link
                            href="/account/sign-up"
                            className={`border ${buttonVariants({
                              variant: "link",
                            })}`}
                          >
                            Sign Up
                          </Link>
                        </div>
                      ) : (
                        <>
                          <Button onClick={() => signOut()} variant={"outline"}>
                            LogOut
                          </Button>
                        </>
                      )}
                    </div>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </div>
            <div className="hidden md:flex">
              {session.status == "unauthenticated" ? (
                <>
                  <Link
                    href="/account/sign-in"
                    className={`border ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    Login
                  </Link>
                </>
              ) : (
                <>
                  <Button onClick={() => signOut()} variant={"outline"}>
                    LogOut
                  </Button>
                </>
              )}
            </div>
            {session.status == "authenticated" && (
              <Link href="/profile">
                <Image
                  src={session.data?.user.image}
                  alt="profile image"
                  width={40}
                  height={40}
                  className="rounded-full cursor-pointer"
                />
              </Link>
            )}
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
