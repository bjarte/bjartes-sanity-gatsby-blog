export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60b1f9309956e21c0a857fb0",
                  title: "Sanity Studio",
                  name: "bjartes-sanity-gatsby-blog-studio",
                  apiId: "e825c8b3-89bc-44ac-94bd-5973626b41a4",
                },
                {
                  buildHookId: "60b1f9317c604409f29a5668",
                  title: "Blog Website",
                  name: "bjartes-sanity-gatsby-blog",
                  apiId: "dd827032-3e29-41ce-b13e-cfe355de7f6b",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/bjarte/bjartes-sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://bjartes-sanity-gatsby-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
