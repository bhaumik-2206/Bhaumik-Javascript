for (let i = 0; i < 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(`${i} => prints fizzbuzz`);
    } else if (i % 5 == 0) {
        console.log(`${i} => prints buzz`);
    } else if (i % 3 == 0) {
        console.log(`${i} => prints fizz`);
    }
}