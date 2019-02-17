export interface RootState {
  sidebar: SidebarStore;
  contacts: ContactsStore;
  prices: PricesStore;
  market: MarketStore;
}

export interface SidebarStore {
  opened: boolean;
}

export interface ContactsStore {
  mainInfo: {
    tel: string,
    tel2: string
    address: string,
  };
}

export interface PricesStore {
  pricesUrl: string[];
}

export interface MarketStore {
  status: string;
}
