getSongs();

  async function getSongs(){
       const response= await fetch("https://api.genius.com/search?q=")
       console.log(response);
       const data= await response.json();
       console.log(data);
       length=data.songs.length;
       console.log(data);
       var temp="";
       for(i=0;i<length;i++)
       {
          temp+="<tr>";
          temp+="<td>"+data.songs[i].strName+"</td>";
          temp+="<td>"+data.songs[i].strArtist+"</td>";
       }

       window.onload=function() {
        let myButton = document.getElementById("songResults");
        myButton.addEventListener('click', songResults);
    }

    document.getElementById("data").innerHTML=temp;
     }
