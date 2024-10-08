import Card1 from '../components/Project Cards/Card1';
import Card2 from '../components/Project Cards/Card2';
import Card3 from '../components/Project Cards/Card3';
import Card4 from '../components/Project Cards/Card4';

const data = {
    
    "styling": {
        "height": "70vh",
        "borderThickness": "0.5em",
        // "borderColor": "#080C0C",
        "borderColor": "#EDF2F4",
        "childGap" : "0.0em",
    },

    "cards": [
        {
            "imageURL": "./icons/project1.jpg",
            "imageText": "AI Robot Project",
            "childPageContent": <Card1/>

        },
        {
            "imageURL": "./icons/project2.jpg",
            "imageText": "Python Physics Game",
            "childPageContent": <Card2/>

        },
        {
            "imageURL": "./icons/project3.jpg",
            "imageText": "Parkinson Detection",
            "childPageContent": <Card3/>

        },
        {
            "imageURL": "./icons/project4.jpg",
            "imageText": "Forex Scalping Bot",
            "childPageContent": <Card4/>

        },
    ]

};

export default data;
