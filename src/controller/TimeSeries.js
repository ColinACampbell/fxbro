import config from "./../config/config.json"

export default class TimeSeries
{
    TimeSeries()
    {
    }

    getDailyTimeSeries(from,to,func)
    {
        let function_label = func;

        func = "FX_"+ func.toUpperCase();
        return new Promise ((resolve,reject)=>{
            this.getData(`https://www.alphavantage.co/query?function=${func}&from_symbol=${from}&to_symbol=${to}&apikey=${config.apiKey}`)
            .then(function(data){

                let metaData = {}
                let metaInfo = data['Meta Data'];
                metaData.info = metaInfo['1. Information'];
                metaData.from = metaInfo['2. From Symbol'];
                metaData.to = metaInfo['3. To Symbol'];

                const timeSeries = data[`Time Series FX (${function_label})`];
                
                let labels = Object.keys(timeSeries);
                let values = [];

                labels.forEach((item)=>{
                    let trade = timeSeries[item]
                    let close = trade['4. close'];
                    values.push(close);
                })

                console.log(timeSeries);

                labels = labels.reverse();
                values = values.reverse();

                resolve({labels,values});
                reject("")
            })
        });
        
    }

    getRealTimeFX(from,to)
    {
       return new Promise((resolve,reject)=>{
           this.getData(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${from}&to_currency=${to}&apikey=${config.apiKey}`)
           .then(function(data){
               resolve(data);
           }).catch((err)=>{
               reject(err)
           });
       })
    }

    getData(url)
    {
        return fetch(url).then((response)=>response.json());
    }
}
