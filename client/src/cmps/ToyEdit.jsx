import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { toyService } from '../services/toyService.js';
import { connect } from 'react-redux';
import { save } from '../store/actions/toyActions.js'

export class _ToyEdit extends Component {
    state = {
        fillError: false,
        toy: {
            name: '',
            price: 0,
            type: '',
            inStock: true
        }
    }

    componentDidMount() {
        const { toyId } = this.props.match.params;
        if (toyId) {
            toyService.getToyById(toyId)
                .then(toy => this.setState({ toy }))
        }
    }

    handleInput = (ev) => {
        const { value, name } = ev.target;
        const toyCopy = { ...this.state.toy }
        toyCopy[name] = value
        this.setState({ toy: toyCopy }, () => {
            console.log(this.state.toy);
        })
    }

    handleFillError = () => {
        this.setState({ fillError: true }, () => {
            setTimeout(() => {
                this.setState({ fillError: false });
            }, 2000);
        })
    }

    handleInStock = (ev) => {
        const { value } = ev.target;
        const toyCopy = { ...this.state.toy }
        toyCopy['inStock'] = value === 'true' ? true : false;
        this.setState({ toy: toyCopy }, () => {
            console.log(this.state.toy);
        });
    }

    onSave = (ev) => {
        ev.preventDefault();
        const { toy } = this.state;
        if (!toy.name || toy.price === 0 || !toy.type) {
            this.handleFillError();
            return;
        }
        this.props.save(this.state.toy)
        this.props.history.push('/toy');
    }

    render() {
        const { toy } = this.state;
        console.log(toy);
        return <section className="toy-edit-container">
            <form onSubmit={this.onSave}>
                <label htmlFor="toy-name">Name</label>
                <input autoFocus id="toy-name" onChange={this.handleInput} type="text" value={toy.name} name="name" />
                <label htmlFor="toy-price">Price</label>
                <input id="toy-price" onChange={this.handleInput} type="number" value={toy.price} name="price" />
                <label htmlFor="toy-type">Type</label>
                <input id="toy-type" onChange={this.handleInput} type="text" value={toy.type} name="type" />
                <div className="stock-btns">
                    <input type="radio" checked={toy.inStock} name="inStock" value={true} id="in-stock" onChange={this.handleInStock} />
                    <label htmlFor="in-stock">In stock</label>
                    <input type="radio" checked={!toy.inStock} name="inStock" value={false} id="out-of-stock" onChange={this.handleInStock} />
                    <label htmlFor="out-of-stock">Out of stock</label>
                </div>
                <button>{!toy._id ? 'Add' : 'Save edit'}</button>
                {this.state.fillError && <h2 style={{ color: 'red' }}>Please fill out all fields</h2>}
            </form>
        </section >
    }
}

const mapGlobalStateToProps = (state) => {
    return {
        toys: state.toyReducer.toys
    }
}

const mapDispatchToProps = {
    save
}

export const ToyEdit = connect(mapGlobalStateToProps, mapDispatchToProps)(_ToyEdit)