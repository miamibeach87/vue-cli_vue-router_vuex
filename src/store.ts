import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import createLogger from 'vuex/dist/logger';
import { RootState, SettingsStore, User } from '@/interface/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

function initialState() {
  return {
    sidebar: {
      opened: false,
    },
    users: {
      usersList: [],
    },
    settings: {
      headerBgColor: 'black',
      mainBgColor: '#4dba87',
      footerBgColor: 'black',
    },
  };
}

const store: StoreOptions<RootState> = {
  state: initialState,
  getters: {
    sidebarIsOpened: (state): boolean => {
      return state.sidebar.opened;
    },
    getUsers: (state): User[] => {
      return state.users.usersList;
    },
    getUserById: (state) => (id: number): User | undefined => {
      return state.users.usersList.find((user: User) => user.id === id);
    },
    getAllSettings: (state): SettingsStore | undefined => {
      return state.settings;
    },
    getHeaderBgColor: (state): string => {
      return state.settings.headerBgColor;
    },
    getMainBgColor: (state): string => {
      return state.settings.mainBgColor;
    },
    getFooterColor: (state): string => {
      return state.settings.footerBgColor;
    },
  },
  // The only way to actually change state in a Vuex store is by committing a mutation. Vuex mutations are very
  // similar to events: each mutation has a string type and a handler. The handler function is where we perform actual
  // state modifications, and it will receive the state as the first argument:
  mutations: {
    toggleSidebar(state): void {
      state.sidebar.opened = !state.sidebar.opened;
    },
    setUsers(state, users: User[]): void {
      state.users.usersList = users;
    },
    setAllSettings(state, settings: SettingsStore): void {
      state.settings = settings;
    },
    setHeaderBgColor(state: RootState, color: string): void {
      state.settings.headerBgColor = color;
    },
    setMainBgColor(state: RootState, color: string): void {
      state.settings.mainBgColor = color;
    },
    setFooterColor(state: RootState, color: string): void {
      state.settings.footerBgColor = color;
    },
    setDefaultState(state: RootState): void {
      const s = initialState();
      Object.keys(s).forEach((key: string) => {
        // @ts-ignore
        state[key] = s[key];
      });
    },
  },
  // Instead of mutating the state, actions commit mutations.
  // Actions can contain arbitrary asynchronous operations.
  actions: {
    toggleSidebar(context): void {
      context.commit('toggleSidebar');
    },
    setUsers(context, payload): void {
      context.commit('setUsers', payload);
    },
    setAllSettings(context, payload): void {
      context.commit('setAllSettings', payload);
    },
    setHeaderBgColor(context, payload): void {
      context.commit('setHeaderBgColor', payload);
    },
    setMainBgColor(context, payload): void {
      context.commit('setMainBgColor', payload);
    },
    setFooterColor(context, payload): void {
      context.commit('setFooterColor', payload);
    },
    setDefaultState(context): void {
      context.commit('setDefaultState');
    },
  },
  plugins: debug ? [createLogger({
    collapsed: false,
    filter(mutation, stateBefore, stateAfter) {
      return mutation.type !== 'aBlacklistedMutation';
    },
    transformer(state) {
      return state;
    },
    mutationTransformer(mutation) {
      return mutation.type;
    },
  })] : [],
};

export default new Vuex.Store(store);
