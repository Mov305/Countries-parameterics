import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/books/api';
import { editBook } from '../../redux/books/books';
import Skeleton from '../SkeletonLoad';
import AddBook from './AddBook';
import Book from './Book';
import Popup from './Popup';

const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const books = useSelector((state) => state.books);
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = (id) => {
    setShowPopup(id);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePopup = (book) => {
    setShowPopup(false);
    dispatch(editBook(book.id, book));
  };

  if (books === 'loading') {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    );
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8 ">
      <div
        className={`fixed z-50 w-full h-full flex justify-center items-center top-0 left-0 backdrop-blur-md ${
          showPopup ? 'opacity-100' : '-translate-y-full opacity-0'
        } transition`}
      >
        <Popup closePopup={closePopup} handlePopup={handlePopup} book={showPopup} />
      </div>
      <ul className="flex flex-col gap-4">
        {books.length && typeof books !== 'string' ? (
          books.map((book) => <Book key={book.id} book={book} handlePopup={openPopup} />)
        ) : (
          <></>
        )}
      </ul>
      <span className="block mt-10 rounded-full bg-gray-300 w-full h-1" />
      <AddBook />
    </div>
  );
};

export default Books;
