import { message } from 'antd';
import { Effect } from 'dva';
import { Reducer } from 'redux';
import { ConnectState } from '@/models/connect';
import { history } from '@umijs/max';
import { TabCloseType } from '@/constant';

export interface TabModel {
  title: string;
  tabKey: string;
  params: any;
}

export interface TabModelState {
  currentKey: string;
  tabList: TabModel[];
}

export interface TabModelType {
  namespace: 'tabs';
  state: TabModelState;
  effects: {
    ChangeTabsEffect: Effect;
    ReduceTabEffect: Effect;
  };
  reducers: {
    SWitchToTableReducer: Reducer<TabModelState>;
    AddOneTabReducer: Reducer<TabModelState>;
    ReduceTabReducer: Reducer<TabModelState>;
    ChangeCloseTypeReducer: Reducer<TabModelState>;
  };
}

const UserModel: TabModelType = {
  namespace: 'tabs',
  state: {
    currentKey: '',
    tabList: [],
  },
  reducers: {
    // @ts-ignore
    SWitchToTableReducer(state: TabModelState, action) {
      return {
        ...state,
        currentKey: action.payload,
      };
    },
    // @ts-ignore
    AddOneTabReducer(state: TabModelState, action) {
      return {
        ...state,
        tabList: action.payload,
      };
    },
    // @ts-ignore
    ReduceTabReducer(state: TabModelState, action) {
      return {
        ...state,
        tabList: action.payload.newTabs,
      };
    },
    // @ts-ignore
    ChangeCloseTypeReducer(state: TabModelState, action) {
      return {
        ...state,
        closeType: action.payload,
      };
    },
  },
  effects: {
    *ChangeTabsEffect({ payload }: any, { put, select }) {
      const tabList: TabModel[] = yield select((state: ConnectState) => state.tabs.tabList);
      let findKey = false;
      tabList.forEach((pane: any) => {
        if (pane.tabKey === payload.tabKey) {
          findKey = true;
        }
      });
      if (!findKey) {
        yield put({
          type: 'AddOneTabReducer',
          payload: [...tabList, { ...payload }],
        });
        yield put({
          type: 'SWitchToTableReducer',
          payload: payload.tabKey,
        });

        if (tabList.length >= 1) {
          yield put({
            type: 'ChangeCloseTypeReducer',
            payload: TabCloseType.EditableCard,
          });
        }
      } else {
        yield put({
          type: 'SWitchToTableReducer',
          payload: payload.tabKey,
        });
      }
    },
    *ReduceTabEffect({ payload }: any, { put, select }: any) {
      const { tabList, currentKey } = yield select((state: ConnectState) => state.tabs);
      if (tabList.length === 1) {
        message.info('至少要保留一个窗口');
        return;
      }
      if (tabList.length <= 2) {
        yield put({
          type: 'ChangeCloseTypeReducer',
          payload: TabCloseType.EditableCard,
        });
      }
      let removeIndex = 0;
      let newActiveKey = currentKey;
      tabList.forEach((pane: any, i: number) => {
        if (pane.tabKey === payload) {
          removeIndex = i;
        }
      });
      // 删除最后一个
      if (removeIndex === tabList.length - 1) {
        if (payload === tabList[removeIndex].tabKey) {
          newActiveKey = tabList[tabList.length - 2].tabKey;
        }
      } else if (currentKey === tabList[removeIndex].tabKey) {
        // 删除当前 tab
        newActiveKey = tabList[removeIndex + 1].tabKey;
      }
      const newTabs = tabList.filter((pane: any) => pane.tabKey !== payload);
      yield put({
        type: 'ReduceTabReducer',
        payload: { newTabs, newActiveKey },
      });
      history.push(newActiveKey);
    },
  },
};

export default UserModel;
