export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '618e0af5fb5fd84f266adb3e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-4yz2iznn',
                  apiId: 'c7c7554d-f3f1-4529-a880-f658bad8a6af'
                },
                {
                  buildHookId: '618e0af5dc52bd25a80f8a51',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-5c4mnhom',
                  apiId: '291ebe55-2a96-44d7-9325-752685e65bd1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevinsofyan/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-5c4mnhom.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
