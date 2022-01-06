import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // site config
    lang: 'ru-RU',
    title: 'Wiki школы №146 г.Перми',
    description: 'Главный информационный репозиторий.',
    base: '/school-docs/',
    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        contributors: true,
        repo: 'vitasha10/school-docs',
        logo: 'http://s146.ru/sites/default/files/acquia_marina_logo5.png',
        sidebarDepth: 5,
        sidebar: [
            // SidebarItem
            {
                text: 'Главная',
                link: '/',
                collapsible: true,
                /*children: [
                    // SidebarItem
                    {
                        text: 'github',
                        link: 'https://github.com',
                        children: [],
                    },
                    // string - page file path
                    '/foo/bar.md',
                ],*/
            },
            // string - page file path
            //'/bar/README.md',
            {
                text: 'Неофициальный сайт',
                link: '/unofficial_s146',
                collapsible: true,
            },
            {
                text: 'Научно-практические конференции',
                link: '/npk',
                collapsible: true,
            },
            {
                text: 'Хакатоны',
                link: '/hackathons',
                collapsible: true,
            },
            {
                text: 'Как внести изменения?',
                link: '/how_to_change',
                collapsible: true,
            },
            {
                text: 'Ресурсы и всё всё всё что связано со школой',
                link: '/resources',
                collapsible: true,
            }
        ],
    },
})