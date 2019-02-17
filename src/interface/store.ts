export interface RootState {
  sidebar: SidebarStore;
  users: UsersStore;
  settings: SettingsStore;
}

export interface SidebarStore {
  opened: boolean;
}

export interface UsersStore {
  usersList: User[];
}

export interface SettingsStore {
  headerBgColor: string;
  headerColor: string;
  mainBgColor: string;
  mainColor: string;
  footerColor: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
