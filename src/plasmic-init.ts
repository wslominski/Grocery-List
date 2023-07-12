import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { HelloWorld } from "./components/HelloWorld";
import  {DishForm}  from "./components/DishForm";
import { RegisterDishForm } from "./components/RegisterDishForm";
import {MyTextInput} from "./components/MyTextInput";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
        id: "5NqxLwkJf8dtHXPoVMH2rF",  // ID of a project you are using
        token: "vgMW9NFOkfBRbPRfa2X4KQqkVjcXkMhinPO8wQskRg91VnAcadLr5KE7TGHVJ0qUx95ynt7buUjWWDCL9a9fw"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerComponent(HelloWorld, {
    name: 'HelloWorld',
    props: {
      verbose: 'boolean',
      children: 'slot'
    }
});

PLASMIC.registerComponent(DishForm, {
    name: 'DishForm',
    displayName: 'DishForm',
    importPath:'./components/DishForm.tsx',
    props: {
      children: {
        type: 'slot',
        hidePlaceholder: true,
    },
      defaultValues: {
        type: 'object',
        defaultValue: {}
      }
    }
});

PLASMIC.registerComponent(RegisterDishForm, {
    name: 'RegisterDishForm',
    displayName: 'Register Dish Form',
    importPath: './components/RegisterDishForm.tsx',
    props:{
        children: {
            type: 'slot',
            hidePlaceholder: true,
        },
        name: {
            type: 'string',
            defaultValue: 'unnamed',  
        }
    },
})

PLASMIC.registerComponent(MyTextInput, {
    name: 'MyTextInput',
    displayName: 'My Text Input CC',
    importPath: './components/MyTextInput.tsx',
    props:{
        value: {
            type: 'string',
            defaultValue: "",
        },
        // children: {
        //     type: 'slot',
        //     hidePlaceholder: true,
        // },
        // name: {
        //     type: 'string',
        //     defaultValue: 'unnamed',  
        // }
    },
})

