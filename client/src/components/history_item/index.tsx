import React from "react";
import { Link } from "gatsby"
import StyledHistoryItem from './styled_history_item.js'
import {graphql } from "gatsby"
import {usePostQuery} from '../../hooks/usePostQuery.js'

const HistoryItem = () => {  
    console.log(usePostQuery);
    
    
    return (
        <StyledHistoryItem>
            <ul className="timeline">                    
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">2023</span>                                
                            </div>
                            <div className="desc">My current employment. Way better than the position before!</div>
                        </div>
                    </li>
                    
                    <li>
                        <div className="direction-l">
                            <div className="flag-wrapper">
                                <span className="flag">2022</span>                                
                            </div>
                            <div className="desc">My first employer. All the stuff I've learned and projects I've been working on.</div>
                        </div>
                    </li>
                    
                    <li>
                        <div className="direction-r">
                            <div className="flag-wrapper">
                                <span className="flag">2021</span>                                
                            </div>
                            <div className="desc">A description of all the lectures and courses I have taken and my final degree?</div>
                        </div>
                    </li>

                </ul>
               
        </StyledHistoryItem>
    )
}

export default HistoryItem

export const pageQuery = graphql`
query MyQuery {
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
`