console.log('I am here');
// alert('I am here ');
const maComing = () => {
    alert('Ammu is coming, open the book');
}
const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('Amake fee ta diye de');
    } else {
        alert('Ja! tor jawa lagbo na');
    }
}

const askName = () => {
    const name = prompt('What is your name');
    const name2 = prompt('What is your name2');
    if (name, name2) {
        console.log(name);
        console.log(name2);

    } else {
        console.error('Got error!');
    }
}

// we wil not use for profesional website 
// alert is giving alert and confirm is yes or not and prompt is taking input from user 