import BookList from "./components/booklist";
import Navbar from "./components/navbar";
import NewbookForm from "./components/newbook";
import BookContextProvider from "./contexts/bookContext";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <NewbookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
