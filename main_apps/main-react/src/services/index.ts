import { defs as authorizationDefs, authorization } from './authorization';

import { defs as platformDefs, platform } from './platform';

(window as any).defs = {
  authorization: authorizationDefs,
  platform: platformDefs,
};
(window as any).API = {
  authorization,
  platform,
};
