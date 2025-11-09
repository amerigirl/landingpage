import * as React from "react";
import { makeStyles, Card } from "@fluentui/react-components";
import { Database20Filled } from "@fluentui/react-icons";
import './App.css';

const useStyles = makeStyles({

  card: {
    margin: "auto",
    width: "225px",
    height: "250px",
    borderRadius: "15px",
    padding: "2px",
  },
  cardContainer: {
    display: "flex",
    marginLeft: "2rem",
    alignItems: "center",
    justifyContent:"space-between"
  },
  headerRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellowgreen",
    height: "100px",
    borderTopLeftRadius: "15px",
    borderTopRightRadius: "15px",
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
        <Card className={styles.card}>
          <div className={styles.headerRoot}>
            <Database20Filled className={styles.icon} />
          </div>
        </Card>
        <Card className={styles.card}>
          <div className={styles.headerRoot}>
            <Database20Filled className={styles.icon} />
          </div>
        </Card>
      </div>

  );
};

export default App;
