import * as React from "react";
import { makeStyles, Card } from "@fluentui/react-components";
import { Database20Filled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "225px",
    height: "250px",
    color: "blue",
    padding: 0,
  },
  cardContainer: {
    display: "flex",
    backgroundColor: "white",
    marginLeft: "2rem",
    padding: "10px",
  },
  headerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellowgreen",
    height: "100px",
  },
  icon: {
    fontSize: "32px",
    color: "red",
  },
});

const App = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <div className={styles.headerRoot}>
          <Database20Filled className={styles.icon} />
        </div>
      </Card>
    </div>
  );
};

export default App;
