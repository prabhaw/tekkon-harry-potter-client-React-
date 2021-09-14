import React, { useEffect, useState } from "react";
import { Row, Col, ListGroup } from "react-bootstrap";
import { useParams, useHistory } from "react-router-dom";
import Navbars from "../Components/Navbar.component";
import api from "../utils/httpClients";
interface CharacterState {
  id: number;
  name: string;
  nikName: string;
  dob: string;
  powers: string;
  image: string;
}
const FilePath = process.env.REACT_APP_IMG_URL;
const SingleCharacter: React.FC = () => {
  const [character, setCharacter] = useState<CharacterState>();
  const { id }: any = useParams();
  const { push } = useHistory();

  useEffect(() => {
    api.get(`/harry-potter/${id}`).then((response) => {
      if (!response.data) {
        push("/");
      }
      setCharacter(response.data);
    });
  }, [push, id]);
  return (
    <>
      <Navbars />
      <Row className=" mt-5 justify-content-center">
        <Col xs lg="4">
          <img
            src={`${FilePath}/${character?.image}`}
            className="card-img-top "
            alt={character?.name}
          />
        </Col>
      </Row>
      <Row className=" mt-5 justify-content-center">
        <Col xs lg="6">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h4> Name:&nbsp; {character?.name}</h4>
            </ListGroup.Item>
            <ListGroup.Item>
              Nick Name:&nbsp; {character?.nikName}
            </ListGroup.Item>
            <ListGroup.Item>
              Date Of Birth:&nbsp; {character?.dob}
            </ListGroup.Item>
            <ListGroup.Item>Powers:&nbsp; {character?.powers}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <div className="mt-5"></div>
    </>
  );
};

export default SingleCharacter;
