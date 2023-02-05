import { useStaticQuery, graphql } from "gatsby";

export const usePostQuery = () => {

    const data = useStaticQuery(graphql`
    query PostQuery {
        allWpPost {
          edges {
            node {
              title
              uri
              excerpt
            }
          }
        }
      }
    `)
    return data
}
