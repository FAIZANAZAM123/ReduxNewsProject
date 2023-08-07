import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { categorizing, nextpage } from '../Store/slices/NewsSlice';
import { previouspage } from '../Store/slices/NewsSlice';
import { settingpage } from '../Store/slices/NewsSlice';
import './Home.css'
const Home = ({ category, first }) => {

  const data = useSelector((state) => state.NEWS);
  const dispatch = useDispatch();
  useEffect(() => {
    if (data.category !== category) {
      dispatch(categorizing(category));
    }
  }, [category, dispatch, data.category])

  const headline = first === 'light' ? 'dark' : 'light';

  const button = first === 'light' ? 'primary' : 'light';
  
  if (first === 'light') {
    document.body.classList.remove('bg-dark');
  } else {
    document.body.classList.add('bg-dark');
  }
  const pagesactive = data.pages === 1 ? 'disabled' : '';


  return (

    < >
      <div className={`justify-content-center bg-${first}`}>

        <h1 className={` header-lined text-center hello text-${headline}`}>TOP HEADLINES</h1>


        {

          data.error ? <h1 className={`bg-${first}`} style={{ display: 'flex', justifyContent: 'center' }}>{data.error}</h1> :
            <div className=" mt-4 mx-4 row d-flex">
              {

                data.loading
                  ? <div className="spinner-overlay">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  </div>
                  : data.news && data.news.articles && data.news.articles.map((value, index) => (
                    <div className="  col-sm-6 col-md-6 col-lg-4 mb-4 mx-auto" key={index}>
                      <div className="card  " >
                        <img src={value.urlToImage} className="card-img-top " alt="" />
                        <div className={`card-body bg-${first}`}>
                          <h5 className={`card-title text-${headline} `}>{value.title}</h5>
                          <p className={`card-text text-${headline} `}>{value.description}</p>
                          <Link target='_blank' to={value.url} className={`btn btn-${button}`}>Read</Link>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
        }
        {
          data.error ? ' ' :
            data.loading ? ' ' :
              // < div className=" d-flex justify-content-around align-items-end">
              //   <button className={`btn btn-${button}`} onClick={() => {
              //     dispatch(previouspage());

              //   }}  >Previous</button>
              //   <button className={`btn btn-${button}`} onClick={() => {

              //     dispatch(nextpage());

              //   }}> Next</button>

              // </div >
              <nav aria-label="...">
                <ul className="pagination">


                  <li className=" page-item ">
                    <button onClick={() => {
                      dispatch((previouspage()));
                    }} className={`   text-${first==='dark'?'light':''}  page-link`}>Previous</button>

                  </li>

                  {
    Array(data.totalpages).fill().map((_, index) => (
        <li key={index} className={`page-item  ${data.page === index + 1 && first==='dark'? 'bg-secondary' : ''}   ${data.page === index + 1 && first==='light'? 'bg-primary' : ''}`}>
            <button onMouseEnter={()=>{

            }} onClick={() => dispatch(settingpage(index + 1))} className={`  ${data.page === index + 1 ? 'text-light' : ''} ${data.page === index + 1 ? '' : ''} text-${first==='dark'?'light':''}  page-link`}>
                {index + 1}
            </button>
        </li>
    ))
}

                  <li className={`${pagesactive} page-item`}>
                    <button onClick={() => {
                      dispatch(nextpage());
                    }} className={`   text-${first==='dark'?'light':''}  page-link`}>Next</button>
                  </li>
                </ul>
              </nav>
        }

      </div>
    </ >
  );
}

export default Home;
