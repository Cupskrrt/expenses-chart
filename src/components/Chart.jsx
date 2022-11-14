import React from "react";
import datas from '../utils/data.json'

export default function() {

    const state = {
        labels: [
            datas.map(data => data.day)
        ],
        dataSets: [
            {
                label: 'rainfall',
                backgroundColor: '',
                borderColor: '',
                borderWidth: 2,
                data: datas.map(data => data.amount)
            }
        ]
    }
    return(
        <div>
            CHART
        </div>
    )
}