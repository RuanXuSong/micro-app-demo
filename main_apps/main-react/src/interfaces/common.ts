export interface FileDTO {
  /** 文件id */
  fileId: string;

  /** 文件名称 */
  fileName: string;

  /** 文件url */
  fileUrl?: string;
}

export interface PrivilegeResource {
  apiUrl: string;
  description: string;
  icon: string;
  id: number;
  orderValue: number;
  resourceKey: string;
  type: number;
  privilegeList: PrivilegeResource[];
  resourceBusinessValue: string;
  children: PrivilegeResource[];
  isVisible: boolean;
  comment: string;
}
