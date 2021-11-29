import React, {useState, useEffect} from 'react'
import { Form, Button, Card, Image, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useContextLogin } from '../context/Context';
import { useNavigate } from 'react-router-dom'
import { MdLogout } from "react-icons/md";

export const LandingPage = () => {

  const [userData, setUserData] = useState('')
  const router = useNavigate();

  useEffect(() => {
    const DATA_USER = JSON.parse(localStorage.getItem("DataUser"))
    setUserData(DATA_USER);
  }, [userData])

  const handleLogout = () => {
    localStorage.clear()
    router('/')
  }

  return(
    <>
      
      <section>
        <div className="d-flex justify-content-end">
        <Button onClick={handleLogout}>
          <MdLogout /> Logout
        </Button>
      </div>
        <div>
          <h2 className="mt-4 mb-3">
            Hello, {userData.name}
          </h2>
          <Card className="mb-3">
            <Card.Body>
              <Row>
                <Col className="text-center">
                  <Image height="87" src={"https://firebase-kanvas.imgix.net/tile_homepage/icon-donasi.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=1"}></Image>
                  <span className="d-block">
                    Donasi
                  </span>
                </Col>
                <Col className="text-center">
                  <Image height="87" src={"https://firebase-kanvas.imgix.net/tile_homepage/icon-zakat.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&dpr=1"}></Image>
                  <span className="d-block">
                    Zakat
                  </span>
                </Col>
                <Col className="text-center">
                  <Image height="87" src={"https://firebase-kanvas.imgix.net/tile_homepage/menu_galang_dana.png?auto=compress,format&cs=tinysrgb&fm=png&fit=clip&h=150&w=150&dpr=1"}></Image>
                  <span className="d-block">
                    Galang Dana
                  </span>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>
            Penggalangan Dana Mendesak
            </Card.Header>
            <Card.Body>
              <Row>
                <Col className="text-center">
                  <Card>
                  <Image height="87" src={"https://imgix.kitabisa.com/72ddeb67-44a9-4a54-9309-abaf47a649d2.jpg?ar=16:9&w=280&auto=format,compress"}></Image>
                    <Card.Body>
                      Gawat! Jawa Barat Dikepung Banjir
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="text-center">
                  <Card>
                    <Image height="87" src={"https://imgix.kitabisa.com/72ddeb67-44a9-4a54-9309-abaf47a649d2.jpg?ar=16:9&w=280&auto=format,compress"}></Image>
                    <Card.Body>
                      Gawat! Jawa Barat Dikepung Banjir
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
        
      </section>
    </>
  )
}
