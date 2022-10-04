
const data= new Date();

var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
	var current_time = date.getHours()+":"+date.getMinutes()+":"+ date.getSeconds();
	var date_time = current_date+" "+current_time;	



for(i=0;i<10;i++){

fs.writeFile(`./${date_time}${i}.html`,data,(err)=>{console.log("Completed new file")})

}