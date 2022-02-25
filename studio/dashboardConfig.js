export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62190f96f166f628379fbb06',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5jk4v45e',
                  apiId: '1d2ba7f4-240e-4215-bfe5-f92f3433bd89'
                },
                {
                  buildHookId: '62190f97caeed62db6e02920',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-z8sf2ymv',
                  apiId: '40a92445-0124-415d-85db-e55f321161a0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/345cayworks/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-z8sf2ymv.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
