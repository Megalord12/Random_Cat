async function cat() {
  let url = "https://aws.random.cat/meow";
  let response = await fetch(url);
  document.getElementById('img_1').style.display="block";
  let json = await response.json();
  let new_url = (json["file"]);
  document.getElementById("img_1").src=new_url;
  console.log(document.getElementById("img_1").src);
}