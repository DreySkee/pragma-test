import { injectGlobal } from 'styled-components';

injectGlobal`
  * {
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    font-family: Arial,Helvetica,sans-serif;
    font-weight: 500;
    height: 100%;
  }

  #root {
    height: 100%;
  }

  h2 {
    font-size: 18px;
    line-height: 27px;
    font-weight: 500;
    background: #fbaf34;
    color: #fff;
    padding: 5px 10px;
  }

  h4 {
    background: #5a5a5a;
    color: #fff;
    padding: 5px 10px;   
  }

  .dashboard {
    width: 844px;
    margin: 0 auto;
    padding: 20px;
  }

  .controls {
    margin-bottom: 20px;
    span {
      display: inline-block;
      padding: 5px 10px;
      background: #3f3d3d;
      border-radius: 4px;
      color: #fff;
      margin-right: 5px;
      cursor: pointer;
      box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
    }
  }
  
  .panel {
    border: 1px solid #e0e0e0;
    margin-bottom: 20px;
    box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);
  }

  .order-table {
    width: 806px;
    
    .side {
      display: inline-block;
      vertical-align: top
      width: 402px;

      .rows {
        min-height: 405px;
      }
    }
  }

  .table-header, .order-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

    .cell {
      text-align: center;
      padding: 4px 0;
      border-bottom: 1px solid #ccc;
    }
  }

  .table-header {
    background: #797d7b;
    color: #fff;
  }

  .order-row {
    transition: 5s;

    &.new-event {
      background: green !important;
    }

    &.color-group-1 {
      background: #fff;
    }
    &.color-group-2 {
      background: #E0E0E0;
    }
    &.color-group-3 {
      background: #D0D0D0;
    }
    &.color-group-4 {
      background: #C0C0C0;
    }
    &.color-group-5 {
      background: #B0B0B0;
    }
    &.color-group-6 {
      background: #A0A0A0;
    }
    &.color-group-7 {
      background: #787878;
    }
    &.color-group-8 {
      background: #606060;
    }
    &.color-group-9 {
      background: #484848;
    }
  }
`;