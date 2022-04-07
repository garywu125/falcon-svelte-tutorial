import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
	plugins: [
		svelte({
			/* plugin options */
		}),		
	],
	// 在文件中添加以下内容 :讓vite 配置IP , 讓 dev server 可以使用 ip 存取app
	// 變更 dev server port to desired port number
	server: {
		host: '0.0.0.0',
		port: 5000
	  }	
});