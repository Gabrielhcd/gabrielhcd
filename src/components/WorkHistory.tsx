import style from '../componentsCss/WorkHistory.module.css'
import { CardBody, Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

interface WorkPlace {
    client? :string,
    description? : string
}

const placeA = {
    client: "A",
    description: "A description"
}
const placeB = {
    client: "B",
    description: "B description"
}
const placeC = {
    client: "C",
    description: "C description"
}

const array: WorkPlace[] = [placeA, placeB, placeC];


function WorkHistory() {
    return(
        <Carousel>
            {array.map(item=> 
                <Carousel.Item 
                    interval={2000}
                    key={item.client} 
                    className={`item ${style}`}>
                        <Card className={`${style.cardStyle}`}>
                            <CardBody>
                                <Card.Title>{item.client}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </CardBody>
                        </Card>
                </Carousel.Item>)}
        </Carousel>
    )
}

export default WorkHistory