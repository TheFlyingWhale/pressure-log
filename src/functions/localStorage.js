export let appStorage;

export const startupLocalStorage = () => {
    const localStorage = window.localStorage;

    appStorage = {
        track: {
            pressureLogTrackSurfaceTemperature: localStorage.getItem('pressureLogTrackSurfaceTemperature'),
        },
        tyres: {
            pressureLogFl: localStorage.getItem('pressureLogFl'),
            pressureLogFr: localStorage.getItem('pressureLogRl'),
            pressureLogRl: localStorage.getItem('pressureLogRr'),
            pressureLogRr: localStorage.getItem('pressureLogFr'),
        }
    }

    //Check and set Track storage
    for(const data in appStorage.track){
        //console.log(appStorage.track[data]);
        if(appStorage.track[data] === null){
            localStorage.setItem(data, 'track - temporary');
            appStorage.track[data] = localStorage.getItem(data);
        }
    }

    //Check and set Tyre storage
    for(const tyre in appStorage.tyres){
        //console.log(appStorage.tyres[tyre]);
        if(appStorage.tyres[tyre] === null){
            localStorage.setItem(tyre, `${tyre} temp`);
            appStorage.tyres[tyre] = localStorage.getItem(tyre);
        }
    }
}

export const setTyres = (frontLeft, frontRight, rearLeft, rearRight) => {
    const localStorage = window.localStorage;

    appStorage.tyres.pressureLogFl = frontLeft;
    appStorage.tyres.pressureLogFr = frontRight;
    appStorage.tyres.pressureLogRl = rearLeft;
    appStorage.tyres.pressureLogRr = rearRight;
    
    localStorage.setItem('pressureLogFl', appStorage.tyres.pressureLogFl);
    localStorage.setItem('pressureLogFr', appStorage.tyres.pressureLogFr);
    localStorage.setItem('pressureLogRl', appStorage.tyres.pressureLogRl);
    localStorage.setItem('pressureLogRr', appStorage.tyres.pressureLogRr);
}

export const printAppStorage = () => {
    console.log(appStorage);
}

