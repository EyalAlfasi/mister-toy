import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom'

export function ToyPreview({ toy, onDelete }) {
    return <div className="toy-preview-container">
        <CloseIcon className="delete-toy-btn" onClick={() => onDelete(toy._id)} />
        <span className="toy-type">{toy.type}</span>
        <h2>{toy.name}</h2>
        <h4>{toy.price}</h4>
        <h5>{toy.inStock ? 'In stock' : 'Out of stock'}</h5>
        <Link to={`/toy/edit/${toy._id}`}><button className="edit-btn">Edit toy</button></Link>
    </div>
}
