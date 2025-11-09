import * as React from "react";
import { makeStyles, Card, CardHeader } from "@fluentui/react-components";
import { Database20Filled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "250px",
    height: "350px",
    color: "pink",
    padding: 0,
    borderRadius: "20px",
  },
  cardContainer: {
    display: "flex",
    backgroundColor: "white",
    marginLeft: "2rem",
    padding: "30px",
  },
  headerRoot: {
    display: "flex",
    backgroundColor: "yellowgreen",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
 
});

const App = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
        <CardHeader as="div" className={styles.headerRoot}>
        </CardHeader>
        <div className={styles.iconWrapper}>
            <Database20Filled />
          </div>
      </Card>
    </div>
  );
};

export default App;
