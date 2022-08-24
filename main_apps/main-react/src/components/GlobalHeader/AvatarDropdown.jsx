import { LOGOUT_PATH } from '@/config';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import React from 'react';
import { history, connect } from 'umi';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import microApp from '@micro-zoe/micro-app';

class AvatarDropdown extends React.Component {
  state = {
    showDropDown: false,
  };
  onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      const { dispatch } = this.props;

      if (dispatch) {
        dispatch({
          type: 'login/logout',
        });
      }

      return;
    }

    history.push(`/account/${key}`);
  };

  handleGlobalDataForBaseApp = (data) => {
    this.setState({ showDropDown: data.showDropDown });
  };

  componentDidMount() {
    microApp.addGlobalDataListener(this.handleGlobalDataForBaseApp);
  }

  render() {
    const {
      currentUser = {
        avatar: '',
        name: '',
      },
      menu,
    } = this.props;
    const menuHeaderDropdown = (
      <Menu
        className={styles.menu}
        selectedKeys={[]}
        onClick={() => {
          window.location.href = LOGOUT_PATH;
        }}
      >
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <HeaderDropdown
        {...(this.state.showDropDown ? {} : { visible: false })}
        overlay={menuHeaderDropdown}
      >
        {currentUser && currentUser.name ? (
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
            <span className={`${styles.name} anticon`}>{currentUser.name}</span>
          </span>
        ) : (
          <span>user</span>
        )}
      </HeaderDropdown>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
