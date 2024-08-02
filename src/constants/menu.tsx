
// import { DashboardIcon } from '@/icons/dashboard-icon';
// import { ChatIcon } from '@/icons/chat-icon';
// import { IntegrationsIcon } from '@/icons/integrations-icon';
import { ChartBarIcon, SettingsIcon, StarIcon, TimerIcon } from 'lucide-react';
// import { CalIcon } from '@/icons/cal-icon';
// import { EmailIcon } from '@/icons/email-icon';
// import { HelpDeskIcon } from '@/icons/help-desk-icon';

type SIDE_BAR_MENU_PROPS = {
  label: string
  icon: JSX.Element
  path: string
}

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: 'Dashboard',
    // icon: <DashboardIcon />,
    icon: <ChartBarIcon/>,
    path: 'dashboard',
  },
  {
    label: 'Conversations',
    icon: <ChartBarIcon/>,
    path: 'conversation',
  },
  {
    label: 'Integrations',
    icon: <ChartBarIcon/>,
    path: 'integration',
  },
  {
    label: 'Settings',
    icon: <ChartBarIcon/>,
    path: 'settings',
  },
  {
    label: 'Appointments',
    icon: <ChartBarIcon/>,
    path: 'appointment',
  },
  {
    label: 'Email Marketing',
    icon: <ChartBarIcon/>,
    path: 'email-marketing',
  },
]

type TABS_MENU_PROPS = {
  label: string
  icon?: JSX.Element
}

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'unread',
    icon: <ChartBarIcon/>
  },
  {
    label: 'all',
    icon: <ChartBarIcon/>

  },
  {
    label: 'expired',
    icon: <ChartBarIcon/>

  },
  {
    label: 'starred',
    icon: <ChartBarIcon/>

  },
]

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'help desk',
  },
  {
    label: 'questions',
  },
]

export const APPOINTMENT_TABLE_HEADER = [
  'Name',
  'RequestedTime',
  'Added Time',
  'Domain',
]

export const EMAIL_MARKETING_HEADER = ['Id', 'Email', 'Answers', 'Domain']

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: 'chat',
    icon: <ChartBarIcon/>
    
  },
  {
    label: 'helpdesk',
    icon: <ChartBarIcon/>

  },
]