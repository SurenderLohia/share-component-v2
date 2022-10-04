var u=Object.defineProperty;var r=(o,n)=>u(o,"name",{value:n,configurable:!0});import{j as a}from"./jsx-runtime.4a5ff171.js";import"./iframe.aa41e39c.js";const t=r(({primary:o=!1,size:n="medium",backgroundColor:l,label:s,...i})=>{const c=o?"storybook-button--primary":"storybook-button--secondary";return a("button",{type:"button",className:["storybook-button",`storybook-button--${n}`,c].join(" "),style:{backgroundColor:l},...i,children:s})},"Button");try{t.displayName="Button",t.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/stories/Button.tsx#Button"]={docgenInfo:t.__docgenInfo,name:"Button",path:"src/stories/Button.tsx#Button"})}catch{}const f={parameters:{storySource:{source:`import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
`,locationsMap:{primary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},secondary:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},large:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}},small:{startLoc:{col:48,line:17},endLoc:{col:78,line:17},startBody:{col:48,line:17},endBody:{col:78,line:17}}}}},title:"Example/Button",component:t,argTypes:{backgroundColor:{control:"color"}}},e=r(o=>a(t,{...o}),"Template"),d=e.bind({});d.args={primary:!0,label:"Button"};const p=e.bind({});p.args={label:"Button"};const m=e.bind({});m.args={size:"large",label:"Button"};const y=e.bind({});y.args={size:"small",label:"Button"};const S=["Primary","Secondary","Large","Small"];export{m as Large,d as Primary,p as Secondary,y as Small,S as __namedExportsOrder,f as default};
//# sourceMappingURL=Button.stories.e2b5d628.js.map
