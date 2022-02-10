import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const Moviecard = ({title,rate,description,image,trailer}) => {
  return <div>

<Card style={{ width: '18rem' }}>
  <Card.Img  src={image} />
  <Card.Body>
    <Card.Title>{title} </Card.Title>
    <Card.Text>  {description}  </Card.Text>
    <Card.Text>
      <Rating initialValue={rate} readonly={true}/>
    </Card.Text>
    <Button variant="primary"> See More</Button>
  </Card.Body>
</Card>

  </div>;
};

export default Moviecard;
