"use client";

import { Logo } from "../components/logo";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import { z } from "zod"
import { Separator } from "@/components/ui/separator"



export default function Home(){
  const form = useForm()

  return (
  
      <div className="container  gap-3 max-w-none ">
             <ResizablePanelGroup
                  direction="horizontal"
                  className="min-h-[1140px] max-w rounded-lg border"
                >
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full flex-col justify-between p-6 bg-black  text-white">
                      {/* <span className="font-semibold">Sidebar</span> */}
                      {/* <div > */}
                          <div className="m-4">
                               <Logo />
                          </div>
                          <div className="flex flex-col m-4">
                              <h3 className="scroll-m-20 text-4xl tracking-tight">
                              &quot; There&apos;s alwas a better way to rebuild the rome &quot;
                              </h3>
                              <p className="text-3xl ">-Team</p>
                          </div>
                          {/* </div>  */}
                    </div>
                  </ResizablePanel>
                  {/* <ResizableHandle withHandle /> */}
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center p-6">
                      {/* <span className="font-semibold">Content</span> */}
                      <div className="flex justify-center text-black items-center flex-col  max-w-[900px]">
                          <h1>Login</h1>
                          <h3 className="my-7">Enter your email and password below to login</h3>
                          <FormProvider {...form} >
                          <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                  <FormItem>
                                
                                                      <FormControl>
                                                        <Input placeholder="Email" {...field} className="w-[700px] h-14"/>
                                                      </FormControl>
                                                      <FormControl>
                                                        <Input placeholder="Password" {...field} className="h-14"/>
                                                      </FormControl>
                                                      <Button className="w-full h-14">Login</Button>


                                                      <div className="flex flec-col max-w-[700px]">
                                                      <Separator className="my-10 w-[40%]"/>
                                                      <p className="my-7"> OR CONTINUE WITH</p>
                                                      <Separator className="my-10 w-[35%]"/>
                                                    </div>
                                                      {/* <p>This is some text between the separator.</p> */}
                                    <Button className="w-full h-14" variant="outline">Continue with Github</Button>
                                    {/* <FormDescription>This is your public display name.</FormDescription> */}
                                    {/* <FormMessage /> */}
                                  </FormItem>
                                )}
                              />
                              </FormProvider>















                      </div>    
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>


        {/* <div className="left bg-black min-h-[1140px]  text-white flex flex-col justify-between">
          <div className="m-4">
          <Logo />
          </div>
             <div className="flex flex-col m-4">
              <h3 className="scroll-m-20 text-4xl tracking-tight">
              &quot; There&apos;s alwas a better way to rebuild the rome &quot;
              </h3>
              <p className="text-3xl ">-Team</p>
          </div>
        </div>
        <div className=" min-h-[775px]">
        <div className="flex  justify-center text-black flex-col">
          <h1>Login</h1>
          <h3>Enter your email and password below to login</h3>


     

        </div>
        </div> */}
      </div>
   
  )
}


