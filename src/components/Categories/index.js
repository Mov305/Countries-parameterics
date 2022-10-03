import { useDispatch } from 'react-redux';
import { checkStatus } from '../../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      className="inline-block m-10 p-[2px] rounded bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:text-white active:text-opacity-75 focus:outline-none focus:ring"
      onClick={() => dispatch(checkStatus())}
    >
      <span className="block px-8 py-3 text-sm font-medium bg-white rounded-sm hover:bg-transparent">
        Check Status
      </span>
    </button>
  );
};

export default Categories;
