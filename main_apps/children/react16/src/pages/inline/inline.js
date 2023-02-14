/** @jsxRuntime classic */
/** @jsx jsxCustomEvent */
import { useState } from "react";
import { Button, Spin } from "antd";
import config from "../../config";
import "./inline.less";

function Vue2() {
  const [data] = useState({ from: "来自基座的初始化数据" });
  const [showLoading, hideLoading] = useState(true);
  return (
    <div>
      <h3>子应用多层嵌套</h3>
      <div className="btn-con">
        <Button type="primary" style={{ width: "120px" }}>
          发送数据1
        </Button>
      </div>
      {showLoading && <Spin />}
      <micro-app-sub
        name="inline"
        url={`${config.vue2}micro-app/vue2/`}
        data={data}
        // onBeforemount={() => hideLoading(false)}
        onMounted={() => hideLoading(false)}
        // shadowDOM
        // destory
        // inline
        // disableScopecss
        // disableSandbox
      />
    </div>
  );
}

export default Vue2;
