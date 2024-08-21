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
  SidebarClose,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function Sidebar() {
  return (
    <div className="h-[100vh] w-[4vw] gap-4 rounded-r-2xl bg-purple-400">
      <div className="flex flex-col items-center justify-around gap-8 py-8">
        <div className="pb-8">
          <Image
            src="/images/profileimg.jpg"
            className="rounded-full"
            width={30}
            height={30}
          />
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
              <BookOpenText size={30} color="white" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Learning Modules</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Dices size={30} color="white" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Investmania</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <MessageCircleMore size={30} color="white" />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Goal Based Recommmendations</p>
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

export default Sidebar;
