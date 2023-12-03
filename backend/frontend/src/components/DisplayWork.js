import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AnimatedPage from '../components/AnimatedPage'
import { listWorks } from '../actions/mediaActions'
import Loader from '../components/Loader'
import Post from '../components/Post'
import Message from '../components/Message'
import Masonry from 'react-masonry-css'
import AOS from "aos";
import "aos/dist/aos.css";


function Display({keyword}) {

  

  const dispatch = useDispatch();
  const workList = useSelector(state => state.workList)
  const {error, loading, works} = workList 

  


  useEffect(() => {
    
    dispatch(listWorks);
    AOS.init();
    AOS.refresh();
  }, [dispatch])

  const breakpointColumnsObj = {
    default: 3,
    600: 2,
  
  };

  const filteredWorks = works.filter((work) => work.category === keyword);

  return (
  

     <div>
    {loading ? <Loader/>
          : error ? <Message variant='danger' >{error}</Message>
                    
            :
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredWorks.reverse().map(work =>  (
             
                <div data-aos="fade-up" key={work._id}>
                  <Post post={work}/>
                </div> )
                )}
          </Masonry>
          }
    </div> 
 
  )
}

export default Display