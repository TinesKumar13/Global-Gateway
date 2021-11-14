import { AiOutlineRight } from "react-icons/ai";
import airplane from './img/airplane.jpg'
import airCargo from './img/air-freight.jpg'
import ocean from './img/ship.jpg'
import oceanCargo from './img/ocean-cargo.jpg'
import road from './img/backdrop.jpg'
import roadCargo from './img/road-cargo.jpg'
import rail from './img/train.jpg'
import railCargo from './img/rail-cargo.jpg'
import warehouse from './img/warehouse.jpg'
import carrier from './img/carrier.jpg'
import customs from './img/customs.jpg'
import container from './img/container.jpg'

export const CardState = () => {
    return [

        {
            title : 'Air Freights',
            description : 'Reliable and hassle-free. Various delivery speeds and service options are available.',
            mainImg : airplane,
            secondaryImg : airCargo,
            link : '/work/air-freights',
            message: 'Deserunt irure do ex sunt velit et enim dolor veniam eu commodo cupidatat. Ipsum eiusmod nulla ex eu dolor cupidatat exercitation. Nisi deserunt mollit excepteur velit. Laborum nostrud ex duis ullamco. Fugiat id amet qui irure occaecat consequat adipisicing reprehenderit dolore. Cupidatat ut id ad aliqua nostrud nostrud Lorem et pariatur esse magna.'
        },

        {
            title : 'Ocean Freights',
            description : 'Right condition, right place, right quantity, right time, right customer, right cost. Consolidation and equipment options available.',
            mainImg : ocean,
            secondaryImg : oceanCargo,
            link : '/work/ocean-freights',
            message: 'Deserunt irure do ex sunt velit et enim dolor veniam eu commodo cupidatat. Ipsum eiusmod nulla ex eu dolor cupidatat exercitation. Nisi deserunt mollit excepteur velit. Laborum nostrud ex duis ullamco. Fugiat id amet qui irure occaecat consequat adipisicing reprehenderit dolore. Cupidatat ut id ad aliqua nostrud nostrud Lorem et pariatur esse magna.'
            
        },

        {
            title : 'Road Freights',
            description : 'Realiable & flexible. Various truck options avaible to cater your needs.',
            mainImg : road,
            secondaryImg : roadCargo,
            link : '/work/road-freights',
            message: 'Deserunt irure do ex sunt velit et enim dolor veniam eu commodo cupidatat. Ipsum eiusmod nulla ex eu dolor cupidatat exercitation. Nisi deserunt mollit excepteur velit. Laborum nostrud ex duis ullamco. Fugiat id amet qui irure occaecat consequat adipisicing reprehenderit dolore. Cupidatat ut id ad aliqua nostrud nostrud Lorem et pariatur esse magna.'
        },

        {
            title : 'Rail Freights',
            description : 'Transportation that is safe, dependable, and cost-effective',
            mainImg : rail,
            secondaryImg : railCargo,
            link : '/work/rail-freights',
            message: 'Deserunt irure do ex sunt velit et enim dolor veniam eu commodo cupidatat. Ipsum eiusmod nulla ex eu dolor cupidatat exercitation. Nisi deserunt mollit excepteur velit. Laborum nostrud ex duis ullamco. Fugiat id amet qui irure occaecat consequat adipisicing reprehenderit dolore. Cupidatat ut id ad aliqua nostrud nostrud Lorem et pariatur esse magna.'
           
        },

        {
            title : 'Warehousing',
            description : 'We handle your goods with care and efficient way',
            mainImg : warehouse,
            secondaryImg : carrier,
            link : '/work/warehousing',
            message: 'Deserunt irure do ex sunt velit et enim dolor veniam eu commodo cupidatat. Ipsum eiusmod nulla ex eu dolor cupidatat exercitation. Nisi deserunt mollit excepteur velit. Laborum nostrud ex duis ullamco. Fugiat id amet qui irure occaecat consequat adipisicing reprehenderit dolore. Cupidatat ut id ad aliqua nostrud nostrud Lorem et pariatur esse magna.'
          
        },

        {
            title : 'Customs Clearance',
            description : 'No complex customs processes, delay or penalties',
            mainImg : customs,
            secondaryImg : container,
            link : '/work/custom-clearance',
            message: 'Deserunt irure do ex sunt velit et enim dolor veniam eu commodo cupidatat. Ipsum eiusmod nulla ex eu dolor cupidatat exercitation. Nisi deserunt mollit excepteur velit. Laborum nostrud ex duis ullamco. Fugiat id amet qui irure occaecat consequat adipisicing reprehenderit dolore. Cupidatat ut id ad aliqua nostrud nostrud Lorem et pariatur esse magna.'
           
        },

    ]
}


