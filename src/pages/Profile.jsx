import { FcHome } from 'react-icons/fc';
import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <>
      <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
        <h1 className='text-3xl text-center mt-6 font-bold'>My Profile</h1>
        <div className='w-full md:w-[50%] mt-6 px-3'>
          <form>
            {/* name input */}
            <input
              type='text'
              id='name'
              className={`mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition ease-in-out`}
            />
            {/* email input */}
            <input
              type='text'
              id='email'
              disabled
              className='mb-6 w-full px-4 py-2 text-xl text-gray 700 bg-white border border-gray-300 rounded transition ease-in-out'
            />
            <div className='flex justify-between whitespace-nowrap text-sm sm:text-lg mb-6'>
              <p className='flex items-center'>
                Do you want to change your name? &nbsp
                <span>Apply change</span>
              </p>
              <p className='text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out cursor-pointer'>
                Sign out
              </p>
            </div>
          </form>
          <button
            type='submit'
            className='w-full bg-blue-600 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800'
          >
            <Link
              to='/create-listing'
              className='flex justify-center items-center'
            >
              <FcHome className='mr-2 text-3xl bg-red-200 rounded-full p-1 border-2' />
              Sell or rent your home
            </Link>
          </button>
        </div>
      </section>
      <div className='max-w-6xl px-3 mt-6 mx-auto'>
        <>
          <h2 className='text-2xl text-center font-semibold mb-6'>
            My Listings
          </h2>
          <ul className='sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'></ul>
        </>
      </div>
    </>
  );
}
