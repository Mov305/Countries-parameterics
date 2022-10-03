import { useEffect, useRef } from 'react';
import { FcCancel } from 'react-icons/fc';
import { GrUpdate } from 'react-icons/gr';

const Popup = ({ handlePopup, closePopup, book }) => {
  const ref = useRef(null);
  const ChRef = useRef(null);
  const PrRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        closePopup();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [closePopup]);

  const handleUpdate = () => {
    const persent = parseInt(PrRef.current.value, 10);
    if (ChRef.current.value && persent <= 100) {
      handlePopup({ ...book, chapter: ChRef.current.value, progress: persent });
      ChRef.current.value = '';
      PrRef.current.value = '';
    } else {
      ChRef.current.value = 'Please enter a valid chapter';
      PrRef.current.value = 'Please enter a valid progress';
    }
  };

  return (
    <div
      ref={ref}
      className="text-center border border-gray-100 rounded-lg shadow-xl fixed bg-slate-50 dark:bg-slate-800 dark:text-slate-200"
    >
      <div className="px-6 py-5">
        <p className="font-medium">UPDATE YOUR PROGRESE</p>
        <div className="mt-4 space-y-2">
          <input
            className="block px-8 py-3 text-sm font-medium text-blue-600 border border-blue-500 rounded-full"
            type="text"
            placeholder="Current Chapter"
            ref={ChRef}
          />
          <input
            className="block px-8 py-3 text-sm font-medium text-gray-600 border border-gray-500 rounded-full"
            type="text"
            placeholder="Current Progress %"
            ref={PrRef}
          />
        </div>
        <p className="inline-flex items-center mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
          <span className="ml-1.5 text-xs font-medium text-green-700">
            {' '}
            {book ? book.title : 'Book title'}
            {' '}
          </span>
        </p>
      </div>
      <div className="flex justify-center px-6 py-5 border-t border-gray-100 gap-4">
        <div className="p-2 dark:invert border border-gray-200 rounded-full" onClick={closePopup}>
          <FcCancel />
        </div>
        <div className="p-2 dark:invert border border-gray-200 rounded-full">
          <GrUpdate onClick={handleUpdate} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
