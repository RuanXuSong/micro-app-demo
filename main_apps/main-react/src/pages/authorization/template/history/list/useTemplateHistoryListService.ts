import { useRef } from 'react';
import { message } from 'antd';
import { useRequest } from 'ahooks';
import { ActionType } from '@ant-design/pro-table';
import { initialPagination } from '@/constant';
import { removeEmpty } from '@/utils/json';
import useTemplateAuth from '@/hooks/useTemplateAuth';

export default () => {
  const actionRef = useRef<ActionType>();

  const { reload } = actionRef.current || {};

  const { templateAuthMap } = useTemplateAuth();

  /**
   * 获取模板套餐列表
   * @param params
   */

  const { data: templatePackageList = [] } = useRequest<defs.platform.TemPackageDTO[]>(
    API.platform.template.listAllTemplatePackage.fetch,
  );

  /**
   * 获取普通分页列表
   * @param params
   */
  const fetchList = async (params?: { pageSize?: number; current?: number }) => {
    const { list, page, total } = await API.platform.template.listTemplate.fetch(
      removeEmpty({
        ...params,
        page: params?.current || initialPagination.page,
        pageSize: params?.pageSize || initialPagination.pageSize,
      }),
    );
    return {
      data: list || [],
      page,
      success: true,
      total,
    };
  };

  /** 重试 */
  const { run: handleTemplateRetry, loading } = useRequest(
    API.platform.template.createTemplate.fetch,
    {
      manual: true,
      onSuccess: () => {
        message.success('操作成功');
        reload?.();
      },
    },
  );

  return {
    loading,
    actionRef,
    reload,
    handleTemplateRetry,
    fetchList,
    templatePackageList,
    templateAuthMap,
  };
};
