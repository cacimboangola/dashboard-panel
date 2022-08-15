const chart = document.querySelector("#chart").getContext('2d');


// Create a new chart instance

new Chart(chart,{

    type:'line',
    data:{
        labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets:[
            {
                label: 'Propinas',
                data:[2000, 3100, 4150, 5003, 9270, 5916, 6710, 9160, 9650, 3490, 6700, 2300],
                borderColor:'red',
                borderWidth:2
            },
            {
                label: 'Inscrições',
                data:[3000, 3300, 4150, 5303, 9920, 5363, 6703, 780, 9650, 1290, 3400, 2300],
                borderColor:'blue',
                borderWidth:2
            },
        ]
    },
    options:{
        responsive:true
    }
})