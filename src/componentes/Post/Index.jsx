import { useParams } from 'react-router-dom'
import './Style.css'

export const Post = () => {
    const params = useParams();
    console.log(params);
    const {id} = params;
    return (
        <div>
            <h1>Post {id} </h1>
        </div>
    )
}

