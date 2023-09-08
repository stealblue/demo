import { Application } from 'express'; 
import {createProxyMiddleware} from 'http-proxy-middleware';

export default function configureProxy(app: Application) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080', // 서버 URL 또는 localhost:설정한포트번호
      changeOrigin: true,
    })
  );
}