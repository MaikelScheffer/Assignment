import { SET_LANGUAGE, TRY_CHANGE_LANGUAGE } from './actions';
import i18n from '../i18n.js';

const initialState = {
  selectedLanguage: {
    flag: 'nl',
    language: 'nl-NL',
    title: 'Nederlands',
    currency: '€'
  },
  languages: [
    { flag: 'uk', language: 'en', title: 'English', currency: '£' },
    { flag: 'nl', language: 'nl-NL', title: 'Nederlands', currency: '€' }
  ]
};

export const state = { ...initialState };

export const actions = {
  async [TRY_CHANGE_LANGUAGE](context, lang) {
    context.commit(SET_LANGUAGE, lang);
    return lang;
  }
};

export const mutations = {
  [SET_LANGUAGE](state, lang) {
    const items = state.languages.filter(x => x.language.startsWith(lang));
    state.selectedLanguage = items?.[0] ?? state.selectedLanguage;
    i18n.locale = state.selectedLanguage.language;
  }
};

const getters = {
  selectedLanguage(state) {
    return state.selectedLanguage;
  },
  languages(state) {
    return state.languages;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
