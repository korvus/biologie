// import logo from './logo.svg';
import Markdown from 'react-markdown-it';

// import reducer from './reducer.js';
function page() {

    return (
        <div>
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/muLu_W6ghh0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Markdown>{`
# [La cellule et la membrane plasmique](https://www.youtube.com/watch?v=BxZSeWZyt4k)
skelet

`}</Markdown>
        </div>
    );
}

export default page;
