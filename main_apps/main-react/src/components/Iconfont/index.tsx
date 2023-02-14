import * as React from 'react';

interface IconfontProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}
/** 自定义图标 */
const Iconfont: React.SFC<IconfontProps> = (props: IconfontProps) => {
  return <i className={`iconfont ${props.name || ''} ${props.className}`} style={props.style} />;
};

export default Iconfont;
