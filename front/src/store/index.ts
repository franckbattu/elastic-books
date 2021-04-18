import { reactive } from 'vue';
import { createStore } from 'vuex';
import { State } from '../models/state';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';
import { Store } from './utils';

// A surveiller : typage des modules dans les versions futures avec namespaced: true

export const store = createStore<State>({
  state: () => {
    return reactive({
      todos: [],
      posts: []
    });
  },
  actions,
  mutations,
  getters
});

export function useAppStore() {
  return store as Store;
}