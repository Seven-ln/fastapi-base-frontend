// mock-menu-data.js
export const getMenuData = () => {
    return new Promise((resolve) => {
        // 模拟异步请求延迟
        setTimeout(() => {
            resolve([
                {
                    name: 'home',
                    title: '首页',
                    icon: 'icon-home', // 假设有一个名为icon-home的组件
                    path: '/',
                    children: []
                },
                {
                    name: 'admin',
                    title: '基础数据',
                    icon: 'icon-info-circle', // 假设有一个名为icon-info-circle的组件
                    path: '/admin',
                    children: [
                        {
                            name: 'Despatchdata',
                            title: '发运数据',
                            icon: 'icon-users', // 假设有一个名为icon-users的组件
                            path: '/admin/despatchdata'
                        },
                        {
                            name: 'Faultdata',
                            title: '故障数据',
                            icon: 'icon-envelope', // 假设有一个名为icon-envelope的组件
                            path: '/admin/faultdata'
                        }
                    ]
                },
                {
                    name: 'services',
                    title: '服务',
                    icon: 'icon-cog', // 假设有一个名为icon-cog的组件
                    path: '/services',
                    children: [
                        {
                            name: 'service1',
                            title: '服务一',
                            path: '/services/service1'
                        },
                        {
                            name: 'service2',
                            title: '服务二',
                            path: '/services/service2'
                        }
                    ]
                }
            ]);
        }, 500); // 模拟网络延迟
    });
};