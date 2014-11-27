var result = 0,
    params,
    i;

params = process.argv;

for (i = 2; i < params.length; ++i) {
    result += (+params[i]);
}

console.log(result);
