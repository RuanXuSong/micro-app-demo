const GlobalModel = {
  namespace: 'global',
  state: {
    collapsed: false,
    collapsedHeader: false,
  },
  effects: {},
  reducers: {
    changeLayoutCollapsed(
      state = {
        collapsed: true,
      },
      { payload },
    ) {
      return { ...state, collapsed: payload };
    },
    changeHeaderCollapsed(
      state = {
        collapsed: true,
      },
      { payload },
    ) {
      return { ...state, headerCollapsed: payload };
    },
  },
};
export default GlobalModel;
