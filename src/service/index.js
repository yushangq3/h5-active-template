import http from './http';
import { app_id, app_secret } from '@/config/env';
export function getReportInfo(params) {
    return new Promise((resolve) => {
        http.post(`/api/open/get_report_info`, {...params, app_id, app_secret})
            .then(res => {
                if(res.data.code=== 200) {
                    resolve(res.data);
                }
            });
    });
}