const users = {}
for (let i = 1; i <= 4; i++) {
    var a = prompt(`${i}-Foydalanuvchining ismini kiriting`)
    var b =prompt(`${i}-Foydalanuvchining yoshini kiriting`)
    users[i] = {
       id : i,
       name : a,
       age : b
    }
}
function parserUsers(obj){
    let {id , name, age} = obj
    userId = `Foydalanuvchi - ${id}`
    userName = `Ismi : ${name}`
    userAge = `Yoshi : ${age}`
    userInfo = `${userId}\n${userName}\n${userAge}`
    return userInfo
}
for (const key in users) {
    console.log(parserUsers(users[key]));
}