import { useDispatch } from 'react-redux';
import { removeBookFetch } from '../../redux/books/api';

const Book = ({ book, handlePopup }) => {
  const {
    title, author, category, progress, chapter, id,
  } = book;
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeBookFetch(id));
  };

  return (
    <li className="relative flex flex-col items-center p-8 overflow-hidden border bg-white border-gray-200 rounded-lg md:flex-row md:justify-between dark:bg-gray-800 ">
      <span className="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" />
      <div className="flex flex-col items-center md:items-start md:flex-grow">
        <span className="mt-1 text-lg text-gray-500 font-semibold dark:text-gray-300 ">
          {category}
        </span>

        <h5 className="text-xl font-bold text-gray-900 dark:text-slate-50">{title || 'title'}</h5>
        <span className="text-[#08ACB4] font-thin dark:font-normal">{author || 'author'}</span>
        <div className="flex text-[#08ACB4] py-4">
          <button type="button" className=" border-r-4 border-[#E8E8E8] dark:border-slate-400 pr-3">
            Comments
          </button>
          <button type="button" className=" border-r-4 border-[#E8E8E8] dark:border-slate-400 px-3">
            Edit
          </button>
          <button type="button" className="px-3" onClick={handleRemove}>
            Remove
          </button>
        </div>
      </div>
      <div className="mt-4  md:pr-6 lg:pr-16 md:border-r-2 md:border-[#E8E8E8] dark:md:border-slate-400 py-5 ">
        <div>
          <div
            style={{
              background: `conic-gradient(#08ACB4 ${progress * 3.6 || 0}deg, #E8E8E8 0deg )`,
            }}
            className=" w-28 h-28 rounded-full flex justify-center items-center "
          >
            <div className=" w-24 h-24 rounded-full bg-white dark:text-gray-100 dark:bg-gray-800 flex justify-center items-center">
              <span className="text-2xl">
                {progress || 0}
                %
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:ml-10 flex flex-col items-center md:items-start text-center md:text-left md:w-52">
        <p className="text-gray-500 dark:text-gray-200 font-thin">CURRENT CHAPTER</p>
        <h4 className="dark:text-gray-100">{chapter || 'ch1'}</h4>
        <button
          type="button"
          className="bg-[#08ACB4] text-white p-2 rounded-md mt-2 md:mt-10"
          onClick={() => handlePopup(book)}
        >
          UPDATE PROGRESS
        </button>
      </div>
    </li>
  );
};

export default Book;
