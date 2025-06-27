import React from "react";
import {
  Button,
  Dropdown,
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  Option
} from "@fluentui/react-components";
import type { OptionOnSelectData, SelectionEvents, Theme } from "@fluentui/react-components";
import { darkTheme as PPTDarkTheme, lightTheme as PPTLightTheme } from "../../themes/powerpointTheme";
import { MyCustomToolbar } from "../myCustomToolbar";

export const TheRootOfAllMyStuff = () => {
    const [theme, setTheme] = React.useState<Theme>(PPTLightTheme);

    const handleThemeSelection = (_event: SelectionEvents, data: OptionOnSelectData) => {
        const selectedThemeName = data.optionValue;

        // Check if the selected theme name is valid
        if (!selectedThemeName) {
            return;
        }

        switch (selectedThemeName) {
            case "webDarkTheme":
                setTheme(webDarkTheme);
                break;
            case "webLightTheme":
                setTheme(webLightTheme);
                break;
            case "pptDarkTheme":
                setTheme(PPTDarkTheme);
                break;
            case "pptLightTheme":
                setTheme(PPTLightTheme);
                break;
            // Add more cases for other themes as needed
            default:
                setTheme(webDarkTheme);
        }
    };

  return (
    <FluentProvider theme={theme}>
      <div>
        <h1>The Root Of All My Stuff</h1>
        <Dropdown onOptionSelect={handleThemeSelection} defaultValue={"pptLightTheme"} >   
            <Option key="webLightTheme" value="webLightTheme">
                Web Light Theme
            </Option>
            <Option key="webDarkTheme" value="webDarkTheme">
                Web Dark Theme
            </Option>
            <Option key="pptLightTheme" value="pptLightTheme">
                PowerPoint Light Theme
            </Option>
            <Option key="pptDarkTheme" value="pptDarkTheme">
                PowerPoint Dark Theme
            </Option>
            {/* Add more options for other themes as needed */}
        </Dropdown>

        <MyCustomToolbar />
        
        <p>theRootOfAllMyStuff.tsx is where I start off putting all my stuff.</p>
        <p>I can also edit the fluent theme here</p>
        <p>Happy coding!</p>
        <Button appearance="primary">Click Me!</Button>
        <p>
          This button is just an example of how to use Fluent UI components.
        </p>
      </div>
    </FluentProvider>
  );
};
