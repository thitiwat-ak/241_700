/* 
//String - ตัวอักษร
let fname = 'John'
console.log('name',fname)
const idcard = ' 126'    //const ไม่สามารถเปลี่ยนค่าได้
//var                 //เราไม่ใช้กันแล้ว คล้ายๆ let

// number

let age = 30
let height =  150.5
const pi = 3.1459
fname = 'Tom'

idcard = '456'
console.log('idcard',idcard)

console.log('name',fname, 'age', age)
//console.log('age',age)
// */

/**
 + บวก
 - ลบ
 * คูณ
 / หาร
 %  mod หารเอาเศษ
 condition statement
== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
<น้อยกว่า
>= มากกกว่าเท่ากับ
<= น้อยกว่าเท่ากับ
 

/**
  let number1 = 5
 let number2 = 3 
 let condition1 = number1 >= number2 // เราจะได้ boolean (true/false)
 console.log('condition is =', condition1)
 */

/* let number1 = 5
 let number2 = 5
// if - else condition
if(number1 != number2){
    console.log('condition true',)
}else if (number1 == number2){
    console.log('this else if')
} else{
    console.log('this else')
}
    */

/*
Grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D
*/
/*let score = prompt('ใส่ตัวเลข')
if (score >= 80){
    console.log('Grade: A')
}else if(score>=70){
    console.log('Grade: B')
}else if (score>=60){
    console.log('Grade: C')
}else if (score>=50){
    console.log("Grade: D")
}else {
    console.log("Grade: F")
}*/

/*

&& และ
|| หรือ
! not ไม่

*/

/*let number1 = 5
let number2 = 10

let condition = !(number1  >= 3 || number2 >=11)
console.log('result of condiotion' ,condition)
*/

/*let number = 20 
if (!(number %2 == 0)){
    console.log('you are even')
}else {
    console.log("DSSS")
}
    */


//for

/*let counter = 0
while (counter <10){
    console.log('Hi')
    counter +=1
}

for (let counter = 0; counter <10; counter ++){
    console.log("Hi")
}
*/
/*
array
*/

/*let age1 =20
let age2 = 25
let age3 = 30

let ages = [20,25,30]
ages = [200,100,50]

console.log('age1,age2,age3',age1 , age2 , age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3} `)
console.log('array',ages) 

console.log ('index',ages[0])

// ต่อ array
ages.push(25)
console.log('push array',ages)

// ลบ array ตัวสุดท้าย
ages.pop()
console.log('pop array',ages)
*/

let ages = [20,25,30,35,40]

/*if(ages.includes(30)){
    console.log('มีเลข30 อยู่ใน array')
}*/

/*ages.sort ()
console.log(ages)

let name_list = ['aa','bb','cc']
name_list.push('dd')
console.log(name_list)

name_list.pop()
console.log('pop name_list',name_list)
console.log('name_list',name_list.length)
console.log('name_list',name_list[0])
console.log('name_list',name_list[1])
console.log('name_list',name_list[2])

for (let index =0; index< name_list.length;index++){
    console.log('name list', name_list[index])
}



*/
/*let student = [{
    age:30,
    name: 'aa',
    grade: 'A'
},{
    age:35,
    name: 'bb',
    grade: 'B'

}]
student.push({
    age:40,
    name:'cc',
    grade:'c'
})
student.pop()

for(let index = 0; index <student.length; index++){
    
    console.log('Student Number',(index + 1))
    console.log('age',student[index].age)
    console.log('age',student[index].name)
    console.log('age',student[index].grade)
}
    */

//funtion

/*let score1 = 55
let score =65
let grade=' '
function calculat_grade(){


if (score>=80){
    grade = 'A'
}else if (score>=70){
    grade = 'B'
}else if (score>=60){
    grade = 'C'
}else if (score>=50){
    grade = 'D'
}else {
    grade ='F'
}
return grade
}
// เรียกใช้ function
let grade1 =calculat_grade(score1)
console.log('Grade',grade1)
*/
/*
let score = [20,30,40,50]

for (let index = 0 ; index < score.length; index++){
    console.log('score',score[index])
    
}
let newScore = score.filter((s) => {// filterคือการไปหา
    if(s>=30){
        return true
    }else{
        return false
    }
})  


score[0] = score[0] *2
score[1] = score[1] *2
score[2] = score[2] *2
score[3] = score[3] *2

score = score.map ((s) => {
    return s* 2
})
score.forEach((ns) =>{
    console.log('New Score',ns)
})
    */

let students = [
    {
        name:'aa',
        score:50,
        grade:'D'
    },{
        name:'bb',
        score:80,
        grade:'A'
    }
]

let student = students.find((s) => {
    if (s.name =='aa'){
        return true
    }
})
let double_score =students.map((s) => {
    s.score = s.score * 2
    return s
})
let highScore = students.filter((s) => {
    if(s.score >=120){
        return true
    }
})

console.log(student)
console.log('double_score',double_score)
console.log('highScore',highScore)