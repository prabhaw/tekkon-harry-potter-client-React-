import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import api from "../utils/httpClients";
import HarryPorrterCard from "./HarryPotterCard.component";

const CharacterSection: React.FC = () => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    api.get("/harry-potter").then((response) => {
      setCharacter(response.data);
    });
  }, []);

  return (
    <Container>
      <div className="m-2">
        <h4 className="text-danger">Characters</h4>
      </div>
      <Row>
        {character.map(
          (item: {
            id: number;
            name: string;
            dob: string;
            nikName: string;
            image: string;
          }) => (
            <Col key={item?.id} xs={6} md={4} lg={3}>
              <HarryPorrterCard {...item} />
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default CharacterSection;
