function usingXHR(){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',()=>{
    console.log(xhr.response);
  });

  xhr.open('GET', 'https://supersimplebackend.dev/greeting');
  xhr.send();
}

function usingFetch(){
  fetch('https://supersimplebackend.dev/greeting').then((response)=>{
    return response.text();
  }).then((data)=>{
    console.log(data);
  }).catch((error)=>{
    console.log(error);
  });
}

async function usingAsyncGET(){
  try{
    const response = await fetch('https://supersimplebackend.dev/greeting');
    const message = await response.text();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

async function usingAsyncPOST() {
  const response = await fetch('https://supersimplebackend.dev/greeting', {
    method: 'POST',
    headers: 
    {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'Lebrons' })
  });

  const result = await response.text();
  console.log('Response from server:', result);
}

async function getRequestAmazon(){
  try{
    const response = await fetch('https://amazon.com');
    const message = await response.text;
    console.log(message);
  } catch (e) {
    console.log('CORS error');
  }
}

async function postRequestGreetings(){
  
  try{
    const response = await fetch('https://supersimplebackend.dev', {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json'
      }
    });  

    if(response.status >= 400){
      throw response;
    } 

    const text = response.text;
    console.log(text);

  } catch (e) {
    console.log(e.status);
    if (e.status === 404){
      console.log(await e.json());
    } else {
      console.log('Network error. Please try again later.');
    }
  }
}

