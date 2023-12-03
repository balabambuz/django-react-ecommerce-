import React,{useEffect, useState} from 'react'
import { Col, Row, Image, Container} from 'react-bootstrap'
import Loader from '../components/Loader'
import AnimatedPage from '../components/AnimatedPage'
import Masonry from 'react-masonry-css'
import AOS from "aos";
import "aos/dist/aos.css";




function AboutMeScreen() {

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    setTimeout(() => {
      setLoader(false)
    }, 3000)
  },[]);

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
  
  };


  return (
    <div className="App">
     
    { loader ? <Loader/> : 
    <AnimatedPage>

    <Container>

      <Row>
      <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
     
      
      <Image src="/static/images/propic.jpeg" style={{borderRadius:'10px', marginTop:'10px', marginBottom:'10px'}} fluid/>
      <Image src="/static/images/scary.png" style={{borderRadius:'10px', marginTop:'10px', marginBottom:'10px'}} fluid/>  
      <Image src="/static/images/giappo.png" style={{borderRadius:'10px', marginTop:'10px'}} fluid/>
      <Image src="/static/images/lady.png" style={{borderRadius:'10px', marginTop:'310x'}} fluid/>
      <Image src="/static/images/glasses.png" style={{borderRadius:'10px', marginTop:'10px'}} fluid/>
      

       </Masonry>

       <Col xs={12} sm={8} md={8} lg={8} xl={8}>
        <p className='aboutme-text mt-3'>
        Born in Faenza in 2001, he is a digital artist and self-taught designer. in 2017 during his accounting studies he began
        to carry out various commissions and to take more and more familiar with what is the Adobe suite. Continuing his studies 
        in the branch of computer science, his art becomes more and more focused on digital collage, with the aim of rendering 
        more and more POP vintage aesthetics.
        <br/><br/><br/>
        His collage aims to dismantle what can be propaganda and advertising posters and make them dreamlike, thus creating new 
        contexts sometimes representing a term or throwing a small message to the viewer. During a trip to Japan in 2019 he had 
        the opportunity to hone his storytelling skills by drawing inspiration from the myths and legends of the country. The artist's
         ultimate goal is to satisfy the eye with bright colors and intrigue the most attentive, adding small details to the work.
        </p>
        <br/><br/>
        <h1 className='aboutme-text mt-3 text-center'>Worked with:</h1>
        <br/><br/>
        <div className='aboutme-text mt-3'>
        <Image src="/static/images/Walcor.png" data-aos="fade-up" fluid/>
        <Image src="/static/images/Dude.png" data-aos="fade-up" style={{ marginTop:'100px'}} fluid/>
        <Image src="/static/images/Scarabeo.png" data-aos="fade-up" style={{marginTop:'100px'}} fluid/>
        <Image src="/static/images/Jump.png" data-aos="fade-up" style={{ marginTop:'100px'}} fluid/>
        <Image src="/static/images/Crif.png" data-aos="fade-up" style={{ marginTop:'100px'}} fluid/>
        </div>
       </Col>
       </Row>        
       <br/><br/>
     </Container>
     </AnimatedPage>
    }
  </div>
  )
}

export default AboutMeScreen