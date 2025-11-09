import * as React from "react";
import {
  makeStyles,
  Card,
  CardPreview,
} from "@fluentui/react-components";



const useStyles = makeStyles({
  card: {
    margin: "auto",
    width: "250px",
    height: "350px",
 
  },
  cardContainer: {
    display: "flex",
    backgroundColor: "white",
    marginLeft: "2rem",
    padding: "30px", 
  },
 
});

const App = (): JSX.Element => {
  const styles = useStyles();

  return (
    <div className={styles.cardContainer}>
      <Card className={styles.card}>
 
        <CardPreview></CardPreview>
        <CardHeader></CardHeader>
  
      </Card>
    </div>
  );
};

export default App;
