/*
  https://github.com/gatsbyjs/gatsby/issues/19674

  Please note this will be removed once the above
  issue is resolved and gatsby-plugin-schema-snapshot
  can be handle the full extent of the schema generation.
*/

// This is code to address the fact that if you **could** have an embedded link (aka union)
// from a Rich Text field on one Content Type to one or more Content Types in your Contentful space,
// Gatsby's schema inference will fail UNLESS you have at least one embed for each Content Type inside
// an instance of the Rich Text field. The code below lets Gatsby schema inferer know that these "unions"
// COULD happen even if there is not one right now

module.exports = ({ actions }) => {
  const typeDefs = `
    type contentfulPostBodyTextNode implements Node
    @childOf(types: ["ContentfulPost"]) {
      id: ID!
    }
    type contentfulPageMetaDescriptionTextNode implements Node
    @childOf(types: ["ContentfulPage"]) {
      id: ID!
    }
    type contentfulPageBodyTextNode implements Node
    @childOf(types: ["ContentfulPage"]) {
      id: ID!
    }
    type contentfulPostMetaDescriptionTextNode implements Node
    @childOf(types: ["ContentfulPost"]) {
      id: ID!
    }
    type MarkdownRemark implements Node
    @childOf(types: [
      "contentfulPostBodyTextNode",
      "contentfulPostMetaDescriptionTextNode",
      "contentfulPageBodyTextNode",
      "contentfulPageMetaDescriptionTextNode"
    ]) {
      id: ID!
    }

         type ContentfulProgramDescription {
            references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
        }
        
         type ContentfulProgramCareerDetails {
            references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
        }

        type ContentfulProgramSkillsAndJobs {
            references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
        }
  `
  actions.createTypes(typeDefs)
}
