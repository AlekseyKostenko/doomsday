import React from "react";
import { Link } from "gatsby"
import StyledHistoryItem from './styled_history_item.js'


const HistoryItem = (data) => {   
    
    console.log(data);
    
    
    return (
        <StyledHistoryItem>
            <ul className="timeline">  
                           
                {data.data.allWpPost.edges.map((post, i) =>                
                
                    <li>
                        
                        <div className={i% 2 === 0 ? "direction-l" : "direction-r" }>
                            <div className="flag-wrapper">
                            <a className="flag" href={`/${post.node.slug}`}>{post.node.title}</a>                                                                                          
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

