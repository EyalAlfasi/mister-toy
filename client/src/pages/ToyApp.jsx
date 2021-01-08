import { Component } from 'react';
import { connect } from 'react-redux';
import { loadToys, loadUnfilteredToys, deleteToy, setFilter } from '../store/actions/toyActions.js'
import { ToyList } from '../cmps/ToyList.jsx'
import { ToyFilter } from '../cmps/ToyFilter.jsx'


export class _ToyApp extends Component {

    componentDidMount() {
        this.props.loadToys(this.props.filterBy);
        this.props.loadUnfilteredToys(this.props.filterBy);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filterBy !== this.props.filterBy) {
            this.props.loadToys(this.props.filterBy);
        }
    }

    onDelete = (toyId) => {
        this.props.deleteToy(toyId);
    }

    onSetFilter = (filterBy) => {
        this.props.setFilter(filterBy);
    }

    render() {
        const { toys, toysUnfiltered, filterBy } = this.props
        return < div className="toy-app-container">
            <ToyFilter toys={toysUnfiltered} filterBy={filterBy} onSetFilter={this.onSetFilter} />
            <ToyList toys={toys} onDelete={this.onDelete} />
        </div >
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        toys: state.toyReducer.toys,
        filterBy: state.toyReducer.filterBy,
        toysUnfiltered: state.toyReducer.toysUnfiltered
    }
}

const mapDispatchToProps = {
    loadToys,
    deleteToy,
    setFilter,
    loadUnfilteredToys
}

export const ToyApp = connect(mapGlobalStateToProps, mapDispatchToProps)(_ToyApp)