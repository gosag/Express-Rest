const form = document.querySelector('#postForm');
const titleInput = document.querySelector('#title');
const getPostsBtn=document.querySelector('#getPosts');
const responseDiv=document.querySelector('#response');
responseDiv.innerHTML="";
const getPostsHandler=async ()=>{
    try{
        const res=await fetch("http://localhost:8000/api/posts");
        const data=await res.json();
        responseDiv.innerHTML=(`
            <h2>Posts:</h2>
            <ul>
                ${data.map(post=>`<li>${post.title}</li>`).join('')}
            </ul>`);
    }
    catch(error){
        console.error("Error fetching posts:",error);
    }
}
const submitHandler=async (e)=>{
    e.preventDefault();
    const res=await fetch("http://localhost:8000/api/posts",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({title:titleInput.value}),
    })
    getPostsHandler();
}
form.addEventListener('submit', submitHandler)
getPostsBtn.addEventListener('click',getPostsHandler)