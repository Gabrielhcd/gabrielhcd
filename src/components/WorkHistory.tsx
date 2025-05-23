import style from '../componentsCss/WorkHistory.module.css'
import { CardBody, Carousel } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import workHistoryJson from '../data/WorkHistory.json';

interface WorkPlace {
    title: string,
    company:string,
    companyLogo: string,
    client:string,
    clientLogo: string,
    fromYear: string,
    toYear:string,
    responsabilities:string
}

const array: WorkPlace[] = workHistoryJson.Jobs;


function WorkHistory() {
    return(
        <Carousel className={`${style.carouselStyle}`} pause="hover">
            {array.map(item=> 
                <Carousel.Item 
                    interval={2000}
                    key={item.client} 
                    className={`item ${style}`}>
                        <Card className={`${style.cardStyle}`}>
                            <CardBody>
                                <Card.Title>{item.client}</Card.Title>
                                <Card.Subtitle>{item.company}</Card.Subtitle>
                                <p>{item.fromYear} - {item.toYear}</p>
                                <Card.Text>{item.responsabilities}</Card.Text>
                            </CardBody>
                        </Card>
                </Carousel.Item>)}
        </Carousel>
    )
}

export default WorkHistory