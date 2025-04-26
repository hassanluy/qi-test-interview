import * as React from "react";
import { GalleryVerticalEnd, SquareTerminal } from "lucide-react";

import { NavMain } from "~/components/nav-main";
import { NavUser } from "~/components/nav-user";
import { TeamSwitcher } from "~/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "~/components/ui/sidebar";
import { useTranslation } from "react-i18next";
import "../i18n";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { t } = useTranslation();
  // This is sample data.
  const data = {
    user: {
      name: t("sidebar.accountSection.username"),
      email: t("sidebar.accountSection.gmail"),
      avatar: "/avatars/shadcn.jpg",
    },
    teams: [
      {
        name: t("sidebar.accountSection.username"),
        logo: GalleryVerticalEnd,
        plan: t("sidebar.jobTitle"),
      },
    ],
    navMain: [
      {
        title: t("sidebar.adminSection.title"),
        url: "#",
        icon: SquareTerminal,
        isActive: true,
        items: [
          {
            title: t("sidebar.adminSection.products"),
            url: "/dashboard",
          },
          {
            title: t("sidebar.adminSection.orders"),
            url: "/orders",
          },
        ],
      },
    ],
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
