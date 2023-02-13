import React from "react";
import { Link } from "gatsby"
import StyledHistoryItem from './styled_history_item.js'


const HistoryItem = (data) => {   
    
    console.log(data.data.allWpPost.nodes);
    
    
    return (
        <StyledHistoryItem>
            <ul className="timeline">  
                           
                {data.data.allWpPost.nodes.map((post, i) =>                
                
                    <li>                        
                        <div className={i% 2 === 0 ? "direction-l" : "direction-r" }>
                            <div className="flag-wrapper">
                            <a className="flag" href={`/${post.postUrl.postUrl}`}>{post.history.year}</a>                                                                                          
                            </div>
                            <div className="desc">{post.expert.historyExpert}</div>
                        </div>
                    </li>
                )}


                </ul>
               
        </StyledHistoryItem>
    )
}

export default HistoryItem

