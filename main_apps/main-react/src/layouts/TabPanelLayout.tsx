import React, { Component } from 'react';
import { Tabs } from 'antd';
import { connect } from 'dva';
import { history } from 'umi';
import { getTabsComponent } from '@/utils/tabsConfig';
import { TabCloseType } from '@/constant';
import styles from './index.module.less';

const { TabPane } = Tabs;
// @ts-ignore
type TargetKey = string | MouseEvent<HTMLElement, MouseEvent>;

class SwitchTabs extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.props.history.listen((location: any) => {
      const localUrl = window.location;
      // 只记录平台端的 auth 标签页
      if (location.pathname.indexOf('/cloud/') < 0) {
        return;
      }
      const { title } = getTabsComponent(location.pathname) || {};
      const tabKey = location.pathname + localUrl.search;
      this.props.dispatch({
        type: 'tabs/ChangeTabsEffect',
        payload: { tabKey, title, params: location.query },
      });
    });
  }

  onChange = (activeKey: string) => {
    history.push(activeKey);
  };

  remove = (targetKey: TargetKey) => {
    this.props.dispatch({
      type: 'tabs/ReduceTabEffect',
      payload: targetKey,
    });
  };

  render() {
    const { tabs } = this.props;
    return (
      <div className={styles.tabContainer}>
        <Tabs
          hideAdd
          onEdit={this.remove}
          onChange={this.onChange}
          activeKey={tabs.currentKey}
          type={TabCloseType.EditableCard}
          className={styles.tabsNavWrap}
        >
          {tabs.tabList.map((panel: any) => {
            const tabComponent = getTabsComponent(panel.tabKey);
            return (
              tabComponent && (
                <TabPane tab={panel.title} key={panel.tabKey}>
                  <div className={styles.tabPaneContainer}>{tabComponent.component}</div>
                </TabPane>
              )
            );
          })}
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return { tabs: state.tabs };
}

export default connect(mapStateToProps)(SwitchTabs);
