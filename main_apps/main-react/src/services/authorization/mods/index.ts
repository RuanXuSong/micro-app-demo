import * as authResource from './authResource';
import * as authResourceRole from './authResourceRole';
import * as client from './client';
import * as data from './data';
import * as dataRole from './dataRole';
import * as deploymentAuthz from './deploymentAuthz';
import * as healthCheck from './healthCheck';
import * as resource from './resource';
import * as resourceRole from './resourceRole';
import * as role from './role';

export const authorization = {
  authResource,
  authResourceRole,
  client,
  data,
  dataRole,
  deploymentAuthz,
  healthCheck,
  resource,
  resourceRole,
  role,
};
