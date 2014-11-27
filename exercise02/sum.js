var result = 0,
    params,
    i;

params = process.argv;

for (i = 2; i < params.length; i += 1) {
    result += (+params[i]);
}

console.log(result);
