import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  BookOpenText,
  ChartAreaIcon,
  ChartColumnBig,
  Dices,
  LogOut,
  LogOutIcon,
  MessageCircleMore,
  ShoppingBagIcon,
  SidebarClose,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function ParentSideBar() {
  return (
    <div className="h-[100vh] w-[4vw] sticky gap-4 rounded-r-2xl bg-purple-400">
      <div className="flex flex-col items-center justify-around gap-8 py-8">
        <div className="pb-8">
          
          <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
                <Image
                src="/images/profileimg.jpg"
                className="rounded-full"
                width={30}
                height={30}
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ChartColumnBig size={30} color="white" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Expense Tracker</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <BookOpenText
                size={30}
                color="white"
                onClick={() => router.push("/learning-modules")} 
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Learning Modules</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <ShoppingBagIcon size={30} color="white"/>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Store</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
                <Image
                src="/images/childimg.png"
                className="rounded-full"
                width={30}
                height={30}
              />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Bacche ka Profile</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="pt-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <LogOutIcon size={30} color="white" />
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Log out</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}

export default ParentSideBar;
