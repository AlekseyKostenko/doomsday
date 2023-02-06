import React from "react";
import { Link } from "gatsby"
import StyledHistoryItem from './styled_history_item.js'
import {graphql } from "gatsby"
import {usePostQuery} from '../../hooks/usePostQuery.js'

const HistoryItem = (data) => {  
    
    console.log(data.data.allWpPost.edges);
    
  
    
    return (
        <StyledHistoryItem>
            <ul className="timeline">  
                           
                {data.data.allWpPost.edges.map((post, i) =>                
                
                    <li>
                        
                        <div className={i% 2 === 0 ? "direction-l" : "direction-r" }>
                            <div className="flag-wrapper">
                                <span className="flag">{post.node.title}</span>                                
                            </div>
                            <div className="desc">{post.node.excerpt}</div>
                        </div>
                    </li>
                )}


                </ul>
               
        </StyledHistoryItem>
    )
}

export default HistoryItem

