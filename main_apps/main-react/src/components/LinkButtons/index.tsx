/*
 * @文件描述: table 操作按钮
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 阮旭松
 * @LastEditTime: 2022-08-01 17:31:02
 */

import React, { useMemo } from 'react';
import { Dropdown, Menu } from 'antd';
import { history } from 'umi';

export interface ButtonsType {
  name: string;
  key: string;
  onClick?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  /** 路由跳转，优先级高于onClick */
  path?: string;
  hidden?: boolean;
}

export interface HandleButtonsProps {
  buttons: ButtonsType[];
  /** 允许展示的最大数量，默认3 */
  maxNumber?: number;
  style?: React.CSSProperties;
  className?: string;
}

export default ({ buttons, maxNumber = 2, className, style }: HandleButtonsProps) => {
  const filteredButtons = buttons.filter((item) => !item.hidden);
  const { length } = filteredButtons;

  // 2个全部显示，3个及以上只显示第1个和更多，其他都在 dropdown
  const getButtons = (newButtons: ButtonsType[]) => {
    let frontButtons = newButtons;
    let restButtons: ButtonsType[] = [];
    if (newButtons.length > maxNumber) {
      frontButtons = newButtons.slice(0, maxNumber - 1);
      restButtons = newButtons.slice(maxNumber - 1);
    }
    return [frontButtons, restButtons];
  };
  const [frontButtons, restButtons] = useMemo(() => getButtons(filteredButtons), [filteredButtons]);

  return (
    <div className={className} style={style}>
      {frontButtons.map(({ name, key, onClick, path }, index) => {
        const aDom = (
          <a
            style={{ marginRight: 18 }}
            key={key}
            onClick={path ? () => history.push(path) : onClick}
          >
            {name}
          </a>
        );
        if (index !== length - 1) {
          return <React.Fragment key={key}>{aDom}</React.Fragment>;
        }
        return aDom;
      })}
      {restButtons.length > 0 && (
        <Dropdown
          overlay={
            <Menu>
              {restButtons.map((item) => (
                <Menu.Item
                  onClick={item.path ? () => history.push(item.path!) : () => item.onClick?.()}
                >
                  {item.name}
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <a>更多</a>
        </Dropdown>
      )}
    </div>
  );
};
