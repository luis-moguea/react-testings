import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisibility && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Hello <span>World</span>
          </Alert>
        )}
        <Button /* color="danger" */ onClick={() => setAlertVisibility(true)}>
          My button
        </Button>
      </div>
    </>
  );
}

export default App;
