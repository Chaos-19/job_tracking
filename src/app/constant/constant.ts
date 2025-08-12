export const sidebarNavigation = [
  { name: 'Dashboard', href: '/', icon: 'lucideLayoutDashboard' },
  {
    name: 'Kanban Board',
    href: '/kanban',
    icon: 'lucideKanban',
  },
  { name: 'Add Job', href: '/add-job', icon: 'lucidePlus' },
  { name: 'Profile', href: '/profile', icon: 'lucideUser' },
  { name: 'Settings', href: '/settings', icon: 'lucideSettings' },
];

export const stats = [
  {
    title: 'Total Applications',
    value: '24',
    change: '+12%',
    trend: 'up',
    icon: 'lucideCalendar',
    color: 'bg-primary',
  },
  {
    title: 'Interviews',
    value: '8',
    change: '+25%',
    trend: 'up',
    icon: 'lucideClock',
    color: '#14b8a6',
  },
  {
    title: 'Offers',
    value: '3',
    change: '+50%',
    trend: 'up',
    icon: 'lucideCircleCheck',
    color: 'green',
  },
  {
    title: 'Rejections',
    value: '5',
    change: '-10%',
    trend: 'down',
    icon: 'lucideCircleX',
    color: 'red',
  },
];

export const activities = [
  {
    id: 1,
    company: 'Google',
    position: 'Senior Frontend Developer',
    location: 'Mountain View, CA',
    status: 'Interview Scheduled',
    date: '2 hours ago',
    statusColor: 'bg-accent text-white',
  },
  {
    id: 2,
    company: 'Microsoft',
    position: 'Full Stack Engineer',
    location: 'Seattle, WA',
    status: 'Applied',
    date: '1 day ago',
    statusColor: 'bg-blue-100 text-blue-800',
  },
  {
    id: 3,
    company: 'Netflix',
    position: 'React Developer',
    location: 'Los Gatos, CA',
    status: 'Offer Received',
    date: '3 days ago',
    statusColor: 'bg-green-100 text-green-800',
  },
  {
    id: 4,
    company: 'Spotify',
    position: 'UI/UX Developer',
    location: 'New York, NY',
    status: 'Rejected',
    date: '1 week ago',
    statusColor: 'bg-red-100 text-red-800',
  },
];

export const quickActions = [
  {
    title: 'Add New Application',
    description: 'Track a new job opportunity',
    href: '',
    bg: '#1e3a8a',
    color: 'white',
  },
  {
    title: 'Schedule Interview',
    description: 'Set up your next interview',
    href: '',
    bg: '#14b8a6',
    color: 'white',
  },
  {
    title: 'Update Resume',
    description: 'Keep your profile current',
    href: '',
    bg: '#F3F4F6',
    color: '#374151',
  },
];
