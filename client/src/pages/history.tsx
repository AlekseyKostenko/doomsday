import React from "react"
import { Layout } from '../components';
import { Box } from '@primer/react';
import { Link, graphql } from "gatsby";
import Seo from "../components/seo"
import HistoryItem from '../components/history_item'


const History = ({ data }) => { 
  
  console.log(data.allWpPost.edges[0].node.slug);
  
    return (
        <Layout>
            <Seo title='123' description='123' />
            <Box p={20}>
                <HistoryItem
                  data={data}  
                />                 

            </Box>
        </Layout>
    )
};

export default History;

export const pageQuery = graphql`
query {
  allWpPost(sort: { fields: [date] }) {
    edges {
      node {
        title
        excerpt
        slug
      }
    }
  }
}
`

