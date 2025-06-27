import React from "react";
import {
  Button,
  Dropdown,
  FluentProvider,
  webDarkTheme,
  webLightTheme,
  Option,
  Label,
  tokens,
  makeStyles,
  mergeClasses,
} from "@fluentui/react-components";7
import type { OptionOnSelectData, SelectionEvents, Theme } from "@fluentui/react-components";
import { darkTheme as PPTDarkTheme, lightTheme as PPTLightTheme } from "../../themes/powerpointTheme";
import { MyCustomToolbar } from "../myCustomToolbar";


const useStyles = makeStyles({
  root: { display: 'flex', flexDirection: 'column', padding: tokens.spacingHorizontalM }, // we use the tokens for consistent spacing https://react.fluentui.dev/?path=/docs/theme-spacing--docs

});

export const TheRootOfAllMyStuff = () => {
    const [theme, setTheme] = React.useState<Theme>(PPTLightTheme);
    const classes = useStyles();

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

// See theme information here: https://react.fluentui.dev/?path=/docs/concepts-developer-theming--docs
// Never use theme CSS variables directly! The CSS variables implementation of the theme is internal to the library. 
// We might eventually decide to change the variable names, hash them or even use direct values instead of some variables. 
// Always use the tokens to access the theme.
  return (
    <FluentProvider theme={theme}>
      <div className={mergeClasses('ui-component', classes.root)}>
        <h1>The Root Of All My Stuff</h1>

        <Label htmlFor="themeSelector" required={true}>Select a theme:</Label>
        <Dropdown id="themeSelector" onOptionSelect={handleThemeSelection} defaultValue={"pptLightTheme"} >   
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
