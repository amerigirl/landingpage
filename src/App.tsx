import * as React from "react";
import {
  makeStyles,
  Body1,
  Caption1,
  Card,
  CardHeader,
  CardPreview,
} from "@fluentui/react-components";

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
  cardContainer: {
    padding: "20px",
    backgroundColor: "var(--neutral-foreground-rest)",
    height: "100vh",
  },
});
const App = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <CardHeader
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
          
        >
          <img
            src={resolveAsset("doc_template.png")}
            alt="Preview of a Word document: About Us - Overview"
          />
        </CardPreview>
      </Card>
    </div>
  );
};

export default App;
