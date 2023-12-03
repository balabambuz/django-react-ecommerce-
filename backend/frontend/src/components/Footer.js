import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

function Footer() {
  return (

        <footer>
            <Container>
               

                <Row>
                    <Col className="text-center py-3">
                        <a href="https://www.deviantart.com/notsmoke">
                        <Image src="/static/images/deviantart.png"  style={{width:'30px', height:'auto', margin:'5px'}}  />
                        </a>
                        <a href="https://hive.blog/@balabambuz">
                        <Image src="/static/images/hive.png" fluid style={{width:'30px', height:'auto', margin:'5px'}}  />
                        </a>
                        <a href="https://www.instagram.com/notsmokable/">
                        <Image src="/static/images/instagram.png" style={{width:'30px', height:'auto', margin:'5px'}}   />
                        </a>
                        <a href="https://www.linkedin.com/in/francesco-bambace-864554235/">
                        <Image src="/static/images/linkedin.png" style={{width:'30px', height:'auto', margin:'5px'}}  />
                        </a>
                        <a href="https://www.tiktok.com/@im.not.smoke">
                        <Image src="/static/images/tiktok.png" style={{width:'30px', height:'auto', margin:'5px'}}  />
                        </a>
                        <a href="https://twetch.com/u/80564">
                        <Image src="/static/images/twetch.png" style={{width:'30px', height:'auto', margin:'5px'}}  />
                        </a>
                        <a href="https://twitter.com/balabambuz">
                        <Image src="/static/images/twitter.png" style={{width:'30px', height:'auto', margin:'5px'}}  />
                        </a>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center py-3">Copyright &copy; Notsmoke</Col>
                </Row>

            </Container>
        </footer>
    
  )
}

export default Footer