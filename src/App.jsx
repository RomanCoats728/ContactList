import { useState } from "react";
import "./App.css";
import ContactList from "./componets/Contactlist";
import SelectedContact from "./componets/SelectedContact";
// import ContactRow from "./components/ContactRow";
function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}

export default App;
