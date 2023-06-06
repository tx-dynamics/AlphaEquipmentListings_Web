import moment from "moment";
import { dummyFour } from "../assets/icons";
import { store } from "../redux/store";
// const AWS = require('aws-sdk');
import { Buffer } from "buffer";
import AWS from 'aws-sdk'

AWS.config.update({
    accessKeyId: 'AKIASZQZ2QP4ZJHAHNS5',
    secretAccessKey: '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',
    region: 'us-east-2'
});

const S3 = new AWS.S3();
export const combineDateAndTime = (date, time) => {
    const mins = ("0" + time.getMinutes()).slice(-2);
    const hours = ("0" + time.getHours()).slice(-2);
    const timeString = hours + ":" + mins + ":00";
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const dateString = "" + year + "-" + month + "-" + day;
    const datec = dateString + "T" + timeString;
    return new Date(datec).getTime();
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

export const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371;
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.trunc(d);
}

export const diffBtwTwoDates = (date1, date2) => {
    var difference = date2.getTime() - date1.getTime();
    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24
    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60
    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60
    return `${daysDifference}d ${hoursDifference}h`
}

export const diffBtwTwoDatesOnlyDays = (date1, date2) => {
    var difference = date2.getTime() - date1.getTime();
    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24
    return `${daysDifference}`
}

export const timeAgoDiff = (date1, date2) => {
    var difference = date2.getTime() - date1.getTime();
    var daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
    difference -= daysDifference * 1000 * 60 * 60 * 24
    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
    difference -= hoursDifference * 1000 * 60 * 60
    var minutesDifference = Math.floor(difference / 1000 / 60);
    difference -= minutesDifference * 1000 * 60
    var secondsDifference = Math.floor(difference / 1000);
    var finalInput = `${daysDifference > 1 ? daysDifference + 'd' : ''} ${hoursDifference > 23 ? hoursDifference + 'h' : ''} ${minutesDifference > 1 && minutesDifference}m ago`
    return finalInput
}
export const timeAgoDiffTwo = (date) => {
    const seconds = Math.floor((new Date() - date) / 1000);

    // Define time intervals in seconds
    const intervals = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
    };

    // Iterate through the intervals to find the largest unit
    for (let interval in intervals) {
        if (seconds >= intervals[interval]) {
            const count = Math.floor(seconds / intervals[interval]);
            return count === 1 ? `${count} ${interval} ago` : `${count} ${interval}s ago`;
        }
    }

    return 'Just now';
}

export const formatAMPM = (date) => {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime
}

const uploadImageOnS3 = async (src) => {
    return new Promise((resolve, reject) => {
        try {
            console.log("Hi!")
            const reader = new FileReader();
            reader.onload = async () => {
                console.log("Hiello!")
                const params = {
                    Bucket: 'drivebuddyz',
                    Key: `${10000 + Math.round(Math.random() * 10000)}.png`,
                    Body: new Buffer(reader.result.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
                };
                let res = await S3.upload(params).promise();
                console.log(res);
                return resolve(res.Location)
            }
            reader.onerror = (e) => console.log("OOPS!", e)
            reader.readAsDataURL(src)
        } catch (error) {
            console.error('Error uploading to S3:', error);
            reject(error)
        }
    })
}
export const upload = (cb, loader) => evt => {
    const files = evt.target.files
    const file = files[0]
    loader(true)
    uploadImageOnS3(file).then(url => {
        loader(false)
        cb(url)
    })
        .catch(error => console.log('error', error));
}
export const uploadTwo = (data, cb) => {
    const file = data
    uploadImageOnS3(file)
        .then(url => {
            cb(url)
        })
        .catch(error => console.log('error', error));
}


// export const uploadFilesToS3 = async (files) => {
//     const uploadPromises = files.map((file, index) => {
//         const params = {
//             Bucket: 'alpha-equipment-bucket',
//             accessKeyId: 'AKIASZQZ2QP4ZJHAHNS5',
//             secretAccessKey: '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',
//             Key: `file-${index}.jpg`, // Provide a unique key for each file
//             Body: file,
//         };

//         return s3.upload(params).promise();
//     });

//     try {
//         const uploadResults = await Promise.all(uploadPromises);
//         console.log('Upload successful:', uploadResults);
//     } catch (error) {
//         console.error('Error uploading files:', error);
//     }
// };
