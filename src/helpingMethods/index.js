import { decode } from 'base64-arraybuffer'
import { S3 } from 'aws-sdk'
// var fs = require('react-native-fs');


export const uploadImageOnS3 = async (file, successPath) => {
    const s3bucket = new S3({
        region: 'us-east-2',
        accessKeyId: 'AKIASZQZ2QP4ZJHAHNS5',
        secretAccessKey: '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',
        Bucket: "alpha-equipment-bucket",
        signatureVersion: 'v4',
    });
    let contentType = 'image/jpeg';
    let contentDeposition = 'inline;filename="' + file.name + '"';
    // const base64 = await fs.readFile(file.path, 'base64');
    const arrayBuffer = decode(base64);
    s3bucket.createBucket(async () => {
        const params = {
            Bucket: "alpha-equipment-bucket",
            Key: file.name,
            Body: arrayBuffer,
            ContentDisposition: contentDeposition,
            ContentType: contentType,
        };
        await s3bucket.upload(params).promise()
            .then((data) => {
                successPath(data.Location)
            })
            .catch((err) => {
                console.log(err)
            })
    });
}

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
