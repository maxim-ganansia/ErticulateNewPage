
import React from 'react';
import '../App.css';
import { PieChart } from 'react-minimal-pie-chart'


function Graph() {
    return (
        <div className="calendar">
            <h1 className="title-graph">First Project feedback</h1>
            <PieChart 
                data={[
                    { title: 'One', value: 10, color: '#E38627' },
                    { title: 'Two', value: 15, color: '#C13C37' },
                    { title: 'Three', value: 20, color: '#6A2135' },
                    { title: 'Four', value:25, color: '#7743CE' },
                    { title: 'Five', value:17, color: '#FF69B4' },
                ]}
            />
        </div>
    )
}

export default Graph