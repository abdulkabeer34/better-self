import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { BellRing, Bot, PieChart, SendToBack, Settings2, Timer } from "lucide-react"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { auth } from "@/auth"
import { isAuthorized } from "@/lib/auth"

export const metadata = {
  title: "BetterSelf",
  description: "An app to help you achieve your goals faster",
};

export default async function IndexPage() {
  const isLoggedIn = await isAuthorized();
  
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          {/* <Link href={"#"} className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium" target="_blank">Follow along on Twitter</Link> */}
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">An app to help you achieve your goals faster</h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">BetterSelf is going to be an app that will replace all other productivity apps, helping you set goals, track your progress, and stay on track with constant reminders.</p>
          <div className="space-x-4">
            {isLoggedIn ?
              <Link href="/tasks" className={cn(buttonVariants({ size: "lg" }))}>Go to Dashboard</Link> :
              <Link href="/register" className={cn(buttonVariants({ size: "lg" }))}>Get Started</Link>
            }

            <Link href={"/#features"} className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>Explore</Link>
          </div>
        </div>
      </section>

      <section id="features" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">{"We've"} just started out building this app, so it only has the most critical feature of productivity: TODO Lists. {"It's"} going to have a lot of features in the future, including the following: </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <SendToBack size={48} />
              <div className="space-y-2">
                <h3 className="font-bold">Tasks and Sub-tasks</h3>
                <p className="text-sm text-muted-foreground">One of the best ways to beat procrastination is to break down tasks into tiny pieces, which you can do with tasks and sub-tasks.</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[210px] flex-col justify-between rounded-md p-6">
              <Settings2 size={48} />
              <div className="space-y-2">
                <h3 className="font-bold">Gamification</h3>
                <p className="text-sm text-muted-foreground">
                  Gamify your tasks by scoring each of them based on its difficulty and importance.
                </p>
                <Badge variant={"outline"}>Coming Soon</Badge>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[210px] flex-col justify-between rounded-md p-6">
              <PieChart size={48} />
              <div className="space-y-2">
                <h3 className="font-bold">Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  See a summary of your progress on the dashboard, and other useful stats and insights.
                </p>
                <Badge variant={"outline"}>Coming Soon</Badge>

              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[210px] flex-col justify-between rounded-md p-6">
              <Bot size={48} />
              <div className="space-y-2">
                <h3 className="font-bold">AI Assistant</h3>
                <p className="text-sm text-muted-foreground">
                  An intelligent assistant to help you set, discuss, adjust, and ultimately achieve your goals.
                </p>
                <Badge variant={"outline"}>Coming Soon</Badge>

              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[210px] flex-col justify-between rounded-md p-6">
              <BellRing size={48} />
              <div className="space-y-2">
                <h3 className="font-bold">Reminders</h3>
                <p className="text-sm text-muted-foreground">
                  BetterSelf will make sure you never forget a task by sending you reminders at the right time.
                </p>
                <Badge variant={"outline"}>Coming Soon</Badge>

              </div>
            </div>
          </div>


          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[210px] flex-col justify-between rounded-md p-6">
              <Timer size={48} />
              <div className="space-y-2">
                <h3 className="font-bold">Time Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track your time spent on each task to see where {"you're"} spending most of your time.
                </p>

                <Badge variant={"outline"}>Coming Soon</Badge>

              </div>
            </div>
          </div>

        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {"It's"} going to be a long journey, but {"we're"} very excited!
          </p>
        </div>
      </section>


      {/* <section id="team" className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Our Team</h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">{"We've"} got our hands on some of the best talent in the world!</p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[280px] flex-col items-center rounded-md p-6">
              <Image src="/photos/01.png" width={196} height={196} className="rounded-full mb-4" alt="Team Member 1" />
              <h3 className="font-semibold text-center text-lg">Designer</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[280px] flex-col items-center rounded-md p-6">
              <img src="/photos/02.png" width={196} height={196} className="rounded-full mb-4" alt="Team Member 2" />

              <h3 className="font-semibold text-center text-lg">Project Manager</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[280px] flex-col items-center rounded-md p-6">
              <Image src="/photos/03.png" width={196} height={196} className="rounded-full mb-4" alt="Team Member 3" />
              <h3 className="font-semibold text-center text-lg">Developer</h3>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Ah, me. Gotta wear all those hats.
          </p>
        </div>
      </section> */}
    </>
  )
}