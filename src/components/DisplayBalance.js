import React from 'react'
import {Statistic, StatisticLabel} from "semantic-ui-react";

function DisplayBalance({size, label, value, color='black', style}) {
    return (
        <Statistic size={size} color={color}>
            <StatisticLabel style={style}>{label}</StatisticLabel>
            <Statistic.Value>{value}</Statistic.Value>
        </Statistic>
    )
}

export default DisplayBalance
