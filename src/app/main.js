var User = function(firstName, lastName, avatar, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.age = age;
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
    
}
var date = new Date;
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var second = date.getSeconds();
var minute = date.getMinutes();
var nextyear = date.getnext

User.prototype.gameFavorite = 'Valorant';
var user = new User('Trong', 'Vinh', 'ava1', 19)


console.log(`${day}\ ${month}\ ${year}\ ${minute}\ ${second}`)



// function Sum() {
//     var reward = Math.floor(Math.random() * 10) + ' gold';
//     console.log(reward);
//     var totalGold = 0;

//     if (reward !== '0 gold') {
//         totalGold += parseInt(reward);
//         console.log('Tổng số tiền đang có là: ' + totalGold);
//     } else {
//         console.log('Tổng số tiền đang có là: ' + totalGold);
//     }
// }






