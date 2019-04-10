var concertdata = {
    concerts : [
        {
            "bandname": "AC/DC",
            "stage": "Sagres",
            "start": "20:30", 
            "end": "22:00"
        },
        
        {
            "bandname": "Agir",
            "stage": "Coreto",
            "start": "20:30", 
            "end": "22:00"
        },
        
        {
            "bandname": "GNR",
            "stage": "Sagres",
            "start": "18:30", 
            "end": "20:00"
        },
        
        {
            "bandname": "Khalid",
            "stage": "NOS",
            "start": "18:30", 
            "end": "20:00"
        },
        
        {
            "bandname": "U2",
            "stage": "NOS",
            "start": "20:30", 
            "end": "22:00"
        },
        
        {
            "bandname": "Xutos",
            "stage": "Coreto",
            "start": "18:30", 
            "end": "20:00"
        },
    ] 
};

function getData() {
    return concertdata.concerts;
}