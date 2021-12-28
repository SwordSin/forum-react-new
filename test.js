let test1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

let test2 = {
    a: 'a',
    b: 'b'
}
Object.seal(test2)
test2 = {...test1}
console.log(test1)


const test = {
	"currPage": 1,
	"pageSize": 10,
	"param": {
		"dateRange": "",
		"dataCategory": "1",
		"unitCode": null,
		"equipType": "6",
		"installationLocationName": null,
		"runStatus": null,
		"rightStatus": null,
		"voltageLevel": null,
		"dataType": "0",
		"range": null,
		"elemenType": null,
		"substCode": null
	}
}

console.log(test)