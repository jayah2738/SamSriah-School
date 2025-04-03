const fs = require("fs");
const path = require("path");

const components = ["Header","Footer","SideBar"];
components.forEach((component) => {
    const compenentPath = path.join(__dirname,"src","components", component);
    if(!fs.existsSync(compenentPath)){
        fs.mkdirSync(compenentPath,{recursive:true});
    }
    const jsxContent = `
    import React from 'react';
    import './${component}.scss';
    
    const ${component} = () => {
        return(
            <div className="${component.toLowerCase()}"><h1>${component} component</h1></div>
        );    
    };
    export default ${component};
    `;

    fs.writeFileSync(path.join(compenentPath, `${component}.jsx`),jsxContent.trim());
    const scssContent = `.${component.toLowerCase()}{
    padding : 20px;
    background-color: #f0f0f0;
    }`;

    fs.writeFileSync(path.join(compenentPath, `${component}.scss`),scssContent.trim());
    console.log(`Created ${component} component with JSx and Scss`)
});