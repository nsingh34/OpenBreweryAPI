const fs = require("fs");
const {json} = require("express");
const path = require('path');

let openDB = "";

fs.readFile(path.join(__dirname, '..','openDB','openBreweryDB.json'), "utf8", (err, jsonString) => {
    if (err) {console.log("File read failed:", err);
        return;
    }
    openDB = JSON.parse(jsonString);
});

// getAllBreweries
exports.getAllBreweries = async (req, res, next) => {

    let by_state = req.query.by_state;
    let by_type = req.query.by_type;

    if(typeof by_type == 'undefined' && typeof by_state == 'undefined'){
        // SEND RESPONSE
        return res.status(200).json({
            status: 'success',
            data: {openDB}
        });
    }else if(typeof by_type != 'undefined' && typeof by_state == 'undefined'){
        by_type = by_type.replaceAll("_"," ");
        let breweries = []
        openDB.forEach(el=>{
            if(el.brewery_type.toLowerCase().localeCompare(by_type.toLowerCase()) === 0){ breweries.push(el)}
        })
        // SEND RESPONSE
        return res.status(200).json({
            status : 'success',
            data : breweries
        })
    }else if(typeof by_type == 'undefined' && typeof by_state != 'undefined'){
        by_state = by_state.replaceAll("_"," ");
        let breweries = []
        openDB.forEach(el=>{
            if(el.state.toLowerCase().localeCompare(by_state.toLowerCase()) === 0){ breweries.push(el)}
        })
        // SEND RESPONSE
        return res.status(200).json({
            status : 'success',
            data : breweries
        })
    }else{
        by_type = by_type.replaceAll("_"," ");
        by_state = by_state.replaceAll("_"," ");
        let breweries = []
        openDB.forEach(el=>{
            if(el.state.toLowerCase().localeCompare(by_state.toLowerCase()) === 0 &&
                el.brewery_type.toLowerCase().localeCompare(by_type.toLowerCase()) === 0){ breweries.push(el)}
        })
        // SEND RESPONSE
        return res.status(200).json({
            status : 'success',
            data : breweries
        })
    }

};

// get all breweries by state
exports.getAllBreweriesByState = async (req,res,next) =>{

    // SEND RESPONSE
    res.status(200).json({
        status : 'success',
        data : breweries
    })
}

// get all breweries by state
exports.getAllBreweriesByType = async (req,res,next) =>{

}