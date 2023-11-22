let Host = ''
const envVersion = import.meta.env.MODE
const app_id = '11';
const app_secret = 'c34a225e0420e1ae245956c49a55dcfe'
switch (envVersion) {
    case 'dev':
        Host = ''
        break
    case 'test':
        Host = ''
        break
    case 'prod':
        Host = '//api.weiaon.cn'
        break
    default:
        Host = '//api.weiaon.cn'
        break
}
export {Host, app_id, app_secret}