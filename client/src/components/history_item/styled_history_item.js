import styled from "styled-components";

const StyledHistoryItem = styled.div`
.timeline {
    position: relative;
    width: 660px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 1em 0;
    list-style-type: none;
  }
  
  .timeline:before {
    position: absolute;
    left: 50%;
    top: 0;
    content: ' ';
    display: block;
    width: 6px;
    height: 100%;
    margin-left: -3px;
    background: rgb(80,80,80);
    background: -moz-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(30,87,153,1)), color-stop(100%,rgba(125,185,232,1)));
    background: -webkit-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: -o-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: -ms-linear-gradient(top, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    background: linear-gradient(to bottom, rgba(80,80,80,0) 0%, rgb(80,80,80) 8%, rgb(80,80,80) 92%, rgba(80,80,80,0) 100%);
    
    z-index: 5;
  }
  
  .timeline li {
    padding: 1em 0;
  }
  
  .timeline li:after {
    content: "";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  
  .direction-l {
    position: relative;
    width: 300px;
    float: left;
    text-align: right;
  }
  
  .direction-r {
    position: relative;
    width: 300px;
    float: right;
  }
  
  .flag-wrapper {
    position: relative;
    display: inline-block;
    
    text-align: center;
  }
  
  .flag {
    position: relative;
    display: inline;
    
    padding: 6px 10px;
    border-radius: 5px;
    
    font-weight: 400;
    font-size: 40px;
    font-family: 'Days-One';
    line-height: 50px;
    text-align: left;
  }
  
  
  
  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: 50%;
    right: -40px;
    content: ' ';
    display: block;
    width: 12px;
    height: 12px;
    margin-top: -10px;
    background: #e9e1d5;
    border-radius: 10px;
    border: 4px solid rgb(0 0 0);
    z-index: 10;
  }
  
  .direction-r .flag:before {
    left: -40px;
  }
  
  
  
  
  
  .time-wrapper {
    display: inline;
    
    line-height: 1em;
    font-size: 0.66666em;
    color: rgb(250,80,80);
    vertical-align: middle;
  }
  
  .direction-l .time-wrapper {
    float: left;
  }
  
  .direction-r .time-wrapper {
    float: right;
  }
  
  .time {
    display: inline-block;
    padding: 4px 6px;
    background: rgb(248,248,248);
  }
  
  .desc {
    margin: 1em 0.75em 0 0;
    
    font-size: 0.77777em;
    font-style: italic;
    line-height: 1.5em;
  }
  
  .direction-r .desc {
    margin: 1em 0 0 0.75em;
  }
  
  /* ================ Timeline Media Queries ================ */
  
  @media screen and (max-width: 660px) {
  
  .timeline {
       width: 100%;
      padding: 4em 0 1em 0;
  }
  
  .timeline li {
      padding: 2em 0;
  }
  
  .direction-l,
  .direction-r {
      float: none;
      width: 100%;
  
      text-align: center;
  }
  
  .flag-wrapper {
      text-align: center;
  }
  
  .flag {
      background: rgb(255,255,255);
      z-index: 15;
  }
  
  .direction-l .flag:before,
  .direction-r .flag:before {
    position: absolute;
    top: -30px;
      left: 50%;
      content: ' ';
      display: block;
      width: 12px;
      height: 12px;
      margin-left: -9px;
      background: #fff;
      border-radius: 10px;
      border: 4px solid rgb(255,80,80);
      z-index: 10;
  }
  
  .direction-l .flag:after,
  .direction-r .flag:after {
      content: "";
      position: absolute;
      left: 50%;
      top: -8px;
      height: 0;
      width: 0;
      margin-left: -8px;
      border: solid transparent;
      border-bottom-color: rgb(255,255,255);
      border-width: 8px;
      pointer-events: none;
  }
  
  .time-wrapper {
      display: block;
      position: relative;
      margin: 4px 0 0 0;
      z-index: 14;
  }
  
  .direction-l .time-wrapper {
      float: none;
  }
  
  .direction-r .time-wrapper {
      float: none;
  }
  
  .desc {
      position: relative;
      margin: 1em 0 0 0;
      padding: 1em;
      background: rgb(245,245,245);
      -webkit-box-shadow: 0 0 1px rgba(0,0,0,0.20);
      -moz-box-shadow: 0 0 1px rgba(0,0,0,0.20);
      box-shadow: 0 0 1px rgba(0,0,0,0.20);
      
    z-index: 15;
  }
  
  .direction-l .desc,
  .direction-r .desc {
      position: relative;
      margin: 1em 1em 0 1em;
      padding: 1em;
      
    z-index: 15;
  }
  
  }
  
  @media screen and (min-width: 400px ?? max-width: 660px) {
  
  .direction-l .desc,
  .direction-r .desc {
      margin: 1em 4em 0 4em;
  }
  
  }
`;

export default StyledHistoryItem;
