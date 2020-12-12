function cetakPola(num) {
    let str;
    str = "";
    for (let j = 0; j < num; j++) {
        if (num-1 == j) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    console.log(str);
    for (let i = 0; i < num; i += 2) {
        str = "";
        for (let j = 0; j < num; j++) {
            if (num - i -2 <= j) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
    str = "";
    if (num >= 10) {
        console.log('DUMBWAYSID');
    }
    for (let i = 0; i < num; i += 2) {
        str = "";
        for (let j = 0; j < num; j++) {
            if (i <= j) {
                str += '*';
            } else {
                str += ' ';
            }
        }
        console.log(str);
    }
    str = "";
    for (let j = 0; j < num; j++) {
        if (num-1 == j) {
            str += '*';
        } else {
            str += ' ';
        }
    }
    console.log(str);
}

cetakPola(10)