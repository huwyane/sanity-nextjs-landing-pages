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
                  buildHookId: '634b3e5cf43f4005b5a0fa7e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-jrdpe16e',
                  apiId: '676a2337-396b-466c-97c6-e9975f515959'
                },
                {
                  buildHookId: '634b3e5c01ec2907f8f8407a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kphh47z9',
                  apiId: '54110e1b-8567-4494-9554-6b86511e7b71'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/huwyane/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kphh47z9.netlify.app', category: 'apps' }
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
