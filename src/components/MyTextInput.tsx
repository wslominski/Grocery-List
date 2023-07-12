import * as React from "react";
import {
  PlasmicMyTextInput,
  DefaultMyTextInputProps
} from "./plasmic/app_starter/PlasmicMyTextInput";

export interface MyTextInputProps extends DefaultMyTextInputProps {
  value: any;
  onChange: any;
}

export function MyTextInput({value, onChange, ...props}: MyTextInputProps) {
  const [inputValue, setInputValue] = React.useState("")

  React.useEffect(() => {
    setInputValue(value)
  },[value])

  React.useEffect(() => {
    onChange && onChange(inputValue);
  },[inputValue]);
  
  return (
    <PlasmicMyTextInput 
      {...props} 
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
    />)
  ;
}
