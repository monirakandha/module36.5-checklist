// // ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

// const student = {
//     name : 'james Soliman',
//     id: 007,
//     job: 'Acting',
//     isRich : true,
//     bestFriend :{
//         name : 'jamal',
//         id:'20',
//         subject: 'Bangla',
//         department : 'English',
//         address : 'Dhaka',
//     },
//     subject:['english' , 'math' , 'accounting' , 'Physics' , 'bangla'],

//     event:function(){
//         console.log(this.name ,'have',this.job,this.bestFriend.name,'have friend name is ', this.name );
//     }

// }


// student.event();


// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 

const name = `ROhim`;

const bestFriend = {name : 'jamal', owner :'veheicles' ,id:'20', subject: 'Bangla', department : 'English', address : 'Dhaka'};

const vehicles= {car:"limousine", bike:"ktm-duke", plane:"lufthansa"};

console.log(`i am ${name}  my best firend name is ${bestFriend.name} Alse he is owner of ${vehicles.car} also have ${vehicles.bike}`);


// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 

const number = ()=> {
    const newValue = 89;
    return newValue;
   };

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে ৭ দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 

const dividedNumber = (num) => num/7;
const diviedResult = dividedNumber(10);
console.log(diviedResult); 
