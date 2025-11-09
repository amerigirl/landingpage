import * as React from "react";
import type { JSXElement } from "@fluentui/react-components";
import {
  makeStyles,
  Body1,
  Caption1,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardPreview,
  FluentProvider,
  webLightTheme,
} from "@fluentui/react-components";
import { ArrowReplyRegular, ShareRegular } from "@fluentui/react-icons";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";
  return `${ASSET_URL}${asset}`;
};

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "720px",
    maxWidth: "100%",
  },
  headerRoot: {
    display: "flex",
    justifyContent: "center", // horizontal center
    alignItems: "center", // vertical center
    height: "72px", // default CardHeader height can vary, 72px is typical
    padding: 0,
    lineHeight: "normal",
  },
});

export const App = (): JSXElement => {
  const styles = useStyles();

  return (
    <FluentProvider theme={webLightTheme}>
      <Card className={styles.card}>
        <CardHeader
          as="div"
          className={styles.headerRoot}
          image={
            <img
              src={resolveAsset("avatar_elvia.svg")}
              alt="Elvia Atkins avatar picture"
            />
          }
          header={
            <Body1>
              <b>Elvia Atkins</b> mentioned you
            </Body1>
          }
          description={<Caption1>5h ago · About us - Overview</Caption1>}
        />

        <CardPreview
          logo={
            <img src={resolveAsset("docx.png")} alt="Microsoft Word document" />
          }
        >
          <img
            src={resolveAsset("doc_template.png")}
            alt="Preview of a Word document: About Us - Overview"
          />
        </CardPreview>

      
      </Card>
    </FluentProvider>
  );
};
export default App; 