import { useDispatch } from 'react-redux';
import { searchNews } from '@redux/newsStore'
import { useState } from 'react';
import moment from 'moment';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const SearchBar = () => {
  const [value, setValue] = useState("")
  const [date, setDate] = useState(0)
  const [sort, setSort] = useState(0)
  const [showDate, setShowDate] = useState(false)
  const [showSort, setShowSort] = useState(false)

  const dispatch = useDispatch();
  function handleSearchButton() {
    if (value == "") {
      toast.error("Please enter the value first.")
    } else {
      dispatch(searchNews({ 'search': value, 'date': date, 'sort': sort, 'current': moment().format().slice(0, 10) }))
    }
  }
  function handleShowDate() {
    setShowDate(!showDate)
  }
  function handleShowSort() {
    setShowSort(!showSort)
  }
  return (
    <section className="w-full flex justify-center mt-2 mb-6">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-[50%] h-14 p-3 bg-slate-400 text-black focus-visible:outline-none rounded-lg placeholder:text-black" type="search" name="search" id="search" placeholder="Search">
      </input>
      <section className='ml-3 flex flex-col'>
        <button onClick={handleShowDate}
          className='h-14 px-12 py-4 rounded-lg bg-slate-400 text-black'>{date ? date : 'Date'}</button>
        {showDate &&
          <section className='flex flex-col bg-slate-400 p-3 mt-1 rounded-lg'>
            <button onClick={() => {setDate(0); setShowDate(false)}} className='border-b-2 border-slate-600 p-2'>Unselect</button>
            <button onClick={() => { setDate(moment().format('YYYY-MM-DD')); setShowDate(false) }} className='border-b-2 border-slate-600 p-2'>Today</button>
            <button onClick={() => { setDate(moment().subtract(1, 'week').format('YYYY-MM-DD')); setShowDate(false) }} className='border-b-2 border-slate-600 p-2'>Last Week</button>
            <button onClick={() => { setDate(moment().subtract(1, 'month').format('YYYY-MM-DD')); setShowDate(false) }} className='border-b-2 border-slate-600 p-2'>Last Month</button>
            <button onClick={() => { setDate(moment().subtract(6, 'months').format('YYYY-MM-DD')); setShowDate(false) }} className='border-b-2 border-slate-600 p-2'>Last Six Month</button>
            <button onClick={() => { setDate(moment().subtract(1, 'year').format('YYYY-MM-DD')); setShowDate(false) }} className='border-b-2 border-slate-600 p-2'>Last Year</button>
          </section>
        }
      </section>
      <section className='mx-3 flex flex-col'>
        <button onClick={handleShowSort}
          className='h-14 px-12 py-4 rounded-lg bg-slate-400 text-black'>{sort ? sort : 'Sort By'}</button>
        {showSort &&
          <section className='flex flex-col bg-slate-400 p-3  mt-1 rounded-lg'>
            <button onClick={() => {setSort(0); setShowSort(false);}} className='border-b-2 border-slate-600 p-2'>Unselect</button>
            <button onClick={() => {setSort('relevancy');  setShowSort(false);}} className='border-b-2 border-slate-600 p-2'>Relevancy</button>
            <button onClick={() => {setSort('popularity');  setShowSort(false);}} className='border-b-2 border-slate-600 p-2'>Popularity</button>
          </section>
        }
      </section>
      <button className='h-14 px-12 py-4 rounded-lg bg-indigo-600 text-white' onClick={handleSearchButton}>Search</button>
    </section>
  );
}

export default SearchBar;
