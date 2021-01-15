var name_of_students=[];
function submit(){
    var name1=document.getElementById("stud1").value;
    var name2=document.getElementById("stud2").value;
    var name3=document.getElementById("stud3").value;
    var name4=document.getElementById("stud4").value;
    name_of_students.push(name1);
    name_of_students.push(name2);
    name_of_students.push(name3);
    name_of_students.push(name4);
    console.log(name_of_students);
    document.getElementById ("dis_name").innerHTML=name_of_students;
    document.getElementById ("subway").style.display="none";
    document.getElementById ("sort").style.display="inline-block";
}
function sorting(){
name_of_students.sort();
console.log(name_of_students);
document.getElementById ("dis_name").innerHTML=name_of_students;
}
