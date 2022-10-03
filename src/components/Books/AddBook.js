import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBookFetch } from '../../redux/books/api';

const AddBook = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const authorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const category = categoryRef.current.value;
    const author = authorRef.current.value;
    const id = v4();
    if (title && category && author) {
      dispatch(
        addBookFetch({
          item_id: id,
          title,
          author,
          category,
        }),
      );
      titleRef.current.value = '';
      categoryRef.current.value = '';
      authorRef.current.value = '';
    }
  };

  return (
    <div className="py-16 mx-auto max-w-screen-xl flex flex-col items-center md:items-start">
      <h2
        style={{ fontFamily: 'Montserrat' }}
        className="my-2 text-xl md:text-3xl text-gray-500 dark:text-gray-200 font-semibold"
      >
        ADD NEW BOOK
      </h2>
      <form className=" flex flex-col md:flex-row gap-5 w-full dark:text-white">
        <div className=" grow">
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 text-sm border-gray-300 dark:bg-slate-500 rounded-lg shadow-md "
              placeholder="Enter The Book Title"
              ref={titleRef}
            />
          </div>
        </div>
        <div className="md:max-w-[20%]">
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 text-sm border-gray-300 dark:bg-slate-500 rounded-lg shadow-md"
              placeholder="Enter The Book Author"
              ref={authorRef}
            />
          </div>
        </div>
        <div className="md:max-w-[20%]">
          <div className="relative">
            <input
              type="text"
              className="w-full p-4 text-sm border-gray-300 dark:bg-slate-500 rounded-lg shadow-md"
              placeholder="Category"
              ref={categoryRef}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-block px-5 py-3 text-sm font-medium text-white bg-[#08ACB4] rounded-lg"
          onClick={handleSubmit}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
