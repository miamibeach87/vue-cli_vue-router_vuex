import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';
import createLogger from 'vuex/dist/logger';
import {RootState} from '@/interface/store';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store: StoreOptions<RootState> = {
  state: {
    sidebar: {
      opened: false,
    },
    users: {
      usersList: []
    },
    settings: {
      headerBgColor: '',
      headerColor: '',
      mainBgColor: '',
      mainColor: '',
      footerColor: 'null',
    }

  },
  mutations: {
    toggleSidebar(state) {
      state.sidebar.opened = !state.sidebar.opened;
    },
    closeSidebar(state) {
      state.sidebar.opened = false;
    },
    openSidebar(state) {
      state.sidebar.opened = true;
    },
  },
  actions: {},
  getters: {
    sidebarIsOpened: (state) => {
      return state.sidebar.opened;
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
