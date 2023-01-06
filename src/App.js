
import './App.css';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import { BookList } from './component/BookList';
import { ViewBook } from './component/ViewBook';
import { EditBook } from './component/EditBook';
import { AddBook } from './component/Addbook';
import { BuyBook } from './component/BuyBook';
import { BorrowBook } from './component/BorrowBook';
import {CustomerList} from './component/customerlist';




function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <br/>
      <nav className="btn btn-info navbar navbar-expand-lg navheader">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/addbook">Add Book</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/booklist">Book List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customerlist">Customer List</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <Routes>
        <Route exact path="/booklist" element={<BookList/>}></Route>
        <Route exact path="/addbook" element={<AddBook/>}></Route>
        <Route exact path="/viewbook/:id" element={<ViewBook />}></Route>
        <Route exact path="/editbook/:id" element={<EditBook />}></Route>
        <Route exact path="/buybook/:id" element={<BuyBook />}></Route>
        <Route exact path="/borrowbook/:id" element={<BorrowBook />}></Route>
        <Route exact path="/customerlist" element={<CustomerList/>}></Route>
      </Routes>

      </BrowserRouter>
     </div>
  );
}

export default App;
