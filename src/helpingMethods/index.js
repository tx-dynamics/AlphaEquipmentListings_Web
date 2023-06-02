import moment from "moment";
import { dummyFour } from "../assets/icons";
import { store } from "../redux/store";
const AWS = require('aws-sdk');
const s3 = new AWS.S3({ region: 'us-east-2' });


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


export const upload = (cb, loader) => evt => {
    const files = evt.target.files
    const file = files[0]
    loader(true)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU1YWQ5Y2ZjN2JlZjE3ZjFkOTkxNCIsImlhdCI6MTY4MTEyMDU0NCwiZXhwIjoxNjg4ODk2NTQ0fQ.MwVbniYhtKpSyleEJwCJ_z6GKP9wlg4JEszWOIbOTsU");
    const data = {
        region: 'us-east-2',
        accessKeyId: 'AKIASZQZ2QP4ZJHAHNS5',
        secretAccessKey: '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',
        Bucket: "alpha-equipment-bucket",
        signatureVersion: 'v4',
    }
    var formdata = new FormData();
    formdata.append("file", file);
    formdata.append("data", JSON.stringify(data));

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };
    fetch("http://ec2-18-189-194-242.us-east-2.compute.amazonaws.com/user/upload", requestOptions)
        .then(response => response.json())
        .then(data => {
            loader(false)
            const url = data?.data?.url
            console.log(url, '11111111', file);
            cb(url)
        })
        .catch(error => console.log('error', error));
}
export const uploadTwo = (data, cb) => {
    const file = data
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MmU1YWQ5Y2ZjN2JlZjE3ZjFkOTkxNCIsImlhdCI6MTY4MTEyMDU0NCwiZXhwIjoxNjg4ODk2NTQ0fQ.MwVbniYhtKpSyleEJwCJ_z6GKP9wlg4JEszWOIbOTsU");

    const value = {
        region: 'us-east-2',
        accessKeyId: 'AKIASZQZ2QP4ZJHAHNS5',
        secretAccessKey: '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',
        Bucket: "alpha-equipment-bucket",
        signatureVersion: 'v4',
    }
    var formdata = new FormData();
    formdata.append("file", file);
    formdata.append("data", JSON.stringify(value));


    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://ec2-18-189-194-242.us-east-2.compute.amazonaws.com/user/upload", requestOptions)
        .then(response => response.json())
        .then(data => {
            const url = data?.data?.url
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
