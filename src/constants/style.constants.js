export const cssContent = `
        html, body, #root, #root>div {
    /* overflow: hidden */
}

.outer-body {
    line-height: 2;
    font-size: 15px;
    padding: 50px 75px;
    font-family: Inter, 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
}

#root .ql-editor {
    line-height: 2;
    font-size: 15px;
    padding: 50px 75px;
    background-color: white;
    font-family: Inter, 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
}

#root .ql-toolbar {
    padding-top: 14px;
    padding-bottom: 14px;
    border: #dcdcdc 1px solid;
    background-color: white;
    /*border-top-left-radius: 16px !important;
    border-top-right-radius: 16px !important;*/
}

#root .ql-formats {
    border: #dcdcdc 1px solid;
    border-radius: 6px;
    padding: 6px;
}

#root .ql-container {
    border: none;
}

.container-editor {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 140px);
    overflow: hidden;
    border-left: 1px solid #dcdcdc !important;
    border-right: 1px solid #dcdcdc !important;
    border-bottom: 1px solid #dcdcdc !important;
    /*border-bottom-left-radius: 16px !important;
    border-bottom-right-radius: 16px !important;*/
}

.content-editor {
    overflow-y: auto;
    /*max-height: 100%;*/
    height: 100%;
    width: 100%;
}

.container{
    display: grid;
}

.full-height-div {
    height: 100vh;
}


/* Define the animation */
@keyframes slideInFromRight {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}

/* Define the animation */
@keyframes slideInFromLeft {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0);
    }
}

.customWidget .ant-layout-sider-trigger {
    visibility: hidden;
    transform: translateY(-50%);
}

.customWidget {
    position: relative !important;
    /* border: 1px solid black; */
    animation: slideInFromRight 0.5s ease-out;
    min-width: 400px !important;
    color: #fff;
    background: #fff !important;
    /*border-radius: 16px !important;*/
    border-right: #dcdcdc 1px solid;
    border-top: #dcdcdc 1px solid;
    border-bottom: #dcdcdc 1px solid;
}

.ant-layout-sider-collapsed.customWidget
{

    animation: slideInFromLeft 1.5s ease-out forwards;
    animation-fill-mode: forwards;
    display: none;
}

/* .ant-layout-sider-trigger{
  position: absolute !important;
  left: 0;
  top: 50% !important;
  width: 50% !important;
  height: 50% !important;
} */

/* .child-row {
  display: flex;
  flex-direction: row;
} */




.tooltip {
    position: relative;
    /* display: inline-table; */
    /* border-bottom: 1px dotted black; */
    /* Add cursor pointer to indicate hoverability */
    cursor: pointer;
    white-space: nowrap;
    color: #E35C39 !important;
    font-weight: 700 !important;
    border: #E35C39 1px solid;
    padding: 2px !important;
    border-radius: 6px !important;
    /*z-index: 1000 !important;*/
    text-decoration: none;
    /*text-decoration: underline;*/
}
.tooltip .tooltiptext {
    visibility: hidden;
    width: 200px;
    background-color: white;
    color: #000000;
    text-align: center;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -100px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    /* Fade-in animation */
    opacity: 0;
    transition: opacity 0.3s;
}

.tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
}

.tooltip .tooltiptext img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 10px;
}

.tooltip .tooltiptext p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
    white-space: normal;
}



.tooltip .tooltiptext::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
}


.site-layout .ant-layout-content{
    display: block !important;
}

.custom_tool_div{
    display: flex;
    align-items: center;
    border: none;
}

.right_tools{
    flex-grow: 1;
    padding: 4px;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
}

.ql-align-center {
    text-align: center;
}

.ql-image {
    text-align: center;
}

h1 {
    font-size: 24px;
    font-weight: bold;
}

h2 {
    font-size: 22px;
    font-weight: bold;
}

img {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

a {
    color: #006ce9;
    text-decoration: underline;
    cursor: pointer;
}

ul {
    display: block;
    list-style-type: disc;
    margin: 1em 0 1em;
    padding-left: 40px;
}

ol {
    display: block;
    list-style-type: decimal;
    margin: 1em 0;
    padding-left: 40px;
}

.product-widget-container {
    height: calc(100vh - 140px);
    overflow-y: scroll;
}

.product-widget-parent-container {
    height: calc(100vh - 300px);
}

.delete-tooltip .delete-tooltiptext::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background-color: #ffffff;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
}

.delete-site-layout .delete-ant-layout-content{
    display: block !important;
}

.delete-custom_tool_div{
    display: flex;
    align-items: center;
    border: none;
}

.delete-right_tools{
    flex-grow: 1;
    padding: 4px;
    border: 1px solid #dcdcdc;
    box-sizing: border-box;
}

.product-left {
    padding: 10px;
}

.product-title-left {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.product-widget {
    margin-bottom: 5px;
    padding-bottom: 5px;
    text-align: left;
}

.product-price-left {
    font-size: 14px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    text-align: left;
}

.product-button-left {
    margin-top: 5px;
    padding: 8px 16px;
    background-color: #000000;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    text-align: center
}

.delete-product-widget {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.delete-product-widget:hover {
    font-size: 14px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    text-align: left;
}

.product-center {
    align-items: center;
    padding: 10px;
}

.product-image {
    object-fit: cover;
    margin-right: 10px;
}

.product-title-center {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.product-price-center {
    font-size: 14px;
    margin-bottom: 5px;
    padding-bottom: 5px;
}

.product-button-center {
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #000000;;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    text-align: center;
}

.delete-widget {
    font-size: 14px;
    margin-bottom: 5px;
    padding-bottom: 5px;
}

.flex-icons {
      display: flex;
      justify-content: center;
}

.icon-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid #000;
      margin-right: 10px;
}

.icon {
      width: 24px;
      height: 24px;
      fill: #000;
}
`;
