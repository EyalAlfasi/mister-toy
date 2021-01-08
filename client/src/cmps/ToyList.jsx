import { ToyPreview } from '../cmps/ToyPreview.jsx'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Link } from 'react-router-dom'


export function ToyList({ toys, onDelete }) {
    return <div className="toys-list-container">
        {<div className="add-toy-box">
            <Link to={'/toy/edit/'}><button className="add-toy-btn"><AddCircleOutlineIcon /></button></Link>
        </div>}
        {toys.map(toy => {
            return <ToyPreview key={toy._id} toy={toy} onDelete={onDelete} />
        })}
    </div>
}
