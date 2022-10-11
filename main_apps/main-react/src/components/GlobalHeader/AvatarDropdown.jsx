import React from 'react';
import { LOGOUT_PATH } from '@/config';
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
  FormatPainterOutlined,
} from '@ant-design/icons';
import { Avatar, Menu, Spin } from 'antd';
import { history, connect } from '@umijs/max';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';
import microApp from '@micro-zoe/micro-app';
import { enable as enableDarkMode, disable as disableDarkMode } from 'darkreader';

class AvatarDropdown extends React.Component {
  state = {
    showDropDown: false,
    dark: false,
  };

  changeTheme() {
    if (this.state.dark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      });
      return;
    }
    disableDarkMode();
  }

  onMenuClick = (event) => {
    const { key } = event;

    if (key === 'logout') {
      window.location.href = LOGOUT_PATH;
      // const { dispatch } = this.props;

      // if (dispatch) {
      //   dispatch({
      //     type: 'login/logout',
      //   });
      // }

      return;
    }

    if (key === 'changeTheme') {
      this.setState({ dark: !this.state.dark }, () => {
        localStorage.setItem('dark', this.state.dark);
        this.changeTheme();
      });
      return;
    }

    history.push(`/account/${key}`);
  };

  handleGlobalDataForBaseApp = (data) => {
    this.setState({ showDropDown: data.showDropDown });
  };

  componentDidMount() {
    microApp.addGlobalDataListener(this.handleGlobalDataForBaseApp);

    const dark = localStorage.getItem('dark');

    this.setState({ dark: dark != 'false' }, () => {
      this.changeTheme();
    });
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
      <Menu className={styles.menu} selectedKeys={[]} onClick={this.onMenuClick}>
        <Menu.Item key="changeTheme">
          <FormatPainterOutlined />
          切换主题
        </Menu.Item>
        <Menu.Item key="logout">
          <LogoutOutlined />
          退出登录
        </Menu.Item>
      </Menu>
    );
    return (
      <HeaderDropdown overlay={menuHeaderDropdown}>
        {currentUser && currentUser.name ? (
          <span className={`${styles.action} ${styles.account}`}>
            <Avatar size="small" className={styles.avatar} src={currentUser.avatar} alt="avatar" />
            <span className={`${styles.name} anticon`}>{currentUser.name}</span>
          </span>
        ) : (
          <span className={styles.userText}>user</span>
        )}
      </HeaderDropdown>
    );
  }
}

export default connect(({ user }) => ({
  currentUser: user.currentUser,
}))(AvatarDropdown);
