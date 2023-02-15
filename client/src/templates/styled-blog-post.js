import styled from "styled-components";

const StyledBlogPost = styled.div`
.wrapper{
    display: block;
    padding-left: 35px;
    padding-right: 35px;
    
    .header_content{
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 50px;
        .title_content{
            h1{
                font-size: 44px !important;
                font-family: 'Days-One';
            }
            
        }
        .title_image{
            max-height: 400px;
            overflow: hidden;

        }
    }
    .post_content{
        max-width: 768px;
        margin: 0 auto;
        margin-top: 40px;
        font-family: 'Open Sans',sans-serif,Arial;
        font-size: 17px;
    }
    
}

`

export default StyledBlogPost;