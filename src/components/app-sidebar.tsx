"use client"

import * as React from "react"
import {
  LayoutDashboard,
  Upload,
  FileText,
  UserRound,
} from "lucide-react";

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "MICON",
      logo: "/src/assets/clover.jpg",
      plan: "Enterprise",
    },
  ],

  navMain: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      url: "/",
    },
    {
      title: "Check Eligibility",
      icon: Upload,
      url: "/eligibility",
    },
    {
      title: "Compare Loans",
      icon: FileText,
      url: "/compareLoan",
    },
    {
      title: "Profile",
      icon: UserRound,
      url: "/profile",
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
