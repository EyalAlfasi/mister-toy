import { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: [
        'Adult',
        'Entertainment',
        'Funny',
        'Puki'
    ],
    datasets: [{
        data: [300, 50, 100, 500],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

export class Chart extends Component {

    render() {
        return (
            <div>
                <Doughnut data={data} />
            </div>
        );
    }
}

