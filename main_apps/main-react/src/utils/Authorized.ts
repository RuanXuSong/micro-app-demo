import RenderAuthorize from '@/components/Authorized';
/* eslint-disable eslint-comments/disable-enable-pair */

/* eslint-disable import/no-mutable-exports */

let Authorized = RenderAuthorize({}); // Reload the rights component

const reloadAuthorized = () => {
  Authorized = RenderAuthorize({});
};
/** Hard code block need it。 */

(window as any).reloadAuthorized = reloadAuthorized;
export { reloadAuthorized };
export default Authorized;
