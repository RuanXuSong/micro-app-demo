/*
 * @文件描述: 模板套餐
 * @公司: thundersdata
 * @作者: 阮旭松
 * @Date: 2022-07-19 15:52:41
 * @LastEditors: 仇艳
 * @LastEditTime: 2022-09-23 15:10:19
 */
import React from 'react';
import { Tag, Image, Button, Spin } from 'antd';
import ProForm, { ProFormSelect, ProFormText } from '@ant-design/pro-form';
import { TEMPLATE_STATUS_COLOR_MAP, TEMPLATE_STATUS_MAP } from '@/constant';
import styles from './index.module.less';
import templateImage from '../assets/template.png';
import useTemplatePackageListService from './useTemplatePackageListService';
import CreateModal from '../components/CreateModal';
import PreviewModal from '../components/PreviewModal';
import { QuestionCircleOutlined } from '@ant-design/icons';

const list = [
  {
    id: 1,
    image: templateImage,
    title: '企业敏捷开发模板',
    status: 1,
    description:
      '企业敏捷应用模板提供了专业便捷的业务应用构企业敏捷应用模板提供了专业便捷的业务应用构',
    systemList: [
      {
        name: '敏捷大屏',
        status: 0,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '敏捷应用',
        status: 1,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数智平台',
        status: 2,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数融平台',
        status: 1,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
    ],
    tags: ['数融', '数据治理', '零代码'],
  },
  {
    id: 2,
    image: templateImage,
    title: '企业敏捷开发模板',
    status: 0,
    description:
      '企业敏捷应用模板提供了专业便捷的业务应用构企业敏捷应用模板提供了专业便捷的业务应用构',
    systemList: [
      {
        name: '敏捷大屏',
        status: 0,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '敏捷应用',
        status: 1,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数智平台',
        status: 2,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数融平台',
        status: 1,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
    ],
    tags: ['数融', '数据治理', '零代码'],
  },
  {
    id: 3,
    image: templateImage,
    title: '企业敏捷开发模板',
    status: 0,
    description:
      '企业敏捷应用模板提供了专业便捷的业务应用构企业敏捷应用模板提供了专业便捷的业务应用构',
    systemList: [
      {
        name: '敏捷大屏',
        status: 0,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '敏捷应用',
        status: 1,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数智平台',
        status: 2,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数融平台',
        status: 1,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
    ],
    tags: ['数融', '数据治理', '零代码'],
  },
  {
    id: 4,
    image: templateImage,
    title: '企业敏捷开发模板',
    status: 1,
    description:
      '企业敏捷应用模板提供了专业便捷的业务应用构企业敏捷应用模板提供了专业便捷的业务应用构',
    systemList: [
      {
        name: '敏捷大屏',
        status: 0,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '敏捷应用',
        status: 1,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数智平台',
        status: 2,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数融平台',
        status: 1,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
    ],
    tags: ['数融', '数据治理', '零代码'],
  },
  {
    id: 5,
    image: templateImage,
    title: '企业敏捷开发模板',
    status: 0,
    description:
      '企业敏捷应用模板提供了专业便捷的业务应用构企业敏捷应用模板提供了专业便捷的业务应用构',
    systemList: [
      {
        name: '敏捷大屏',
        status: 0,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '敏捷应用',
        status: 1,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数智平台',
        status: 2,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数融平台',
        status: 1,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
    ],
    tags: ['数融', '数据治理', '零代码'],
  },
  {
    id: 6,
    image: templateImage,
    title: '企业敏捷开发模板',
    status: 0,
    description:
      '企业敏捷应用模板提供了专业便捷的业务应用构企业敏捷应用模板提供了专业便捷的业务应用构',
    systemList: [
      {
        name: '敏捷大屏',
        status: 0,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '敏捷应用',
        status: 1,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数智平台',
        status: 2,
        tags: ['数融', '数据治理', '零代码'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
      {
        name: '数融平台',
        status: 1,
        tags: ['数融', '数据治理'],
        description: '企业敏捷应用模板提供了专业便捷的业务应用构建',
      },
    ],
    tags: ['数融', '数据治理', '零代码'],
  },
];

export default () => {
  const {
    loading,
    selectedItem,
    reload,
    createModalConfig,
    previewModalConfig,
    handleModalHide,
    setSelected,
    handleCreateTemplate,
    handlePreviewTemplate,
  } = useTemplatePackageListService();

  return (
    <>
      <div
        style={{
          margin: 24,
          backgroundColor: 'white',
        }}
      >
        <ProForm
          className={styles.proForm}
          onFinish={async (values) => {
            console.log(values.name);
          }}
          layout="inline"
          submitter={{
            render: () => (
              <div className={styles.fromBtnList}>
                <Button style={{ marginRight: 10 }}>重置</Button>
                <Button type="primary">查询</Button>
              </div>
            ),
          }}
        >
          <ProFormText name="creater" label="关键字" width="md" />
          <ProFormSelect name="sex" label="子系统" showSearch valueEnum={{}} width="md" />
          <ProFormSelect
            name="sex"
            label="状态"
            showSearch
            valueEnum={TEMPLATE_STATUS_MAP}
            width="md"
          />
        </ProForm>
      </div>
      <Spin spinning={loading}>
        <div className={styles.content}>
          <div className={styles.title}>模板套餐</div>
          <div className={styles.item}>
            {list?.map((item, index) => (
              <div
                className={styles.card}
                key={index}
                tabIndex={index}
                onMouseMove={() => setSelected(item.id)}
              >
                <div className={styles.imageDiv}>
                  <Image
                    className={styles.image}
                    preview={false}
                    src={item.image}
                    key={index}
                    style={
                      selectedItem === item.id
                        ? { opacity: '0.19', filter: 'alpha(opacity=19)' }
                        : {}
                    }
                  />

                  {selectedItem === item.id && (
                    <div>
                      <div className={styles.guide}>
                        <QuestionCircleOutlined />
                        模板指南
                      </div>

                      <div className={styles.optBtn}>
                        <Button
                          type="primary"
                          style={{ marginRight: 10 }}
                          ghost={item.status === TEMPLATE_STATUS_MAP.未创建}
                          onClick={() => handlePreviewTemplate(item)}
                        >
                          预览
                        </Button>
                        {item.status === TEMPLATE_STATUS_MAP.未创建 && (
                          <Button type="primary" onClick={() => handleCreateTemplate(item)}>
                            创建
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className={styles.cardHeader}>
                  <div className={styles.cardTitle}>{item.title}</div>
                  <div
                    className={styles.status}
                    style={{ color: TEMPLATE_STATUS_COLOR_MAP[item.status] }}
                  >
                    {TEMPLATE_STATUS_MAP[item.status]}
                  </div>
                </div>
                <div className={styles.desc}>{item.description}</div>
                <div className={styles.systemTag}>
                  {item?.systemList?.map((term: any) => (
                    <Tag color="#33457A" key={term.name}>
                      {term.name}
                    </Tag>
                  ))}
                </div>
                <div>
                  {item?.tags?.map((term) => (
                    <Tag className={styles.featureTag} key={term}>
                      {term}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <CreateModal
          visible={createModalConfig.visible}
          data={createModalConfig.data}
          toggleVisible={() => handleModalHide('create')}
          reload={reload}
        />
        <PreviewModal
          visible={previewModalConfig.visible}
          data={previewModalConfig.data}
          toggleVisible={() => handleModalHide('preview')}
          reload={reload}
        />
      </Spin>
    </>
  );
};
