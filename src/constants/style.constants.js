export const cssContent = `
        html, body, #root, #root>div {
    /* overflow: hidden */
}

#root .ql-editor {
    line-height: 2;
    font-size: 15px;
    padding: 50px 75px;
    font-family: Inter, 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
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
    transform: translateY(-50%);
}

.customWidget {
    position: relative !important;
    /* border: 1px solid black; */
    animation: slideInFromRight 0.5s ease-out;
    min-width: 400px !important;
    color: #fff;
    background: #fff !important;
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
    color: #006ce9;
    text-decoration: underline;
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
}

.right_tools{
    flex-grow: 1;
    padding: 4px;
    border: 1px solid #ccc;
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
}`;
