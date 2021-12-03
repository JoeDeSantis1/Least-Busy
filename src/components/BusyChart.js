import { makeStyles } from '@material-ui/core';
import React from 'react';
import { AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const useStyles = makeStyles((theme) => ({
    graphDiv: {
        height: '120px',
    }
}))

const BusyChart = (props) => {
    const { busyTimes, screenLarge, screenSize } = props;
    const classes = useStyles();

    const dataLarge = [
        {
            name: `${busyTimes[0][0]}`, 
            busyRating: `${busyTimes[0][1]}`, 
            amt: 2400
        },
        {
            name: `${busyTimes[1][0]}`, 
            busyRating: `${busyTimes[1][1]}`, 
            amt: 2400
        },{
            name: `${busyTimes[2][0]}`, 
            busyRating: `${busyTimes[2][1]}`, 
            amt: 2400
        },
        {
            name: `${busyTimes[3][0]}`, 
            busyRating: `${busyTimes[3][1]}`, 
            amt: 2400
        },
        {
            name: `${busyTimes[4][0]}`, 
            busyRating: `${busyTimes[4][1]}`, 
            amt: 2400
        },
    ];

    const dataSmall = [
        {
            name: `${busyTimes[1][0]}`, 
            busyRating: `${busyTimes[1][1]}`, 
            amt: 2400
        },{
            name: `${busyTimes[2][0]}`, 
            busyRating: `${busyTimes[2][1]}`, 
            amt: 2400
        },
        {
            name: `${busyTimes[3][0]}`, 
            busyRating: `${busyTimes[3][1]}`, 
            amt: 2400
        },
    ];
    
    const whichData = () => {
        if(screenLarge || screenSize >= 500) {
            console.log(screenSize);
            return <div className={classes.graphDiv}>
                <ResponsiveContainer>
                    <AreaChart width={700} height={125} data={dataLarge} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                        <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#aa10c4" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#aa10c4" stopOpacity={0.4}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" tick={{ fill: 'black' }}/>
                            <YAxis type='number' domain={[0,100]} tick={{ fill: 'black' }}/>
                            <Tooltip />
                            <CartesianGrid strokeDasharray="5 5" stroke='#636968'/>
                            <Area type="monotone" dataKey="busyRating" stroke="#aa10c4" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        } else if (!screenLarge || screenSize < 500){
            return <div className={classes.graphDiv}>
                <ResponsiveContainer>
                    <AreaChart width={700} height={125} data={dataSmall} margin={{ top: 5, right: 10, left: -25, bottom: 0 }}>
                        <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#aa10c4" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#aa10c4" stopOpacity={0.4}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" tick={{ fill: 'black' }}/>
                            <YAxis type='number' domain={[0,100]} tick={{ fill: 'black' }}/>
                            <Tooltip />
                            <CartesianGrid strokeDasharray="5 5" stroke='#636968'/>
                            <Area type="monotone" dataKey="busyRating" stroke="#aa10c4" fillOpacity={1} fill="url(#colorUv)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        }
    }

    return(
        <div className={classes.graphDiv}>
        <ResponsiveContainer>
            {whichData()}
        </ResponsiveContainer>
        </div>  
    );
}

export default BusyChart;