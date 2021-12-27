import React from 'react'
import {Row, Col} from 'antd'
import classes from "./Roadmap.module.css"
import RoadmapCard from "../../../../components/RoadmapCard/RoadmapCard"

let list = [
    {
        num: 10, 
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh.', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. '
    },
    {
        num: 20, 
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh.', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. '
    },
    {
        num: 40, 
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh.', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. '
    },
    {
        num: 50, 
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh.', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. '
    },
    {
        num: 70, 
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh.', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. '
    },
    {
        num: 100, 
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh.', 
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique sit arcu ut sollicitudin nibh. Pretium at lobortis risus hac. Leo lectus id at volutpat rhoncus tincidunt. '
    }
]


const Roadmap = () =>{
    return (
        <div className={`${classes.roadmap_sec} sec_padding`} id='roadmap'>
            <Row>
                <Col lg={24}>
                    <h2>roadmap</h2>
                    <div className={classes.roadmap_cards}>
                        {
                            list.map((el, ind) => {

                                return <RoadmapCard key={el+'_'+ind} num={el.num} title={el.title} text={el.text}/>;

                            })
                        }
                         
                    </div>
                </Col>
            </Row>
         </div>
    )
}

export default Roadmap;